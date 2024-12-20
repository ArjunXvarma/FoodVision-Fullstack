from app import app, request, jsonify
from dotenv import load_dotenv
import os

load_dotenv()
VALID_API_KEYS = os.getenv('VALID_API_KEYS').split(',')

def require_api_key(func):
    def wrapper(*args, **kwargs):
        api_key = request.headers.get('X-API-KEY')
        if api_key not in VALID_API_KEYS:
            return jsonify({'error': 'Invalid or missing API key'}), 401
        return func(*args, **kwargs)
    wrapper.__name__ = func.__name__
    return wrapper