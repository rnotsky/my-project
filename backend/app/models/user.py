from datetime import datetime

from sqlalchemy import Boolean, DateTime, String
from sqlalchemy.orm import Mapped, mapped_column

from app.database.base import Base


class User(Base):

    __tablename__ = "users"


    id: Mapped[int] = mapped_column(
        primary_key=True,
        index=True,
    )


    full_name: Mapped[str] = mapped_column(
        String(100),
        nullable=False,
    )


    email: Mapped[str] = mapped_column(
        String(255),
        unique=True,
        index=True,
        nullable=False,
    )


    password: Mapped[str | None] = mapped_column(
        String(255),
        nullable=True,
    )


    avatar: Mapped[str | None] = mapped_column(
        String(500),
        nullable=True,
    )


    provider: Mapped[str] = mapped_column(
        String(20),
        default="email",
    )


    google_id: Mapped[str | None] = mapped_column(
        String(255),
        unique=True,
        nullable=True,
    )


    github_id: Mapped[str | None] = mapped_column(
        String(255),
        unique=True,
        nullable=True,
    )



    # =====================
    # NEW PROFILE SETTINGS
    # =====================


    phone_number: Mapped[str | None] = mapped_column(
        String(20),
        nullable=True,
    )


    phone_verified: Mapped[bool] = mapped_column(
        Boolean,
        default=False,
    )


    email_verified: Mapped[bool] = mapped_column(
        Boolean,
        default=False,
    )



    # =====================
    # ACCOUNT STATUS
    # =====================


    is_active: Mapped[bool] = mapped_column(
        Boolean,
        default=True,
    )


    is_verified: Mapped[bool] = mapped_column(
        Boolean,
        default=False,
    )


    is_admin: Mapped[bool] = mapped_column(
        Boolean,
        default=False,
    )



    # =====================
    # DATES
    # =====================


    created_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
    )


    updated_at: Mapped[datetime] = mapped_column(
        DateTime,
        default=datetime.utcnow,
        onupdate=datetime.utcnow,
    )