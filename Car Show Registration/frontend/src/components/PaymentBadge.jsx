const paymentStyles = {
  Unpaid: 'border-red-200 bg-red-50 text-red-800',
  Partial: 'border-amber-200 bg-amber-50 text-amber-800',
  Paid: 'border-emerald-200 bg-emerald-50 text-emerald-800',
};

export default function PaymentBadge({ status }) {
  return (
    <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${paymentStyles[status] ?? 'border-slate-200 bg-slate-50 text-slate-700'}`}>
      <span className="mr-1.5 size-1.5 rounded-full bg-current" aria-hidden="true" />
      {status}
    </span>
  );
}
