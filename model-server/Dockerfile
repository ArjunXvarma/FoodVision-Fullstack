FROM python:3.10-slim-buster

WORKDIR /app

COPY requirements.txt requirements.txt
RUN pip3 install -r requirements.txt

COPY . .

# Expose port 5000 to allow external access
EXPOSE 5000

# Bind Flask to 0.0.0.0 to make it accessible externally
CMD [ "python3", "-m", "flask", "run", "--host=0.0.0.0", "--port=5000" ]
