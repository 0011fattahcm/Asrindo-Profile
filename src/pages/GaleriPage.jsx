// src/pages/GalleryPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTopButton";
import { motion } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const images = [
  {
    src: "/img/pemetaan.jpg",
    title: "Pemetaan & Survey Lingkungan",
  },
  { src: "/img/peralatan.jpg", title: "Peralatan Lapangan" },
  {
    src: "/img/konsultasi-dokumen.jpg",
    title: "Konsultasi & Penyusunan Dokumen",
  },
  { src: "/img/perizinan.jpg", title: "Perizinan Lingkungan" },
  { src: "/src/assets/img/profil.jpg", title: "Kegiatan Tim Asrindo" },
  {
    src: "/img/studi dan kajian.png",
    title: "Studi & Kajian Teknis",
  },
  { src: "/img/hero.png", title: "Proyek Lapangan" },
  { src: "/img/kiri.png", title: "Pengawasan & Evaluasi" },
];

export default function GalleryPage() {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <Navbar />

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden text-white animate-fadeInHero">
        <div className="pointer-events-none select-none absolute inset-0 z-0">
          <img
            src="/img/pemetaan.jpg"
            alt="Hero"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[1200px] object-cover opacity-40"
            style={{
              WebkitMaskImage:
                "radial-gradient(55% 55% at 50% 50%, rgba(0,0,0,1) 48%, rgba(0,0,0,0) 100%)",
            }}
          />
          <img
            src="/img/peralatan.jpg"
            alt="Peralatan"
            className="absolute left-[-10%] top-[-14%] w-[48%] max-w-[820px] object-cover opacity-85"
            style={{
              WebkitMaskImage:
                "radial-gradient(60% 60% at 62% 58%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            }}
          />
          <img
            src="/img/perizinan.jpg"
            alt="Perizinan"
            className="absolute right-[-12%] bottom-[-10%] w-[48%] max-w-[820px] object-cover opacity-80"
            style={{
              WebkitMaskImage:
                "radial-gradient(60% 60% at 42% 50%, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 100%)",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/10 to-white/5" />
        </div>

        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#0A1D4A]/70 via-emerald-900/55 to-sky-800/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 z-10 opacity-30 bg-[radial-gradient(70rem_40rem_at_-10%_-20%,#F0C419_12%,transparent_60%)]" />

        <div className="relative z-20 container mx-auto px-6 lg:px-24 py-20 text-center">
          <span className="inline-block text-xs font-semibold tracking-wider bg-white/10 px-3 py-1 rounded-full ring-1 ring-white/30">
            Dokumentasi Lapangan & Proyek
          </span>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold tracking-tight">
            Galeri Kegiatan Asrindo
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-emerald-100 leading-relaxed">
            Dokumentasi kegiatan, peralatan, dan proyek lingkungan yang telah
            kami tangani di berbagai sektor industri di seluruh Indonesia.
          </p>
        </div>
      </section>

      {/* ================= GALLERY GRID ================= */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/40 to-white" />

        <div className="max-w-6xl mx-auto px-6 lg:px-10">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#0A1D4A] mb-3">
              Dokumentasi Proyek & Aktivitas
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Beberapa dokumentasi kegiatan lapangan dan proyek lingkungan yang
              dikerjakan oleh tim profesional PT Asrindo Environt Investama.
            </p>
          </div>

          {/* Grid masonry-like */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-5 [column-fill:_balance] space-y-5">
            {images.map((img, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                viewport={{ once: true }}
                className="relative overflow-hidden rounded-2xl break-inside-avoid shadow-md hover:shadow-xl transition-all duration-500 group"
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                  <p className="text-white font-medium text-sm tracking-wide">
                    {img.title}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
