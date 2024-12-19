import os
from app import app, request, jsonify
import numpy as np
from PIL import Image

import tensorflow as tf
import tensorflow_hub as hub
import tf_keras

from silence_tensorflow import silence_tensorflow
silence_tensorflow()

# Get the absolute path to the model file
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
MODEL_PATH = os.path.join(BASE_DIR, 'model', 'food_pred.h5')

tf.get_logger().setLevel('ERROR')
model = tf_keras.models.load_model(MODEL_PATH, custom_objects={'KerasLayer': hub.KerasLayer})
class_names = ['chicken_curry', 'chicken_wings', 'fried_rice', 'grilled_salmon', 'hamburger', 'ice_cream', 'pizza', 'ramen', 'steak', 'sushi']

def preprocess_image(image):
    image = image.resize((224, 224))
    image = np.array(image) / 255.0
    return image[np.newaxis, ...]

@app.route('/predict', methods=['POST'])
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    image = Image.open(file.stream)
    input_image = preprocess_image(image)

    predictions = model.predict(input_image)
    predicted_class = class_names[np.argmax(predictions)]
    confidence = float(np.max(predictions))

    return jsonify({'class': predicted_class, 'confidence': confidence})
