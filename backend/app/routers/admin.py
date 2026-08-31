from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.auth.dependencies import (
    get_db,
    get_current_user,
)

from app.auth.service import authenticate_user

from app.auth.jwt import (
    create_access_token,
    create_refresh_token,
)

from app.schemas.user import UserLogin
from app.schemas.token import Token

from app.models.user import User



router = APIRouter(
    prefix="/admin",
    tags=["Admin"],
)



# =========================
# ADMIN LOGIN
# =========================

@router.post(
    "/login",
    response_model=Token,
)
def admin_login(
    user: UserLogin,
    db: Session = Depends(get_db),
):

    db_user = authenticate_user(
        db,
        user.email,
        user.password,
    )


    if not db_user:
        raise HTTPException(
            status_code=401,
            detail="Invalid email or password",
        )


    if not db_user.is_admin:
        raise HTTPException(
            status_code=403,
            detail="Admin access required",
        )


    access_token = create_access_token(
        {
            "sub": db_user.email,
            "role": "admin",
        }
    )


    refresh_token = create_refresh_token(
        {
            "sub": db_user.email,
        }
    )


    return Token(
        access_token=access_token,
        refresh_token=refresh_token,
    )



# =========================
# ADMIN CHECK
# =========================

def verify_admin(
    current_user: User = Depends(get_current_user)
):

    if not current_user.is_admin:

        raise HTTPException(
            status_code=403,
            detail="Admin access required",
        )

    return current_user

# =========================
# GET USERS
# =========================

@router.get("/users")
def get_users(
    db: Session = Depends(get_db),
    admin: User = Depends(verify_admin),
):

    users = db.query(User).all()

    return [
        {
            "id": user.id,
            "full_name": user.full_name,
            "email": user.email,
            "provider": user.provider,
            "is_active": user.is_active,
            "is_admin": user.is_admin,
            "created_at": user.created_at,
        }

        for user in users
    ]






# =========================
# ADMIN STATS
# =========================

@router.get("/stats")
def get_stats(
    db: Session = Depends(get_db),
    admin: User = Depends(verify_admin),
):

    total_users = db.query(User).count()


    return {
        "total_users": total_users,
        "database": "Connected",
    }




# =========================
# DELETE USER
# =========================

@router.delete("/users/{user_id}")
def delete_user(
    user_id: int,
    db: Session = Depends(get_db),
    admin: User = Depends(verify_admin),
):

    user = (
        db.query(User)
        .filter(User.id == user_id)
        .first()
    )


    if not user:

        raise HTTPException(
            status_code=404,
            detail="User not found",
        )


    db.delete(user)
    db.commit()


    return {
        "message": "User deleted successfully"
    }