from PIL import Image
import numpy as np

# Load and preprocess the image
def preprocess_image(image_path):
    image = Image.open(image_path).convert("RGB")
    image = image.resize((224, 224))  # Resize to the input size your model expects
    image_array = np.array(image) / 255.0  # Normalize pixel values
    return image_array[np.newaxis, ...]  # Add batch dimension

# Preprocess the test image
# input_data = preprocess_image("pijjo.jpg")
# print(input_data.shape)


import requests
import json

# REST API endpoint
url = "http://127.0.0.1:8501/v1/models/food_pred:predict"

# Load and preprocess the image
input_data = preprocess_image("pijjo.jpg")

# Prepare the payload
payload = {"instances": input_data.tolist()}

# Send the POST request
response = requests.post(url, json=payload)

# Parse and print the prediction
print(response.json())
