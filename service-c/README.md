# Service C

This is a simple Go application.

## Running Locally

1. Initialize the module:
    ```sh
    go mod init service-c
    ```

2. Build and run the application:
    ```sh
    go build -o service-c
    ./service-c
    ```

## Docker

To build and run the Docker container:
```sh
docker build -t service-c .
docker run -p 3003:3003 service-c
