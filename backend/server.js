import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import { WatsonXAI } from '@ibm-cloud/watsonx-ai'

dotenv.config()

const app = express()
const port = process.env.PORT || 4000

const systemPrompt = `You are Fitness Buddy.

You provide:
- Home workout plans
- Meal recommendations
- Fitness guidance
- Motivation tips

Keep answers practical and concise.`

const apiKey = process.env.IBM_API_KEY
const projectId = process.env.IBM_PROJECT_ID
const serviceUrl = process.env.IBM_WATSONX_URL || 'https://eu-de.ml.cloud.ibm.com'
const modelId = process.env.IBM_MODEL_ID || 'ibm/granite-4-h-small'

if (!apiKey || !projectId) {
  console.error('Missing required env vars: IBM_API_KEY and IBM_PROJECT_ID')
}

// SDK reads credentials from these environment variables.
process.env.WATSONX_AI_AUTH_TYPE = 'iam'
process.env.WATSONX_AI_APIKEY = apiKey || ''

const getWatsonxClient = () =>
  new WatsonXAI({
    version: '2024-05-31',
    serviceUrl,
  })

app.use(cors())
app.use(express.json())

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' })
})

app.post('/chat', async (req, res) => {
  try {
    const { message } = req.body || {}

    if (!message || typeof message !== 'string' || !message.trim()) {
      return res.status(400).json({ error: 'Request body must include a non-empty "message" string.' })
    }

    if (!apiKey || !projectId) {
      return res.status(500).json({
        error: 'Server is not configured. Add IBM_API_KEY and IBM_PROJECT_ID to environment variables.',
      })
    }

    const watsonx = getWatsonxClient()

    const response = await watsonx.textChat({
      modelId,
      projectId,
      maxTokens: 300,
      temperature: 0.4,
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message.trim() },
      ],
    })

    const content = response?.result?.choices?.[0]?.message?.content

    if (!content) {
      return res.status(502).json({ error: 'Granite returned an empty response.' })
    }

    return res.json({ response: content })
  } catch (error) {
    console.error('Error in /chat:', error)
    return res.status(500).json({
      error: 'Failed to get response from IBM Granite.',
      details: error?.message || 'Unknown error',
    })
  }
})

app.use((err, _req, res, next) => {
  if (err instanceof SyntaxError && 'body' in err) {
    return res.status(400).json({ error: 'Invalid JSON body.' })
  }

  return next(err)
})

app.listen(port, () => {
  console.log(`Fitness Buddy backend running on http://localhost:${port}`)
})
