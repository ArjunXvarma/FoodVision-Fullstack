from locust import HttpUser, TaskSet, task, between
import os

class ImageUploadTasks(TaskSet):
    """Task set for testing the image upload API"""

    @task
    def upload_image(self):
        image_path = "test_image.jpg"  

        if not os.path.exists(image_path):
            print(f"Error: Image file {image_path} not found.")
            return

        with open(image_path, "rb") as image_file:
            files = {"file": image_file}
            header = {"x-api-key": os.environ['API_SERVER_KEY']}
            response = self.client.post("/predict", files=files, headers=header)

        if response.status_code == 200:
            print("Image uploaded successfully.")
        else:
            print(f"Failed to upload image. Status code: {response.status_code}")

class WebsiteUser(HttpUser):
    """Simulates users interacting with the API."""

    tasks = [ImageUploadTasks]
    wait_time = between(1, 5)
