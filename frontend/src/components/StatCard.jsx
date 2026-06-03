export default function StatCard({ label, value, meta, icon }) {
  return (
    <div className="rounded-3xl border border-slate-800/90 bg-slate-900/75 p-5 shadow-lg shadow-black/10">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500">{label}</p>
          <p className="mt-3 text-3xl font-semibold text-slate-100">{value}</p>
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/10 text-emerald-300">
          {icon}
        </div>
      </div>
      {meta ? <p className="mt-4 text-sm text-slate-400">{meta}</p> : null}
    </div>
  )
}
