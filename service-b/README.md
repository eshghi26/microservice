# Service B

This is a simple Python Flask application.

## Running Locally

1. Create a virtual environment and activate it:
    ```sh
    python3 -m venv venv
    source venv/bin/activate
    ```

2. Install dependencies:
    ```sh
    pip install -r requirements.txt
    ```

3. Start the application:
    ```sh
    python app.py
    ```

## Docker

To build and run the Docker container:
```sh
docker build -t service-b .
docker run -p 3002:3002 service-b
