import { useState } from "react";
import BookingForm from "../form/BookingForm";
import {
  Gamepad2,
  Monitor,
  Headphones,
  Sofa,
  Snowflake,
  Zap,
  Lock,
  Clock,
  Info,
  Trophy,
  Hourglass,
  MapPin,
} from "lucide-react";

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

const CATEGORIES = {
  vip: {
    label: "VIP Gaming Arena",
    subtitle:
      "Private Room, Kursi Gaming Ergonomis, TV 55\"-65\" 4K 144Hz, Sound System Premium.",
    tarifNote: "TARIF VIP",
    units: [
      {
        id: "V-01",
        console: "PS5 DISC",
        status: "ready",
        specs: [
          { icon: Monitor, text: "TV 65\" OLED 4K 144Hz" },
          { icon: Sofa, text: "Kursi Gaming Ergonomis + RGB" },
          { icon: Snowflake, text: "Ruangan Full AC Private" },
        ],
        tarif: "Rp 55.000",
        cta: "PILIH MEJA INI",
      },
      {
        id: "V-02",
        console: "PS5 PRO",
        status: "in-game",
        game: {
          name: "EA Sports FC 25",
          mode: "2 VS 2",
          remaining: "42 Menit",
          progress: 55,
          note: "Estimasi beres: 19.20 WIB",
        },
        cta: "BOOKING SETELAH BERES",
      },
      {
        id: "V-03",
        console: "PS5 DISC",
        status: "ready",
        specs: [
          { icon: Monitor, text: "TV 55\" QLED 4K 120Hz" },
          { icon: Headphones, text: "Headset Wireless Premium" },
          { icon: MapPin, text: "Private Room Lantai 2" },
        ],
        tarif: "Rp 50.000",
        cta: "PILIH MEJA INI",
      },
      {
        id: "V-04",
        console: "PS5 DISC",
        status: "reserved",
        reservedBy: "Bima & Squad",
        checkIn: "20.00 WIB",
        holdNote: "Hold 15 menit dari jam booking jika belum hadir.",
      },
    ],
  },
  regular: {
    label: "Regular Gaming Arena",
    subtitle:
      "Open Space Lounge, Sofa Recliner Empuk, TV 43\"-50\" 4K 120Hz, Stik DualSense/DualShock Sanitasi.",
    tarifNote: "TARIF MABAR",
    units: [
      {
        id: "R-01",
        console: "PS5 DISC",
        status: "ready",
        specs: [
          { icon: Monitor, text: "TV 50\" Crystal 4K 120Hz" },
          { icon: Gamepad2, text: "2x DualSense Haptic (No-Drift)" },
          { icon: Sofa, text: "Lazy Boy Single Sofa + Fast Charger" },
        ],
        tarif: "Rp 25.000",
        cta: "PILIH MEJA INI",
      },
      {
        id: "R-02",
        console: "PS5 DISC",
        status: "in-game",
        game: {
          name: "EA Sports FC 25",
          mode: "2 VS 2",
          remaining: "38 Menit",
          progress: 40,
          note: "Estimasi beres: 17.45 WIB",
        },
        cta: "BOOKING SETELAH BERES",
      },
      {
        id: "R-03",
        console: "PS4 SLIM",
        status: "ready",
        specs: [
          { icon: Monitor, text: "43\" Full HD HDR Screen" },
          { icon: Gamepad2, text: "2x DualShock 4 Original" },
          { icon: Sofa, text: "Paket Hemat Pelajar & Santai" },
        ],
        tarif: "Rp 15.000",
        tarifNote: "TARIF MABAR HEMAT",
        cta: "PILIH MEJA INI",
      },
      {
        id: "R-04",
        console: "PS5 DISC",
        status: "in-game",
        solo: true,
        game: {
          name: "Black Myth: Wukong",
          mode: "SOLO RPG",
          remaining: "1 Jam 15 Menit",
          progress: 25,
          note: "Paket Marathon 3 Jam",
        },
        cta: "LIHAT DETAIL UNIT",
        ctaIcon: Info,
      },
      {
        id: "R-05",
        console: "PS5 DISC",
        status: "reserved",
        reservedBy: "Raka A. & Squad",
        checkIn: "17.30 WIB",
        holdNote: "Hold 15 menit dari jam booking jika belum hadir.",
      },
      {
        id: "R-06",
        console: "PS5 DISC",
        status: "ready",
        specs: [
          { icon: Monitor, text: "TV 50\" Crystal 4K 120Hz" },
          { icon: Gamepad2, text: "DualSense 100% Anti-Drift (New)" },
          { icon: Snowflake, text: "Posisi Sejuk Tepat Depan AC 18°C" },
        ],
        tarif: "Rp 25.000",
        cta: "PILIH MEJA INI",
      },
      {
        id: "R-07",
        console: "PS4 SLIM",
        status: "in-game",
        game: {
          name: "GTA V Free Roam & Heist",
          mode: "OPEN WORLD",
          remaining: "18 Menit",
          progress: 88,
          note: "Sebentar lagi siap diambil!",
          noteGood: true,
        },
        cta: "WAITLIST MEJA INI",
        ctaIcon: Hourglass,
        waitlist: true,
      },
      {
        id: "R-08",
        console: "PS5 DISC",
        status: "ready",
        specs: [
          { icon: Monitor, text: "50\" 4K HDR High Refresh" },
          { icon: Headphones, text: "Headset Pulse 3D Wireless Available" },
          { icon: MapPin, text: "Dekat Warmindo Bar & Kasir" },
        ],
        tarif: "Rp 25.000",
        cta: "PILIH MEJA INI",
      },
    ],
  },
};

