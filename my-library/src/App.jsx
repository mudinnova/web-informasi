import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PortfolioNova from "./beranda/tampilan_awal";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PortfolioNova />} />
        
      </Routes>
    </Router>
  );
}