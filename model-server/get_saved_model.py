import tensorflow as tf
import tensorflow_hub as hub
import tf_keras

# Load the H5 model
h5_model_path = 'app/model/food_pred.h5'
# model = tf.keras.models.load_model(h5_model_path)
model = tf_keras.models.load_model(h5_model_path, custom_objects={'KerasLayer': hub.KerasLayer})

# Convert and save to SavedModel format
saved_model_path = 'serving_models/food_pred'
model.save(saved_model_path, save_format='tf')

print(f"Model converted and saved to: {saved_model_path}")
