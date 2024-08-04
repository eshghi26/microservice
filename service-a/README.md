# Service A

This is a simple Node.js application.

## Running Locally

1. Install dependencies:
    ```sh
    npm install
    ```

2. Start the application:
    ```sh
    npm start
    ```

## Docker

To build and run the Docker container:
```sh
docker build -t service-a .
docker run -p 3001:3001 service-a
