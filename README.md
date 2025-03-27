# Hacker News Clone

A fullstack application cloning Hacker News, built for a Fullstack Developer technical test.

## Tech Stack
- **Frontend:** ReactJS (with Yarn and `react-router-dom`)
- **Backend:** Golang (with Gorilla Mux)
- **API:** Hacker News API (https://github.com/HackerNews/API)

## Features
- Displays top 10 stories for multiple pages: news, new, past, ask, show, jobs.
- Simple login feature (client-side only, using localStorage).
- Submit page for posting new stories (simulated, no backend integration).
- Favicon matching Hacker News branding.
- Responsive design with styling similar to Hacker News.

## Project Structure
hackernews-clone/
├── frontend/       # ReactJS app
├── backend/        # Golang app
└── README.md


## How to Run
1. **Backend:**
   - Navigate to `backend/`.
   - Run `go mod tidy` to install dependencies.
   - Run `go run main.go`.
   - Server runs on `http://localhost:8080`.

2. **Frontend:**
   - Navigate to `frontend/`.
   - Run `yarn install` to install dependencies.
   - Run `yarn start`.
   - App runs on `http://localhost:3000`.

## API Endpoints
- `GET /api/top-stories`: Fetch top 10 stories.
- `GET /api/new-stories`: Fetch top 10 new stories.
- `GET /api/ask-stories`: Fetch top 10 ask stories.
- `GET /api/show-stories`: Fetch top 10 show stories.
- `GET /api/job-stories`: Fetch top 10 job stories.

## Pages
- `/`: Main news page.
- `/new`: New stories.
- `/past`: Past stories (simulated with top stories).
- `/comments`: Comments page (placeholder).
- `/ask`: Ask HN stories.
- `/show`: Show HN stories.
- `/jobs`: Job postings.
- `/submit`: Submit a new story (requires login).
- `/login`: Login page (simulated).

## Notes
- The login feature is client-side only (using localStorage) due to time constraints.
- The comments page is a placeholder and can be extended with the Hacker News API (`kids` field).
- The favicon matches the Hacker News branding for a more authentic look.