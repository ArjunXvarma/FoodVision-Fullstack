# from flask import Flask, request, jsonify
# import tensorflow as tf
# from PIL import Image
# import numpy as np

# model = tf.keras.models.load_model('food_pred.h5')
# class_names = ['chicken_curry', 'chicken_wings', 'fried_rice', 'grilled_salmon', 'hamburger',
#  'ice_cream', 'pizza', 'ramen', 'steak', 'sushi']

# app = Flask(__name__)

# def preprocess_image(image):
#     image = image.resize((128, 128))
#     image = np.array(image) / 255.0
#     return image[np.newaxis, ...]

# @app.route('/predict', methods=['POST'])
# def predict():
#     if 'file' not in request.files:
#         return jsonify({'error': 'No file uploaded'}), 400

#     file = request.files['file']
#     image = Image.open(file.stream)
#     input_image = preprocess_image(image)

#     predictions = model.predict(input_image)
#     predicted_class = class_names[np.argmax(predictions)]
#     confidence = float(np.max(predictions))

#     return jsonify({'class': predicted_class, 'confidence': confidence})

from app import app

if __name__ == '__main__':
    print('Server Running...')
    app.run(debug=True, port=5000)
