import { useEffect, useState } from "react";
import { X, Gamepad2, Clock, CalendarCheck, Banknote, QrCode } from "lucide-react";

const TIME_SLOTS = [
  "10:00", "11:00", "12:00", "13:00",
  "14:00", "15:00", "16:00", "17:00",
  "18:00", "19:00", "20:00", "21:00",
  "22:00", "23:00",
];

// Contoh slot yang sudah kepesan — di production ganti dengan data asli dari backend kamu
// (misalnya hasil fetch jadwal hari ini per unit/room).
const BOOKED_SLOTS = ["11:00", "16:00", "21:00"];

// Ganti dengan nomor WhatsApp admin kamu (format internasional, tanpa "+" atau "0" di depan).
const WHATSAPP_NUMBER = "6283123456789"; // contoh: 6281234567890

// Taruh gambar QRIS statis usaha kamu (hasil export dari aplikasi bank/e-wallet)
// di folder public dengan nama file ini, misalnya: public/qris.png
const QRIS_IMAGE_SRC = "/qris.png";

const PAYMENT_METHODS = [
  { id: "cash", label: "Cash", icon: Banknote },
  { id: "qris", label: "QRIS", icon: QrCode },
];

// Kelas scrollbar tipis & gelap (bukan scrollbar putih bawaan browser), dipakai di area body yang scroll.
const THIN_SCROLLBAR =
  "[scrollbar-width:thin] [scrollbar-color:theme(colors.neutral.700)_transparent] " +
  "[&::-webkit-scrollbar]:w-1.5 [&::-webkit-scrollbar-track]:bg-transparent " +
  "[&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-neutral-700";

