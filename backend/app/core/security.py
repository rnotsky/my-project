from datetime import datetime, timedelta, timezone

from argon2 import PasswordHasher

from jose import JWTError, jwt

from fastapi import (
    Depends,
    HTTPException,
    status,
)

from fastapi.security import OAuth2PasswordBearer

from sqlalchemy.orm import Session


from app.core.config import settings
from app.database.session import get_db
from app.models.user import User





# =========================
# PASSWORD HASHING
# =========================

pwd_hasher = PasswordHasher()



def hash_password(
    password: str
) -> str:

    return pwd_hasher.hash(
        password
    )





def verify_password(
    password: str,
    hashed_password: str
) -> bool:

    try:

        return pwd_hasher.verify(
            hashed_password,
            password
        )

    except Exception:

        return False







# =========================
# JWT CONFIG
# =========================

oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/auth/login"
)







def create_access_token(
    data: dict,
    expires_minutes: int = 60
):


    to_encode = data.copy()



    expire = (

        datetime.now(timezone.utc)

        +

        timedelta(
            minutes=expires_minutes
        )

    )



    to_encode.update(
        {
            "exp": expire
        }
    )



    encoded_jwt = jwt.encode(

        to_encode,

        settings.JWT_SECRET_KEY,

        algorithm=settings.JWT_ALGORITHM

    )



    return encoded_jwt







# =========================
# GET CURRENT LOGGED USER
# =========================

def get_current_user(

    token: str = Depends(oauth2_scheme),

    db: Session = Depends(get_db)

):


    credentials_exception = HTTPException(

        status_code=status.HTTP_401_UNAUTHORIZED,

        detail="Could not validate credentials",

        headers={
            "WWW-Authenticate": "Bearer"
        },

    )





    try:


        payload = jwt.decode(

            token,

            settings.JWT_SECRET_KEY,

            algorithms=[
                settings.JWT_ALGORITHM
            ]

        )




        user_id = payload.get(
            "sub"
        )





        if user_id is None:

            raise credentials_exception





    except JWTError:


        raise credentials_exception






    user = (

        db.query(User)

        .filter(
            User.id == int(user_id)
        )

        .first()

    )






    if user is None:

        raise credentials_exception






    return user