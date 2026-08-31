from pydantic import BaseModel


class OAuthCode(BaseModel):
    code: str