import { useMemo, useState } from 'react'

const increments = [250, 500, 750]

export default function Water() {
  const [goal, setGoal] = useState(2500)
  const [consumed, setConsumed] = useState(1350)

  const progress = useMemo(() => Math.min((consumed / goal) * 100, 100), [consumed, goal])
  const remaining = Math.max(goal - consumed, 0)

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/70">Water Tracker</p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-100">Hit your hydration goals</h2>
        <p className="mt-2 text-slate-400">Track daily intake and stay motivated with simple water goals.</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Daily target</p>
          <p className="mt-4 text-4xl font-semibold text-slate-100">{goal} ml</p>
          <div className="mt-6 rounded-3xl border border-slate-800/90 bg-slate-950/80 p-4">
            <div className="mb-4 flex items-center justify-between text-sm text-slate-400">
              <span>Consumed</span>
              <span>{consumed} ml</span>
            </div>
            <div className="h-3 overflow-hidden rounded-full bg-slate-800">
              <div className="h-full rounded-full bg-emerald-400 transition-all" style={{ width: `${progress}%` }} />
            </div>
            <p className="mt-4 text-sm text-slate-400">{Math.round(progress)}% complete · {remaining} ml left</p>
          </div>
          <div className="mt-6 grid gap-3 sm:grid-cols-3">
            {increments.map((amount) => (
              <button
                key={amount}
                type="button"
                onClick={() => setConsumed((value) => Math.min(value + amount, goal))}
                className="rounded-3xl border border-slate-800/90 bg-slate-950/85 px-4 py-3 text-sm font-semibold text-slate-100 transition hover:border-emerald-300/40 hover:bg-slate-900"
              >
                +{amount} ml
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Daily progress stats</p>
          <div className="mt-5 space-y-4">
            <div className="rounded-3xl bg-slate-950/80 p-4">
              <p className="text-sm text-slate-400">Best hydration streak</p>
              <p className="mt-2 text-2xl font-semibold text-slate-100">7 days</p>
            </div>
            <div className="rounded-3xl bg-slate-950/80 p-4">
              <p className="text-sm text-slate-400">Average daily intake</p>
              <p className="mt-2 text-2xl font-semibold text-slate-100">2.2 L</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
