import numpy as np

def preprocess_image(image):
    image = image.resize((224, 224))
    image = np.array(image) / 255.0
    return image[np.newaxis, ...]
