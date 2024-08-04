
### Service C (Go)

#### `service-c/main.go`
```go
package main

import (
    "encoding/json"
    "net/http"
    "log"
)

func handler(w http.ResponseWriter, r *http.Request) {
    w.Header().Set("Content-Type", "application/json")
    json.NewEncoder(w).Encode(map[string]string{"message": "Hello from Service C!"})
}

func main() {
    http.HandleFunc("/api/service-c", handler)
    log.Fatal(http.ListenAndServe(":3003", nil))
}
