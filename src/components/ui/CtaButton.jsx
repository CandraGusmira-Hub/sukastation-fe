import { IconWhatsapp } from "./Icons";

export default function CtaButton() {
  return (
    <section id="kontak" className="mx-auto max-w-7xl px-6 py-20">
      <div className="relative overflow-hidden rounded-3xl border border-line bg-linear-to-br from-ink-900 to-ink-950 px-8 py-14 sm:px-14">
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_80%_50%,rgba(56,132,255,0.15),transparent_50%)]" />
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-sky-400">Siap Main Sekarang?</p>
        <h2 className="max-w-lg font-display text-3xl font-bold text-white">Jangan Tunda Keseruan!</h2>
        <p className="mt-3 max-w-md text-sm text-slate-400">
          Sewa sekarang dan rasakan pengalaman bermain PlayStation terbaik, kapan saja, di mana saja.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <a
            href="#harga"
            className="rounded-full bg-linear-to-r from-sky-400 to-violet-500 px-7 py-3.5 text-sm font-semibold text-ink-950 transition hover:opacity-90"
          >
            Sewa Sekarang →
          </a>
          <a
            href="https://wa.me/6280000000000"
            className="flex items-center gap-2 rounded-full border border-line px-6 py-3.5 text-sm font-medium text-white transition hover:border-sky-400/60"
          >
            <IconWhatsapp className="h-4 w-4" />
            Hubungi Kami
          </a>
        </div>
      </div>
    </section>
  );
}
