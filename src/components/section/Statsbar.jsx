import { IconGamepad, IconLibrary, IconClock, IconVip, IconStar } from "../ui/Icons";

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
      {/* Tekstur grid tipis ala layar HUD game */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.07] [background-image:linear-gradient(to_right,#facc15_1px,transparent_1px),linear-gradient(to_bottom,#facc15_1px,transparent_1px)] [background-size:40px_40px]" />

      {/* Glow kuning lembut di tengah atas */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-32 w-2/3 -translate-x-1/2 bg-yellow-400/10 blur-3xl" />

      {/* Garis neon atas & bawah */}
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-yellow-400 to-transparent" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-yellow-400/50 to-transparent" />

      <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-4 px-6 py-10 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map(({ icon: Icon, value, label }, i) => (
          <div
            key={label}
            className={`group relative flex items-center gap-4 rounded-sm border border-line bg-ink-900/70 p-4 backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-500/15 ${
              i === stats.length - 1 ? "col-span-2 sm:col-span-1" : ""
            }`}
          >
            {/* Corner bracket ala HUD */}
            <span className="absolute left-0 top-0 h-3 w-3 border-l-2 border-t-2 border-yellow-400" />
            <span className="absolute bottom-0 right-0 h-3 w-3 border-b-2 border-r-2 border-yellow-400" />

            {/* Nomor slot */}
            <span className="absolute right-3 top-2 font-display text-[10px] font-bold text-yellow-400/40">
              0{i + 1}
            </span>

            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-yellow-400/10 text-yellow-400 ring-1 ring-yellow-400/30 transition duration-300 group-hover:bg-yellow-400 group-hover:text-ink-950 group-hover:shadow-[0_0_20px_rgba(250,204,21,0.5)]">
              <Icon className="h-6 w-6" />
            </div>

            <div className="min-w-0">
              <p className="font-display text-xl font-bold leading-none text-white transition-colors group-hover:text-yellow-300">
                {value}
              </p>
              <p className="mt-1.5 text-[11px] font-medium uppercase tracking-wider text-slate-400">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
