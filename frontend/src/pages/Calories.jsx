import { useMemo, useState } from 'react'
import { activityMultiplier, calculateBMR, calculateCalories } from '../utils/fitnessCalculators.js'

const activityOptions = [
  { value: 'sedentary', label: 'Sedentary' },
  { value: 'light', label: 'Light activity' },
  { value: 'moderate', label: 'Moderate activity' },
  { value: 'active', label: 'Active lifestyle' },
  { value: 'intense', label: 'Intense training' },
]

export default function Calories() {
  const [age, setAge] = useState(28)
  const [gender, setGender] = useState('male')
  const [height, setHeight] = useState(175)
  const [weight, setWeight] = useState(72)
  const [activity, setActivity] = useState('moderate')

  const bmr = useMemo(() => calculateBMR({ age, gender, height, weight }), [age, gender, height, weight])
  const maintenance = useMemo(() => calculateCalories(bmr, activityMultiplier(activity)), [bmr, activity])
  const weightLoss = Math.max(maintenance - 500, 0)
  const muscleGain = Math.round(maintenance + 350)

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/70">Calorie Calculator</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-100">Find your daily calorie targets</h2>
            <p className="mt-2 text-slate-400">Use age, height, weight, and activity level to estimate your maintenance and goal calories.</p>
          </div>
          <div className="rounded-3xl border border-emerald-300/15 bg-slate-950/80 p-4 text-slate-100">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Activity level</p>
            <p className="mt-3 text-lg font-semibold text-slate-100">{activityOptions.find((option) => option.value === activity)?.label}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Age</span>
              <input
                type="number"
                min="16"
                max="80"
                value={age}
                onChange={(e) => setAge(Number(e.target.value))}
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/85 px-4 py-3 text-slate-100 outline-none"
              />
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Gender</span>
              <select
                value={gender}
                onChange={(e) => setGender(e.target.value)}
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/85 px-4 py-3 text-slate-100 outline-none"
              >
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Height (cm)</span>
              <input
                type="range"
                min="140"
                max="210"
                value={height}
                onChange={(e) => setHeight(Number(e.target.value))}
                className="w-full accent-emerald-400"
              />
              <p className="text-sm text-slate-400">{height} cm</p>
            </label>
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Weight (kg)</span>
              <input
                type="range"
                min="45"
                max="130"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full accent-emerald-400"
              />
              <p className="text-sm text-slate-400">{weight} kg</p>
            </label>
            <label className="space-y-2 sm:col-span-2">
              <span className="text-sm font-medium text-slate-200">Activity level</span>
              <select
                value={activity}
                onChange={(e) => setActivity(e.target.value)}
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/85 px-4 py-3 text-slate-100 outline-none"
              >
                {activityOptions.map((option) => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Maintenance</p>
            <p className="mt-3 text-4xl font-semibold text-slate-100">{Math.round(maintenance)} kcal</p>
            <p className="mt-2 text-sm text-slate-400">Estimated daily calories to maintain your current weight.</p>
          </div>
          <div className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Weight loss</p>
            <p className="mt-3 text-3xl font-semibold text-slate-100">{Math.round(weightLoss)} kcal</p>
            <p className="mt-2 text-sm text-slate-400">A moderate deficit for sustainable loss.</p>
          </div>
          <div className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Muscle gain</p>
            <p className="mt-3 text-3xl font-semibold text-slate-100">{Math.round(muscleGain)} kcal</p>
            <p className="mt-2 text-sm text-slate-400">A slight surplus to support growth.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
