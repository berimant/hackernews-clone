package handlers

import (
    "encoding/json"
    "log"
    "net/http"
    "fmt"
    "time"

    "github.com/berimant/hackernews-clone/backend/models"
)

const (
    HNBaseURL = "https://hacker-news.firebaseio.com/v0"
)

func fetchStories(w http.ResponseWriter, endpoint string) {
    w.Header().Set("Access-Control-Allow-Origin", "http://localhost:3000")
    w.Header().Set("Access-Control-Allow-Methods", "GET")
    w.Header().Set("Access-Control-Allow-Headers", "Content-Type")

    client := &http.Client{
        Timeout: 10 * time.Second,
    }
    resp, err := client.Get(HNBaseURL + endpoint)
    if err != nil {
        http.Error(w, "Failed to fetch stories from Hacker News", http.StatusInternalServerError)
        log.Printf("Error fetching stories: %v", err)
        return
    }
    defer resp.Body.Close()

    var storyIDs []int
    if err := json.NewDecoder(resp.Body).Decode(&storyIDs); err != nil {
        http.Error(w, "Failed to decode stories", http.StatusInternalServerError)
        log.Printf("Error decoding stories: %v", err)
        return
    }

    var stories []models.NewsItem
    for _, id := range storyIDs[:10] {
        storyResp, err := client.Get(fmt.Sprintf("%s/item/%d.json", HNBaseURL, id))
        if err != nil {
            log.Printf("Failed to fetch story %d: %v", id, err)
            continue
        }
        defer storyResp.Body.Close()

        var story models.NewsItem
        if err := json.NewDecoder(storyResp.Body).Decode(&story); err != nil {
            log.Printf("Failed to decode story %d: %v", id, err)
            continue
        }
        stories = append(stories, story)
    }

    w.Header().Set("Content-Type", "application/json")
    if err := json.NewEncoder(w).Encode(stories); err != nil {
        http.Error(w, "Failed to encode response", http.StatusInternalServerError)
        log.Printf("Error encoding response: %v", err)
        return
    }
}

func GetTopStories(w http.ResponseWriter, r *http.Request) {
    fetchStories(w, "/topstories.json")
}

func GetNewStories(w http.ResponseWriter, r *http.Request) {
    fetchStories(w, "/newstories.json")
}

func GetAskStories(w http.ResponseWriter, r *http.Request) {
    fetchStories(w, "/askstories.json")
}

func GetShowStories(w http.ResponseWriter, r *http.Request) {
    fetchStories(w, "/showstories.json")
}

func GetJobStories(w http.ResponseWriter, r *http.Request) {
    fetchStories(w, "/jobstories.json")
}