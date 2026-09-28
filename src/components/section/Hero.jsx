import GameShowcase from "../ui/GameShowcase";

const trustItems = ["Unit Original & Terawat", "Proses Sewa Mudah & Cepat", "Game Lengkap Update Terbaru"];

// Foto: Unsplash (gratis untuk pemakaian komersial, tanpa wajib atribusi).
// Ganti dengan foto unit/outlet asli kamu sendiri kalau sudah punya, untuk kesan lebih autentik.
const heroimg = {
  image: "/images/hero/ps.jpg",
};

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative isolate flex min-h-120 items-center overflow-hidden md:min-h-140"
    >
      <img
        src={heroimg.image}
        alt="Suasana unit PlayStation 5 siap disewa"
        className="absolute inset-0 -z-20 h-full w-full object-contain"
        loading="eager"
      />

      {/* Overlay gelap supaya teks & kartu di atasnya tetap terbaca di atas foto */}
      <div className="absolute inset-0 -z-10 bg-ink-950/75" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink-950 via-ink-950/40 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink-950 via-transparent to-ink-950/30" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 py-14 md:grid-cols-2 md:items-center md:py-16">
        <div>
          <div className="mb-2 inline-flex items-center gap-2 rounded-full border border-line bg-ink-950/60 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-yellow-400 backdrop-blur">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-yellow-400" />
            </span>
            Rental PlayStation 4 & 5 24H
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.1] tracking-tight text-white drop-shadow-md sm:text-5xl lg:text-6xl">
            Mainkan Game
            <br />
            <span className="bg-linear-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              PS4 {``}
            </span>
             & {``}
            <span className="bg-linear-to-r from-amber-300 via-yellow-400 to-orange-400 bg-clip-text text-transparent">
              PS5 <span className="text-white">Favoritmu</span>
            </span>
          </h1>

          <p className="max-w-md text-base leading-relaxed text-slate-200 drop-shadow-sm">
            Nikmati pengalaman bermain PlayStation 4 & 5 dengan perangkat terbaru, game lengkap, dan harga sewa yang
            terjangkau. Cocok untuk nongkrong, event, atau sekadar melepas penat.
          </p>

          <ul className="mt-5 flex flex-wrap gap-3">
            {trustItems.map((item) => (
              <li
                key={item}
                className="flex items-center gap-2 rounded-full border border-line bg-ink-950/60 px-3.5 py-2 text-xs font-medium text-slate-100 backdrop-blur"
              >
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-300/15 text-lime-400">
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5">
                    <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap items-center gap-4">
            <a
              href="#harga"
              className="group inline-flex items-center gap-2 rounded-full bg-linear-to-r from-amber-400 to-yellow-500 px-7 py-3.5 text-sm font-semibold text-ink-950 shadow-lg shadow-amber-500/25 transition hover:opacity-90"
            >
              Sewa Sekarang
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.4"
                className="transition group-hover:translate-x-0.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href="#game"
              className="group flex items-center gap-2 text-sm font-medium text-white transition hover:text-yellow-300"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line bg-ink-950/50 backdrop-blur transition group-hover:border-yellow-400/60">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </span>
              Lihat Daftar Game
            </a>
          </div>
        </div>

        <GameShowcase />
      </div>
    </section>
  );
}
