import { useState } from "react";
import BookingForm from "../form/BookingForm";
import { Gamepad2, Lock, Clock, Zap } from "lucide-react";

const CATEGORIES = {
  vip: {
    label: "VIP Gaming Arena",
    subtitle: 'Private Room, TV 55"-65" 4K 144Hz, Sound System Premium.',
    tarifNote: "TARIF VIP",
    units: [
      { id: "V-01", console: "PS5", status: "ready", tarif: "Rp 55.000" },
      { id: "V-02", console: "PS5", status: "in-game" },
      { id: "V-03", console: "PS5", status: "ready", tarif: "Rp 50.000" },
      {
        id: "V-04",
        console: "PS5",
        status: "reserved",
        reservedBy: "Bima & Squad",
        checkIn: "20.00 WIB",
      },
    ],
  },

  regular: {
    label: "Regular Gaming Arena",
    subtitle: 'Open Space Lounge, TV 43"-50" 4K 120Hz.',
    tarifNote: "TARIF MABAR",
    units: [
      { id: "R-01", console: "PS5", status: "ready", tarif: "Rp 25.000" },
      { id: "R-02", console: "PS5", status: "in-game" },
      { id: "R-03", console: "PS4", status: "ready", tarif: "Rp 15.000" },
      { id: "R-04", console: "PS5", status: "in-game" },
      {
        id: "R-05",
        console: "PS5",
        status: "reserved",
        reservedBy: "Raka A. & Squad",
        checkIn: "17.30 WIB",
      },
      { id: "R-06", console: "PS5", status: "ready", tarif: "Rp 25.000" },
      { id: "R-07", console: "PS4", status: "in-game" },
      { id: "R-08", console: "PS5", status: "ready", tarif: "Rp 25.000" },
    ],
  },
};

const STATUS = {
  ready: {
    label: "READY",
    color: "text-emerald-400 bg-emerald-500/10",
    border: "border-emerald-500/40",
  },

  "in-game": {
    label: "IN-GAME",
    color: "text-rose-400 bg-rose-500/10",
    border: "border-rose-500/40",
  },

  reserved: {
    label: "RESERVED",
    color: "text-yellow-400 bg-yellow-400/10",
    border: "border-neutral-700",
  },
};

function UnitCard({ unit, onBook, tarifNote }) {
  const reserved = unit.status === "reserved";
  const ready = unit.status === "ready";
  const status = STATUS[unit.status];

  return (
    <div
      className={`group relative min-w-0 overflow-hidden rounded-xl border border-t-2 bg-neutral-900/80 p-3 transition duration-300 hover:border-yellow-400/40 sm:p-4 ${status.border}`}
    >
      {/* Header */}
      <div className="mb-3 flex min-w-0 items-center justify-between gap-2">
        <div className="flex min-w-0 items-center gap-2">
          <span className="shrink-0 rounded-md bg-yellow-400 px-1.5 py-1 text-[10px] font-bold text-neutral-950 sm:px-2 sm:text-xs">
            {unit.id}
          </span>

          <span className="truncate text-[10px] font-medium text-neutral-400 sm:text-xs">
            {unit.console}
          </span>
        </div>

        <span
          className={`shrink-0 rounded-full px-1.5 py-1 text-[8px] font-bold sm:px-2 sm:text-[10px] ${status.color}`}
        >
          ● {status.label}
        </span>
      </div>

      {/* Info */}
      {reserved ? (
        <div className="mb-3 min-h-[68px] rounded-lg bg-neutral-950 p-2.5 sm:p-3">
          <p className="text-[8px] text-neutral-500 sm:text-[10px]">
            DIBOOKING OLEH
          </p>

          <p className="mt-1 truncate text-[11px] font-semibold text-white sm:text-sm">
            {unit.reservedBy}
          </p>

          <p className="mt-2 flex items-center gap-1 text-[9px] text-yellow-400 sm:text-xs">
            <Clock className="h-3 w-3 shrink-0" />
            Check-in {unit.checkIn}
          </p>
        </div>
      ) : (
        <div className="mb-3 flex min-h-[68px] items-center justify-between gap-2 rounded-lg bg-neutral-950 px-2.5 py-2 sm:px-3">
          <span className="text-[8px] leading-tight text-neutral-500 sm:text-[10px]">
            {ready ? tarifNote : "SEDANG DIGUNAKAN"}
          </span>

          {ready && unit.tarif && (
            <span className="shrink-0 text-[11px] font-bold text-yellow-400 sm:text-sm">
              {unit.tarif}
              <span className="ml-0.5 text-[8px] font-normal text-neutral-500 sm:ml-1 sm:text-[10px]">
                /jam
              </span>
            </span>
          )}
        </div>
      )}

      {/* Button */}
      <button
        type="button"
        disabled={!ready}
        onClick={() => ready && onBook(unit)}
        className={`flex w-full items-center justify-center gap-1.5 rounded-lg py-2.5 text-[9px] font-bold transition sm:gap-2 sm:text-xs ${
          reserved
            ? "cursor-not-allowed bg-neutral-800 text-neutral-600"
            : ready
              ? "bg-yellow-400 text-neutral-950 hover:bg-yellow-300"
              : "cursor-not-allowed bg-neutral-800 text-neutral-500"
        }`}
      >
        {reserved ? (
          <>
            <Lock className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            SLOT TERKUNCI
          </>
        ) : ready ? (
          <>
            <Gamepad2 className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
            PILIH UNIT
          </>
        ) : (
          "SEDANG DIGUNAKAN"
        )}
      </button>
    </div>
  );
}

