from app import app

if __name__ == '__main__':
    print('Server Running...')
    app.run(debug=True, port=5000)
