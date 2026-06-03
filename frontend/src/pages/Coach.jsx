import { useEffect, useRef, useState } from 'react'

const suggestionCards = [
  { emoji: '🏋️', title: 'Beginner Workout', prompt: 'Create a simple beginner home workout plan for 4 days per week.' },
  { emoji: '🥗', title: 'Healthy Diet', prompt: 'Suggest a healthy diet plan with balanced meals for a week.' },
  { emoji: '🔥', title: 'Weight Loss', prompt: 'Give me a practical weight loss routine and nutrition tips.' },
  { emoji: '💪', title: 'Muscle Gain', prompt: 'Recommend a muscle gain program with exercises and meals.' },
  { emoji: '⚡', title: 'Motivation', prompt: 'Share a short motivational fitness message to keep me focused.' },
]

export default function Coach() {
  const [messages, setMessages] = useState([
    { id: 1, role: 'ai', text: 'Welcome to Fitness Buddy. Ask me for workouts, meals, or motivation.' },
  ])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const chatEndRef = useRef(null)
  const nextMessageId = useRef(5000)
  const apiBaseUrl = import.meta.env.VITE_API_BASE_URL || 'http://localhost:4000'

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, isLoading])

  const submitMessage = async (prompt) => {
    const trimmed = prompt.trim()
    if (!trimmed || isLoading) return

    const userMessageId = nextMessageId.current++
    const aiMessageId = nextMessageId.current++

    setMessages((prev) => [
      ...prev,
      { id: userMessageId, role: 'user', text: trimmed },
      { id: aiMessageId, role: 'ai', text: 'Thinking through your fitness plan...', loading: true },
    ])
    setInput('')
    setIsLoading(true)

    try {
      const response = await fetch(`${apiBaseUrl}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: trimmed }),
      })
      const data = await response.json()
      if (!response.ok) throw new Error(data?.error || 'Could not fetch AI response.')

      setMessages((prev) => prev.map((message) => (message.id === aiMessageId ? { id: aiMessageId, role: 'ai', text: data.response } : message)))
    } catch (error) {
      setMessages((prev) => prev.map((message) => (message.id === aiMessageId ? { id: aiMessageId, role: 'ai', text: error.message || 'Unable to connect to the coach.' } : message)))
    } finally {
      setIsLoading(false)
    }
  }

  const handleSend = () => submitMessage(input)
  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault()
      handleSend()
    }
  }

  const recommendations = [
    'Swap one processed snack for fruit today.',
    'Schedule a 10-minute stretch after your next workout.',
    'Aim for 8 hours of sleep to support recovery.',
  ]

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/70">AI Fitness Coach</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-100">Get personalized fitness support</h2>
            <p className="mt-2 text-slate-400">Use natural language prompts and get practical guidance instantly.</p>
          </div>
          <div className="rounded-3xl border border-emerald-300/15 bg-slate-950/80 p-4 text-slate-100">
            <p className="font-semibold">Chat history</p>
            <p className="mt-2 text-sm text-slate-400">Your recent coach conversations are stored locally during this session.</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 xl:grid-cols-[2fr_1fr]">
        <div className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-4 shadow-lg shadow-black/10">
          <div className="mb-4 rounded-3xl border border-slate-800/90 bg-slate-950/80 p-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Quick prompts</p>
            <div className="mt-4 grid gap-3 sm:grid-cols-2">
              {suggestionCards.map((card) => (
                <button
                  key={card.title}
                  type="button"
                  onClick={() => submitMessage(card.prompt)}
                  disabled={isLoading}
                  className="rounded-3xl border border-slate-800/80 bg-slate-950/85 px-4 py-4 text-left transition hover:border-emerald-300/40 hover:bg-slate-900 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  <p className="text-2xl">{card.emoji}</p>
                  <p className="mt-3 font-semibold text-slate-100">{card.title}</p>
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-3xl border border-slate-800/90 bg-slate-950/80 p-4">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Fitness recommendations</p>
            <ul className="mt-4 space-y-3">
              {recommendations.map((item) => (
                <li key={item} className="rounded-2xl bg-slate-900/75 p-4 text-slate-300">{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-4 shadow-lg shadow-black/10">
          <div className="max-h-[60vh] overflow-y-auto pr-2">
            {messages.map((message, index) => {
              const isUser = message.role === 'user'
              const isLoadingBubble = message.loading
              return (
                <div
                  key={`${message.id}-${index}`}
                  className={`mb-4 flex ${isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] rounded-3xl px-4 py-3 text-sm leading-relaxed shadow-lg ${isUser ? 'bg-cyan-400/20 border border-cyan-300/30 text-cyan-100 shadow-cyan-900/20' : 'bg-emerald-500/15 border border-emerald-300/25 text-emerald-50 shadow-emerald-950/20'}`}>
                    <p className="mb-2 text-[0.65rem] uppercase tracking-[0.22em] text-slate-300/90">{isUser ? 'You' : 'Coach'}</p>
                    {isLoadingBubble ? (
                      <div className="flex items-center gap-2">
                        <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-200" />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-200 delay-75" />
                        <span className="h-2 w-2 animate-bounce rounded-full bg-emerald-200 delay-150" />
                      </div>
                    ) : (
                      <p>{message.text}</p>
                    )}
                  </div>
                </div>
              )
            })}
            <div ref={chatEndRef} />
          </div>
          <div className="mt-4 border-t border-slate-800/80 pt-4">
            <textarea
              value={input}
              onChange={(event) => setInput(event.target.value)}
              onKeyDown={handleKeyDown}
              rows={2}
              placeholder="Type a fitness question..."
              disabled={isLoading}
              className="w-full resize-none rounded-3xl border border-slate-700 bg-slate-950/85 px-4 py-3 text-sm text-slate-100 outline-none placeholder:text-slate-500 focus:border-emerald-300/70 focus:ring-2 focus:ring-emerald-300/20"
            />
            <button
              type="button"
              onClick={handleSend}
              disabled={isLoading}
              className="mt-4 inline-flex h-12 items-center justify-center rounded-3xl bg-emerald-400/90 px-5 text-sm font-semibold text-slate-950 transition hover:-translate-y-0.5 hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {isLoading ? 'Sending...' : 'Send message'}
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
