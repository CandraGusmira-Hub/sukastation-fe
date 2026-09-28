import { useEffect, useState } from "react";

const navLinks = [
  { label: "Beranda", href: "#beranda" },
  { label: "Harga", href: "#harga" },
  { label: "Unit List", href: "#unit-list" },
  { label: "Games", href: "#game" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("beranda");

  // Header jadi solid saat di-scroll + tandai menu sesuai posisi scroll
  useEffect(() => {
    // Urutkan section sesuai urutan di halaman (bukan urutan di navLinks)
    const els = navLinks
      .map((l) => document.getElementById(l.href.slice(1)))
      .filter(Boolean)
      .sort((a, b) => (a.compareDocumentPosition(b) & Node.DOCUMENT_POSITION_FOLLOWING ? -1 : 1));

    let raf = 0;
    const update = () => {
      raf = 0;
      setScrolled(window.scrollY > 12);
      if (!els.length) return;

      // Section aktif = section terakhir yang bagian atasnya sudah melewati garis 35% layar
      const line = window.innerHeight * 0.35;
      let current = els[0].id;
      for (const el of els) {
        if (el.getBoundingClientRect().top <= line) current = el.id;
      }
      // Di dasar halaman, section terakhir (FAQ) yang pendek tetap dianggap aktif
      const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4;
      if (atBottom) current = els[els.length - 1].id;

      setActive(current);
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    window.addEventListener("load", onScroll); // tinggi section bisa berubah setelah gambar termuat
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      window.removeEventListener("load", onScroll);
    };
  }, []);

  // Esc menutup menu mobile
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <header
      className={`sticky top-0 z-50 border-b transition-[background-color,border-color,backdrop-filter] duration-300 ${
        scrolled || open
          ? "border-line bg-ink-950/85 backdrop-blur-md"
          : "border-transparent bg-ink-950/40 backdrop-blur-sm"
      }`}
    >
      <div
        className={`mx-auto flex max-w-7xl items-center justify-between px-6 transition-[padding] duration-300 ${
          scrolled ? "py-3" : "py-4"
        }`}
      >
        {/* Logo */}
        <a
          href="#beranda"
          className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-amber-400 to-yellow-500 font-display text-sm font-bold text-ink-950 transition duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110 group-hover:shadow-[0_0_22px_rgba(251,191,36,0.5)] motion-reduce:transition-none">
            PZ
          </div>
          <div className="leading-tight">
            <p className="font-display text-lg font-extrabold italic text-white transition-colors duration-300 group-hover:text-yellow-300">
              SukaStasion
            </p>
            <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 transition-colors duration-300 group-hover:text-slate-400">
              Rental PS4 &amp; PS5
            </p>
          </div>
        </a>

        {/* Menu desktop */}
        <nav className="hidden items-center gap-8 md:flex" aria-label="Navigasi utama">
          {navLinks.map((link) => {
            const isActive = active === link.href.slice(1);
            return (
              <a
                key={link.label}
                href={link.href}
                aria-current={isActive ? "true" : undefined}
                className={`group relative rounded py-2 text-sm transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 ${
                  isActive ? "text-white" : "text-slate-400 hover:text-white"
                }`}
              >
                {link.label}
                {/* Garis bawah: masuk dari kiri, keluar ke kanan */}
                <span
                  aria-hidden="true"
                  className={`absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-linear-to-r from-amber-400 to-yellow-500 transition-transform duration-300 ease-out motion-reduce:transition-none ${
                    isActive
                      ? "origin-left scale-x-100"
                      : "origin-right scale-x-0 group-hover:origin-left group-hover:scale-x-100"
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* CTA desktop */}
        <a
          href="#harga"
          className="group relative hidden overflow-hidden rounded-full bg-linear-to-r from-amber-400 to-yellow-500 px-5 py-2.5 text-sm font-semibold text-ink-950 transition duration-300 ease-out hover:-translate-y-0.5 hover:shadow-[0_10px_26px_-8px_rgba(251,191,36,0.65)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-300 focus-visible:ring-offset-2 focus-visible:ring-offset-ink-950 active:translate-y-0 motion-reduce:transition-none md:inline-block"
        >
          <span className="relative">Pesan Sekarang</span>
          {/* kilau yang menyapu tombol saat hover */}
          <span
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 -left-full w-1/2 -skew-x-12 bg-white/40 transition-transform duration-700 ease-out group-hover:translate-x-[400%] motion-reduce:hidden"
          />
        </a>

        {/* Tombol hamburger -> X */}
        <button
          type="button"
          onClick={() => setOpen(!open)}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          aria-controls="mobile-menu"
          className="relative -mr-2 h-10 w-10 rounded-lg text-slate-300 transition-colors hover:bg-white/5 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60 md:hidden"
        >
          <span
            className={`absolute left-2.5 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-[13px]"
            }`}
          />
          <span
            className={`absolute left-2.5 top-1/2 h-0.5 w-5 -translate-y-1/2 rounded-full bg-current transition-all duration-200 ${
              open ? "scale-x-0 opacity-0" : ""
            }`}
          />
          <span
            className={`absolute left-2.5 h-0.5 w-5 rounded-full bg-current transition-all duration-300 ${
              open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-[13px]"
            }`}
          />
        </button>
      </div>

      {/* Menu mobile: membuka halus lewat grid-rows */}
      <div
        id="mobile-menu"
        aria-hidden={!open}
        className={`grid transition-[grid-template-rows] duration-300 ease-out md:hidden ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <nav className="flex flex-col px-6 pb-5 pt-1" aria-label="Navigasi seluler">
            {navLinks.map((link, i) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.label}
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}
                  className={`group flex items-center justify-between border-b border-line/60 py-3.5 text-sm transition duration-300 hover:pl-1 ${
                    open ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"
                  } ${isActive ? "text-yellow-300" : "text-slate-300 hover:text-white"}`}
                >
                  {link.label}
                  <span
                    aria-hidden="true"
                    className={`h-1.5 w-1.5 rounded-full bg-yellow-400 transition-all duration-300 ${
                      isActive ? "scale-100 opacity-100" : "scale-0 opacity-0 group-hover:scale-100 group-hover:opacity-100"
                    }`}
                  />
                </a>
              );
            })}
            <a
              href="#harga"
              tabIndex={open ? 0 : -1}
              onClick={() => setOpen(false)}
              className="mt-5 rounded-full bg-linear-to-r from-amber-400 to-yellow-500 px-5 py-3 text-center text-sm font-semibold text-ink-950 transition active:scale-[0.98]"
            >
              Pesan Sekarang
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
}
