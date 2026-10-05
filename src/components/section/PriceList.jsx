import { useState } from "react";
import { IconCheck } from "../ui/Icons";

const stations = [
  {
    id: "ps4-reguler",
    unit: "PS4",
    room: "REGULAR",
    title: "PS4 Reguler",
    subtitle: "PlayStation 4 Slim High-Speed",
    price: 5000,
    packageNote: "Paket 3 Jam: Rp 15.000",
    badge: null,
  },
  {
    id: "ps5-reguler",
    unit: "PS5",
    room: "REGULAR",
    title: "PS5 Reguler",
    subtitle: "PlayStation 5 Disc Edition High-Speed",
    price: 10000,
    packageNote: "Paket 3 Jam: Rp 30.000",
    badge: "Best Seller",
  },
  {
    id: "ps4-vip",
    unit: "PS4",
    room: "VIP",
    title: "PS4 VIP Room",
    subtitle: "PlayStation 4 VIP",
    price: 15000,
    packageNote: "Paket 3 Jam: Rp 40.000 • Hemat 5rb",
    badge: null,
  },
  {
    id: "ps5-vip",
    unit: "PS5",
    room: "VIP",
    title: "PS5 VIP Room",
    subtitle: "PlayStation 5 VIP",
    price: 25000,
    packageNote: "Paket 3 Jam: Rp 65.000 • Hemat 10rb",
    badge: "VIP Popular",
  },
];

const FEATURES = [
  {
    title: 'TV 50" Crystal 4K 120Hz',
    desc: "Ultra smooth 60–120FPS & Auto Low Latency",
  },
  {
    title: "DualSense Haptic Feedback",
    desc: "Adaptive trigger berasa nyata saat tanding",
  },
  {
    title: "80+ Judul Game Hype",
    desc: "FC 25, Black Myth Wukong & lainnya",
  },
  {
    title: "Fast-Charging di Meja",
    desc: "Type-C & Wi-Fi kencang gratis",
  },
];

const VIP_EXTRA = {
  title: "Sofa Empuk & AC Private",
  desc: "Bebas berisik, fokus mabar sepuasnya",
};

const TABS = [
  { id: "ALL", label: "Semua Paket" },
  { id: "REGULAR", label: "Regular Zone" },
  { id: "VIP", label: "VIP Room" },
];

export default function PriceList() {
  const [tab, setTab] = useState("ALL");

  const visible = stations.filter(
    (station) => tab === "ALL" || station.room === tab
  );

  return (
    <section
      id="harga"
      className="border-t border-line bg-ink-900/40 py-14 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <span className="inline-flex rounded-full border border-line bg-ink-950/70 px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.18em] text-yellow-400 sm:text-xs">
            Pilih Tempat
          </span>

          <h2 className="mt-4 font-display text-2xl font-bold leading-tight text-white sm:text-3xl lg:text-4xl">
            Pilih Tempat Unit Terbaikmu
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-xs leading-5 text-slate-400 sm:text-sm sm:leading-6">
            Bayar per jam atau ambil Paket Hemat Marathon biar mabar makin puas
            tanpa bikin kantong jebol.
          </p>
        </div>

        {/* Tabs */}
        <div className="mt-7 flex justify-center">
          <div className="grid w-full max-w-sm grid-cols-3 rounded-xl border border-line bg-ink-950/70 p-1 sm:flex sm:w-auto sm:max-w-none sm:rounded-full">
            {TABS.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setTab(item.id)}
                className={`rounded-lg px-3 py-2.5 text-[9px] font-semibold transition sm:rounded-full sm:px-5 sm:py-2 sm:text-xs ${
                  tab === item.id
                    ? "bg-yellow-400 text-ink-950"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-2 sm:gap-5 lg:mt-10 lg:grid-cols-4 lg:gap-6">
          {visible.map((station) => {
            const features =
              station.room === "VIP"
                ? [...FEATURES, VIP_EXTRA]
                : FEATURES;

            return (
              <article
                key={station.id}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-ink-900 p-5 transition duration-300 hover:-translate-y-1 hover:border-yellow-400/40 hover:shadow-xl hover:shadow-yellow-500/5 sm:p-6"
              >
                {/* Accent */}
                <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-yellow-400/70 to-transparent opacity-60" />

                {/* Badge */}
                {station.badge && (
                  <span className="absolute right-4 top-4 rounded-full bg-yellow-400 px-2.5 py-1 text-[8px] font-bold uppercase text-ink-950 sm:right-5 sm:text-[9px]">
                    {station.badge}
                  </span>
                )}

                {/* Header Card */}
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-yellow-400/10 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-wide text-yellow-400">
                    {station.room}
                  </span>

                  <span className="text-xs font-bold text-slate-500">
                    {station.unit}
                  </span>
                </div>

                <h3 className="mt-5 font-display text-lg font-bold uppercase text-white">
                  {station.title}
                </h3>

                <p className="mt-1 text-xs leading-5 text-slate-500">
                  {station.subtitle}
                </p>

                {/* Price */}
                <div className="mt-5">
                  <div className="flex items-baseline gap-1">
                    <span className="font-display text-2xl font-bold text-white">
                      Rp {station.price.toLocaleString("id-ID")}
                    </span>

                    <span className="text-xs text-slate-500">
                      / jam
                    </span>
                  </div>

                  <div className="mt-2 inline-flex max-w-full rounded-md bg-ink-950 px-2.5 py-1.5">
                    <span className="truncate text-[10px] text-slate-400">
                      {station.packageNote}
                    </span>
                  </div>
                </div>

                {/* Divider */}
                <div className="my-5 h-px bg-white/5" />

                {/* Features */}
                <ul className="flex-1 space-y-3">
                  {features.map((feature) => (
                    <li
                      key={feature.title}
                      className="flex items-start gap-2.5"
                    >
                      <IconCheck className="mt-0.5 h-4 w-4 shrink-0 text-yellow-400" />

                      <div className="min-w-0">
                        <p className="text-xs font-semibold text-slate-200">
                          {feature.title}
                        </p>

                        <p className="mt-0.5 text-[10px] leading-4 text-slate-500">
                          {feature.desc}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Game Link */}
                <a
                  href="#game"
                  className="mt-6 flex items-center justify-center rounded-lg border border-white/10 py-2.5 text-[10px] font-semibold text-slate-400 transition hover:border-yellow-400/30 hover:text-yellow-400"
                >
                  Cek Daftar Game
                  <span className="ml-1">→</span>
                </a>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
