from flask import Flask, request, jsonify
from silence_tensorflow import silence_tensorflow
import os

import tensorflow as tf
import tensorflow_hub as hub
import tf_keras

silence_tensorflow()

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, 'model', 'food_pred.h5')

model = tf_keras.models.load_model(MODEL_PATH, custom_objects={'KerasLayer': hub.KerasLayer})
class_names = ['chicken_curry', 'chicken_wings', 'fried_rice', 'grilled_salmon', 'hamburger', 'ice_cream', 'pizza', 'ramen', 'steak', 'sushi']

app = Flask(__name__)

from app import views