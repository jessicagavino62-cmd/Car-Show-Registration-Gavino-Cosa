import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Pagination({ page, totalPages, pageSize, totalCount, onPageChange, onPageSizeChange, disabled = false }) {
  const firstPage = Math.max(1, Math.min(page - 2, totalPages - 4));
  const pages = Array.from({ length: Math.min(totalPages, 5) }, (_, index) => firstPage + index);
  const start = totalCount === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalCount);
  const buttonBase = 'inline-flex size-9 items-center justify-center rounded-lg border text-sm transition disabled:cursor-not-allowed disabled:opacity-40';

  return (
    <div className="flex flex-col gap-4 border-t border-slate-100 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
      <div className="flex items-center gap-1.5" aria-label="Registration pages">
        <button className={`${buttonBase} border-slate-200 bg-white text-slate-600 hover:bg-slate-50`} type="button" aria-label="Previous page" onClick={() => onPageChange(page - 1)} disabled={disabled || page <= 1}>
          <ChevronLeft aria-hidden="true" size={17} />
        </button>
        {pages.map((pageNumber) => (
          <button
            className={`${buttonBase} ${pageNumber === page ? 'border-blue-600 bg-blue-600 font-semibold text-white shadow-sm' : 'border-transparent bg-white text-slate-600 hover:border-slate-200 hover:bg-slate-50'}`}
            type="button"
            key={pageNumber}
            aria-label={`Page ${pageNumber}`}
            aria-current={pageNumber === page ? 'page' : undefined}
            onClick={() => onPageChange(pageNumber)}
            disabled={disabled}
          >
            {pageNumber}
          </button>
        ))}
        <button className={`${buttonBase} border-slate-200 bg-white text-slate-600 hover:bg-slate-50`} type="button" aria-label="Next page" onClick={() => onPageChange(page + 1)} disabled={disabled || page >= totalPages}>
          <ChevronRight aria-hidden="true" size={17} />
        </button>
      </div>

      <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-2 text-sm text-slate-500 sm:justify-end">
        <span>Showing <span className="font-medium text-slate-700">{start}–{end}</span> of <span className="font-medium text-slate-700">{totalCount}</span></span>
        <label className="flex items-center gap-2">
          <span>Rows per page</span>
          <select className="h-9 rounded-lg border border-slate-200 bg-white px-2 text-sm text-slate-700 outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100 disabled:cursor-not-allowed" value={pageSize} onChange={(event) => onPageSizeChange(Number(event.target.value))} disabled={disabled}>
            {[5, 10, 20].map((size) => <option value={size} key={size}>{size}</option>)}
          </select>
        </label>
      </div>
    </div>
  );
}
