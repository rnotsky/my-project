from pydantic_settings import BaseSettings, SettingsConfigDict



class Settings(BaseSettings):


    # =========================
    # APP SETTINGS
    # =========================

    APP_NAME: str = "RNOTSKY API"

    APP_VERSION: str = "1.0.0"

    DEBUG: bool = True



    # =========================
    # DATABASE
    # =========================

    DATABASE_URL: str



    # =========================
    # JWT AUTH
    # =========================

    JWT_SECRET_KEY: str

    JWT_ALGORITHM: str = "HS256"

    ACCESS_TOKEN_EXPIRE_MINUTES: int = 30

    REFRESH_TOKEN_EXPIRE_DAYS: int = 7



    # =========================
    # GITHUB OAUTH
    # =========================

    GITHUB_CLIENT_ID: str

    GITHUB_CLIENT_SECRET: str

    GITHUB_REDIRECT_URI: str



    # =========================
    # GOOGLE OAUTH
    # =========================

    GOOGLE_CLIENT_ID: str | None = None

    GOOGLE_CLIENT_SECRET: str | None = None

    GOOGLE_REDIRECT_URI: str | None = None



    # =========================
    # SUPABASE STORAGE
    # =========================

    SUPABASE_URL: str | None = None

    SUPABASE_KEY: str | None = None



    # =========================
    # SETTINGS
    # =========================

    model_config = SettingsConfigDict(

        env_file=".env",

        case_sensitive=True,

        extra="ignore"

    )




settings = Settings()