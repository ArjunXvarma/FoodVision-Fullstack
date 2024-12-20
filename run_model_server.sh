#!/bin/bash

# Navigate to the Flask server directory
cd model-server

# Activate the virtual environment (if any)
# Uncomment the line below if you're using a virtual environment
source venv-metal/bin/activate

# Run the Flask server
export FLASK_APP=app.py
export FLASK_ENV=development  # Optional: Enables debugging
flask run --host=0.0.0.0 --port=5000
