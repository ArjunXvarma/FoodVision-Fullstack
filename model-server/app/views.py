from app import (app, request, jsonify, middleware, image_processing, model, class_names, logger, requests, TF_SERVING_URL)
import numpy as np
from PIL import Image
import time

@app.route('/predict', methods=['POST'])
@middleware.require_api_key
@middleware.file_validation_middleware
def predict():
    try:
        start_time = time.time()
        logger.info("Received prediction request")

        file = request.files['file']
        logger.info("File received successfully")

        image = Image.open(file.stream)
        logger.info("Image processed successfully")

        input_image = image_processing.preprocess_image(image)  # Confirm `image_processing` is callable
        logger.info("Image preprocessing complete")

        payload = {
            "instances": input_image.tolist()
        }
        logger.info("Payload prepared successfully")

        # Send the request to TensorFlow Serving
        inference_time_start = time.time()
        response = requests.post(TF_SERVING_URL, json=payload)
        inference_time_end = time.time()
        logger.info("Received response from TensorFlow Serving")

        if response.status_code != 200:
            logger.error(f"TensorFlow Serving error: {response.text}")
            return jsonify({'error': 'Error during inference'}), 500

        predictions = response.json()['predictions'][0]
        predicted_index = np.argmax(predictions)
        predicted_class = class_names[predicted_index]
        confidence = float(predictions[predicted_index])
        logger.info("Parsed predictions successfully")

        end_time = time.time()
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
    

@app.route('/health', methods=['GET'])
def health_check():
    return jsonify({'status': 'Model server is running'}), 200
