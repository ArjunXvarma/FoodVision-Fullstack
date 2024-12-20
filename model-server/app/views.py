from app import (app, request, jsonify, middleware, image_processing, model, class_names, logger)
import numpy as np
from PIL import Image
import time

@app.route('/predict', methods=['POST'])
@middleware.require_api_key
@middleware.file_validation_middleware
def predict():
    try:
        start_time = time.time()

        file = request.files['file']
        image = Image.open(file.stream)
        input_image = image_processing.preprocess_image(image)

        inference_time_start = time.time()
        predictions = model.predict(input_image)[0]
        inference_time_end = time.time()

        predicted_index = np.argmax(predictions)
        predicted_class = class_names[predicted_index]
        confidence = float(predictions[predicted_index])

        end_time = time.time()  # End timer
        response_time = end_time - start_time

        top_classes = [
            {"class": class_names[i], "confidence": float(predictions[i])}
            for i in np.argsort(predictions)[::-1]
            if i != predicted_index 
        ][:3] 

        return jsonify({
            'class': predicted_class,
            'confidence': confidence,
            'other_possible_classes': top_classes,
            'response_time': round(response_time, 3),
            'inference_time': round(inference_time_end - inference_time_start, 3)
        })
    
    except Exception as e:
        logger.error(f"Error during prediction: {str(e)}")
        return jsonify({'error': 'Internal server error'}), 500