// ---------------------------------------------------------------------------
// Status accents — status is communicated through color + texture, not just a badge
// ---------------------------------------------------------------------------

const STATUS_STYLES = {
  ready: "bg-emerald-500/15 text-emerald-400 ring-1 ring-emerald-500/30",
  "in-game": "bg-rose-500/15 text-rose-400 ring-1 ring-rose-500/30",
  reserved: "bg-yellow-400/15 text-yellow-400 ring-1 ring-yellow-400/30",
};

const STATUS_LABEL = {
  ready: "READY",
  "in-game": "IN-GAME",
  reserved: "RESERVED",
};

// top-edge accent + ambient corner glow per status, so a card reads as
// "alive" (ready/in-game) or "locked" (reserved) before you even read it
const STATUS_ACCENT = {
  ready: { border: "border-t-emerald-400/70", glow: "bg-emerald-400/20" },
  "in-game": { border: "border-t-rose-500/70", glow: "bg-rose-500/20" },
  reserved: { border: "border-t-neutral-700", glow: null },
};

function StatusBadge({ status }) {
  return (
    <span
      id="unit-list"
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[11px] font-semibold tracking-wide ${STATUS_STYLES[status]}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-current" />
      {STATUS_LABEL[status]}
    </span>
  );
}

// Small pulsing dot used to mark something as happening live right now
function LiveDot({ className = "bg-rose-500" }) {
  return (
    <span className="relative flex h-1.5 w-1.5">
      <span className={`absolute inline-flex h-full w-full animate-ping rounded-full opacity-75 ${className}`} />
      <span className={`relative inline-flex h-1.5 w-1.5 rounded-full ${className}`} />
    </span>
  );
}

// ---------------------------------------------------------------------------
// Unit card
// ---------------------------------------------------------------------------

