FROM golang:1.16
WORKDIR /app
COPY . .
RUN go build -o service-c .
EXPOSE 3003
CMD ["./service-c"]
