import re
import os
from dotenv import load_dotenv
from src import model, spotify_requests
from flask import Flask, request, jsonify
from flask_cors import CORS

load_dotenv()


app = Flask(__name__)
CORS(app, origins="http://localhost:5173")

@app.route('/', methods=['GET'])
def home():
    return jsonify({"message": "Welcome to the Flask API!"})

@app.route('/analyze', methods=['POST'])
def analyze():
    data = request.get_json()['url']
    print(data)
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
    SPOTIFY_URL_PATTERN = r"https://open\.spotify\.com/user/([a-zA-Z0-9]+)"

    match = re.search(SPOTIFY_URL_PATTERN, data)
    if match:
        username = match.group(1)
    
        playlist_data = spotify_requests.get_users_playlists(username)
        prediction = model.hand_prompt(str(playlist_data))
        response = {"playlists": playlist_data,
                    "text": prediction}
    
    return response

@app.route('/test/analyze', methods=['POST'])
def analyze_test():
    data = request.get_json()['url']
    print(data)
    if not data:
        return jsonify({"error": "No data provided"}), 400
    
    SPOTIFY_URL_PATTERN = r"https://open\.spotify\.com/user/([a-zA-Z0-9]+)"

    match = re.search(SPOTIFY_URL_PATTERN, data)
    if match:
        username = match.group(1)
    
    return {"text":username}
        # playlist_data = spotify_requests.get_users_playlists(username)
        # prediction = model.hand_prompt(str(playlist_data))
        # response = {"playlists": playlist_data,
        #             "text": prediction}
    

if __name__ == '__main__':
    app.run(debug=True)