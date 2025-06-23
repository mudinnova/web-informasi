import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioNova from "./beranda/tampilan_awal";
import UIUXExperience from "./beranda/UI/UXDesigner";
import Medsos from "./beranda/UI/Medsos";
import FrontEnd from "./beranda/UI/Front-End";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioNova />} />
        <Route path="/UI/UXDesigner" element={<UIUXExperience />} />
        <Route path="/Medsos" element={<Medsos />} />
        <Route path="/Front-End" element={<FrontEnd />} />
      </Routes>
    </Router>
  );
}