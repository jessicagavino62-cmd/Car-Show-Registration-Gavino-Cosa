import { CarFront, UserRound } from 'lucide-react';
import PaymentBadge from './PaymentBadge.jsx';
import StatusBadge from './StatusBadge.jsx';

const peso = new Intl.NumberFormat('en-PH', { style: 'currency', currency: 'PHP', minimumFractionDigits: 2 });
const registrationDate = new Intl.DateTimeFormat('en-US', {
  month: 'short', day: '2-digit', year: 'numeric', hour: '2-digit', minute: '2-digit', hour12: true, timeZone: 'UTC',
});

export default function RegistrationTable({ registrations, loading = false }) {
  return (
    <div className="relative overflow-x-auto">
      <table className="w-full min-w-[980px] border-collapse text-left text-sm">
        <thead className="bg-slate-50 text-xs font-semibold uppercase tracking-wide text-slate-500">
          <tr>
            <th className="whitespace-nowrap px-5 py-3.5">Reg. No.</th>
            <th className="whitespace-nowrap px-5 py-3.5">Date</th>
            <th className="px-5 py-3.5">Participant</th>
            <th className="px-5 py-3.5">Car</th>
            <th className="px-5 py-3.5">Type</th>
            <th className="px-5 py-3.5">Status</th>
            <th className="whitespace-nowrap px-5 py-3.5 text-right">Fee / Paid</th>
            <th className="px-5 py-3.5">Payment</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-100">
          {loading ? Array.from({ length: 5 }, (_, index) => (
            <tr key={`skeleton-${index}`} aria-hidden="true">
              {Array.from({ length: 8 }, (_, cell) => <td className="px-5 py-5" key={cell}><span className="block h-4 animate-pulse rounded bg-slate-100" /></td>)}
            </tr>
          )) : registrations.map((registration) => (
            <tr className="transition-colors hover:bg-slate-50/80" key={registration.id}>
              <td className="whitespace-nowrap px-5 py-4 font-semibold text-blue-700">{registration.registrationNumber}</td>
              <td className="whitespace-nowrap px-5 py-4 text-slate-600">{registrationDate.format(new Date(registration.registrationDate))}</td>
              <td className="px-5 py-4">
                <div className="flex min-w-40 items-center gap-3">
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-full bg-slate-100 text-slate-500"><UserRound aria-hidden="true" size={16} /></span>
                  <span className="min-w-0"><span className="block truncate font-medium text-slate-900">{registration.participantName}</span><span className="block truncate text-xs text-slate-500">{registration.contactNumber || registration.email}</span></span>
                </div>
              </td>
              <td className="px-5 py-4">
                <span className="flex min-w-40 items-center gap-2"><CarFront className="shrink-0 text-slate-400" aria-hidden="true" size={16} /><span className="truncate font-medium text-slate-800">{registration.carMakeModel}</span></span>
                <span className="ml-6 mt-1 block text-xs text-slate-500">{registration.plateNumber}</span>
              </td>
              <td className="whitespace-nowrap px-5 py-4 text-slate-700">{registration.registrationType}</td>
              <td className="whitespace-nowrap px-5 py-4"><StatusBadge status={registration.status} /></td>
              <td className="whitespace-nowrap px-5 py-4 text-right font-medium tabular-nums text-slate-700">{peso.format(registration.registrationFee)} <span className="text-slate-400">/</span> {peso.format(registration.amountPaid)}</td>
              <td className="whitespace-nowrap px-5 py-4"><PaymentBadge status={registration.paymentStatus} /></td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
