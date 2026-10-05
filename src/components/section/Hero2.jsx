"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import GameShowcase from "../ui/GameShowcase";

const trustItems = [
  "Unit Original & Terawat",
  "Proses Sewa Mudah & Cepat",
  "Game Lengkap Update Terbaru",
];

// Foto: Unsplash (gratis untuk pemakaian komersial, tanpa wajib atribusi).
const heroImages = [
  { src: "/images/hero/ps.jpg", alt: "Suasana unit PlayStation 5 siap disewa" },
  { src: "/images/hero/ps2.jpg", alt: "Controller dan headset PlayStation" },
  { src: "/images/hero/ps3.jpg", alt: "Ruang rental PlayStation" },
  { src: "/images/covers/elden-ring.png", alt: "Layar TV menampilkan gameplay PlayStation" },
];

const SLIDE_MS = 5000;

export default function Hero() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const timer = useRef(null);

  const total = heroImages.length;

  const go = useCallback(
    (nextIndex) => setIndex((nextIndex + total) % total),
    [total],
  );
  const next = useCallback(() => go(index + 1), [go, index]);
  const prev = useCallback(() => go(index - 1), [go, index]);

  useEffect(() => {
    if (paused || total < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const id = setInterval(next, SLIDE_MS);
    timer.current = id;
    return () => {
      clearInterval(id);
      timer.current = null;
    };
  }, [next, paused, total]);

  return (
    <section
      id="beranda"
      className="relative isolate flex min-h-120 items-center overflow-hidden md:min-h-140"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocusCapture={() => setPaused(true)}
      onBlurCapture={() => setPaused(false)}
    >
      {heroImages.map((item, i) => (
        <div
          key={item.src}
          className="absolute inset-0 -z-20 transition-opacity duration-1000 ease-out"
          style={{ opacity: i === index ? 1 : 0 }}
          aria-hidden={i !== index}
        >
          <img
            src={item.src}
            alt={item.alt}
            className="h-full w-full object-cover"
            loading={i === 0 ? "eager" : "lazy"}
            decoding="async"
          />
        </div>
      ))}

      <div className="absolute inset-0 -z-10 bg-ink-950/35" />
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-ink-950/85 via-ink-950/10 to-transparent" />
      <div className="absolute inset-0 -z-10 bg-linear-to-t from-ink-950/60 via-transparent to-transparent" />

      <div className="relative mx-auto grid w-full max-w-7xl gap-12 px-6 pt-14 pb-24 md:grid-cols-2 md:items-center md:py-16">
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
              PS4 {""}
            </span>{" "}
            & {""}
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

      {total > 1 && (
        <div className="absolute inset-x-0 bottom-5 z-10 flex items-center justify-center gap-3 md:justify-end md:px-10">
          <button
            type="button"
            onClick={prev}
            aria-label="Gambar sebelumnya"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-ink-950/50 text-white backdrop-blur transition hover:border-yellow-400/60 hover:text-yellow-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M15 6l-6 6 6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="flex items-center gap-2" role="group" aria-label="Pilih gambar hero">
            {heroImages.map((item, i) => (
              <button
                key={item.src}
                type="button"
                aria-label={`Tampilkan gambar ${i + 1}`}
                aria-current={i === index}
                onClick={() => go(i)}
                className="relative h-2.5 w-2.5 rounded-full bg-white/35 transition hover:bg-white/70"
              >
                <span
                  className="absolute inset-0 rounded-full bg-yellow-400 transition-transform duration-500"
                  style={{ transform: i === index ? "scale(1)" : "scale(0)" }}
                />
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={next}
            aria-label="Gambar berikutnya"
            className="flex h-8 w-8 items-center justify-center rounded-full border border-line bg-ink-950/50 text-white backdrop-blur transition hover:border-yellow-400/60 hover:text-yellow-300"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
              <path d="M9 6l6 6-6 6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
