from app import app
import os

PORT = os.getenv('PORT', 5000)

if __name__ == '__main__':
    print('Server Running...')
    app.run(debug=True, port=PORT)
