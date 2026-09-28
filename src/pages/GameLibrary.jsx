import { useMemo, useState } from "react";
import { Link } from "react-router";
import { IconArrowLeft } from "../components/ui/Icons";
import GameCard from "../components/ui/GameCard";
import games from "../data/games";

const PLATFORMS = [
  { id: "ALL", label: "Semua" },
  { id: "PS5", label: "PS5" },
  { id: "PS4", label: "PS4" },
];

// id harus sama persis dengan isi `categories` di data/games.js
const CATEGORIES = [
  { id: "ALL", label: "Semua Kategori" },
  { id: "SinglePlayer", label: "Single Player" },
  { id: "MultiPlayer", label: "Multiplayer" },
  { id: "Sport", label: "Sport" },
  { id: "Arcade", label: "Arcade" },
  { id: "OpenWorld", label: "Open World" },
];

export default function GameLibrary() {
  const [query, setQuery] = useState("");
  const [platform, setPlatform] = useState("ALL");
  const [category, setCategory] = useState("ALL");

  const matchPlatform = (g) => platform === "ALL" || g.platform.includes(platform); // "PS4 / PS5" masuk ke dua-duanya
  const matchCategory = (g, c) => c === "ALL" || (g.categories ?? []).includes(c);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    return games.filter(
      (g) => matchPlatform(g) && matchCategory(g, category) && g.title.toLowerCase().includes(q)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [query, platform, category]);

  // jumlah game per kategori (mengikuti filter konsol yang aktif)
  const counts = useMemo(() => {
    const byPlatform = games.filter(matchPlatform);
    return Object.fromEntries(
      CATEGORIES.map((c) => [c.id, byPlatform.filter((g) => matchCategory(g, c.id)).length])
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [platform]);

  const reset = () => {
    setQuery("");
    setPlatform("ALL");
    setCategory("ALL");
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute left-1/2 top-0 h-56 w-2/3 -translate-x-1/2 bg-yellow-400/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl px-6 pb-20 pt-10">
        <Link
          to="/"
          className="group flex w-fit items-center gap-2 rounded-full border border-line bg-ink-950/60 py-2 pl-3 pr-4 text-sm font-medium text-slate-300 transition hover:border-yellow-400/60 hover:text-yellow-300"
        >
          <IconArrowLeft className="h-4 w-4 transition group-hover:-translate-x-0.5" />
          Kembali ke Beranda
        </Link>

        <header className="mt-10">
          <p className="flex w-fit items-center gap-2 text-xs font-semibold uppercase tracking-[0.25em] text-yellow-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-yellow-400" />
            </span>
            Game Library
          </p>
          <h1 className="mt-3 font-display text-4xl font-bold text-white sm:text-5xl">
            Semua Game yang Tersedia
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-400">
            Cari game favoritmu, atau filter berdasarkan konsol dan kategori.
          </p>
        </header>

        {/* Baris 1: pencarian + konsol + counter */}
        <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
          <div className="relative w-full sm:max-w-sm">
            <svg
              className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <circle cx="11" cy="11" r="7" />
              <path d="M20 20l-3.5-3.5" strokeLinecap="round" />
            </svg>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Cari judul game..."
              aria-label="Cari judul game"
              className="h-12 w-full rounded-full border border-line bg-ink-900 pl-11 pr-4 text-sm text-white placeholder:text-slate-600 focus:border-yellow-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/30"
            />
          </div>

          <div
            role="group"
            aria-label="Filter konsol"
            className="inline-flex h-12 items-center gap-1 rounded-full border border-line bg-ink-950/60 p-1.5"
          >
            {PLATFORMS.map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => setPlatform(f.id)}
                aria-pressed={platform === f.id}
                className={`h-full rounded-full px-4 text-xs font-semibold uppercase tracking-wide transition ${
                  platform === f.id
                    ? "bg-linear-to-r from-amber-400 to-yellow-500 text-ink-950"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>

          <p className="text-xs text-slate-500 sm:ml-auto" aria-live="polite">
            {visible.length} dari {games.length} game
          </p>
        </div>

        {/* Baris 2: kategori (scroll horizontal di layar kecil) */}
        <div
          role="group"
          aria-label="Filter kategori"
          className="-mx-6 mt-4 flex gap-2 overflow-x-auto px-6 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0"
        >
          {CATEGORIES.map((c) => {
            const active = category === c.id;
            const empty = c.id !== "ALL" && counts[c.id] === 0;
            return (
              <button
                key={c.id}
                type="button"
                onClick={() => setCategory(c.id)}
                aria-pressed={active}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full border px-4 py-2 text-xs font-medium transition ${
                  active
                    ? "border-yellow-400 bg-yellow-400/10 text-yellow-300"
                    : "border-line bg-ink-950/60 text-slate-400 hover:border-slate-500 hover:text-white"
                } ${empty && !active ? "opacity-50" : ""}`}
              >
                {c.label}
                <span className={`text-[11px] ${active ? "text-yellow-400/80" : "text-slate-600"}`}>
                  {counts[c.id]}
                </span>
              </button>
            );
          })}
        </div>

        {visible.length > 0 ? (
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-4 xl:grid-cols-5">
            {visible.map((game) => (
              <GameCard key={game.title} game={game} className="w-full" />
            ))}
          </div>
        ) : (
          <div className="mt-16 flex flex-col items-center gap-4 text-center">
            <p className="max-w-sm text-sm text-slate-500">
              Belum ada game yang cocok dengan filter ini. Coba kategori lain, atau hubungi kami buat request game.
            </p>
            <button
              type="button"
              onClick={reset}
              className="rounded-full border border-line px-5 py-2 text-xs font-semibold text-slate-300 transition hover:border-yellow-400/60 hover:text-yellow-300"
            >
              Reset filter
            </button>
          </div>
        )}
      </div>
    </main>
  );
}
