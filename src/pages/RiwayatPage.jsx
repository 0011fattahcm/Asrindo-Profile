// src/pages/RiwayatKerjaPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import BackToTopButton from "../components/BackToTopButton";
import AOS from "aos";
import "aos/dist/aos.css";

const ctaPhoto = "/img/peralatan.jpg";

const projects = [
  { title: "Pengerjaan Dokumen UKL-UPL", client: "PT Damai Sekawan Marine" },
  {
    title:
      "Penyusunan Dokumen UKL-UPL Pengelolaan Sludge Paper, Fly Ash, dan LB3",
    client: "PT Final Waste Technology",
  },
  {
    title: "Penyusunan Kajian Teknis Terminal Untuk Kepentingan Sendiri (TUKS)",
    client: "PT Damai Sekawan Marine",
  },
  { title: "Penerbitan Izin SPPL Bengkel Reparasi", client: "Syifa Jaya" },
  { title: "Pembuatan Peta Batimetri", client: "PT Damai Sekawan Marine" },
  { title: "Pengerjaan Dokumen UKL-UPL", client: "PT Berlian Sarana Utama" },
  {
    title: "Penyusunan Kajian Teknis Terminal Untuk Kepentingan Sendiri (TUKS)",
    client: "PT Bahtera Kharisma Abadi",
  },
  {
    title: "Penyusunan Laporan Pemantauan dan Pengelolaan Lingkungan Hidup",
    client: "PT Sierad Produce, Tbk",
  },
  {
    title: "Penyusunan Laporan Teknis IPLC dan LB3",
    client: "PT Sierad Produce, Tbk",
  },
  { title: "Pengerjaan Dokumen UKL-UPL", client: "PT Mario Betiga Sejahtera" },
  {
    title: "Pengerjaan SLF (Sertifikat Laik Fungsi)",
    client: "PT Pupuk Sriwidjaja Palembang",
  },
  { title: "Penyusunan UKL-UPL Peternakan", client: "Suparmin" },
  {
    title: "Perpanjangan IUP OP Pertambangan Batuan Andesit",
    client: "PT Cahaya Fajar Sodiq",
  },
  {
    title: "Penyusunan UKL-UPL Perumahan",
    client: "PT Konsumen Perumahan Nasional",
  },
  {
    title: "Pengurusan IUP OP Pertambangan Pasir Darat",
    client: "CV Empat Pilar Utama",
  },
  {
    title: "Penyusunan Persetujuan Teknis (Pertek) Izin Pemanfaatan Limbah B3",
    client: "PT Paramesti Maju Karya",
  },
  {
    title: "Perpanjangan IUP OP Pertambangan Batuan Andesit Blok 2–3",
    client: "PT Gilgal Batu Alam Lestari",
  },
  {
    title: "Pengurusan IUP OP Pertambangan Batuan Andesit",
    client: "PT Batu Alam Lestari",
  },
  {
    title: "Rencana Kerja Anggaran Biaya Batuan Andesit",
    client: "PT Gilgal Batu Alam Lestari (Blok 1–3)",
  },
  {
    title: "Penyusunan Dokumen UKL-UPL Filling Line / Packaging Minyak Goreng",
    client: "PT Industri Nabati Lestari – Plant Tanjung Perak",
  },
  {
    title:
      "Penyusunan Kajian Teknis LB3 Filling Line / Packaging Minyak Goreng",
    client: "PT Industri Nabati Lestari – Tanjung Perak",
  },
  {
    title: "Penyusunan Dokumen Pertimbangan Teknis Air Limbah",
    client: "PT Koperumnas – Tangerang, Banten",
  },
  {
    title: "Penyusunan UKL-UPL & Pengurusan PKPLH Pemanfaatan Karbon dan HHBK",
    client: "PT Global Alam Lestari – Sumatera Selatan",
  },
];

