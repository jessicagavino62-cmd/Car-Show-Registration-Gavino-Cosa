import { BadgeCheck, CircleDollarSign, ClipboardList, HandCoins, ScanLine } from 'lucide-react';
import KpiCard from './KpiCard.jsx';

const peso = new Intl.NumberFormat('en-PH', {
  style: 'currency',
  currency: 'PHP',
  minimumFractionDigits: 2,
});

const wholeNumber = new Intl.NumberFormat('en-PH');

export default function KpiCards({ summary }) {
  const cards = [
    { title: 'Total Registrations', value: wholeNumber.format(summary.totalRegistrations ?? 0), icon: ClipboardList, tone: 'bg-red-50 text-red-700' },
    { title: 'Total Payments', value: peso.format(summary.totalPayments ?? 0), icon: CircleDollarSign, tone: 'bg-emerald-50 text-emerald-700' },
    { title: 'Uncollected Payments', value: peso.format(summary.uncollectedPayments ?? 0), icon: HandCoins, tone: 'bg-amber-50 text-amber-700' },
    { title: 'Confirmed', value: wholeNumber.format(summary.confirmed ?? 0), icon: BadgeCheck, tone: 'bg-green-50 text-green-700' },
    { title: 'Checked In', value: wholeNumber.format(summary.checkedIn ?? 0), icon: ScanLine, tone: 'bg-sky-50 text-sky-700' },
  ];

  return (
    <section aria-label="Registration overview" className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
      {cards.map((card) => <KpiCard key={card.title} {...card} />)}
    </section>
  );
}
