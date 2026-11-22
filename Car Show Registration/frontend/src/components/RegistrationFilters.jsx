import { Search, SlidersHorizontal, X } from 'lucide-react';

const selectClass = 'h-10 w-full rounded-lg border border-slate-200 bg-white px-3 text-sm text-slate-700 outline-none transition focus:border-red-500 focus:ring-2 focus:ring-red-100 disabled:cursor-not-allowed disabled:bg-slate-50 sm:w-auto';

export default function RegistrationFilters({ search, onSearchChange, type, onTypeChange, status, onStatusChange, onClear, disabled = false }) {
  const hasFilters = search || type !== 'All' || status !== 'All';

  return (
    <div className="flex flex-col gap-3 border-t border-slate-100 px-4 py-4 md:flex-row md:items-center md:px-5">
      <label className="relative min-w-0 flex-1 md:max-w-sm">
        <Search aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={17} />
        <span className="sr-only">Search participant name</span>
        <input
          className="h-10 w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 text-sm text-slate-900 outline-none placeholder:text-slate-400 transition focus:border-red-500 focus:ring-2 focus:ring-red-100 disabled:cursor-not-allowed disabled:bg-slate-50"
          type="search"
          placeholder="Search participant name..."
          value={search}
          onChange={(event) => onSearchChange(event.target.value)}
          disabled={disabled}
        />
      </label>

      <div className="flex flex-col gap-3 sm:flex-row">
        <label className="relative flex-1 sm:flex-none">
          <span className="sr-only">Registration type</span>
          <SlidersHorizontal aria-hidden="true" className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={15} />
          <select className={`${selectClass} pl-9`} value={type} onChange={(event) => onTypeChange(event.target.value)} disabled={disabled}>
            <option value="All">All types</option>
            <option value="Exhibitor">Exhibitor</option>
            <option value="Competitor">Competitor</option>
            <option value="VIP">VIP</option>
          </select>
        </label>
        <label className="flex-1 sm:flex-none">
          <span className="sr-only">Registration status</span>
          <select className={selectClass} value={status} onChange={(event) => onStatusChange(event.target.value)} disabled={disabled}>
            <option value="All">All statuses</option>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="CheckedIn">Checked in</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </label>
      </div>

      <button
        className="inline-flex h-10 items-center justify-center gap-2 rounded-lg px-3 text-sm font-medium text-slate-600 transition hover:bg-slate-100 hover:text-slate-900 disabled:cursor-not-allowed disabled:opacity-50 md:ml-auto"
        type="button"
        onClick={onClear}
        disabled={disabled || !hasFilters}
      >
        <X aria-hidden="true" size={16} />
        Clear
      </button>
    </div>
  );
}
