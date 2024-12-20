from app import app, request, jsonify, logger, ALLOWED_EXTENSIONS
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

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

def file_validation_middleware(func):
    def wrapper(*args, **kwargs):
        if 'file' not in request.files:
            logger.warning("No file uploaded")
            return jsonify({'error': 'No file uploaded'}), 400

        file = request.files['file']
        logger.info(f"Received file: {file.filename}")

        if not allowed_file(file.filename):
            logger.warning(f"Invalid file type: {file.filename}")
            return jsonify({'error': 'Invalid file type'}), 400
        return func(*args, **kwargs)
    wrapper.__name__ = func.__name__
    return wrapper