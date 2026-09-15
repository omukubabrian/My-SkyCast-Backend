# SkyCast — Weather Dashboard (Backend)

A small Express server that proxies requests to the OpenWeatherMap API, keeping the API key hidden from the client.

**Live API:** https://myskycast.onrender.com
**Frontend repo:** https://github.com/omukubabrian/My-SkyCast-Frontend
**Live app:** https://my-sky-cast-frontend.vercel.app/

## Why a Backend?

The frontend originally called OpenWeatherMap directly, which exposed the API key in the browser's source code. This server sits between the frontend and OpenWeatherMap:

```
Frontend  →  This Backend  →  OpenWeatherMap API
```

The API key is stored as a server-side environment variable and never reaches the browser.

## Endpoints

| Method | Route | Query Params | Description |
|--------|-------|---------------|--------------|
| GET | `/weather` | `city` | Current weather for a city name |
| GET | `/weather/coords` | `lat`, `lon` | Current weather for coordinates |
| GET | `/forecast` | `city` | 5-day / 3-hour forecast for a city |

Example:
```
GET /weather?city=Nairobi
GET /weather/coords?lat=-1.28&lon=36.82
GET /forecast?city=Nairobi
```

## Tech Stack

- Node.js + Express
- `dotenv` for environment variables
- `cors` for cross-origin requests from the frontend
- Deployed on [Render](https://render.com)

## Running Locally

1. Clone this repository
2. Run `npm install`
3. Create a `.env` file in the root with:
   ```
   WEATHER_API_KEY=your_openweathermap_api_key
   ```
4. Run `node server.js`
5. Server runs on `http://localhost:3000`

## Environment Variables

| Variable | Description |
|----------|--------------|
| `WEATHER_API_KEY` | Your OpenWeatherMap API key ([get one free](https://openweathermap.org/api)) |

## What I Learned

My first backend and first full deployment. Covered building an Express server, hiding secrets with environment variables, writing proxy routes, handling CORS between separately-hosted frontend and backend, debugging stale server processes during development, and deploying to Render with environment variables configured in the dashboard.
