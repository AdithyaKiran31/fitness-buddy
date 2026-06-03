import { useState } from 'react'

const challenge = {
  title: '30-Minute Full-Body Burn',
  description: 'Complete a 30-minute home circuit with strength and cardio.',
  details: 'Alternate strength exercises and short cardio intervals. Focus on form and stay hydrated.',
}

const history = [
  { date: 'Jun 1', status: 'Completed' },
  { date: 'Jun 2', status: 'Skipped' },
  { date: 'Jun 3', status: 'Completed' },
]

export default function Challenges() {
  const [completed, setCompleted] = useState(false)
  const [pastChallenges, setPastChallenges] = useState(history)

  const handleComplete = () => {
    if (!completed) {
      setCompleted(true)
      setPastChallenges((prev) => [{ date: 'Jun 4', status: 'Completed' }, ...prev])
    }
  }

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/70">Daily Challenges</p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-100">Stay motivated with today's goal</h2>
        <p className="mt-2 text-slate-400">Complete the challenge and track progress over time with a history view.</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
          <div className="rounded-3xl border border-slate-800/80 bg-slate-950/80 p-6">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Today’s fitness challenge</p>
            <h3 className="mt-4 text-2xl font-semibold text-slate-100">{challenge.title}</h3>
            <p className="mt-3 text-slate-400">{challenge.description}</p>
            <p className="mt-4 text-sm leading-7 text-slate-300">{challenge.details}</p>
            <button
              type="button"
              onClick={handleComplete}
              disabled={completed}
              className="mt-6 inline-flex h-12 items-center justify-center rounded-3xl bg-emerald-400/90 px-5 text-sm font-semibold text-slate-950 transition hover:bg-emerald-300 disabled:cursor-not-allowed disabled:opacity-70"
            >
              {completed ? 'Completed' : 'Mark as completed'}
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Challenge history</p>
          <div className="mt-4 space-y-3">
            {pastChallenges.map((item) => (
              <div key={item.date} className="rounded-3xl border border-slate-800/80 bg-slate-950/85 p-4 text-slate-300">
                <div className="flex items-center justify-between">
                  <p className="font-semibold text-slate-100">{item.date}</p>
                  <span className={`rounded-full px-3 py-1 text-xs ${item.status === 'Completed' ? 'bg-emerald-500/15 text-emerald-200' : 'bg-slate-800/70 text-slate-400'}`}>
                    {item.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
