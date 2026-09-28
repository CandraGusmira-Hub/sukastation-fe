import { Outlet } from "react-router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";

// Navbar & Footer dipasang sekali di sini, halaman-halaman (Home, GameLibrary, dst.)
// tampil di posisi <Outlet />.
export default function MainLayout() {
  return (
    <div className="min-h-screen bg-ink-950 font-sans text-white">
      <ScrollToTop />
      <Outlet />
    </div>
  );
}
