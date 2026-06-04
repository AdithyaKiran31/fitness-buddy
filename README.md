# Fitness Buddy

Fitness Buddy is a fitness web application that combines a React/Tailwind frontend with a Node.js/Express backend. The backend integrates with IBM WatsonX AI to power a fitness chat assistant, while the frontend includes tools for BMI calculation, calorie tracking, workout guidance, hydration tracking, and motivational challenges.

## Features

- Responsive React UI built with Vite and Tailwind CSS
- Navigation across fitness pages like Dashboard, BMI, Calories, Water, Workouts, Challenges, Coach, and Streaks
- AI-powered fitness assistant using IBM WatsonX Granite (`@ibm-cloud/watsonx-ai`)
- Backend API with health check and chat endpoint
- Local development setup for frontend and backend

## Repository Structure

- `backend/` - Node.js Express server and WatsonX AI integration
- `frontend/` - React application built with Vite

## Local Setup

### 1. Backend

1. Open a terminal at `backend/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env` file with the following variables:
   ```env
   IBM_API_KEY=your_ibm_api_key
   IBM_PROJECT_ID=your_ibm_project_id
   IBM_WATSONX_URL=https://eu-de.ml.cloud.ibm.com
   IBM_MODEL_ID=ibm/granite-4-h-small
   PORT=4000
   ```
4. Run the backend:
   ```bash
   npm run dev
   ```

### 2. Frontend

1. Open a terminal at `frontend/`
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the frontend:
   ```bash
   npm run dev
   ```

4. Open the local Vite URL shown in the terminal to view the app.

## Backend API

- `GET /health` - returns service health status
- `POST /chat` - sends a chat message to the IBM WatsonX model

Example request payload:
```json
{
  "message": "Give me a 20-minute bodyweight workout for beginners."
}
```

Example response payload:
```json
{
  "response": "..."
}
```

## Notes

- The backend requires valid IBM WatsonX credentials.
- The frontend is configured as a private Vite app in `frontend/package.json`.
- Update the `.env` values before starting the backend.

## License

This project is licensed under the ISC License.
