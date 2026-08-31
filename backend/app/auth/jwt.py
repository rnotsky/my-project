from datetime import datetime, timedelta, timezone
from typing import Any

from jose import JWTError, jwt

from app.core.config import settings


def create_access_token(
    data: dict[str, Any],
    expires_delta: timedelta | None = None,
) -> str:
    to_encode = data.copy()

    expire = datetime.now(timezone.utc) + (
        expires_delta
        or timedelta(minutes=settings.ACCESS_TOKEN_EXPIRE_MINUTES)
    )

    to_encode.update({"exp": expire})

    return jwt.encode(
        to_encode,
        settings.JWT_SECRET_KEY,
        algorithm=settings.JWT_ALGORITHM,
    )


def create_refresh_token(
    data: dict[str, Any],
) -> str:
    expire = datetime.now(timezone.utc) + timedelta(
        days=settings.REFRESH_TOKEN_EXPIRE_DAYS
    )

    payload = data.copy()
    payload.update(
        {
            "exp": expire,
            "type": "refresh",
        }
    )

    return jwt.encode(
        payload,
        settings.JWT_SECRET_KEY,
        algorithm=settings.JWT_ALGORITHM,
    )


def verify_token(token: str):
    try:
        payload = jwt.decode(
            token,
            settings.JWT_SECRET_KEY,
            algorithms=[settings.JWT_ALGORITHM],
        )

        return payload

    except JWTError:
        return None