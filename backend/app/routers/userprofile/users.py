from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.models.user import User
from app.schemas.user import (
    UserUpdate,
    UserResponse,
)
from app.core.security import get_current_user



router = APIRouter(
    prefix="/users",
    tags=["User Profile"]
)





# =========================
# GET CURRENT PROFILE
# =========================

@router.get(
    "/profile",
    response_model=UserResponse
)
def get_profile(
    current_user: User = Depends(get_current_user)
):

    return current_user







# =========================
# UPDATE PROFILE
# Name + Avatar
# =========================

@router.patch(
    "/profile",
    response_model=UserResponse
)
def update_profile(
    data: UserUpdate,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):


    if data.full_name:

        current_user.full_name = data.full_name



    if data.avatar:

        current_user.avatar = data.avatar



    db.commit()

    db.refresh(current_user)


    return current_user







# =========================
# DELETE ACCOUNT
# =========================

@router.delete(
    "/profile"
)
def delete_account(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):


    current_user.is_active = False


    db.commit()


    return {
        "message": "Account deactivated successfully"
    }