// Catatan: komponen ini sengaja di-remount tiap kali modal dibuka (lihat prop `key`
// yang dikasih dari pemanggilnya, mis. PriceList.jsx). Itu sebabnya name/unit/room/times/payment
// cukup di-set lewat useState(default...) langsung, tanpa perlu useEffect buat nge-sync
// ulang — remount otomatis bikin useState jalan lagi dari nilai default yang baru.
export default function BookingForm({
  isOpen,
  onClose,
  defaultUnit = "PS5",
  defaultRoom = "REGULAR",
  unitId = null, // isi id meja spesifik (mis. "R-01") kalau booking dimulai dari kartu unit
}) {
  const [name, setName] = useState("");
  const [unit, setUnit] = useState(defaultUnit);
  const [room, setRoom] = useState(defaultRoom);
  const [times, setTimes] = useState([]); // bisa lebih dari satu jam — durasi main = jumlah jam yang dipilih
  const [payment, setPayment] = useState("cash");
  const [qrisImageMissing, setQrisImageMissing] = useState(false);

  const locked = Boolean(unitId); // kalau user klik "PILIH MEJA INI" di meja tertentu, unit & room sudah pasti

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const toggleTime = (slot) => {
    setTimes((prev) => (prev.includes(slot) ? prev.filter((t) => t !== slot) : [...prev, slot]));
  };

  // urutkan sesuai urutan TIME_SLOTS, terlepas dari urutan klik user
  const sortedTimes = TIME_SLOTS.filter((slot) => times.includes(slot));
  const canSubmit = name.trim().length > 0 && sortedTimes.length > 0;
  const paymentLabel = payment === "qris" ? "QRIS" : "Cash di Tempat";

  const handleConfirm = () => {
    if (!canSubmit) return;
    const mejaLine = unitId ? `Meja: ${unitId}\n` : "";
    const message = encodeURIComponent(
      `Halo, saya mau booking:\nNama: ${name}\n${mejaLine}Unit: ${unit}\nRoom: ${room}\nJam: ${sortedTimes.join(", ")} WIB (${sortedTimes.length} Jam)\nMetode Bayar: ${paymentLabel}\n Kirim SS QRIS jika anda Pembayaran Melalui QRIS.`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    onClose();
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-[85vh] w-full max-w-sm flex-col rounded-2xl border border-neutral-800 bg-neutral-900 shadow-2xl shadow-black/40"
      >
        {/* Header — tetap di tempat, tidak ikut scroll */}
        <div className="flex shrink-0 items-center justify-between gap-3 border-b border-neutral-800 p-6 pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-yellow-400">
              <Gamepad2 className="h-5 w-5 text-neutral-950" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">Booking Meja</h3>
              {unitId ? (
                <p className="mt-0.5 flex items-center gap-1.5 text-xs text-neutral-500">
                  Meja
                  <span className="rounded-md bg-yellow-400 px-1.5 py-0.5 text-[11px] font-bold text-neutral-950">
                    {unitId}
                  </span>
                </p>
              ) : (
                <p className="mt-0.5 text-xs text-neutral-500">Pilih unit & jam mabar kamu</p>
              )}
            </div>
          </div>
          <button
            onClick={onClose}
            aria-label="Tutup"
            className="shrink-0 text-neutral-500 transition hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Body — satu-satunya bagian yang scroll, scrollbar-nya tipis & gelap */}
        <div className={`flex-1 overflow-y-auto p-6 py-4 ${THIN_SCROLLBAR}`}>
          <div>
            <label className="text-xs font-semibold text-neutral-400">Nama</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Nama kamu"
              className="mt-2 w-full rounded-xl border border-neutral-800 bg-neutral-950 px-4 py-2.5 text-sm text-white placeholder:text-neutral-600 focus:border-yellow-400 focus:outline-none"
            />
          </div>

          {locked ? (
            <div className="mt-5 flex gap-2">
              <span className="rounded-xl border border-neutral-800 bg-neutral-950/70 px-3 py-2 text-xs font-semibold text-neutral-300">
                {unit}
              </span>
              <span className="rounded-xl border border-neutral-800 bg-neutral-950/70 px-3 py-2 text-xs font-semibold text-neutral-300">
                {room === "VIP" ? "VIP Room" : "Regular"}
              </span>
            </div>
          ) : (
            <>
              <div className="mt-5">
                <p className="text-xs font-semibold text-neutral-400">Pilih Unit</p>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {["PS4", "PS5"].map((u) => (
                    <button
                      key={u}
                      type="button"
                      onClick={() => setUnit(u)}
                      className={`rounded-xl border py-2 text-sm font-bold transition ${
                        unit === u
                          ? "border-yellow-400 bg-yellow-400 text-neutral-950"
                          : "border-neutral-800 text-neutral-300 hover:border-yellow-400/50"
                      }`}
                    >
                      {u}
                    </button>
                  ))}
                </div>
              </div>

              <div className="mt-5">
                <p className="text-xs font-semibold text-neutral-400">Pilih Room</p>
                <div className="mt-2 grid grid-cols-2 gap-2">
                  {["REGULAR", "VIP"].map((r) => (
                    <button
                      key={r}
                      type="button"
                      onClick={() => setRoom(r)}
                      className={`rounded-xl border py-2 text-sm font-bold transition ${
                        room === r
                          ? "border-yellow-400 bg-yellow-400 text-neutral-950"
                          : "border-neutral-800 text-neutral-300 hover:border-yellow-400/50"
                      }`}
                    >
                      {r === "VIP" ? "VIP" : "Regular"}
                    </button>
                  ))}
                </div>
              </div>
            </>
          )}

          <div className="mt-5">
            <div className="flex items-center justify-between">
              <p className="flex items-center gap-1.5 text-xs font-semibold text-neutral-400">
                <Clock className="h-3.5 w-3.5" /> Pilih Jam
              </p>
              {sortedTimes.length > 0 && (
                <span className="rounded-full bg-yellow-400/15 px-2 py-0.5 text-[10px] font-bold text-yellow-400">
                  {sortedTimes.length} Jam
                </span>
              )}
            </div>
            <p className="mt-1 text-[11px] text-neutral-600">Pilih satu atau lebih jam sesuai lama main kamu</p>

            <div className="mt-2 grid grid-cols-4 gap-2">
              {TIME_SLOTS.map((slot) => {
                const isBooked = BOOKED_SLOTS.includes(slot);
                const isSelected = times.includes(slot);
                return (
                  <button
                    key={slot}
                    type="button"
                    disabled={isBooked}
                    onClick={() => toggleTime(slot)}
                    aria-pressed={isSelected}
                    className={`rounded-lg border py-1.5 text-[11px] font-semibold transition ${
                      isBooked
                        ? "cursor-not-allowed border-neutral-800 bg-neutral-950/40 text-neutral-700"
                        : isSelected
                          ? "border-yellow-400 bg-yellow-400 text-neutral-950"
                          : "border-neutral-800 text-neutral-300 hover:border-yellow-400/50"
                    }`}
                  >
                    {slot}
                  </button>
                );
              })}
            </div>
          </div>

          <div className="mt-5">
            <p className="text-xs font-semibold text-neutral-400">Metode Pembayaran</p>
            <div className="mt-2 grid grid-cols-2 gap-2">
              {PAYMENT_METHODS.map(({ id, label, icon: Icon }) => (
                <button
                  key={id}
                  type="button"
                  onClick={() => setPayment(id)}
                  className={`flex items-center justify-center gap-2 rounded-xl border py-2 text-sm font-bold transition ${
                    payment === id
                      ? "border-yellow-400 bg-yellow-400 text-neutral-950"
                      : "border-neutral-800 text-neutral-300 hover:border-yellow-400/50"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </button>
              ))}
            </div>

            {payment === "qris" && (
              <div className="mt-3 flex flex-col items-center gap-2 rounded-xl border border-neutral-800 bg-neutral-950/70 p-4">
                {qrisImageMissing ? (
                  <div className="flex h-40 w-40 items-center justify-center rounded-lg border border-dashed border-neutral-700 p-3 text-center text-[10px] leading-relaxed text-neutral-600">
                    Taruh gambar QRIS kamu di {QRIS_IMAGE_SRC}
                  </div>
                ) : (
                  <img
                    src={QRIS_IMAGE_SRC}
                    alt="Kode QRIS"
                    onError={() => setQrisImageMissing(true)}
                    className="h-40 w-40 rounded-lg bg-white object-contain p-2"
                  />
                )}
                <p className="text-center text-[11px] text-neutral-500">
                  Scan QRIS di atas untuk bayar, lalu kirim bukti pembayaran lewat WhatsApp saat konfirmasi.
                </p>
              </div>
            )}
          </div>

          {canSubmit && (
            <div className="mt-5 rounded-xl border border-neutral-800 bg-neutral-950/70 p-3">
              <p className="mb-1.5 flex items-center gap-1.5 text-[11px] font-semibold tracking-wide text-neutral-500">
                <CalendarCheck className="h-3.5 w-3.5 text-yellow-400" /> RINGKASAN BOOKING
              </p>
              <p className="text-sm text-neutral-200">
                {name} · {unit} {room === "VIP" ? "VIP" : "Regular"}
                {unitId ? ` · Meja ${unitId}` : ""} · {sortedTimes.join(", ")} WIB · {sortedTimes.length} Jam ·{" "}
                {paymentLabel}
              </p>
            </div>
          )}
        </div>

        {/* Footer — tombol konfirmasi selalu kelihatan, tidak ikut ke-scroll */}
        <div className="shrink-0 border-t border-neutral-800 p-6 pt-4">
          <button
            type="button"
            onClick={handleConfirm}
            disabled={!canSubmit}
            className={`w-full rounded-xl py-3 text-sm font-bold transition ${
              canSubmit
                ? "bg-yellow-400 text-neutral-950 hover:bg-yellow-300"
                : "cursor-not-allowed bg-neutral-800 text-neutral-600"
            }`}
          >
            Konfirmasi via WhatsApp
          </button>
        </div>
      </div>
    </div>
  );
}
