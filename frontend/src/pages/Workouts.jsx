import { useState } from 'react'

const goals = [
  { value: 'strength', label: 'Strength' },
  { value: 'endurance', label: 'Endurance' },
  { value: 'flexibility', label: 'Flexibility' },
]

const difficulties = [
  { value: 'beginner', label: 'Beginner' },
  { value: 'intermediate', label: 'Intermediate' },
  { value: 'advanced', label: 'Advanced' },
]

const workoutPlans = {
  strength: {
    beginner: [
      { name: 'Goblet squats', reps: '3 x 12' },
      { name: 'Push-ups', reps: '3 x 10' },
      { name: 'Dumbbell rows', reps: '3 x 12' },
    ],
    intermediate: [
      { name: 'Back squats', reps: '4 x 8' },
      { name: 'Bench press', reps: '4 x 8' },
      { name: 'Pull-ups', reps: '4 x 6' },
    ],
    advanced: [
      { name: 'Deadlifts', reps: '5 x 5' },
      { name: 'Overhead press', reps: '4 x 8' },
      { name: 'Weighted chin-ups', reps: '4 x 6' },
    ],
  },
  endurance: {
    beginner: [
      { name: 'Brisk walking', reps: '25 min' },
      { name: 'Stationary bike', reps: '20 min' },
      { name: 'Plank holds', reps: '3 x 30s' },
    ],
    intermediate: [
      { name: 'Interval run', reps: '20 min' },
      { name: 'Rowing', reps: '15 min' },
      { name: 'Jump rope', reps: '10 min' },
    ],
    advanced: [
      { name: 'Hill sprints', reps: '8 rounds' },
      { name: 'Box jumps', reps: '5 x 12' },
      { name: 'Circuit training', reps: '25 min' },
    ],
  },
  flexibility: {
    beginner: [
      { name: 'Hamstring stretch', reps: '3 x 30s' },
      { name: 'Cat-cow', reps: '3 x 12' },
      { name: 'Shoulder opener', reps: '3 x 30s' },
    ],
    intermediate: [
      { name: 'Pigeon pose', reps: '3 x 40s' },
      { name: 'Standing quad stretch', reps: '3 x 30s' },
      { name: 'Thread the needle', reps: '3 x 30s' },
    ],
    advanced: [
      { name: 'Lunge with twist', reps: '3 x 30s' },
      { name: 'Thoracic bridge', reps: '3 x 20s' },
      { name: 'Deep squat hold', reps: '3 x 40s' },
    ],
  },
}

export default function Workouts() {
  const [goal, setGoal] = useState('strength')
  const [difficulty, setDifficulty] = useState('beginner')

  const plan = workoutPlans[goal][difficulty]

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
        <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/70">Workout Generator</p>
        <h2 className="mt-2 text-3xl font-semibold text-slate-100">Build a goal-focused workout plan</h2>
        <p className="mt-2 text-slate-400">Choose your fitness objective and difficulty level to generate a plan instantly.</p>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Goal</span>
              <select
                value={goal}
                onChange={(event) => setGoal(event.target.value)}
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/85 px-4 py-3 text-slate-100 outline-none"
              >
                {goals.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>

            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Difficulty</span>
              <select
                value={difficulty}
                onChange={(event) => setDifficulty(event.target.value)}
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/85 px-4 py-3 text-slate-100 outline-none"
              >
                {difficulties.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Your generated plan</p>
          <div className="mt-5 space-y-4">
            {plan.map((exercise) => (
              <div key={exercise.name} className="rounded-3xl border border-slate-800/80 bg-slate-950/85 p-4">
                <p className="font-semibold text-slate-100">{exercise.name}</p>
                <p className="mt-1 text-sm text-slate-400">{exercise.reps}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
