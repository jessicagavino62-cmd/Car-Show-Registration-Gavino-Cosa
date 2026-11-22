export default function KpiCard({ title, value, icon: Icon, tone }) {
  return (
    <article className="group min-w-0 rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md sm:p-5">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-500">{title}</p>
          <p className="mt-3 truncate text-2xl font-semibold tracking-tight text-slate-900 sm:text-[1.75rem]">{value}</p>
        </div>
        <span className={`inline-flex size-10 shrink-0 items-center justify-center rounded-lg ${tone}`}>
          <Icon aria-hidden="true" size={19} strokeWidth={1.8} />
        </span>
      </div>
    </article>
  );
}
