import { NavLink } from 'react-router-dom'

export default function Sidebar({ items, open, onClose }) {
  return (
    <aside className={`fixed inset-y-0 left-0 z-30 w-80 border-r border-slate-800/80 bg-slate-950/95 backdrop-blur-xl transition-transform duration-300 lg:relative lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'} lg:block`}>
      <div className="flex h-full flex-col px-4 py-6 sm:px-6">
        <div className="mb-8 flex items-center gap-3 rounded-3xl border border-emerald-300/10 bg-slate-900/80 px-4 py-4 shadow-lg shadow-black/20">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-xl text-emerald-300">
            💪
          </div>
          <div>
            <p className="text-sm font-semibold text-slate-100">Fitness Buddy</p>
            <p className="text-xs text-slate-500">All-in-one health hub</p>
          </div>
        </div>

        <nav className="space-y-1">
          {items.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === '/'}
              className={({ isActive }) =>
                `group flex items-center gap-3 rounded-3xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? 'bg-emerald-500/10 text-emerald-200 ring-1 ring-emerald-300/20'
                    : 'text-slate-400 hover:bg-slate-900/80 hover:text-slate-100'
                }`
              }
              onClick={onClose}
            >
              <span className="text-lg">{item.icon}</span>
              <span>{item.label}</span>
            </NavLink>
          ))}
        </nav>

        <div className="mt-auto rounded-3xl border border-slate-800/90 bg-slate-900/80 p-4 text-sm text-slate-400">
          <p className="font-semibold text-slate-100">Pro tip</p>
          <p className="mt-2 text-sm leading-6">
            Use the AI coach for fast workout ideas and the dashboard to review trend cards at a glance.
          </p>
        </div>
      </div>
    </aside>
  )
}
