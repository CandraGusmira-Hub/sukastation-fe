import { ArrowRight, Gamepad2, Clock3 } from "lucide-react";

export default function Hero() {
  return (
    <section
      id="beranda"
      className="relative overflow-hidden bg-[#070809]"
    >
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/hero/gaming-room.jpg')",
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/75" />

      {/* Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#070809]/95 via-[#070809]/80 to-[#070809]" />

      {/* Content */}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">
        <div className="grid min-h-[calc(100vh-80px)] items-center gap-10 py-12 sm:py-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12 lg:py-20">

          {/* LEFT */}
          <div className="max-w-2xl">

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-400/20 bg-black/40 px-3 py-1.5 text-[9px] font-medium tracking-wide text-yellow-400 backdrop-blur sm:px-4 sm:py-2 sm:text-xs">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />
              RENTAL PLAYSTATION • PS4 & PS5
            </div>

            {/* Heading */}
            <h1 className="font-display text-[2.6rem] font-bold leading-[0.98] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
              Main Game.
              <br />
              <span className="text-yellow-400">Santai.</span>
              <br />
              Puas Bermain.
            </h1>

            {/* Description */}
            <p className="mt-5 max-w-xl text-[13px] leading-6 text-slate-300 sm:mt-6 sm:text-base sm:leading-7">
              Nikmati pengalaman bermain PlayStation dengan unit terawat,
              game pilihan, tempat nyaman, dan tarif sewa transparan.
            </p>

            {/* Features */}
            <div className="mt-5 flex items-center gap-4 text-[11px] text-slate-300 sm:mt-7 sm:text-sm">
              <div className="flex items-center gap-1.5">
                <Gamepad2 className="h-3.5 w-3.5 text-yellow-400 sm:h-4 sm:w-4" />
                PS4 & PS5
              </div>

              <span className="text-slate-600">•</span>

              <div className="flex items-center gap-1.5">
                <Clock3 className="h-3.5 w-3.5 text-yellow-400 sm:h-4 sm:w-4" />
                Buka 24 Jam
              </div>
            </div>

            {/* CTA */}
            <div className="mt-7 flex gap-2.5 sm:mt-9 sm:gap-4">
              <a
                href="#unit-list"
                className="group flex flex-1 items-center justify-center gap-2 rounded-lg bg-yellow-400 px-4 py-3 text-xs font-bold text-black transition hover:bg-yellow-300 sm:flex-none sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Sewa Sekarang
                <ArrowRight className="h-3.5 w-3.5 transition group-hover:translate-x-1 sm:h-4 sm:w-4" />
              </a>

              <a
                href="#games"
                className="flex flex-1 items-center justify-center rounded-lg border border-white/15 bg-white/5 px-4 py-3 text-xs font-semibold text-white transition hover:border-white/30 hover:bg-white/10 sm:flex-none sm:px-6 sm:py-3.5 sm:text-sm"
              >
                Lihat Game
              </a>
            </div>

            {/* MOBILE IMAGE */}
            <div className="relative mt-9 h-[220px] w-full sm:hidden">
              <div className="absolute inset-0 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl">
                <img
                  src="/images/hero/ps.jpg"
                  alt="PlayStation Gaming Room"
                  className="h-full w-full object-cover"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
              </div>

              {/* Unit Ready */}
              <div className="absolute right-3 top-3 flex items-center gap-2 rounded-full border border-emerald-400/20 bg-black/75 px-3 py-1.5 text-[9px] font-medium text-emerald-400 backdrop-blur">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Unit Ready
              </div>

              {/* Image Label */}
              <div className="absolute bottom-3 left-3 rounded-lg border border-amber-300 bg-black/70 px-3 py-2">
                <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400">
                  Gaming Experience
                </p>
                <p className="mt-1 text-xs font-semibold text-white">
                  Nyaman. Bersih. Siap Main.
                </p>
              </div>
            </div>
          </div>

          {/* DESKTOP VISUAL */}
          <div className="relative hidden h-[520px] lg:block">

            {/* Main Image */}
            <div className="absolute inset-8 overflow-hidden rounded-2xl border border-white/10 bg-neutral-900 shadow-2xl">
              <img
                src="/images/hero/ps.jpg"
                alt="PlayStation Gaming Room"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/10" />
            </div>

            {/* Experience */}
            <div className="animate-float-slow absolute bottom-3 left-3 rounded-lg border border-amber-300 bg-black/70 px-3 py-2">
              <p className="text-[10px] uppercase tracking-widest text-slate-500">
                Gaming Experience
              </p>

              <p className="mt-1 text-sm font-semibold text-white">
                Nyaman. Bersih. Siap Main.
              </p>
            </div>

            {/* Status */}
            <div className="animate-float-fast absolute right-0 top-10 flex items-center gap-2 rounded-full border border-emerald-400/20 bg-black/70 px-4 py-2 text-xs font-medium text-emerald-400 backdrop-blur">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
              </span>
              Unit Ready
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#070809] to-transparent sm:h-32" />
    </section>
  );
}
