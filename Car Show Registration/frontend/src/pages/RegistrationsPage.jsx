import { useCallback, useEffect, useMemo, useState } from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { getRegistrations, getSummary } from '../api/sample-data.js';
import DashboardHeader from '../components/DashboardHeader.jsx';
import KpiCards from '../components/KpiCards.jsx';
import Pagination from '../components/Pagination.jsx';
import RegistrationFilters from '../components/RegistrationFilters.jsx';
import RegistrationTable from '../components/RegistrationTable.jsx';
import useDebounce from '../hooks/useDebounce.js';

const emptySummary = {
  totalRegistrations: 0,
  confirmed: 0,
  checkedIn: 0,
  pending: 0,
  cancelled: 0,
  totalFees: 0,
  totalPayments: 0,
  uncollectedPayments: 0,
};

export default function RegistrationsPage() {
  const [registrations, setRegistrations] = useState([]);
  const [summary, setSummary] = useState(emptySummary);
  const [search, setSearch] = useState('');
  const [appliedSearch, setAppliedSearch] = useState('');
  const [type, setType] = useState('All');
  const [status, setStatus] = useState('All');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [retryCount, setRetryCount] = useState(0);
  const commitSearch = useCallback((value) => {
    setAppliedSearch(value);
    setPage(1);
  }, []);
  const { schedule: scheduleSearch, cancel: cancelSearch } = useDebounce(commitSearch, 400);

  const request = useMemo(() => ({
    participantName: appliedSearch,
    type,
    status,
    page,
    pageSize,
  }), [appliedSearch, type, status, page, pageSize]);

  useEffect(() => {
    let current = true;
    Promise.resolve()
      .then(() => {
        if (!current) return null;
        setLoading(true);
        setError('');
        return Promise.all([getRegistrations(request), getSummary()]);
      })
      .then((payload) => {
        if (!current || !payload) return;
        const [result, nextSummary] = payload;
        setRegistrations(result.items);
        setTotalCount(result.totalCount);
        setTotalPages(result.totalPages);
        setSummary(nextSummary);
      })
      .catch((requestError) => {
        if (!current) return;
        setError(requestError.message || 'Cannot reach the API.');
      })
      .finally(() => {
        if (current) setLoading(false);
      });

    return () => { current = false; };
  }, [request, appliedSearch, page, retryCount]);

  const clearFilters = () => {
    cancelSearch();
    setSearch('');
    setAppliedSearch('');
    setType('All');
    setStatus('All');
    setPage(1);
  };

  const changeSearch = (value) => {
    setSearch(value);
    scheduleSearch(value);
  };

  const changeType = (nextType) => {
    setType(nextType);
    setPage(1);
  };

  const changeStatus = (nextStatus) => {
    setStatus(nextStatus);
    setPage(1);
  };

  const changePageSize = (nextSize) => {
    setPageSize(nextSize);
    setPage(1);
  };

  const hasFilters = Boolean(search || type !== 'All' || status !== 'All');

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <DashboardHeader />
      <main className="mx-auto max-w-[1440px] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
        <div className="mb-6 flex flex-col gap-1 sm:mb-7">
          <div className="flex flex-wrap items-center gap-2">
            <h1 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">Registration overview</h1>
            <span className="rounded-full border border-blue-100 bg-blue-50 px-2.5 py-1 text-xs font-medium text-blue-700">3-day event</span>
          </div>
          <p className="text-sm text-slate-500">Monitor participant registrations and payments for Car Show 2027.</p>
        </div>

        <KpiCards summary={summary} />

        <section className="mt-6 overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm" aria-labelledby="registrations-title">
          <div className="flex flex-col gap-3 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-5">
            <div>
              <h2 id="registrations-title" className="text-base font-semibold text-slate-900">Registrations</h2>
              <p className="mt-0.5 text-xs text-slate-500">Browse participant and vehicle details</p>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-600">
              <span className="size-1.5 rounded-full bg-emerald-500" aria-hidden="true" /> Sample data
            </span>
          </div>

          <RegistrationFilters
            search={search}
            onSearchChange={changeSearch}
            type={type}
            onTypeChange={changeType}
            status={status}
            onStatusChange={changeStatus}
            onClear={clearFilters}
            disabled={loading}
          />

          {error ? (
            <div className="flex min-h-64 flex-col items-center justify-center px-5 py-10 text-center" role="alert">
              <span className="flex size-12 items-center justify-center rounded-full bg-red-50 text-red-600"><AlertCircle aria-hidden="true" size={22} /></span>
              <h3 className="mt-4 font-semibold text-slate-900">Cannot reach the API.</h3>
              <p className="mt-1 max-w-sm text-sm text-slate-500">{error}</p>
              <button className="mt-4 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-offset-2" type="button" onClick={() => setRetryCount((count) => count + 1)}>
                <RefreshCw aria-hidden="true" size={15} /> Try again
              </button>
            </div>
          ) : (
            <>
              {loading && <p className="border-t border-slate-100 px-5 py-3 text-sm text-slate-500" role="status">Loading registrations...</p>}
              {!loading && registrations.length === 0 ? (
                <div className="flex min-h-60 flex-col items-center justify-center px-5 py-10 text-center">
                  <span className="flex size-12 items-center justify-center rounded-full bg-slate-100 text-slate-500"><AlertCircle aria-hidden="true" size={21} /></span>
                  <h3 className="mt-4 font-semibold text-slate-900">No registrations match your filters.</h3>
                  <p className="mt-1 text-sm text-slate-500">Try changing your search or registration filters.</p>
                  {hasFilters && <button className="mt-4 rounded-lg px-3 py-2 text-sm font-semibold text-blue-700 transition hover:bg-blue-50" type="button" onClick={clearFilters}>Clear filters</button>}
                </div>
              ) : (
                <RegistrationTable registrations={registrations} loading={loading} />
              )}
              <Pagination
                page={page}
                totalPages={totalPages}
                pageSize={pageSize}
                totalCount={totalCount}
                onPageChange={setPage}
                onPageSizeChange={changePageSize}
                disabled={loading}
              />
            </>
          )}
        </section>

        <p className="mt-5 text-center text-xs text-slate-400">AutoVista Events <span className="mx-1">•</span> Car Show 2027 <span className="mx-1">•</span> Sorsogon City Coliseum</p>
      </main>
    </div>
  );
}
