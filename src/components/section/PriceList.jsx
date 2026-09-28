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
    accent: "slate",
    cta: "Gas Book PS4",
  },
  {
    id: "ps5-reguler",
    unit: "PS5",
    room: "REGULAR",
    title: "PS5 Reguler",
    subtitle: "PlayStation 5 Disc Edition High-Speed",
    price: 10000,
    packageNote: "Paket 3 Jam: Rp 30.000",
    accent: "slate",
    cta: "Gas Book PS5",
  },
  {
    id: "ps4-vip",
    unit: "PS4",
    room: "VIP",
    title: "PS4 VIP Room",
    subtitle: "PlayStation 4 VIP",
    price: 15000,
    packageNote: "Paket 3 Jam: Rp 40.000 (Hemat 5rb)",
    accent: "slate",
    badge: "VIP",
    cta: "Book VIP ROOM",
  },
  {
    id: "ps5-vip",
    unit: "PS5",
    room: "VIP",
    title: "PS5 VIP ROOM",
    subtitle: "PlayStation 5 VIP",
    price: 25000,
    packageNote: "Paket 3 Jam: Rp 65.000 (Hemat 10rb)",
    accent: "slate",
    badge: "VIP Popular",
    cta: "Book VIP ROOM",
  },
];

const FEATURES = [
  { title: 'TV 50" Crystal 4K 120Hz', desc: "Ultra smooth 60–120FPS & Auto Low Latency" },
  { title: "DualSense Haptic Feedback Asli", desc: "Adaptive trigger berasa nyata saat tanding" },
  { title: "80+ Judul Game Hype", desc: "FC 25, Black Myth Wukong & lainnya, tanpa nunggu install" },
  { title: "Fast-Charging di Meja", desc: "Colokan Type-C & Wi-Fi kencang gratis" },
];

const VIP_EXTRA = { title: "Sofa Empuk & AC Private", desc: "Bebas berisik, fokus mabar sepuasnya" };

const TABS = [
  { id: "ALL", label: "Semua Paket" },
  { id: "REGULAR", label: "Regular Zone" },
  { id: "VIP", label: "VIP Room" },
];

const ACCENT = {
  slate: {
    border: "border-slate-500/40",
    glow: "shadow-slate-500/10",
    badge: "bg-slate-500/15 text-slate-300",
    button: "border border-line text-white hover:border-yellow-400/60",
  },
  orange: {
    border: "border-orange-400/50",
    glow: "shadow-orange-500/20",
    badge: "bg-orange-400/15 text-orange-300",
    button: "bg-linear-to-r from-orange-400 to-amber-500 text-ink-950 hover:opacity-90",
  },
  yellow: {
    border: "border-yellow-400/60",
    glow: "shadow-yellow-500/20",
    badge: "bg-yellow-400/15 text-yellow-300",
    button: "bg-linear-to-r from-amber-400 to-yellow-500 text-ink-950 hover:opacity-90",
  },
};

export default function PriceList() {
  const [tab, setTab] = useState("ALL");

  const visible = stations.filter((s) => tab === "ALL" || s.room === tab);

  return (
    <section id="harga" className="border-t border-line bg-ink-900/40 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="mx-auto mb-4 inline-flex items-center gap-2 rounded-full border border-line bg-ink-950/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400">
            📋 Pilih Battle Station Kamu
          </span>
          <h2 className="font-display text-3xl font-bold text-white sm:text-4xl">
            Tarif Rental Transparan{" "}
            <span className="bg-linear-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              No Hidden Fee
            </span>
          </h2>
          <p className="mt-3 text-sm text-slate-400">
            Bisa bayar per jam atau ambil Paket Hemat Marathon biar mabar makin puas tanpa bikin kantong jebol.
          </p>
        </div>

        <div className="mt-8 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-2 rounded-full border border-line bg-ink-950/60 p-1.5">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTab(t.id)}
                className={`rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wide transition ${
                  tab === t.id
                    ? "bg-linear-to-r from-amber-400 to-yellow-500 text-ink-950"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {visible.map((station) => {
            const a = ACCENT[station.accent];
            const features = station.room === "VIP" ? [...FEATURES, VIP_EXTRA] : FEATURES;
            return (
              <div
                key={station.id}
                className={`relative flex flex-col rounded-2xl border bg-ink-900 p-5 shadow-xl ${a.border} ${a.glow}`}
              >
                {station.badge && (
                  <span className="absolute -top-3 right-5 rounded-full bg-linear-to-r from-amber-400 to-yellow-500 px-3 py-1 text-[10px] font-bold uppercase text-ink-950">
                    {station.badge}
                  </span>
                )}

                <div className="mb-3 flex items-center justify-between">
                  <span
                    className={`inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10px] font-bold uppercase ${a.badge}`}
                  >
                    ⚡ Next-Gen 120 FPS
                  </span>
                  <span className="text-xs font-bold text-slate-500">{station.unit}</span>
                </div>

                <h3 className="font-display text-lg font-bold uppercase text-white">{station.title}</h3>
                <p className="mt-1 text-xs text-slate-500">{station.subtitle}</p>

                <p className="mt-4">
                  <span className="font-display text-2xl font-bold text-white">
                    Rp {station.price.toLocaleString("id-ID")}
                  </span>
                  <span className="ml-1 text-sm text-slate-500">/ Jam</span>
                </p>
                <span className="mt-1 inline-flex w-fit rounded-full bg-ink-950/70 px-2.5 py-1 text-[10px] font-medium text-slate-300">
                  {station.packageNote}
                </span>

                <ul className="mt-5 flex-1 space-y-2.5 text-xs text-slate-400">
                  {features.map((f) => (
                    <li key={f.title} className="flex items-start gap-2">
                      <IconCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-yellow-400" />
                      <span>
                        <span className="font-semibold text-slate-200">{f.title}</span>
                        <br />
                        {f.desc}
                      </span>
                    </li>
                  ))}
                </ul>

                <a href="#game" className="mt-6 text-center text-[11px] text-slate-500 hover:text-slate-300">
                  Cek Daftar Game Update ⌄
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
