# **FoodVision** 🍔🍕🍰  
## Scalable Food Image Classification with TensorFlow, Flask, and Node.js

---

### **Overview**
FoodVision is a full-stack food image classification application designed for scalability, clean code separation, and production efficiency. The project leverages a **Convolutional Neural Network (CNN)** built with TensorFlow to predict food categories from images. 

To showcase industry-standard architecture, the application adopts a **microservices approach**:
1. **Flask (Python)**: Serves the TensorFlow-trained model for image predictions.
2. **Node.js/Express**: Manages API routing, user requests, and communication with the Flask model server.
3. **(Optional) React.js Frontend**: Allows users to upload images, visualize predictions, and interact with the backend seamlessly.

---

### **Features** 🚀

- **State-of-the-Art CNN Model**: A trained TensorFlow model for food classification using the **Food-101 dataset**.
- **Microservices Architecture**: Separation of concerns using a Flask model server and a Node.js API server.
- **Scalable & Efficient**: Designed to handle high volumes of requests and easily scale with additional servers or containers.
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
    User[User Uploads Image] -->|HTTP Request| Node[Node.js Backend]
    Node -->|Forwards Image| Flask[Flask ML Server]
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

---

### **Why This Architecture?** 💡

1. **Scalability**:  
   - The Flask server (model inference) and Node.js server (API routing) can be scaled **independently**.  
   - For heavy prediction loads, multiple Flask servers can be deployed behind a load balancer.  

2. **Clean Code Separation**:  
   - Flask focuses on **ML inference**.  
   - Node.js handles **non-ML operations** like routing, authentication, and rate limiting.  

3. **Efficiency**:  
   - Python is the best choice for serving ML models due to TensorFlow's optimization.  
   - Node.js ensures fast, event-driven handling of user requests.  

4. **Microservices Design**:  
   - Mirrors modern production-ready architectures used in industry.  
   - Makes the system modular and easy to debug, maintain, or scale.

---

### **Tech Stack** 🛠️

| **Component**      | **Technology**               |
|--------------------|-----------------------------|
| **Model Training** | TensorFlow, Keras, Python   |
| **ML Server**      | Flask, TensorFlow Serving   |
| **API Server**     | Node.js, Express.js         |
| **Frontend**       | React.js                    |
| **Deployment**     | AWS, Heroku, Docker         |

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
   pip install tensorflow flask pillow
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
   npm install express axios multer cors
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
   npm start
   ```

---

### **API Endpoints** 🌐

| **Endpoint**      | **Method** | **Description**                        |
|-------------------|------------|----------------------------------------|
| `/predict`        | POST       | Upload an image and get a prediction.  |

---

### **Future Improvements** 🚀
- Add **user authentication** and **history tracking** for predictions.
- Deploy Flask and Node.js servers using **Docker** for containerization.
- Add **TensorFlow.js** support to allow in-browser model inference.

---

### **Screenshots** 🟎️

> Upload screenshots of the app here showing the UI, API response, and predictions.

---

### **How to Contribute** 🤝
Contributions are welcome! Feel free to open issues or submit pull requests.

---

### **License** 📄
This project is licensed under the MIT License.

---

### **Contact** 📧
If you have any questions or feedback, feel free to reach out:
- **GitHub**: [ArjunXvarma](https://github.com/ArjunXvarma)
- **Email**: arj15835@gmail.com

---

**Give this project a ⭐ if you find it helpful!**
