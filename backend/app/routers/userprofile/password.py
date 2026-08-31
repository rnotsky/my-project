from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.database.session import get_db
from app.models.user import User
from app.schemas.user import ChangePasswordRequest
from app.core.security import get_current_user
from app.core.security import hash_password, verify_password



router = APIRouter(
    prefix="/users",
    tags=["Password"]
)





# =========================
# CHANGE PASSWORD
# =========================

@router.patch("/change-password")
def change_password(
    data: ChangePasswordRequest,
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):


    # Check old password

    if not current_user.password:

        raise HTTPException(
            status_code=400,
            detail="Password change not available for OAuth accounts"
        )



    if not verify_password(
        data.current_password,
        current_user.password
    ):

        raise HTTPException(
            status_code=400,
            detail="Current password is incorrect"
        )



    # Save new password

    current_user.password = hash_password(
        data.new_password
    )



    db.commit()

    db.refresh(current_user)



    return {
        "message": "Password changed successfully"
    }