export default function UnitTimer() {
  const [tab, setTab] = useState("regular");
  const [booking, setBooking] = useState(null);
  const [bookingKey, setBookingKey] = useState(0);

  const category = CATEGORIES[tab];

  const readyCount = category.units.filter(
    (unit) => unit.status === "ready"
  ).length;

  const openBooking = (unit = null) => {
    setBooking({
      unitId: unit?.id ?? null,
      unit: unit?.console ?? "PS5",
      room: tab === "vip" ? "VIP" : "REGULAR",
    });

    setBookingKey((key) => key + 1);
  };

  return (
    <section
      id="unit-list"
      className="scroll-mt-24 bg-neutral-950 px-4 py-10 sm:px-6 sm:py-14 lg:px-8"
    >
      <div className="mx-auto max-w-6xl">

        {/* Tabs */}
        <div className="mb-4 grid grid-cols-2 gap-1 rounded-xl bg-neutral-900 p-1 sm:mb-5 sm:inline-flex sm:gap-0">
          {Object.entries(CATEGORIES).map(([key, category]) => (
            <button
              key={key}
              type="button"
              onClick={() => setTab(key)}
              className={`rounded-lg px-3 py-2.5 text-[10px] font-bold transition sm:px-5 sm:py-2 sm:text-xs ${
                tab === key
                  ? "bg-yellow-400 text-neutral-950 shadow-sm"
                  : "text-neutral-400 hover:text-white"
              }`}
            >
              {key === "vip" ? "VIP ARENA" : "REGULAR ARENA"}
            </button>
          ))}
        </div>

        {/* Header */}
        <div className="mb-5 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900/60">
          <div className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">

            <div className="min-w-0">
              <div className="flex flex-wrap items-center gap-2">
                <Gamepad2 className="h-5 w-5 shrink-0 text-yellow-400" />

                <h1 className="text-sm font-bold text-white sm:text-base">
                  {category.label}
                </h1>

                <span className="rounded-full bg-emerald-500/10 px-2 py-1 text-[8px] font-bold text-emerald-400 sm:text-[10px]">
                  {readyCount}/{category.units.length} READY
                </span>
              </div>

              <p className="mt-1.5 text-[10px] leading-5 text-neutral-500 sm:text-xs">
                {category.subtitle}
              </p>
            </div>

            {/* Booking */}
            <button
              type="button"
              onClick={() => openBooking()}
              className="flex w-full shrink-0 items-center justify-center gap-2 rounded-lg bg-yellow-400 px-4 py-2.5 text-[10px] font-bold text-neutral-950 transition hover:bg-yellow-300 sm:w-auto sm:bg-neutral-800 sm:text-xs sm:text-white sm:hover:bg-neutral-700"
            >
              <Zap className="h-3.5 w-3.5 text-current sm:text-yellow-400" />
              BOOKING {tab === "vip" ? "VIP" : "REGULAR"}
            </button>
          </div>
        </div>

        {/* Units */}
        <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3 sm:gap-3 lg:grid-cols-4 lg:gap-4">
          {category.units.map((unit) => (
            <UnitCard
              key={unit.id}
              unit={unit}
              tarifNote={category.tarifNote}
              onBook={openBooking}
            />
          ))}
        </div>
      </div>

      {/* Booking Form */}
      <BookingForm
        key={bookingKey}
        isOpen={!!booking}
        defaultUnit={booking?.unit ?? "PS5"}
        defaultRoom={booking?.room ?? "REGULAR"}
        unitId={booking?.unitId ?? null}
        onClose={() => setBooking(null)}
      />
    </section>
  );
}
