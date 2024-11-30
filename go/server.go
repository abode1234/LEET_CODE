package main

import (
	"fmt"
	"io"
	"log"
	"net/http"
)

func main() {
	http.HandleFunc("/", func(w http.ResponseWriter, r *http.Request) {
		fmt.Printf("got / request.\n")
		io.WriteString(w, "This is a server.\n")
	})
    err := http.ListenAndServe(":8080", nil)
    if err != nil {
        log.Fatalf("server crashed: %s", err)
    }
}
