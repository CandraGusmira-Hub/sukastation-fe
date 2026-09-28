import { useState } from "react";

// Ganti dengan nomor WhatsApp kamu (format internasional, tanpa + atau spasi)
const WA_NUMBER = "62XXXXXXXXXX";

// Sesuaikan isi jawaban dengan aturan rental kamu yang sebenarnya
const faqs = [
  {
    q: "Apa saja yang saya dapat saat menyewa?",
    a: "Satu unit konsol PS4 atau PS5 lengkap dengan dua stik, kabel power, dan kabel HDMI. Game pilihanmu sudah terpasang dan siap dimainkan begitu konsol dinyalakan.",
  },
  {
    q: "Bagaimana cara memesan?",
    a: "Pilih konsol dan game yang kamu mau, lalu klik Pesan Sekarang. Kamu akan diarahkan ke WhatsApp kami untuk konfirmasi jadwal, pembayaran, dan pengambilan atau pengantaran.",
  },
  {
    q: "Apa saja syarat untuk menyewa?",
    a: "Kamu perlu menunjukkan identitas yang masih berlaku (KTP atau SIM) dan menyerahkan jaminan sesuai ketentuan di bagian Harga. Identitas dan jaminan dikembalikan saat konsol diterima dalam kondisi baik.",
  },
  {
    q: "Apakah konsol bisa diantar ke rumah?",
    a: "Bisa. Hubungi kami lewat WhatsApp untuk cek apakah alamatmu masuk area antar dan berapa ongkosnya. Kamu juga boleh mengambil sendiri di tempat kami.",
  },
  {
    q: "Saya perlu menyiapkan apa di rumah?",
    a: "Cukup TV atau monitor dengan port HDMI dan stopkontak. Internet tidak wajib untuk game offline, tapi dibutuhkan kalau kamu mau main online atau multiplayer lewat internet.",
  },
  {
    q: "Game yang saya cari tidak ada di daftar. Bisa request?",
    a: "Bisa. Kirim judul game yang kamu mau lewat WhatsApp, nanti kami cek ketersediaannya dan kabari apakah bisa dipasang sebelum hari sewa.",
  },
  {
    q: "Bolehkah saya login ke akun PSN pribadi?",
    a: "Boleh kalau kamu butuh main online. Pastikan logout dan hapus akunmu dari konsol sebelum dikembalikan. Kami tidak bertanggung jawab atas akun atau data pribadi yang tertinggal.",
  },
  {
    q: "Bagaimana kalau saya terlambat mengembalikan?",
    a: "Keterlambatan dikenakan biaya tambahan sesuai tarif sewa. Kalau ingin memperpanjang, kabari kami sebelum masa sewa habis supaya jadwal unit tidak bentrok dengan penyewa lain.",
  },
  {
    q: "Bagaimana kalau konsol rusak atau ada yang hilang?",
    a: "Kalau masalahnya dari sisi teknis unit, kami ganti tanpa biaya. Kalau kerusakan atau kehilangan terjadi karena kelalaian penyewa, biaya perbaikan atau penggantian ditanggung penyewa.",
  },
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="faq" className="relative scroll-mt-20 overflow-hidden py-24">
      <div className="pointer-events-none absolute right-0 top-10 h-64 w-1/2 bg-yellow-400/5 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-16">
        {/* Kiri: judul + ajakan bertanya */}
        <div className="lg:sticky lg:top-28 lg:self-start">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">FAQ</p>
          <h2 className="mt-3 font-display text-3xl font-bold text-white sm:text-4xl">
            Pertanyaan yang sering ditanyakan
          </h2>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-400">
            Jawaban singkat soal cara sewa, syarat, pengantaran, dan aturan pemakaian.
          </p>

          <div className="mt-8 rounded-2xl border border-line bg-ink-900/60 p-5">
            <p className="text-sm font-semibold text-white">Pertanyaanmu belum terjawab?</p>
            <p className="mt-1 text-sm text-slate-400">Tanyakan langsung, biasanya kami balas dalam beberapa menit.</p>
            <a
              href={`https://wa.me/${WA_NUMBER}`}
              target="_blank"
              rel="noreferrer"
              className="mt-4 inline-block rounded-full bg-linear-to-r from-amber-400 to-yellow-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:-translate-y-0.5 hover:shadow-[0_10px_26px_-8px_rgba(251,191,36,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300"
            >
              Chat via WhatsApp
            </a>
          </div>
        </div>

        {/* Kanan: accordion */}
        <ul className="space-y-3">
          {faqs.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <li
                key={item.q}
                className={`rounded-2xl border transition-colors duration-300 ${
                  isOpen ? "border-yellow-400/40 bg-ink-900" : "border-line bg-ink-900/50 hover:border-slate-600"
                }`}
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${i}`}
                    id={`faq-btn-${i}`}
                    className="flex w-full items-center justify-between gap-4 rounded-2xl px-5 py-4 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60"
                  >
                    <span className={`text-sm font-medium sm:text-base ${isOpen ? "text-white" : "text-slate-200"}`}>
                      {item.q}
                    </span>
                    <span
                      aria-hidden="true"
                      className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition duration-300 ${
                        isOpen
                          ? "rotate-45 border-yellow-400 bg-yellow-400 text-ink-950"
                          : "border-line text-slate-400"
                      }`}
                    >
                      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M6 1v10M1 6h10" strokeLinecap="round" />
                      </svg>
                    </span>
                  </button>
                </h3>

                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  aria-labelledby={`faq-btn-${i}`}
                  className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="px-5 pb-5 text-sm leading-relaxed text-slate-400">{item.a}</p>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
