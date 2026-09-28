import { IconInstagram, IconTiktok, IconYoutube } from "../ui/Icons";

// Sama persis dengan menu di Navbar
const links = [
  { label: "Beranda", href: "#beranda" },
  { label: "Harga", href: "#harga" },
  { label: "Unit List", href: "#unit-list" },
  { label: "Games", href: "#game" },
  { label: "FAQ", href: "#faq" },
];

const socials = [
  { label: "Instagram", href: "#", Icon: IconInstagram },
  { label: "TikTok", href: "#", Icon: IconTiktok },
  { label: "YouTube", href: "#", Icon: IconYoutube },
];

// Ganti dengan alamat / nama tempat rental yang sebenarnya, persis seperti di Google Maps
const ADDRESS = "Tanjung Pinang, Kepulauan Riau";
const MAP_QUERY = encodeURIComponent(ADDRESS);

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 lg:grid-cols-[minmax(0,1fr)_320px] lg:gap-16">
        {/* Kiri: brand, menu, sosial */}
        <div className="grid gap-10 sm:grid-cols-[minmax(0,1.4fr)_1fr_1fr]">
          <div>
            <a
              href="#beranda"
              className="group inline-flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60"
            >
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-linear-to-br from-amber-400 to-yellow-500 font-display text-sm font-bold text-ink-950 transition duration-300 ease-out group-hover:-rotate-6 group-hover:scale-110 group-hover:shadow-[0_0_22px_rgba(251,191,36,0.5)] motion-reduce:transition-none">
                PZ
              </div>
              <div className="leading-tight">
                <p className="font-display text-lg font-extrabold italic text-white transition-colors duration-300 group-hover:text-yellow-300">
                  SukaStasion
                </p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500">Rental PS4 &amp; PS5</p>
              </div>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-400">
              Sewa PS4 dan PS5 lengkap dengan game pilihanmu, siap dimainkan di rumah.
            </p>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-slate-500">{ADDRESS}</p>
          </div>

          <nav aria-label="Menu footer">
            <p className="text-sm font-semibold text-white">Menu</p>
            <ul className="mt-4 space-y-3">
              {links.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="group relative inline-block rounded py-0.5 text-sm text-slate-400 transition-colors duration-200 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60"
                  >
                    {l.label}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 -bottom-0.5 h-px origin-right scale-x-0 bg-yellow-400 transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100 motion-reduce:transition-none"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <p className="text-sm font-semibold text-white">Ikuti kami</p>
            <ul className="mt-4 flex gap-3 sm:flex-col sm:gap-3">
              {socials.map(({ label, href, Icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    aria-label={label}
                    className="group inline-flex items-center gap-2.5 rounded text-sm text-slate-400 transition-colors duration-200 hover:text-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60"
                  >
                    <span className="flex h-8 w-8 items-center justify-center rounded-full border border-line transition duration-300 group-hover:-translate-y-0.5 group-hover:border-yellow-400/60 group-hover:bg-yellow-400/10">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="hidden sm:inline">{label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Kanan: Google Maps kotak */}
        <div className="w-full max-w-[320px] lg:justify-self-end">
          <div className="group relative aspect-square overflow-hidden rounded-2xl border border-line bg-ink-900">
            <iframe
              title="Lokasi SukaStasion di Google Maps"
              src={`https://www.google.com/maps?q=${MAP_QUERY}&output=embed`}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
              className="absolute inset-0 h-full w-full border-0 opacity-90 grayscale transition duration-500 group-hover:opacity-100 group-hover:grayscale-0"
            />
          </div>
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${MAP_QUERY}`}
            target="_blank"
            rel="noreferrer"
            className="mt-3 inline-flex items-center gap-2 rounded text-sm text-slate-400 transition-colors hover:text-yellow-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-yellow-400/60"
          >
            Buka di Google Maps
          </a>
        </div>
      </div>

      <p className="border-t border-line py-5 text-center text-xs text-slate-600">
        © {new Date().getFullYear()} SukaStasion. Semua hak dilindungi.
      </p>
    </footer>
  );
}
