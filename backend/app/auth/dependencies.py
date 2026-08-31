from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer
from sqlalchemy.orm import Session

from app.auth.jwt import verify_token
from app.database.session import SessionLocal
from app.models.user import User


oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/auth/login"
)



def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()





def get_current_user(
    token: str = Depends(oauth2_scheme),
    db: Session = Depends(get_db),
) -> User:


    payload = verify_token(token)



    if payload is None:

        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Invalid token",
        )



    subject = payload.get("sub")



    if not subject:

        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="Token missing subject",
        )




    # First try email login

    user = (
        db.query(User)
        .filter(
            User.email == subject
        )
        .first()
    )





    # If token contains user id, try id

    if user is None:

        try:

            user = (
                db.query(User)
                .filter(
                    User.id == int(subject)
                )
                .first()
            )

        except ValueError:

            pass





    if user is None:

        raise HTTPException(
            status_code=status.HTTP_401_UNAUTHORIZED,
            detail="User not found",
        )



    return user







def get_current_admin(
    current_user: User = Depends(get_current_user),
):


    if not current_user.is_admin:

        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN,
            detail="Admin only",
        )



    return current_user