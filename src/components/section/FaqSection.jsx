import { useState } from "react";

const WA_NUMBER = "62XXXXXXXXXX";

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
    <section
      id="faq"
      className="relative overflow-hidden border-t border-line bg-ink-950 py-16 sm:py-20 lg:py-24"
    >
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute -right-40 top-20 h-80 w-80 rounded-full bg-yellow-400/5 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
            FAQ
          </span>

          <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
            Ada yang ingin
            <br className="hidden sm:block" /> kamu tanyakan?
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-6 text-slate-400 sm:text-base">
            Temukan jawaban untuk pertanyaan umum seputar cara sewa,
            fasilitas, pengantaran, dan aturan penggunaan unit.
          </p>
        </div>

        {/* Content */}
        <div className="mt-10 grid gap-10 lg:mt-14 lg:grid-cols-[280px_minmax(0,1fr)] lg:gap-16 xl:grid-cols-[320px_minmax(0,1fr)]">
          
          {/* Left */}
          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="border-l border-yellow-400/40 pl-4 sm:pl-5">
              <p className="text-sm font-medium text-white">
                Masih belum menemukan jawabannya?
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-500">
                Hubungi kami langsung melalui WhatsApp. Tim kami siap
                membantu menjawab pertanyaanmu.
              </p>

              <a
                href={`https://wa.me/${WA_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="mt-5 inline-flex items-center rounded-full bg-yellow-400 px-5 py-2.5 text-sm font-semibold text-ink-950 transition hover:-translate-y-0.5 hover:bg-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950"
              >
                Chat via WhatsApp
              </a>
            </div>
          </div>

          {/* FAQ */}
          <div className="divide-y divide-white/10 border-y border-white/10">
            {faqs.map((item, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={item.q}>
                  <button
                    type="button"
                    onClick={() =>
                      setOpenIndex(isOpen ? null : index)
                    }
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${index}`}
                    className="group flex w-full items-start gap-4 py-5 text-left sm:py-6"
                  >
                    {/* Number */}
                    <span className="mt-0.5 hidden w-6 shrink-0 text-xs font-medium text-slate-600 sm:block">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                    {/* Question */}
                    <span
                      className={`flex-1 text-sm font-medium leading-6 transition-colors sm:text-base ${
                        isOpen
                          ? "text-white"
                          : "text-slate-300 group-hover:text-white"
                      }`}
                    >
                      {item.q}
                    </span>

                    {/* Icon */}
                    <span
                      className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                        isOpen
                          ? "rotate-45 border-yellow-400 bg-yellow-400 text-ink-950"
                          : "border-white/15 text-slate-500 group-hover:border-yellow-400/50 group-hover:text-yellow-400"
                      }`}
                    >
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 12 12"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      >
                        <path
                          d="M6 1v10M1 6h10"
                          strokeLinecap="round"
                        />
                      </svg>
                    </span>
                  </button>

                  {/* Answer */}
                  <div
                    id={`faq-panel-${index}`}
                    role="region"
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                      isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="pb-5 pl-10 pr-8 text-sm leading-6 text-slate-500 sm:pb-6 sm:pl-10 sm:pr-12">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
