from app import app, request, jsonify, BASE_DIR, MODEL_PATH, middleware, image_processing, model, class_names
import numpy as np
from PIL import Image

@app.route('/predict', methods=['POST'])
@middleware.require_api_key
def predict():
    if 'file' not in request.files:
        return jsonify({'error': 'No file uploaded'}), 400

    file = request.files['file']
    image = Image.open(file.stream)
    input_image = image_processing.preprocess_image(image)

    predictions = model.predict(input_image)
    predicted_class = class_names[np.argmax(predictions)]
    confidence = float(np.max(predictions))

    return jsonify({'class': predicted_class, 'confidence': confidence})
