import { useEffect, useRef, useState } from "react";

const modules = import.meta.glob(
  "/src/assets/brosur/*.{jpg,jpeg,png,webp,avif}",
  {
    eager: true,
    query: "?url",
    import: "default",
  }
);

const slides = Object.entries(modules)
  .sort(([a], [b]) => a.localeCompare(b, undefined, { numeric: true }))
  .map(([path, src]) => ({
    src,
    alt:
      path
        .split("/")
        .pop()
        ?.replace(/\.[^.]+$/, "")
        .replace(/^\d+[-_ ]*/, "")
        .replace(/[-_]+/g, " ") || "Poster",
  }));

const AUTO_PLAY = 5000;

export default function EventInfo() {
  const trackRef = useRef(null);
  const [paused, setPaused] = useState(false);

  const count = slides.length;

  const scroll = (direction) => {
    const el = trackRef.current;
    if (!el) return;

    const card = el.firstElementChild;
    if (!card) return;

    const gap = parseFloat(getComputedStyle(el).gap) || 12;
    const move = card.offsetWidth + gap;

    el.scrollBy({
      left: direction * move,
      behavior: "smooth",
    });
  };

  const next = () => scroll(1);
  const prev = () => scroll(-1);

  // Auto slide
  useEffect(() => {
    if (count <= 4 || paused) return;

    const timer = setInterval(next, AUTO_PLAY);

    return () => clearInterval(timer);
  }, [count, paused]);

  return (
    <section
      id="info"
      className="scroll-mt-20 bg-ink-950 py-14 sm:py-16"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6">

        {/* ================= BANNER ================= */}
        <div className="mb-10 overflow-hidden rounded-2xl border border-white/10 bg-ink-900">
          <div className="relative aspect-[4/1] min-h-[130px] w-full sm:min-h-[170px]">

            <img
              src="/images/banner/banner.jpg"
              alt="Promo SukaStasion"
              className="absolute inset-0 h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />

            <div className="absolute inset-y-0 left-5 flex flex-col justify-center sm:left-8 lg:left-10">
              <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-yellow-400 sm:text-xs">
                Promo SukaStasion
              </p>

              <h3 className="mt-1 max-w-md text-lg font-bold leading-tight text-white sm:text-2xl lg:text-3xl">
                Main Lebih Lama,
                <span className="text-yellow-400">
                  {" "}
                  Lebih Hemat.
                </span>
              </h3>

              <p className="mt-2 hidden max-w-sm text-xs text-slate-300 sm:block">
                Nikmati pengalaman bermain PS4 & PS5
                dengan paket rental terbaik.
              </p>

              <button
                type="button"
                className="mt-3 w-fit rounded-lg bg-yellow-400 px-4 py-2 text-[10px] font-bold text-black transition hover:bg-yellow-300 sm:text-xs"
              >
                Pesan Sekarang →
              </button>
            </div>
          </div>
        </div>

        {/* ================= HEADER ================= */}
        <div className="mb-5 flex items-end justify-between">
          <div>
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-yellow-400" />

              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-yellow-400 sm:text-xs">
                Gallery
              </p>
            </div>

            <h2 className="mt-2 text-2xl font-bold text-white sm:text-3xl">
              Info & Promo
            </h2>
          </div>

          {count > 4 && (
            <button
              type="button"
              onClick={next}
              className="text-xs font-semibold text-white transition hover:text-yellow-400 sm:text-sm"
            >
              Lihat Semua →
            </button>
          )}
        </div>

        {/* ================= GALLERY ================= */}
        {count === 0 ? (
          <div className="rounded-xl border border-dashed border-white/10 py-16 text-center text-sm text-slate-500">
            Belum ada poster.
            <br />
            Tambahkan gambar ke folder{" "}
            <span className="text-yellow-400">
              src/assets/brosur
            </span>
          </div>
        ) : (
          <div
            className="relative"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onTouchStart={() => setPaused(true)}
            onTouchEnd={() => setPaused(false)}
          >
            {/* Cards */}
            <div
              ref={trackRef}
              className="
                flex
                gap-3
                overflow-x-auto
                scroll-smooth
                snap-x
                snap-mandatory
                overscroll-x-contain
                touch-pan-x
                pb-2
                scrollbar-none
                sm:gap-4
              "
              style={{
                scrollbarWidth: "none",
                WebkitOverflowScrolling: "touch",
              }}
            >
              {slides.map((slide, i) => (
                <div
                  key={slide.src}
                  className="
                    group
                    relative
                    shrink-0
                    snap-start
                    overflow-hidden
                    rounded-xl
                    border
                    border-white/10
                    bg-ink-900

                    w-[calc(50%-6px)]
                    sm:w-[calc(33.333%-11px)]
                    lg:w-[calc(25%-12px)]
                  "
                >
                  <div className="aspect-[3/4] overflow-hidden">
                    <img
                      src={slide.src}
                      alt={slide.alt}
                      loading={i < 4 ? "eager" : "lazy"}
                      draggable={false}
                      className="
                        h-full
                        w-full
                        select-none
                        object-cover
                        transition
                        duration-500
                        group-hover:scale-105
                      "
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Left */}
            {count > 4 && (
              <button
                type="button"
                onClick={prev}
                aria-label="Poster sebelumnya"
                className="
                  absolute
                  left-2
                  top-1/2
                  z-10
                  flex
                  h-9
                  w-9
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-black/75
                  text-lg
                  text-white
                  shadow-lg
                  backdrop-blur
                  transition
                  hover:border-yellow-400
                  hover:bg-yellow-400
                  hover:text-black
                "
              >
                ←
              </button>
            )}

            {/* Right */}
            {count > 4 && (
              <button
                type="button"
                onClick={next}
                aria-label="Poster berikutnya"
                className="
                  absolute
                  right-2
                  top-1/2
                  z-10
                  flex
                  h-9
                  w-9
                  -translate-y-1/2
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-black/75
                  text-lg
                  text-white
                  shadow-lg
                  backdrop-blur
                  transition
                  hover:border-yellow-400
                  hover:bg-yellow-400
                  hover:text-black
                "
              >
                →
              </button>
            )}
          </div>
        )}

        {/* ================= HINT MOBILE ================= */}
        {count > 2 && (
          <p className="mt-3 text-center text-[10px] text-slate-600 sm:hidden">
            Geser untuk melihat poster lainnya
          </p>
        )}
      </div>
    </section>
  );
}
