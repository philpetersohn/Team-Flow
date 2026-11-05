# TeamFlow

HTTP API for team users. The server lives in `server/`.

## Run

```bash
cd server
npm install
npm run dev
```

The API listens on port `3000`, or `PORT` when that variable is set.

## Routes

| Method | Path | Description |
| --- | --- | --- |
| `GET` | `/health` | Service status |
| `GET` | `/api/users` | List users |
| `GET` | `/api/users/:id` | Get one user |
| `POST` | `/api/users` | Create a user (`name`, `email`) |
