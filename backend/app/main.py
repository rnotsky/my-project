from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware


from app.core.config import settings
from app.core.logging import setup_logging


from app.routers.auth import router as auth_router
from app.routers.admin import router as admin_router

from app.routers.userprofile.users import router as user_profile_router
from app.routers.userprofile.password import router as password_router



# =========================
# DATABASE
# =========================

from app.database.database import engine
from app.database.base import Base


# Import models so SQLAlchemy knows them

from app.models import User, PendingUser





# =========================
# Setup Logging
# =========================

setup_logging()





# =========================
# CREATE DATABASE TABLES
# =========================

Base.metadata.create_all(
    bind=engine
)







# =========================
# FastAPI App
# =========================

app = FastAPI(

    title=settings.APP_NAME,

    version=settings.APP_VERSION,

    debug=settings.DEBUG,

    description="Official Backend API for RNOTSKY",

)









# =========================
# CORS Configuration
# =========================

app.add_middleware(

    CORSMiddleware,


    allow_origins=[

        "http://localhost:3000",

        "http://127.0.0.1:3000",

    ],


    allow_credentials=True,


    allow_methods=[

        "*"

    ],


    allow_headers=[

        "*"

    ],

)









# =========================
# ROUTERS
# =========================



# Authentication

app.include_router(

    auth_router

)





# Admin Dashboard

app.include_router(

    admin_router

)





# User Profile

# GET    /users/profile
# PATCH  /users/profile
# DELETE /users/profile

app.include_router(

    user_profile_router

)





# Password Management

# PATCH /users/change-password

app.include_router(

    password_router

)









# =========================
# ROOT API
# =========================

@app.get("/")

def root():


    return {

        "message": "Welcome to RNOTSKY API 🚀",

        "status": "running",

        "version": settings.APP_VERSION,

    }