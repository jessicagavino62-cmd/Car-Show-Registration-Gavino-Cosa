import carShowLogo from '../assets/Car Show Logo.png';

export default function DashboardHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <div className="mx-auto flex min-h-[76px] max-w-[1440px] items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex min-w-0 items-center gap-3">
          <img className="size-14 shrink-0" src={carShowLogo} alt="Car Show" />
          <div className="min-w-0">
            <p className="truncate text-base font-bold tracking-tight text-slate-900 sm:text-lg">Car Show <span className="text-red-700">2027</span></p>
            <p className="truncate text-xs text-slate-500 sm:text-sm">AutoVista Events <span className="mx-1 text-slate-300">•</span> Sorsogon City Coliseum</p>
          </div>
        </div>

        <div className="flex shrink-0 items-center gap-3 border-l border-slate-200 pl-4 sm:pl-5">
          <span className="hidden text-right sm:block">
            <span className="block text-sm font-semibold text-slate-800">Event Admin</span>
            <span className="block text-xs text-slate-500">Registration desk</span>
          </span>
          <span className="flex size-10 items-center justify-center rounded-full border border-red-100 bg-red-50 text-sm font-semibold text-red-700" aria-label="Event administrator">
            AV
          </span>
        </div>
      </div>
    </header>
  );
}
