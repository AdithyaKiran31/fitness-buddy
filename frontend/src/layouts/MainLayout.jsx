import { useState } from 'react'
import { NavLink, Outlet } from 'react-router-dom'
import Sidebar from '../components/Sidebar.jsx'

const navigation = [
  { label: 'Dashboard', path: '/', icon: '🏠' },
  { label: 'AI Fitness Coach', path: '/coach', icon: '🤖' },
  { label: 'BMI Calculator', path: '/bmi', icon: '📏' },
  { label: 'Calorie Calculator', path: '/calories', icon: '🔥' },
  { label: 'Workout Generator', path: '/workouts', icon: '🏋️' },
  { label: 'Water Tracker', path: '/water', icon: '💧' },
  { label: 'Streak Tracker', path: '/streaks', icon: '📈' },
  { label: 'Daily Challenges', path: '/challenges', icon: '🎯' },
]

export default function MainLayout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <div className="pointer-events-none fixed inset-x-0 top-0 h-72 bg-gradient-to-b from-emerald-500/10 to-transparent blur-3xl" />
      <div className="relative flex min-h-screen overflow-hidden">
        <Sidebar items={navigation} open={menuOpen} onClose={() => setMenuOpen(false)} />

        <div className="flex flex-1 flex-col lg:pl-80">
          <header className="sticky top-0 z-20 border-b border-slate-800/80 bg-slate-950/95 px-4 py-4 backdrop-blur-xl sm:px-6 lg:px-8">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-emerald-300/70">Fitness Buddy</p>
                <h1 className="text-2xl font-semibold text-slate-100 sm:text-3xl">Your fitness command center</h1>
              </div>
              <button
                type="button"
                className="inline-flex h-11 items-center justify-center rounded-2xl border border-slate-700/70 bg-slate-900 px-4 text-sm text-slate-100 transition hover:border-emerald-300/40 lg:hidden"
                onClick={() => setMenuOpen((open) => !open)}
              >
                Menu
              </button>
            </div>
          </header>

          <main className="flex-1 px-4 py-6 sm:px-6 lg:px-8">
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  )
}
