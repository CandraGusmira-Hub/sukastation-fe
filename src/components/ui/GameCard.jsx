import { useState } from "react";
import { IconGamepad } from "./Icons";

// `className` dipakai untuk mengatur lebar kartu dari luar:
// - di carousel GameList: "w-44 shrink-0 snap-start sm:w-52"
// - di grid GameLibrary: "w-full"
export default function GameCard({ game, className = "" }) {
  const [imgError, setImgError] = useState(false);
  const hasImage = Boolean(game.image) && !imgError;

  return (
    <div className={`group ${className}`}>
      <div className="relative flex aspect-3/4 flex-col items-center justify-center overflow-hidden rounded-xl border border-line bg-linear-to-br from-ink-800 to-ink-900 transition-all duration-300 group-hover:-translate-y-1 group-hover:border-yellow-400/60 group-hover:shadow-xl group-hover:shadow-yellow-500/20">
        {hasImage ? (
          <>
            <img
              src={game.image}
              alt={game.title}
              onError={() => setImgError(true)}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
            {/* gradient tipis biar badge platform tetap kebaca di atas cover art */}
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-ink-950/80 via-transparent to-transparent" />
          </>
        ) : (
          <>
            <div className="absolute h-24 w-24 rounded-full bg-yellow-400/10 blur-2xl transition-opacity duration-300 group-hover:bg-yellow-400/20" />
            <IconGamepad className="relative h-10 w-10 text-slate-700 transition-colors duration-300 group-hover:text-yellow-400/50" />
          </>
        )}

        <span className="absolute left-3 top-3 rounded-full bg-ink-950/80 px-2.5 py-1 text-[10px] font-medium text-slate-300 backdrop-blur">
          {game.platform}
        </span>
      </div>
      <p className="mt-3 line-clamp-2 min-h-[2.5rem] text-sm font-medium text-white transition-colors group-hover:text-yellow-300">
        {game.title}
      </p>
    </div>
  );
}
