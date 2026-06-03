import { useMemo, useState } from 'react'
import { calculateBMI, getBMICategory } from '../utils/fitnessCalculators.js'

export default function BMI() {
  const [height, setHeight] = useState(170)
  const [weight, setWeight] = useState(70)
  const [age, setAge] = useState(28)
  const [units, setUnits] = useState('metric')

  const displayedHeight = units === 'metric' ? height : height
  const displayedWeight = units === 'metric' ? weight : weight

  const bmi = useMemo(() => calculateBMI(displayedHeight, displayedWeight), [displayedHeight, displayedWeight])
  const { category, advice } = getBMICategory(bmi)

  return (
    <div className="space-y-6">
      <section className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/70">BMI Calculator</p>
            <h2 className="mt-2 text-3xl font-semibold text-slate-100">Understand your body composition</h2>
            <p className="mt-2 text-slate-400">Enter your height and weight to see your BMI and health guidance.</p>
          </div>
          <div className="rounded-3xl border border-emerald-300/15 bg-slate-950/80 p-4 text-slate-100">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Current BMI</p>
            <p className="mt-3 text-4xl font-semibold text-slate-100">{bmi.toFixed(1)}</p>
            <p className="mt-1 text-sm text-slate-400">Category: {category}</p>
          </div>
        </div>
      </section>

      <section className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
          <div className="grid gap-4 sm:grid-cols-2">
            <label className="space-y-2">
              <span className="text-sm font-medium text-slate-200">Height (cm)</span>
              <input
                type="range"
                min="120"
                max="220"
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
                min="40"
                max="140"
                value={weight}
                onChange={(e) => setWeight(Number(e.target.value))}
                className="w-full accent-emerald-400"
              />
              <p className="text-sm text-slate-400">{weight} kg</p>
            </label>
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
              <span className="text-sm font-medium text-slate-200">Units</span>
              <select
                value={units}
                onChange={(e) => setUnits(e.target.value)}
                className="w-full rounded-3xl border border-slate-700 bg-slate-950/85 px-4 py-3 text-slate-100 outline-none"
              >
                <option value="metric">Metric</option>
              </select>
            </label>
          </div>
        </div>

        <div className="space-y-4">
          <div className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">BMI Category</p>
            <p className="mt-4 text-2xl font-semibold text-slate-100">{category}</p>
            <p className="mt-3 text-slate-400">{advice}</p>
          </div>
          <div className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Health insight</p>
            <div className="mt-4 grid gap-3">
              <div className="rounded-3xl bg-slate-950/80 p-4">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Normal BMI</p>
                <p className="mt-2 text-xl font-semibold text-slate-100">18.5 - 24.9</p>
              </div>
              <div className="rounded-3xl bg-slate-950/80 p-4">
                <p className="text-sm uppercase tracking-[0.24em] text-slate-400">Underweight</p>
                <p className="mt-2 text-xl font-semibold text-slate-100">&lt; 18.5</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
