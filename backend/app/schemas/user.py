from datetime import datetime

from pydantic import (
    BaseModel,
    ConfigDict,
    EmailStr,
)



# =========================
# REGISTER USER
# =========================

class UserCreate(BaseModel):

    full_name: str

    email: EmailStr

    password: str





# =========================
# LOGIN USER
# =========================

class UserLogin(BaseModel):

    email: EmailStr

    password: str





# =========================
# USER RESPONSE
# Used for /auth/me
# =========================

class UserResponse(BaseModel):

    model_config = ConfigDict(
        from_attributes=True
    )


    id: int


    full_name: str | None = None


    email: EmailStr


    avatar: str | None = None



    # OAuth provider
    provider: str | None = "email"



    # Phone verification
    phone_number: str | None = None


    phone_verified: bool = False



    # Email verification
    email_verified: bool = False



    # Account status

    is_admin: bool


    is_active: bool


    is_verified: bool



    created_at: datetime





# =========================
# UPDATE PROFILE
# Name + Avatar
# =========================

class UserUpdate(BaseModel):

    full_name: str | None = None


    avatar: str | None = None





# =========================
# CHANGE PASSWORD
# =========================

class ChangePasswordRequest(BaseModel):

    current_password: str


    new_password: str





# =========================
# VERIFY EMAIL
# =========================

class VerifyEmailRequest(BaseModel):

    email: EmailStr

    code: str





# =========================
# VERIFY PHONE
# =========================

class VerifyPhoneRequest(BaseModel):

    phone_number: str


    code: str