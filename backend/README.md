# Fitness Buddy Backend

Node.js + Express backend for Fitness Buddy chat.

## Endpoint

`POST /chat`

Request body:

```json
{
  "message": "..."
}
```

Response body:

```json
{
  "response": "..."
}
```

## Environment variables

- `IBM_API_KEY` (required)
- `IBM_PROJECT_ID` (required)
- `IBM_WATSONX_URL` (optional, default `https://us-south.ml.cloud.ibm.com`)
- `IBM_MODEL_ID` (optional, default `ibm/granite-4-h-small`)
- `PORT` (optional, default `4000`)

## Run

```bash
npm install
npm run dev
```

or

```bash
npm start
```
