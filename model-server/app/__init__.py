from flask import Flask, request, jsonify
# from silence_tensorflow import silence_tensorflow
import os
from werkzeug.utils import secure_filename
import logging
import requests

# import tensorflow_hub as hub
# import tf_keras

logging.basicConfig(level=logging.INFO, format='%(asctime)s %(levelname)s: %(message)s')
logger = logging.getLogger()

# silence_tensorflow()

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, 'model', 'food_pred.h5')

ALLOWED_EXTENSIONS = {'png', 'jpg', 'jpeg'}
MAX_CONTENT_LENGTH = 2 * 1024 * 1024  # 2MB limit
FLASK_ENV = os.getenv('FLASK_ENV')
TF_SERVING_URL = os.getenv('TF_SERVING_URL_DEV') if FLASK_ENV == 'development' else os.getenv('TF_SERVING_URL_PROD')

# model = tf_keras.models.load_model(MODEL_PATH, custom_objects={'KerasLayer': hub.KerasLayer})
class_names = ['chicken_curry', 'chicken_wings', 'fried_rice', 'grilled_salmon', 'hamburger', 'ice_cream', 'pizza', 'ramen', 'steak', 'sushi']

app = Flask(__name__)
app.config['MAX_CONTENT_LENGTH'] = MAX_CONTENT_LENGTH

from app import views