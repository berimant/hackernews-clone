package handlers

import (
    "encoding/json"
    "log"
    "net/http"
    "fmt"

    "github.com/berimant/hackernews-clone/backend/models"
)

const (
    HNBaseURL = "https://hacker-news.firebaseio.com/v0"
)

func GetTopStories(w http.ResponseWriter, r *http.Request) {
    resp, err := http.Get(HNBaseURL + "/topstories.json")
    if err != nil {
        http.Error(w, "Failed to fetch top stories from Hacker News", http.StatusInternalServerError)
        log.Printf("Error fetching top stories: %v", err)
        return
    }
    defer resp.Body.Close()

    var storyIDs []int
    if err := json.NewDecoder(resp.Body).Decode(&storyIDs); err != nil {
        http.Error(w, "Failed to decode top stories", http.StatusInternalServerError)
        log.Printf("Error decoding top stories: %v", err)
        return
    }

    var stories []models.NewsItem
    for _, id := range storyIDs[:10] {
        storyResp, err := http.Get(fmt.Sprintf("%s/item/%d.json", HNBaseURL, id))
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