function UnitCard({ unit, onBook }) {
  const isReady = unit.status === "ready";
  const isInGame = unit.status === "in-game";
  const isReserved = unit.status === "reserved";
  const accent = STATUS_ACCENT[unit.status];
  const segments = 12;
  const filledSegments = isInGame ? Math.round((unit.game.progress / 100) * segments) : 0;

  return (
    <div
      className={`relative flex flex-col overflow-hidden rounded-2xl border border-t-2 bg-neutral-900/60 p-5 transition-colors ${accent.border} ${
        isReserved ? "border-neutral-800/80 opacity-90" : "border-neutral-800 hover:border-neutral-700"
      }`}
    >
      {/* ambient glow — only on "alive" units, never on a locked/reserved one */}
      {accent.glow && (
        <div
          aria-hidden="true"
          className={`pointer-events-none absolute -right-8 -top-8 h-28 w-28 rounded-full blur-2xl ${accent.glow}`}
        />
      )}
      {/* watermark lock — reserved reads as physically locked, not just labeled */}
      {isReserved && (
        <Lock aria-hidden="true" className="pointer-events-none absolute -bottom-3 -right-3 h-20 w-20 text-neutral-800/50" />
      )}

      <div className="relative z-10 flex flex-1 flex-col">
        {/* Header row */}
        <div className="mb-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="rounded-md bg-yellow-400 px-2 py-0.5 text-xs font-bold text-neutral-950">
              {unit.id}
            </span>
            <span className="text-xs font-medium text-neutral-400">{unit.console}</span>
          </div>
          <StatusBadge status={unit.status} />
        </div>

        {/* Body: three variants */}
        {isReady && (
          <ul className="mb-4 flex flex-1 flex-col gap-2.5">
            {unit.specs.map(({ icon: Icon, text }, i) => (
              <li key={i} className="flex items-center gap-2.5 text-sm text-neutral-300">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-neutral-950/80 text-neutral-500">
                  <Icon className="h-3.5 w-3.5" />
                </span>
                {text}
              </li>
            ))}
          </ul>
        )}

        {isInGame && (
          <div className="mb-4 flex-1 rounded-xl bg-neutral-950/70 p-3">
            <div className="mb-2.5 flex items-center gap-1.5 text-xs">
              <LiveDot />
              <span className="truncate font-medium text-neutral-300">{unit.game.name}</span>
              <span className="text-neutral-600">· {unit.game.mode}</span>
            </div>

            <div className="mb-1.5 flex items-baseline justify-between">
              <span className="text-[10px] font-medium uppercase tracking-wide text-neutral-500">Sisa Waktu</span>
              <span className="font-mono text-lg font-bold tabular-nums text-white">{unit.game.remaining}</span>
            </div>

            {/* segmented bar reads like an arcade life-bar rather than a generic progress fill */}
            <div className="grid grid-cols-12 gap-0.5">
              {Array.from({ length: segments }).map((_, i) => (
                <div
                  key={i}
                  className={`h-1.5 rounded-sm ${
                    i < filledSegments ? "bg-linear-to-r from-yellow-400 to-rose-500" : "bg-neutral-800"
                  }`}
                />
              ))}
            </div>

            <p
              className={`mt-2.5 text-xs ${
                unit.game.noteGood ? "font-medium text-emerald-400" : "text-neutral-600"
              }`}
            >
              {unit.game.note}
            </p>
          </div>
        )}

        {isReserved && (
          <div className="mb-4 flex-1 rounded-xl bg-neutral-950/70 p-3">
            <p className="mb-2 text-[11px] tracking-wide text-neutral-500">TELAH DIBOOKING OLEH:</p>
            <p className="mb-3 text-sm font-semibold text-white">{unit.reservedBy}</p>
            <div className="flex items-center gap-1.5 text-xs text-yellow-400">
              <Clock className="h-3.5 w-3.5" />
              Estimasi Check-in: {unit.checkIn}
            </div>
            <p className="mt-3 text-xs italic text-neutral-600">{unit.holdNote}</p>
          </div>
        )}

        {/* Footer: tarif + CTA */}
        {!isReserved && (
          <div className="mb-3 rounded-xl bg-neutral-950/70 px-3 py-2 text-center">
            <p className="text-[10px] tracking-wide text-neutral-500">
              {unit.tarifNote || CATEGORIES.regular.tarifNote}
            </p>
            {unit.tarif && (
              <p className="text-base font-bold text-yellow-400">
                {unit.tarif}
                <span className="ml-1 text-xs font-normal text-neutral-500">/ jam</span>
              </p>
            )}
          </div>
        )}

        <button
          disabled={isReserved}
          onClick={isReady ? () => onBook(unit) : undefined}
          className={`flex items-center justify-center gap-2 rounded-xl py-2.5 text-sm font-semibold transition-colors ${
            isReserved
              ? "cursor-not-allowed bg-neutral-800 text-neutral-600"
              : isReady
              ? "bg-yellow-400 text-neutral-950 hover:bg-yellow-300"
              : "bg-neutral-800 text-neutral-300 hover:bg-neutral-700"
          }`}
        >
          {isReserved ? (
            <>
              <Lock className="h-4 w-4" />
              SLOT TERKUNCI
            </>
          ) : (
            <>
              {unit.ctaIcon ? (
                <unit.ctaIcon className="h-4 w-4" />
              ) : isReady ? (
                <Gamepad2 className="h-4 w-4" />
              ) : (
                <Trophy className="h-4 w-4" />
              )}
              {unit.cta}
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Main dashboard
// ---------------------------------------------------------------------------

export default function UnitTimer() {
  const [tab, setTab] = useState("regular");
  const [booking, setBooking] = useState(null); // { unitId, unit, room } | null
  const [bookingKey, setBookingKey] = useState(0);
  const category = CATEGORIES[tab];
  const readyCount = category.units.filter((u) => u.status === "ready").length;

  const openBooking = ({ unitId = null, unit = "PS5", room }) => {
    setBooking({ unitId, unit, room });
    setBookingKey((k) => k + 1);
  };

  const handleBookUnit = (unit) => {
    openBooking({
      unitId: unit.id,
      unit: unit.console.includes("PS4") ? "PS4" : "PS5",
      room: tab === "vip" ? "VIP" : "REGULAR",
    });
  };

  return (
    <div className="min-h-screen bg-neutral-950 bg-[radial-gradient(ellipse_60%_50%_at_50%_-20%,rgba(250,204,21,0.08),transparent)] p-4 sm:p-8">
      <div className="mx-auto max-w-6xl">
        {/* Tab switcher */}
        <div className="mb-6 inline-flex rounded-xl bg-neutral-900 p-1">
          {Object.entries(CATEGORIES).map(([key, cat]) => (
            <button
              key={key}
              onClick={() => setTab(key)}
              className={`rounded-lg px-5 py-2 text-sm font-semibold transition-colors ${
                tab === key ? "bg-yellow-400 text-neutral-950" : "text-neutral-400 hover:text-neutral-200"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Header card */}
        <div className="mb-6 flex flex-col gap-4 rounded-2xl border border-neutral-800 bg-neutral-900/60 p-5 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-start gap-3">
            <div className="relative shrink-0">
              <div aria-hidden="true" className="absolute inset-0 rounded-xl bg-yellow-400/40 blur-lg" />
              <div className="relative flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-400">
                <Gamepad2 className="h-6 w-6 text-neutral-950" />
              </div>
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2">
                <h1 className="text-lg font-bold uppercase tracking-wide text-white">{category.label}</h1>
                <span className="rounded-full bg-emerald-500/15 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-400 ring-1 ring-emerald-500/30">
                  {readyCount} READY / {category.units.length} MEJA
                </span>
              </div>
              <p className="mt-1 text-sm text-neutral-500">{category.subtitle}</p>
            </div>
          </div>
          <button
            onClick={() => openBooking({ room: tab === "vip" ? "VIP" : "REGULAR" })}
            className="flex items-center justify-center gap-2 rounded-xl border border-yellow-400/20 bg-neutral-800 px-4 py-2.5 text-sm font-semibold text-white transition hover:border-yellow-400/40 hover:bg-neutral-700"
          >
            <Zap className="h-4 w-4 text-yellow-400" />
            GAS BOOKING {tab === "vip" ? "VIP" : "REGULAR"}
          </button>
        </div>

        {/* Grid of units */}
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {category.units.map((unit) => (
            <UnitCard key={unit.id} unit={unit} onBook={handleBookUnit} />
          ))}
        </div>
      </div>

      <BookingForm
        key={bookingKey}
        isOpen={booking !== null}
        defaultUnit={booking?.unit ?? "PS5"}
        defaultRoom={booking?.room ?? "REGULAR"}
        unitId={booking?.unitId ?? null}
        onClose={() => setBooking(null)}
      />
    </div>
  );
}
