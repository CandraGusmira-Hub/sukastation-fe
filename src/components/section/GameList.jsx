import { useRef } from "react";
import { Link } from "react-router";
import { IconArrowLeft, IconArrowRight } from "../ui/Icons";
import GameCard from "../ui/GameCard";
import games from "../../data/games";

const PREVIEW_COUNT = 6;

export default function GameList() {
  const scrollerRef = useRef(null);

  const scrollBy = (dir) => {
    scrollerRef.current?.scrollBy({ left: dir * 320, behavior: "smooth" });
  };

  return (
    <section id="game" className="relative mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="mb-2 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-yellow-400" />
            </span>
            Koleksi Game
          </p>
          <h2 className="font-display text-3xl font-bold text-white">Game Favorit, Semua Ada!</h2>
          <p className="mt-2 max-w-xl text-sm text-slate-400">
            Dari game AAA terbaru hingga klasik legendaris, semua bisa kamu mainkan di sini. Cek beberapa game populer
            yang tersedia:
          </p>
        </div>

        {/* Link (bukan <a>) supaya pindah halaman tanpa reload penuh */}
        <Link
          to="/games"
          className="group whitespace-nowrap text-sm font-medium text-yellow-400 transition hover:text-yellow-300"
        >
          Lihat Semua Game
          <span className="ml-1 inline-block transition group-hover:translate-x-0.5">→</span>
        </Link>
      </div>

      <div className="relative">
        <div
          ref={scrollerRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-scroll scroll-smooth px-2 pb-2 scrollbar-none [&::-webkit-scrollbar]:hidden"
        >
          {games.slice(0, PREVIEW_COUNT).map((game) => (
            <GameCard key={game.title} game={game} className="w-44 shrink-0 snap-start sm:w-52" />
          ))}
        </div>

        {/* Fade halus di tepi kiri/kanan biar keliatan masih ada konten buat di-scroll */}
        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-linear-to-r from-ink-950 to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-linear-to-l from-ink-950 to-transparent" />

        <button
          onClick={() => scrollBy(-1)}
          className="absolute -left-12 top-1/3 z-20 hidden h-10 w-10 items-center justify-center rounded-full border border-line bg-ink-900 text-slate-300 shadow-lg transition hover:border-yellow-400/60 hover:text-yellow-300 md:flex"
          aria-label="Sebelumnya"
        >
          <IconArrowLeft className="h-4 w-4" />
        </button>
        <button
          onClick={() => scrollBy(1)}
          className="absolute -right-12 top-1/3 z-20 hidden h-10 w-10 items-center justify-center rounded-full border border-line bg-ink-900 text-slate-300 shadow-lg transition hover:border-yellow-400/60 hover:text-yellow-300 md:flex"
          aria-label="Berikutnya"
        >
          <IconArrowRight className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
