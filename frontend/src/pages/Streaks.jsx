import { useState } from 'react'

const history = [
  { day: 'Mon', completed: true },
  { day: 'Tue', completed: true },
  { day: 'Wed', completed: true },
  { day: 'Thu', completed: true },
  { day: 'Fri', completed: false },
  { day: 'Sat', completed: true },
  { day: 'Sun', completed: true },
]

const badges = [
  { label: '5-Day Streak', unlocked: true },
  { label: '10-Day Streak', unlocked: true },
  { label: '30-Day Streak', unlocked: false },
]

export default function Streaks() {
  const [currentStreak] = useState(12)
  const [longestStreak] = useState(18)

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/70">Streak Tracker</p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-100">Keep your momentum going</h2>
        <p className="mt-2 text-slate-400">Track your daily consistency and celebrate streak milestones.</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Current streak</p>
          <p className="mt-4 text-5xl font-semibold text-slate-100">{currentStreak} days</p>
        </div>
        <div className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Longest streak</p>
          <p className="mt-4 text-5xl font-semibold text-slate-100">{longestStreak} days</p>
        </div>
        <div className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Completion history</p>
          <div className="mt-4 grid grid-cols-7 gap-2 text-center text-xs text-slate-400">
            {history.map((item) => (
              <div
                key={item.day}
                className={`rounded-2xl border p-3 ${item.completed ? 'border-emerald-400/30 bg-emerald-400/10 text-emerald-200' : 'border-slate-800 bg-slate-950 text-slate-500'}`}
              >
                <p className="font-semibold">{item.day}</p>
                <p className="mt-1">{item.completed ? '✓' : '—'}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Achievement badges</p>
        <div className="mt-4 grid gap-3 sm:grid-cols-3">
          {badges.map((badge) => (
            <div
              key={badge.label}
              className={`rounded-3xl border p-4 ${badge.unlocked ? 'border-emerald-400/40 bg-emerald-400/10 text-emerald-200' : 'border-slate-800 bg-slate-950 text-slate-500'}`}
            >
              <p className="font-semibold">{badge.label}</p>
              <p className="mt-2 text-sm">{badge.unlocked ? 'Unlocked' : 'Locked'}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
