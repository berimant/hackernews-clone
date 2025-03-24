package main

import (
    "log"
    "net/http"
    "time"

    "github.com/gorilla/mux"
    "github.com/berimant/hackernews-clone/backend/handlers"
)

func main() {
    r := mux.NewRouter()
    r.HandleFunc("/api/top-stories", handlers.GetTopStories).Methods("GET")

    srv := &http.Server{
        Handler:      r,
        Addr:         ":8080",
        WriteTimeout: 15 * time.Second,
        ReadTimeout:  15 * time.Second,
    }

    log.Println("Backend server running on :8080")
    log.Fatal(srv.ListenAndServe())
}
