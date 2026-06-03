import { Link } from 'react-router-dom'
import StatCard from '../components/StatCard.jsx'
import useRandomItem from '../hooks/useRandomItem.js'

const stats = [
  { label: 'Workouts', value: '28', meta: 'Completed this month', icon: '🔥' },
  { label: 'Calories', value: '1.9k', meta: 'Avg burned per session', icon: '🥗' },
  { label: 'Streak', value: '12', meta: 'Days in a row', icon: '📈' },
]

const recentActivity = [
  { title: 'Upper body strength', details: '45 min · 8 exercises' },
  { title: 'Cardio blast', details: '30 min · interval training' },
  { title: 'Healthy meal prep', details: 'Protein bowl + veggies' },
]

const moduleCards = [
  { title: 'AI Fitness Coach', path: '/coach', description: 'Talk to your AI trainer for workouts, nutrition and motivation.', emoji: '🤖' },
  { title: 'BMI Calculator', path: '/bmi', description: 'Check your BMI and health category quickly.', emoji: '📏' },
  { title: 'Calorie Calculator', path: '/calories', description: 'Estimate daily maintenance and calorie goals.', emoji: '🔥' },
  { title: 'Workout Generator', path: '/workouts', description: 'Create workout plans for your goals.', emoji: '🏋️' },
  { title: 'Water Tracker', path: '/water', description: 'Track hydration and hit your goal.', emoji: '💧' },
  { title: 'Daily Challenges', path: '/challenges', description: 'Stay motivated with daily fitness challenges.', emoji: '🎯' },
]

export default function Dashboard() {
  const welcome = useRandomItem(['Great to see you back!', 'Ready to crush today?', 'Let’s keep your momentum strong.'])

  return (
    <div className="space-y-8">
      <section className="rounded-3xl border border-slate-800/90 bg-slate-900/70 p-6 shadow-2xl shadow-black/20">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-emerald-300/70">Dashboard</p>
            <h2 className="mt-3 text-3xl font-semibold text-slate-100">Welcome back, Fitness Buddy</h2>
            <p className="mt-2 max-w-2xl text-slate-400">{welcome} Your dashboard gives you a quick overview and fast access to every fitness tool.</p>
          </div>
          <div className="rounded-3xl border border-emerald-300/15 bg-slate-950/80 p-5 text-slate-200 shadow-inner shadow-black/15">
            <p className="text-sm uppercase tracking-[0.3em] text-slate-400">Profile</p>
            <p className="mt-3 text-2xl font-semibold text-slate-100">Avery</p>
            <p className="mt-1 text-sm text-slate-400">Fitness Enthusiast · 28 years</p>
            <div className="mt-4 grid gap-2 text-sm text-slate-400">
              <p>Goal: Strength + lean muscle</p>
              <p>Plan: 5 workouts/week</p>
              <p>Hydration target: 2.5L</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <StatCard key={stat.label} label={stat.label} value={stat.value} meta={stat.meta} icon={stat.icon} />
        ))}
      </section>

      <section className="grid gap-6 xl:grid-cols-[1.5fr_1fr]">
        <div className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
          <div className="mb-5 flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Recent activity</p>
              <h3 className="mt-2 text-xl font-semibold text-slate-100">Recent fitness activity</h3>
            </div>
          </div>
          <div className="space-y-4">
            {recentActivity.map((item) => (
              <div key={item.title} className="rounded-3xl border border-slate-800/80 bg-slate-950/85 p-4">
                <h4 className="font-semibold text-slate-100">{item.title}</h4>
                <p className="mt-1 text-sm text-slate-400">{item.details}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-6 shadow-lg shadow-black/10">
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">Modules</p>
          <div className="mt-5 space-y-4">
            {moduleCards.map((card) => (
              <Link
                key={card.path}
                to={card.path}
                className="group flex items-center justify-between rounded-3xl border border-slate-800/80 bg-slate-950/85 p-4 transition hover:border-emerald-300/40 hover:bg-slate-900"
              >
                <div>
                  <p className="text-lg font-semibold text-slate-100">{card.title}</p>
                  <p className="mt-1 text-sm text-slate-400">{card.description}</p>
                </div>
                <span className="text-2xl">{card.emoji}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
