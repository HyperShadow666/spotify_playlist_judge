import requests
import os
from dotenv import load_dotenv


load_dotenv()



URL = "https://api.spotify.com"

CLIENT_ID = os.getenv("CLIENT_ID")
CLIENT_SECRET = os.getenv("CLIENT_SECRET")


def get_users_playlists(user_id) -> str:

    url  =  URL + f"/v1/users/{user_id}/playlists?limit=10"

    headers = {
    "Authorization": f"Bearer {get_spotify_token()}"

    }

    response = requests.get(url, headers=headers)

    if response.status_code == 200:
        playlists = response.json()
        return playlists
    else:
        print(f"Request failed with status code {response.status_code}: {response.text}")



def get_spotify_token() -> str:
    """
    Fetches the Spotify API access token using client credentials.
    
    Args:
        client_id (str): Your Spotify Client ID.
        client_secret (str): Your Spotify Client Secret.

    Returns:
        str: The access token if successful, otherwise an empty string.
    """
    url = "https://accounts.spotify.com/api/token"
    headers = {"Content-Type": "application/x-www-form-urlencoded"}
    data = {
        "grant_type": "client_credentials",
        "client_id": CLIENT_ID,
        "client_secret": CLIENT_SECRET
    }

    response = requests.post(url, headers=headers, data=data)

    if response.status_code == 200:
        return response.json().get("access_token", "")
    else:
        print(f"Error: {response.status_code}, {response.text}")
        return ""