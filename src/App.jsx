import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import LoadingScreen from "./components/LoadingScreen";
import HomePage from "./pages/HomePage";
import ProfilePage from "./pages/ProfilPage";
import LayananPage from "./pages/LayananPage";
import PelatihanPage from "./pages/PelatihanPage";
import KontakPage from "./pages/KontakPage";
import RiwayatPage from "./pages/RiwayatPage";
import TradingChemicalPage from "./pages/TradingChemicalPage";
import GalleryPage from "./pages/GaleriPage";
import "aos/dist/aos.css";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <LoadingScreen />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profil" element={<ProfilePage />} />
        <Route path="/layanan" element={<LayananPage />} />
        <Route path="/pelatihan" element={<PelatihanPage />} />
        <Route path="/kontak" element={<KontakPage />} />
        <Route path="/riwayat-kerja" element={<RiwayatPage />} />
        <Route path="/trading-chemical" element={<TradingChemicalPage />} />
        <Route path="/galeri" element={<GalleryPage />} />
      </Routes>
    </Router>
  );
}

export default App;
