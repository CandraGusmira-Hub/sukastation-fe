import Hero from "../components/section/Hero3";
import StatsBar from "../components/section/Statsbar";
import PriceList from "../components/section/PriceList";
import UnitTimer from "../components/section/UnitTimer";
import GameList from "../components/section/GameList";
import Navbar from "../components/layouts/Navbar";
import Footer from "../components/layouts/Footer";
import Faq from "../components/section/FaqSection";
import EventInfo from "../components/section/EventInfo";

// Halaman utama: cuma section-section-nya saja.
// Navbar & Footer dipasang di MainLayout, jadi tidak ada di sini.
export default function Home() {
  return (
    <>
    <Navbar/>
      <Hero />
      <StatsBar />
      <EventInfo/>
      <PriceList />
      <UnitTimer />
      <GameList />
      <Faq/>
    <Footer/>
    </>
  );
}
