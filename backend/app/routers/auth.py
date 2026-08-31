from datetime import datetime, timedelta
import random

from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session
import httpx


from app.schemas.oauth import OAuthCode
from app.schemas.user import (
    UserCreate,
    UserLogin,
    UserResponse,
    VerifyEmailRequest,
)

from app.schemas.token import Token


from app.core.config import settings


from app.auth.google import verify_google_token

from app.auth.dependencies import (
    get_current_user,
    get_db,
)


from app.auth.jwt import (
    create_access_token,
    create_refresh_token,
)


from app.auth.service import (
    authenticate_user,
    get_user_by_email,
    create_pending_user,
    verify_pending_user,
)


from app.models.user import User
from app.models.pending_user import PendingUser



router = APIRouter(
    prefix="/auth",
    tags=["Authentication"],
)





# =========================
# REGISTER
# SEND VERIFICATION OTP
# =========================


@router.post(
    "/register",
)
def register(
    user: UserCreate,
    db: Session = Depends(get_db),
):


    otp = str(
        random.randint(
            100000,
            999999
        )
    )


    expires_at = (
        datetime.utcnow()
        +
        timedelta(minutes=10)
    )



    try:

        create_pending_user(
            db,
            user,
            otp,
            expires_at,
        )


    except ValueError as e:

        raise HTTPException(
            status_code=400,
            detail=str(e),
        )



    # TODO:
    # SEND EMAIL HERE


    print(
        "Verification OTP:",
        otp
    )



    return {

        "message":
        "Verification code sent to email"

    }








# =========================
# VERIFY EMAIL
# CREATE ACCOUNT
# =========================


@router.post(
    "/verify-email",
    response_model=UserResponse,
)
def verify_email(
    data: VerifyEmailRequest,
    db: Session = Depends(get_db),
):


    pending_user = (

        db.query(PendingUser)

        .filter(
            PendingUser.email == data.email
        )

        .first()

    )



    if not pending_user:


        raise HTTPException(

            status_code=400,

            detail="Verification request not found"

        )





    if pending_user.expires_at < datetime.utcnow():


        db.delete(
            pending_user
        )

        db.commit()



        raise HTTPException(

            status_code=400,

            detail="OTP expired"

        )






    if pending_user.otp != data.code:


        raise HTTPException(

            status_code=400,

            detail="Invalid verification code"

        )





    user = verify_pending_user(

        db,

        pending_user

    )



    return user










# =========================
# LOGIN
# =========================


@router.post(
    "/login",
    response_model=Token,
)
def login(
    user: UserLogin,
    db: Session = Depends(get_db),
):


    db_user = authenticate_user(

        db,

        user.email,

        user.password,

    )



    if db_user is None:


        raise HTTPException(

            status_code=401,

            detail="Invalid email or password"

        )





    access_token = create_access_token(

        {

            "sub":
            str(db_user.id),


            "role":

            (
                "admin"

                if db_user.is_admin

                else "user"
            )

        }

    )



    refresh_token = create_refresh_token(

        {

            "sub":
            str(db_user.id)

        }

    )



    return Token(

        access_token=access_token,

        refresh_token=refresh_token,

    )









# =========================
# GOOGLE LOGIN
# =========================


@router.post(
    "/google",
    response_model=Token,
)
def google_login(
    data: dict,
    db: Session = Depends(get_db),
):


    google_user = verify_google_token(

        data["token"]

    )



    email = google_user.get(
        "email"
    )



    if not email:


        raise HTTPException(

            status_code=400,

            detail="Google email not found"

        )





    db_user = get_user_by_email(

        db,

        email

    )





    if db_user is None:


        db_user = User(

            full_name=

            google_user.get(

                "name",

                "Google User"

            ),


            email=email,


            avatar=

            google_user.get(

                "picture"

            ),



            google_id=

            google_user.get(

                "sub"

            ),



            provider="google",



            password=None,



            email_verified=True,


            is_verified=True,


            is_admin=False,

        )



        db.add(
            db_user
        )


        db.commit()


        db.refresh(
            db_user
        )







    access_token = create_access_token(

        {

            "sub":
            str(db_user.id),


            "role":

            (
                "admin"

                if db_user.is_admin

                else "user"
            )

        }

    )



    refresh_token = create_refresh_token(

        {

            "sub":

            str(db_user.id)

        }

    )



    return Token(

        access_token=access_token,

        refresh_token=refresh_token,

    )









# =========================
# GITHUB LOGIN
# =========================


@router.post(
    "/github",
    response_model=Token,
)
def github_login(
    data: OAuthCode,
    db: Session = Depends(get_db),
):


    if not data.code:


        raise HTTPException(

            status_code=400,

            detail="GitHub code missing"

        )





    token_response = httpx.post(

        "https://github.com/login/oauth/access_token",

        data={

            "client_id":

            settings.GITHUB_CLIENT_ID,


            "client_secret":

            settings.GITHUB_CLIENT_SECRET,


            "code":

            data.code,

        },


        headers={

            "Accept":
            "application/json"

        },

    )



    token_data = token_response.json()



    github_access_token = token_data.get(

        "access_token"

    )



    if not github_access_token:


        raise HTTPException(

            status_code=400,

            detail="GitHub authentication failed"

        )





    github_response = httpx.get(

        "https://api.github.com/user",

        headers={

            "Authorization":

            f"Bearer {github_access_token}"

        },

    )



    github_user = github_response.json()



    email = github_user.get(
        "email"
    )



    if not email:


        emails_response = httpx.get(

            "https://api.github.com/user/emails",

            headers={

                "Authorization":

                f"Bearer {github_access_token}"

            },

        )


        emails = emails_response.json()



        for item in emails:


            if item.get("primary"):


                email = item.get(
                    "email"
                )

                break





    if not email:


        raise HTTPException(

            status_code=400,

            detail="GitHub email not found"

        )





    db_user = get_user_by_email(

        db,

        email

    )





    if db_user is None:


        db_user = User(


            full_name=(

                github_user.get(
                    "name"
                )

                or

                github_user.get(
                    "login"
                )

            ),



            email=email,



            avatar=

            github_user.get(

                "avatar_url"

            ),



            github_id=str(

                github_user.get(
                    "id"
                )

            ),



            provider="github",



            password=None,



            email_verified=True,


            is_verified=True,


            is_admin=False,

        )



        db.add(
            db_user
        )


        db.commit()


        db.refresh(
            db_user
        )







    access_token = create_access_token(

        {

            "sub":

            str(db_user.id),


            "role":

            (
                "admin"

                if db_user.is_admin

                else "user"
            )

        }

    )





    refresh_token = create_refresh_token(

        {

            "sub":

            str(db_user.id)

        }

    )





    return Token(

        access_token=access_token,

        refresh_token=refresh_token,

    )









# =========================
# CURRENT USER
# =========================


@router.get(
    "/me",
    response_model=UserResponse,
)
def me(
    current_user: User = Depends(get_current_user),
):

    return current_user