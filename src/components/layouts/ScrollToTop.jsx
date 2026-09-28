import { useEffect } from "react";
import { useLocation } from "react-router";

// Tiap pindah halaman: scroll balik ke atas.
// Kalau URL-nya punya hash (mis. "/#harga"), scroll ke section itu.
export default function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const id = hash.slice(1);
      requestAnimationFrame(() => document.getElementById(id)?.scrollIntoView());
      return;
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}
