from sqlalchemy.orm import Session

from app.core.security import (
    hash_password,
    verify_password,
)

from app.models.user import User
from app.models.pending_user import PendingUser

from app.schemas.user import UserCreate





# =========================
# GET USER BY EMAIL
# =========================

def get_user_by_email(
    db: Session,
    email: str,
) -> User | None:

    return (
        db.query(User)
        .filter(
            User.email == email
        )
        .first()
    )








# =========================
# CREATE PENDING USER
# SEND OTP
# =========================

def create_pending_user(
    db: Session,
    user: UserCreate,
    otp: str,
    expires_at,
) -> PendingUser:



    existing = get_user_by_email(
        db,
        user.email
    )


    if existing:

        raise ValueError(
            "Email already registered"
        )




    # Remove old OTP request

    old_pending = (
        db.query(PendingUser)
        .filter(
            PendingUser.email == user.email
        )
        .first()
    )


    if old_pending:

        db.delete(
            old_pending
        )

        db.commit()





    pending = PendingUser(

        full_name=user.full_name,

        email=user.email,

        password=hash_password(
            user.password
        ),

        otp=otp,

        expires_at=expires_at,

    )



    db.add(
        pending
    )


    db.commit()


    db.refresh(
        pending
    )


    return pending









# =========================
# VERIFY EMAIL
# MOVE TO USERS TABLE
# =========================

def verify_pending_user(
    db: Session,
    pending: PendingUser,
) -> User:



    user = User(

        full_name=pending.full_name,

        email=pending.email,

        password=pending.password,


        provider="email",


        email_verified=True,


        is_verified=True,


        is_active=True,


        is_admin=False,

    )



    db.add(
        user
    )


    # remove temporary account

    db.delete(
        pending
    )



    db.commit()



    db.refresh(
        user
    )



    return user










# =========================
# LOGIN USER
# =========================

def authenticate_user(
    db: Session,
    email: str,
    password: str,
) -> User | None:



    user = get_user_by_email(
        db,
        email
    )



    if not user:

        return None





    # OAuth accounts

    if user.password is None:

        return None





    # Email verification protection

    if not user.email_verified:

        return None





    if not user.is_verified:

        return None





    if not user.is_active:

        return None





    if not verify_password(
        password,
        user.password
    ):

        return None





    return user