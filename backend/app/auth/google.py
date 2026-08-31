import requests

from fastapi import HTTPException



def verify_google_token(token: str):

    response = requests.get(

        "https://www.googleapis.com/oauth2/v3/userinfo",

        headers={
            "Authorization": f"Bearer {token}"
        },

    )


    if response.status_code != 200:

        raise HTTPException(
            status_code=401,
            detail="Invalid Google token",
        )


    return response.json()