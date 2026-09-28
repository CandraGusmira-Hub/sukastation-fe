import { Routes, Route } from "react-router";
import MainLayout from "./components/layouts/MainLayout";
import Home from "./pages/Home";
import GameLibrary from "./pages/GameLibrary";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/games" element={<GameLibrary />} />
      </Route>
    </Routes>
  );
}
