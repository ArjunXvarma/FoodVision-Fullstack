# **FoodVision** 🍔🍕🍰  
## Scalable Food Image Classification with TensorFlow, Flask, and Node.js

---

### **Overview**
FoodVision is a full-stack food image classification application designed for scalability, clean code separation, and production efficiency. The project leverages the pretrained EfficientNet80 model fine tuned to fit a dataset with 10,000 images resulting in a **Convolutional Neural Network (CNN)** built with TensorFlow to predict food categories from images. 

To showcase industry-standard architecture, the application adopts a **microservices approach**:
1. **Tensorflow serving:** Serves the TensorFlow-trained model for image predictions.
2. **Flask (Python)**: Performs image processing on the input, preparing it for the tensorflow model.
3. **Node.js/Express**: Manages API routing, user requests, and communication with the Flask model server.
4. **(Optional) React.js Frontend**: Allows users to upload images, visualize predictions, and interact with the backend seamlessly.

---

### **Features** 🚀

- **State-of-the-Art CNN Model**: A trained TensorFlow model for food classification using the **Food-101 dataset**.
- **Microservices Architecture**: Separation of concerns using a Flask model server and a Node.js API server.
- **Scalable & Efficient**: Designed to easily scale with additional servers or containers.
- **Clean Code Separation**: Well-organized Python and Node.js codebases for easy maintenance and debugging.
- **RESTful APIs**: Interaction between components happens through clean, standardized RESTful endpoints.
- **Modern Tech Stack**:
  - **Backend**: Flask, Node.js, Express, TensorFlow
  - **Frontend** (Optional): React.js
- **Production-Ready Design**: Deployment-friendly structure for cloud platforms like **AWS**, **Heroku**, or **Docker**.

---

### **Project Architecture** 🛠️

```mermaid
description FoodVision Project Architecture
flowchart TD
    User[Frontend User] -->|HTTP Request| Node[Node.js Backend]
    Node -->|Forwards Image & Request| Flask[Flask ML Server]
    Flask -->|Processes Image| TFServing[TF Serving Docker Container]
    TFServing -->|Returns Prediction| Flask
    Flask -->|Returns Prediction| Node
    Node -->|Sends Response| User
```

1. **Flask (Model Server)**:  
   - Handles model loading and inference using TensorFlow.  
   - Optimized for CPU/GPU-bound tasks to serve predictions efficiently.  

2. **Node.js/Express (API Server)**:  
   - Manages incoming HTTP requests.  
   - Acts as a bridge between the client (frontend) and the model server (Flask).  
   - Scalable and lightweight to handle multiple concurrent users.  

3. **React.js (Frontend)** *(Optional)*:  
   - Provides a user-friendly interface to upload images and view predictions.

1. **Node.js/Express (Backend Server)**:
  - Manages incoming HTTP requests from the frontend.
  - Handles web-related tasks such as authentication and request routing.
  - Acts as a bridge between the frontend and the model server (Flask).

2. **Flask (Model Server)**:
  - Prepares incoming images for processing.
  - Communicates with the TF Serving Docker container for predictions.
  - Returns processed predictions to the backend server.

3. **TF Serving (Prediction Service)**:
  - Hosts and serves the TensorFlow model for efficient predictions.
  - Optimized for both CPU and GPU-bound tasks to handle model inference.

4. **React.js (Frontend)**:
  - Provides a user-friendly interface for uploading images.
  - Displays the prediction results received from the backend server.

---

## **Why This Architecture?** 💡

1. **Scalability**:  
   - The **Node.js backend**, **Flask server**, and **TF Serving Docker container** can be scaled **independently**.  
   - For heavy prediction loads, multiple TF Serving containers and Flask servers can be deployed behind a load balancer.  

2. **Clean Code Separation**:  
   - **Node.js backend** handles web-related tasks like routing, authentication, and rate limiting.  
   - **Flask server** focuses on image preparation and communication with the TF Serving container.  
   - **TF Serving** is optimized solely for model inference, ensuring modularity.  

3. **Efficiency**:  
   - **TF Serving** is optimized for high-performance TensorFlow model inference on both CPU and GPU.  
   - **Flask server** ensures efficient preprocessing and prediction response handling.  
   - **Node.js** provides fast, event-driven handling of client requests, ensuring seamless user interaction.  

4. **Microservices Design**:  
   - Aligns with modern production-ready architectures widely used in industry.  
   - Separates concerns into distinct services, making the system modular, easier to debug, maintain, and scale.

---

### **Tech Stack** 🛠️

| **Component**          | **Technology**               |
|------------------------|------------------------------|
| **Tensorflow serving** | TensorFlow, Keras, Python    |
| **ML Server**          | Flask, TensorFlow Serving    |
| **API Server**         | Node.js, Express.js          |
| **Frontend**           | React.js                     |
| **Deployment**         | AWS, Heroku, Docker          |

---

### **Installation Guide** ⚙️

Follow these steps to set up the project locally.

#### **1. Clone the Repository**
```bash
git clone https://github.com/ArjunXvarma/foodvision.git
cd foodvision
```

#### **2. Setup Flask ML Server**
1. Navigate to the Flask directory:
   ```bash
   cd model-server
   ```
2. Install dependencies:
   ```bash
   pip install -r requirements.txt
   ```
3. Run the Flask server:
   ```bash
   python app.py
   ```

#### **3. Setup Node.js API Server**
1. Navigate to the Node.js directory:
   ```bash
   cd ../api-server
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the Node.js server:
   ```bash
   node server.js
   ```

#### **4. (Optional) Run React Frontend**
1. Navigate to the frontend directory:
   ```bash
   cd ../frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the frontend:
   ```bash
    npm run build && npm run preview
   ```

---

### **API Endpoints** 🌐

| **Endpoint**      | **Method** | **Description**                        | **Header**
|-------------------|------------|----------------------------------------|-------------------------
| `/predict`        | POST       | Upload an image and get a prediction.  | `x-api-key`: include an api key

---

### **Future Improvements** 🚀
- Add **user authentication** and **history tracking** for predictions.
- Add **TensorFlow.js** support to allow in-browser model inference.

---

### **Screenshots** 🟎️

> Upload screenshots of the app here showing the UI, API response, and predictions.

---

### **Contact** 📧
If you have any questions or feedback, feel free to reach out:
- **GitHub**: [ArjunXvarma](https://github.com/ArjunXvarma)
- **Email**: arj15835@gmail.com

---

**Give this project a ⭐ if you find it helpful!**
