import {
  IconGamepad,
  IconLibrary,
  IconClock,
  IconVip,
  IconStar,
} from "../ui/Icons";

const stats = [
  { icon: IconGamepad, value: "PS4 & PS5", label: "Tersedia" },
  { icon: IconLibrary, value: "200+", label: "Game Pilihan" },
  { icon: IconClock, value: "24 Jam", label: "Buka 24 Jam" },
  { icon: IconVip, value: "VIP Room", label: "Private Area" },
  { icon: IconStar, value: "4,7", label: "Rating di Google Maps" },
];

export default function StatsBar() {
  return (
    <section className="relative overflow-hidden bg-ink-950">
      {/* Grid background */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#facc15_1px,transparent_1px),linear-gradient(to_bottom,#facc15_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-2/3 -translate-x-1/2 bg-yellow-400/10 blur-3xl" />

      {/* Top & bottom line */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-yellow-400 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-yellow-400/50 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-2.5 px-4 py-6 sm:gap-4 sm:px-6 sm:py-8 lg:grid-cols-5 lg:py-10">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <div
            key={label}
            className={`group relative flex min-w-0 items-center gap-3 rounded-sm border border-line bg-ink-900/70 p-3 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-500/15 sm:gap-4 sm:p-4 ${
              i === stats.length - 1 ? "col-span-2 lg:col-span-1" : ""
            }`}
          >
            {/* Corner bracket */}
            <span className="absolute left-0 top-0 h-2.5 w-2.5 border-l-2 border-t-2 border-yellow-400 sm:h-3 sm:w-3" />
            <span className="absolute bottom-0 right-0 h-2.5 w-2.5 border-b-2 border-r-2 border-yellow-400 sm:h-3 sm:w-3" />

            {/* Number */}
            <span className="absolute right-2 top-1.5 font-display text-[8px] font-bold text-yellow-400/40 sm:right-3 sm:top-2 sm:text-[10px]">
              0{i + 1}
            </span>

            {/* Icon */}
            <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400 ring-1 ring-yellow-400/30 transition duration-300 group-hover:bg-yellow-400 group-hover:text-ink-950 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.5)] sm:h-12 sm:w-12">
              <Icon className="h-4 w-4 sm:h-6 sm:w-6" />
            </div>

            {/* Text */}
            <div className="min-w-0">
              <p className="flex items-baseline font-display text-base font-bold leading-tight text-white transition-colors group-hover:text-yellow-300 sm:text-xl">
                <span className="truncate">{value}</span>

                {i === stats.length - 1 && (
                  <span className="ml-1 shrink-0 text-xs font-normal text-yellow-400/50 sm:text-sm">
                    /5
                  </span>
                )}
              </p>

              <p className="mt-1 truncate text-[9px] font-medium uppercase tracking-wide text-slate-400 sm:mt-1.5 sm:text-[11px] sm:tracking-wider">
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