export default function RiwayatKerjaPage() {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white min-h-screen text-gray-800">
      <Navbar />

      {/* ================= HERO (multi-image blend + overlay transparan) ================= */}
      <section className="relative overflow-hidden text-white animate-fadeInHero">
        {/* Layer foto saling blend (pakai mask), z-0 (di bawah overlay) */}
        <div className="pointer-events-none select-none absolute inset-0 z-0">
          {/* center */}
          <img
            src="/img/pemetaan.jpg"
            alt=""
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[1200px] object-cover opacity-40"
            style={{
              WebkitMaskImage:
                "radial-gradient(55% 55% at 50% 50%, rgba(0,0,0,1) 48%, rgba(0,0,0,0) 100%)",
            }}
            draggable={false}
          />
          {/* top-left */}
          <img
            src="/img/peralatan.jpg"
            alt=""
            className="absolute left-[-10%] top-[-14%] w-[48%] max-w-[820px] object-cover opacity-85"
            style={{
              WebkitMaskImage:
                "radial-gradient(60% 60% at 62% 58%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            }}
            draggable={false}
          />
          {/* top-right */}
          <img
            src="/img/perizinan.jpg"
            alt=""
            className="absolute right-[-12%] top-[-16%] w-[46%] max-w-[800px] object-cover opacity-85 rotate-1"
            style={{
              WebkitMaskImage:
                "radial-gradient(62% 62% at 40% 42%, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 100%)",
            }}
            draggable={false}
          />
          {/* bottom-left */}
          <img
            src="/img/konsultasi-dokumen.jpg"
            alt=""
            className="absolute left-[-12%] bottom-[-18%] w-[44%] max-w-[760px] object-cover opacity-85 -rotate-1"
            style={{
              WebkitMaskImage:
                "radial-gradient(58% 58% at 55% 48%, rgba(0,0,0,1) 56%, rgba(0,0,0,0) 100%)",
            }}
            draggable={false}
          />
          {/* bottom-right */}
          <img
            src="/img/profil.jpg"
            alt=""
            className="absolute right-[-8%] bottom-[-16%] w-[42%] max-w-[720px] object-cover opacity-80"
            style={{
              WebkitMaskImage:
                "radial-gradient(60% 60% at 42% 50%, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 100%)",
            }}
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/16 to-white/10" />
        </div>

        {/* Overlay transparan */}
        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#0A1D4A]/70 via-emerald-900/55 to-sky-800/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 z-10 opacity-30 bg-[radial-gradient(70rem_40rem_at_-10%_-20%,#F0C419_12%,transparent_60%)]" />

        {/* Text overlay */}
        <div className="relative z-20 container mx-auto px-6 lg:px-24 py-20 text-center">
          <span
            data-aos="fade-up"
            data-aos-delay="100"
            className="inline-block text-xs font-semibold tracking-wider bg-white/10 px-3 py-1 rounded-full ring-1 ring-white/30"
          >
            Mewujudkan Sektor Lingkungan yang Lebih Baik
          </span>
          <h1
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-4 text-4xl lg:text-5xl font-extrabold tracking-tight"
          >
            Riwayat Kerja Kami
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="300"
            className="mt-4 max-w-3xl mx-auto text-emerald-100"
          >
            Rangkaian proyek lingkungan, perizinan, dan pengelolaan sumber daya
            alam yang telah ditangani oleh PT Asrindo Environt Investama di
            berbagai sektor industri.
          </p>
        </div>
      </section>

      {/* ================= TIMELINE SECTION ================= */}
      <section className="relative overflow-hidden py-24" data-aos="fade-up">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/40 to-white" />

        <div
          className="relative max-w-6xl mx-auto px-6 lg:px-12"
          data-aos="fade-up"
          data-aos-delay="150"
        >
          <div className="relative border-l-4 border-blue-100">
            {projects.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 60, scale: 0.98 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: true, amount: 0.2 }}
                className="mb-12 ml-8"
              >
                <span className="absolute -left-[27px] flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 text-blue-600 shadow-md ring-2 ring-white">
                  <Briefcase size={20} />
                </span>

                <div className="bg-white shadow-sm hover:shadow-lg rounded-xl border border-blue-50 transition-all duration-500 hover:-translate-y-1 hover:bg-blue-50/30 p-6">
                  <h3 className="text-lg font-semibold text-[#0A1D4A] mb-1">
                    {item.title}
                  </h3>
                  <p className="text-blue-600 text-sm font-medium mb-2">
                    {item.client}
                  </p>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    Proyek ini merupakan bagian dari komitmen kami untuk
                    memberikan solusi terbaik dalam pengelolaan lingkungan hidup
                    dan peningkatan kualitas sektor industri di Indonesia.
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
     CTA: KOLABORASI (untuk halaman Riwayat)
   ===================================================== */}
      <section
        className="relative text-white"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="absolute inset-0">
          <img
            src={ctaPhoto}
            alt="Kegiatan lapangan Asrindo"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1D4A]/90 via-[#1445b8]/70 to-emerald-800/70" />
          <div className="absolute inset-0 bg-[radial-gradient(80rem_50rem_at_center,transparent_40%,rgba(0,0,0,0.15))]" />
        </div>

        <div className="relative container mx-auto px-6 lg:px-24 py-16 text-center">
          <h3 className="text-3xl font-extrabold tracking-tight">
            Percayakan Proyek Lingkungan Anda kepada Kami
          </h3>
          <p className="mt-3 text-emerald-50 max-w-2xl mx-auto">
            Dengan pengalaman panjang di berbagai sektor, PT Asrindo Environt
            Investama siap menjadi mitra profesional Anda dalam pengelolaan
            lingkungan, perizinan, serta implementasi teknis di lapangan.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:asrindoenvirontinvestama@gmail.com"
              className="inline-block px-6 py-3 rounded-xl font-semibold shadow-lg bg-gradient-to-r from-yellow-400 to-yellow-300 text-emerald-900 hover:scale-105 transform transition"
            >
              Hubungi Kami
            </a>
            <a
              href="/#services"
              className="inline-block px-6 py-3 rounded-xl font-semibold border border-white/70 hover:bg-white/10"
            >
              Lihat Layanan
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTopButton />
    </div>
  );
}
