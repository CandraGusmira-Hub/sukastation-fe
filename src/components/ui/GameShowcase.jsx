import { useState } from "react";

// Taruh file cover asli di folder public/covers/ (buat foldernya kalau belum ada),
// lalu isi "image" dengan path-nya. Hanya pakai cover yang memang berhak kamu tampilkan.
const games = [
  { title: "UFC 6", platform: "PS4 / PS5", image: "/images/covers/ufc6.png" },
  { title: "EA Sports FC 27", platform: "PS5", image: "/images/covers/fc27.png" },
  { title: "F1", platform: "PS5", image: "/images/covers/f1.png" },
  { title: "Elden Ring", platform: "PS5", image: "/images/covers/elden-ring.png" },
  { title: "Assasins Creed Mirage", platform: "PS5", image: "/images/covers/assasinscreed.png" },
];

// Gaya tiap kartu berdasarkan jarak (offset) dari kartu yang sedang aktif/fokus
const OFFSET_STYLE = {
  "-2": "-translate-x-56 -rotate-12 scale-[0.7] opacity-70 z-10",
  "-1": "-translate-x-24 -rotate-6 scale-[0.85] opacity-80 z-20",
  0: "translate-x-0 rotate-0 scale-110 opacity-100 z-30",
  1: "translate-x-24 rotate-6 scale-[0.85] opacity-70 z-20",
  2: "translate-x-56 rotate-12 scale-[0.7] opacity-40 z-10",
};
 
export default function GameShowcase() {
  const [active, setActive] = useState(2);
  const n = games.length;
 
  return (
    <div className="relative mx-auto hidden h-140 w-full max-w-lg md:block">
      {games.map((game, i) => {
        let offset = i - active;
        if (offset > n / 2) offset -= n;
        if (offset < -n / 2) offset += n;
        const isActive = offset === 0;
 
        return (
          <button
            key={game.title}
            type="button"
            onClick={() => setActive(i)}
            aria-label={`Tampilkan ${game.title}`}
            className={`absolute inset-0 m-auto aspect-3/4 w-64 overflow-hidden rounded-2xl border border-line shadow-2xl shadow-black/50 transition-all duration-500 ease-out ${OFFSET_STYLE[offset]}`}
          >
            <img
              src={game.image}
              alt={game.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
 
            {/* Scrim gelap di bawah supaya judul & badge tetap kebaca di atas cover apa pun */}
            <div className="absolute inset-0 bg-linear-to-t from-ink-950/90 via-ink-950/5 to-transparent" />
 
            {isActive && (
              <span className="absolute left-3 top-3 inline-flex w-fit items-center gap-1 rounded-full bg-white px-3 py-1 text-xs font-bold text-ink-950">
                {game.platform}
              </span>
            )}
 
            <p className="absolute inset-x-3 bottom-3 font-display text-base font-bold leading-tight text-white drop-shadow">
              {game.title}
            </p>
          </button>
        );
      })}
    </div>
  );
}
