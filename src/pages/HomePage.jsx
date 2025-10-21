// src/pages/HomePage.jsx
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import bgPemetaan from "/img/pemetaan.jpg";
import { ChevronDown } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

// Hook: deteksi scroll untuk shadow navbar
function useScrolled() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

function PhoneIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 3.1 5.18 2 2 0 0 1 5 3h3a2 2 0 0 1 2 1.72c.12.9.33 1.77.63 2.61a2 2 0 0 1-.45 2.11l-1.2 1.2a16 16 0 0 0 6.72 6.72l1.2-1.2a2 2 0 0 1 2.11-.45c.84.3 1.71.51 2.61.63A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
function MailIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M4 4h16v16H4z" />
      <path d="M22 6 12 13 2 6" />
    </svg>
  );
}
function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3a5 5 0 1 1 0 10 5 5 0 0 1 0-10zm6-1.25a1.25 1.25 0 1 1 0 2.5 1.25 1.25 0 0 1 0-2.5z" />
    </svg>
  );
}
function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M22 12a10 10 0 1 0-11.6 9.9v-7H7.9V12h2.5V9.8c0-2.5 1.5-3.9 3.7-3.9 1.1 0 2.2.2 2.2.2v2.4h-1.3c-1.3 0-1.7.8-1.7 1.6V12h2.9l-.46 2.9h-2.4v7A10 10 0 0 0 22 12z" />
    </svg>
  );
}
function YoutubeIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.6 3.5 12 3.5 12 3.5s-7.6 0-9.4.6A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.8.6 9.4.6 9.4.6s7.6 0 9.4-.6a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8zM9.8 15.5V8.5l6.2 3.5-6.2 3.5z" />
    </svg>
  );
}
function TwitterIcon() {
  return (
    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor">
      <path d="M22 5.8c-.7.3-1.4.5-2.2.6.8-.5 1.3-1.1 1.6-2-.8.5-1.6.8-2.5 1a3.6 3.6 0 0 0-6.1 3.2A10.3 10.3 0 0 1 3 5.2a3.6 3.6 0 0 0 1.1 4.8c-.6 0-1.2-.2-1.7-.5a3.6 3.6 0 0 0 2.9 3.6 3.7 3.7 0 0 1-1.6.1 3.6 3.6 0 0 0 3.4 2.6A7.3 7.3 0 0 1 2 18c.6.4 2.5.8 4.5.8 5.4 0 9.7-3.7 9.7-8.4v-.4c.7-.5 1.3-1.1 1.8-1.8z" />
    </svg>
  );
}

export default function HomePage() {
  const [open, setOpen] = React.useState(false);
  const scrolled = useScrolled();

  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true, startEvent: "DOMContentLoaded" });
    AOS.refresh(); // ✅ penting supaya AOS tahu elemen hero sudah ready
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <BackToTopButton />
      {/* HERO */}
      <section
        data-aos="fade-up"
        data-aos-delay="100"
        className="relative overflow-hidden animate-fadeInUp"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-[#FFF4CF] via-white to-white" />
        <svg
          aria-hidden
          className="absolute -left-16 -top-10 w-[44rem] h-[44rem] text-[#0E7A5A]/[0.06]"
          viewBox="0 0 200 200"
        >
          <defs>
            <pattern
              id="dots"
              x="0"
              y="0"
              width="10"
              height="10"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="1" cy="1" r="1" fill="currentColor" />
            </pattern>
          </defs>
          <rect width="200" height="200" fill="url(#dots)" />
        </svg>

        <div className="relative container mx-auto px-26 py-6 lg:py-6 grid lg:grid-cols-12 gap-10 items-center">
          {/* Kiri: teks */}
          <div
            className="lg:col-span-7 pt-2 mb-20"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <span className="inline-flex text-sm font-semibold text-[#0A1D4A] bg-[#FFE8A3] px-3 py-1 rounded-md">
              Sejak 2020 - Konsultan Lingkungan
            </span>

            <h1 className="mt-5 text-4xl lg:text-5xl font-extrabold leading-tight text-[#0A1D4A]">
              Mewujudkan Sektor Lingkungan{" "}
              <span className="relative">yang Lebih Baik</span>
            </h1>
            <h2 className="mt-5 text-2xl lg:text-2xl font-bold leading-tight text-emerald-900">
              <Typewriter
                words={[
                  "Mendukung pembangunan berkelanjutan",
                  "Memberi layanan terbaik di bidang lingkungan hidup",
                  "Berkolaborasi dengan tenaga ahli profesional",
                ]}
                loop={true}
                cursor
                cursorStyle="|"
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1500}
              />
            </h2>

            <p className="mt-6 text-md text-justify text-gray-700 max-w-2xl">
              PT Asrindo Environt Investama adalah perusahaan konsultan
              lingkungan yang menyediakan solusi menyeluruh, mulai dari
              peralatan hingga pendampingan izin usaha. Kami menangani laporan
              pemantauan, pemetaan topografi–batimetri, serta pengkajian
              lingkungan hidup dan bawah laut. Seluruh layanan didukung tenaga
              ahli profesional dan bersertifikat dari berbagai disiplin ilmu.
            </p>

            <div className="mt-8 mb-5 flex flex-wrap gap-4">
              <a
                href="#services"
                className="px-24 py-3 rounded-lg font-semibold shadow-sm transition bg-[#0A1D4A] text-white hover:bg-[#1445b8] focus:ring-4 focus:ring-[#0E7A5A]/30"
              >
                Layanan Kami
              </a>
              <a
                href="#contact"
                className="px-24 py-3 rounded-lg font-medium transition border-2 border-[#0A1D4A] text-[#0A1D4A] hover:bg-[#91c5f0] focus:ring-4 focus:ring-[#0E7A5A]/20"
              >
                Contact Us
              </a>
            </div>
          </div>

          {/* Kanan: gambar hero dengan highlight gradient */}
          <div
            className="lg:col-span-5 lg:justify-self-end mb-16"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="relative">
              {/* background gradient highlight */}
              <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-tr from-[#F0C419]/50 via-[#FFD86A]/30 to-transparent blur-3xl opacity-80" />

              {/* gambar utama */}
              <img
                src="/img/hero.png"
                alt="Hero"
                className="relative w-full transform -translate-y-6"
              />
            </div>
          </div>
        </div>
      </section>

      {/* STRIP KEUNGGULAN 3 KOLOM */}
      <section id="benefits" className="relative -mt-16 z-20">
        <div className="container mx-auto px-24 grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Profesional & Berpengalaman",
              desc: "Didukung tenaga ahli sesuai bidang dengan jam terbang tinggi pada dokumen dan implementasi lingkungan.",
              gradient: "from-emerald-100 to-teal-50",
              textColor: "text-emerald-800",
              icon: <ShieldIcon className="text-emerald-600" />,
            },
            {
              title: "Transparan & Fleksibel",
              desc: "Sistem kerja transparan, adil, dan fleksibel—mengutamakan solusi dan kesesuaian regulasi.",
              gradient: "from-yellow-100 to-orange-50",
              textColor: "text-yellow-800",
              icon: <ScaleIcon className="text-yellow-600" />,
            },
            {
              title: "Berorientasi Regulasi",
              desc: "Selaras peraturan perundang-undangan dan prinsip pembangunan berkelanjutan.",
              gradient: "from-blue-100 to-indigo-50",
              textColor: "text-blue-800",
              icon: <LawIcon className="text-blue-600" />,
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`relative rounded-xl shadow-md p-6 bg-gradient-to-br ${item.gradient} hover:shadow-lg transition`}
              data-aos="zoom-in"
              data-aos-delay={idx * 150}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white shadow">
                  {item.icon}
                </div>
                <div>
                  <h3 className={`font-semibold text-lg ${item.textColor}`}>
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-gray-700 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* LAYANAN UTAMA */}
      <section
        id="services"
        className="relative bg-gradient-to-b from-white via-emerald-50/60 to-white overflow-hidden"
      >
        {/* Pattern dots background */}
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_1px_1px,#0A1D4A20,transparent_1px)] bg-[length:24px_24px]" />

        {/* Radial highlight */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-emerald-100/40 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <h2
            data-aos="fade-up"
            className="text-3xl font-extrabold text-[#0A1D4A] text-center"
          >
            Layanan Kami
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="100"
            className="mt-3 text-gray-600 text-center max-w-2xl mx-auto"
          >
            PT Asrindo Environt Investama menyediakan layanan terpadu di bidang
            lingkungan—mulai dari konsultasi, kajian, pembangunan instalasi,
            perizinan hingga pemetaan, didukung tenaga ahli profesional.
          </p>

          {/* Grid 5 layanan — mosaic */}
          <div className="mt-12">
            {/* Desktop: 6 kolom → 3 atas, 2 bawah (tengah) */}
            <div className="hidden lg:grid grid-cols-6 gap-6 auto-rows-[14rem]">
              {[
                {
                  title: "Konsultasi & Dokumen",
                  desc: "Penyusunan AMDAL, UKL-UPL, DPLH, RKL-RPL, hingga pemantauan & pelaporan rutin.",
                  img: "/img/konsultasi-dokumen.jpg",
                  overlay: "from-[#0A1D4A]/85 via-[#0A1D4A]/35 to-transparent",
                },
                {
                  title: "Studi & Kajian",
                  desc: "Studi kelayakan, KLHS, geoteknik, hidrogeologi, hingga kajian kelautan & pertambangan.",
                  img: "/img/studi dan kajian.png",
                  overlay: "from-[#0D3B66]/85 via-[#0D3B66]/35 to-transparent",
                },
                {
                  title: "Pembangunan & Peralatan",
                  desc: "Unit pengolahan limbah, WTP, insinerator, hingga penyediaan peralatan lingkungan.",
                  img: "/img/peralatan.jpg",
                  overlay: "from-[#134E6F]/85 via-[#134E6F]/35 to-transparent",
                },
                {
                  title: "Izin & Sertifikat",
                  desc: "Pendampingan OSS, NIB, SLF, IMB, PKP, NPWP, BPJS, dan perizinan teknis lainnya.",
                  img: "/img/perizinan.jpg",
                  overlay: "from-[#1F4F8A]/85 via-[#1F4F8A]/35 to-transparent",
                },
                {
                  title: "Pemetaan",
                  desc: "Pemetaan topografi, batimetri, remote sensing, serta kartografi digital.",
                  img: "/img/pemetaan.jpg",
                  overlay: "from-[#2A6F97]/85 via-[#2A6F97]/35 to-transparent",
                },
              ].map((item, i) => {
                // 3 kartu atas (1–3), 2 kartu bawah (tengah) (4–5)
                const pos = [
                  "col-start-1 col-span-2 row-start-1", // 0
                  "col-start-3 col-span-2 row-start-1", // 1
                  "col-start-5 col-span-2 row-start-1", // 2
                  "col-start-2 col-span-2 row-start-2", // 3
                  "col-start-4 col-span-2 row-start-2", // 4
                ][i];

                return (
                  <div
                    data-aos="fade-up"
                    data-aos-delay={i * 150}
                    key={i}
                    className={`relative ${pos}`}
                  >
                    <div className="group relative h-full rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ease-out">
                      {/* Foto memenuhi cell (tinggi seragam dari auto-rows) */}
                      <img
                        src={item.img}
                        alt={item.title}
                        className="w-full h-full object-cover transform group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                      />
                      {/* Overlay biru variatif */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t ${item.overlay}`}
                      />
                      {/* Copy */}
                      <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                        <h3 className="font-semibold text-xl leading-snug drop-shadow-sm">
                          {item.title}
                        </h3>
                        <p className="mt-1 text-sm text-white/95 leading-relaxed">
                          {item.desc}
                        </p>
                      </div>
                      {/* Outline hover */}
                      <div className="absolute inset-0 rounded-2xl ring-0 ring-white/0 group-hover:ring-1 group-hover:ring-white/20 transition-all duration-500" />
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tablet & Mobile: grid biasa */}
            <div className="grid lg:hidden gap-6 sm:grid-cols-2 md:grid-cols-3">
              {[
                {
                  title: "Konsultasi & Dokumen",
                  desc: "Penyusunan AMDAL, UKL-UPL, DPLH, RKL-RPL, hingga pemantauan & pelaporan rutin.",
                  img: "/img/konsultasi-dokumen.jpg",
                },
                {
                  title: "Studi & Kajian",
                  desc: "Studi kelayakan, KLHS, geoteknik, hidrogeologi, hingga kajian kelautan & pertambangan.",
                  img: "/img/studi dan kajian.png",
                },
                {
                  title: "Pembangunan & Peralatan",
                  desc: "Unit pengolahan limbah, WTP, insinerator, hingga penyediaan peralatan lingkungan.",
                  img: "/img/peralatan.jpg",
                },
                {
                  title: "Izin & Sertifikat",
                  desc: "Pendampingan OSS, NIB, SLF, IMB, PKP, NPWP, BPJS, dan perizinan teknis lainnya.",
                  img: "/img/perizinan.jpg",
                },
                {
                  title: "Pemetaan",
                  desc: "Pemetaan topografi, batimetri, remote sensing, serta kartografi digital.",
                  img: "/img/pemetaan.jpg",
                },
              ].map((item, i) => (
                <div key={i} className="relative group">
                  <div className="aspect-square rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-500 ease-out">
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-full object-cover transform group-hover:scale-[1.04] transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0A1D4A]/80 via-[#0A1D4A]/30 to-transparent" />
                    <div className="absolute inset-0 flex flex-col justify-end p-5 text-white">
                      <h3 className="font-semibold text-lg leading-snug">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm text-white/95 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION ANGKA / STATISTIK */}
      <section id="stats" className="relative overflow-hidden">
        {/* Background pattern + gradient */}
        {/* BG gradient + tekstur */}
        <div className="absolute inset-0">
          {/* gradient dasar */}
          <div className="absolute inset-0 bg-gradient-to-b from-white via-sky-50/60 to-emerald-50/50" />

          {/* mesh texture halus */}
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(circle_at_20%_20%,#93c5fd20,transparent_40%),radial-gradient(circle_at_80%_30%,#34d39920,transparent_40%),radial-gradient(circle_at_50%_80%,#60a5fa20,transparent_40%)]" />

          {/* grid tipis */}
          <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#0A1D4A10_1px,transparent_1px),linear-gradient(to_bottom,#0A1D4A10_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(1200px_500px_at_20%_0%,#38bdf830,transparent),radial-gradient(900px_400px_at_80%_100%,#0ea5e930,transparent)]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
            {/* Judul & pengantar */}
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 mb-12">
              {/* Kiri: judul */}
              <h2
                data-aos="fade-right"
                className="flex-1 text-3xl lg:text-4xl font-extrabold text-[#0A1D4A]"
              >
                Bukti Nyata Kepercayaan & Dedikasi Kami
              </h2>

              {/* Kanan: pengantar */}
              <p
                data-aos="fade-left"
                data-aos-delay="150"
                className="flex-1 text-gray-600 text-justify max-w-xl"
              >
                Sejak berdiri, PT Asrindo Environt Investama telah berkembang
                dengan layanan konsisten, tenaga ahli profesional, dan cakupan
                yang semakin luas di bidang lingkungan.
              </p>
            </div>
          </div>

          {/* Grid statistik */}
          <div data-aos="fade-up" className="grid sm:grid-cols-3 gap-8">
            {/* Tahun */}
            <StatCard
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  {/* Kalender */}
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                  <line x1="16" y1="2" x2="16" y2="6" />
                  <line x1="8" y1="2" x2="8" y2="6" />
                  <line x1="3" y1="10" x2="21" y2="10" />
                </svg>
              }
              numberEnd={2020}
              label="Tahun Mulai Beroperasi"
            />

            {/* Pelatihan */}
            <StatCard
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  {/* Modul grid */}
                  <rect x="4" y="4" width="6" height="6" />
                  <rect x="14" y="4" width="6" height="6" />
                  <rect x="4" y="14" width="6" height="6" />
                  <rect x="14" y="14" width="6" height="6" />
                </svg>
              }
              numberEnd={100}
              suffix="+"
              label="Jenis Pelatihan Kompetensi"
            />

            {/* Layanan */}
            <StatCard
              icon={
                <svg
                  className="w-8 h-8"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  {/* Globe */}
                  <circle cx="12" cy="12" r="10" />
                  <path d="M2 12h20M12 2a15.3 15.3 0 010 20M12 2a15.3 15.3 0 000 20" />
                </svg>
              }
              numberEnd={30}
              suffix="+"
              label="Ruang Lingkup Layanan"
            />
          </div>
        </div>
      </section>

      {/* SECTION KERJASAMA */}
      <section id="partners" className="relative bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2
            data-aos="fade-up"
            className="text-3xl font-extrabold text-[#0A1D4A]"
          >
            KERJASAMA
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-3 text-gray-600 max-w-2xl mx-auto"
          >
            PT Asrindo Environt Investama telah dipercaya oleh berbagai
            institusi ternama dalam kolaborasi serta dukungan kegiatan
            lingkungan.
          </p>

          {/* Slider logo */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="relative mt-10 overflow-hidden"
          >
            <div className="flex animate-scroll-x space-x-12">
              {[
                "logo1.png",
                "logo2.png",
                "logo3.png",
                "logo4.png",
                "logo5.png",
                "logo6.png",
                "logo7.png",
                "logo8.png",
                "logo9.png",
                "logo10.png",
                "logo11.png",
              ].map((logo, i) => (
                <div
                  key={i}
                  className="group flex-shrink-0 flex items-center justify-center h-24 w-40"
                >
                  <img
                    src={`/logo/${logo}`}
                    alt={`Logo ${i + 1}`}
                    className="h-24 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
                  />
                </div>
              ))}

              {/* Duplikat biar looping mulus */}
              {[
                "logo1.png",
                "logo2.png",
                "logo3.png",
                "logo4.png",
                "logo5.png",
                "logo6.png",
                "logo7.png",
                "logo8.png",
                "logo9.png",
                "logo10.png",
                "logo11.png",
              ].map((logo, i) => (
                <div
                  key={`dup-${i}`}
                  className="group flex-shrink-0 flex items-center justify-center h-24 w-40"
                >
                  <img
                    src={`/logo/${logo}`}
                    alt={`Logo ${i + 1}`}
                    className="h-24 w-auto object-contain grayscale transition duration-300 group-hover:grayscale-0"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* RIWAYAT KERJA */}
      <section
        id="portfolio"
        className="relative bg-gradient-to-b from-white to-emerald-50/40 py-16"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
          <h2
            data-aos="fade-up"
            className="text-3xl font-extrabold text-[#0A1D4A] text-center"
          >
            Riwayat Kerja Perusahaan
          </h2>
          <p
            data-aos="fade-up"
            data-aos-delay="150"
            className="mt-3 text-gray-600 text-center max-w-3xl mx-auto"
          >
            Cuplikan proyek: penyusunan dokumen UKL–UPL, kajian teknis,
            pemantauan lingkungan, perizinan usaha/pertambangan, hingga
            perizinan teknis limbah B3.
          </p>

          <div className="mt-12 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Dokumen UKL–UPL PT Damai Sekawan Marine",
                tag: "Dokumen Lingkungan",
                icon: (
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 2h7l5 5v15H6z" />
                    <path d="M13 2v6h6" />
                  </svg>
                ),
                desc: "Penyusunan dokumen UKL–UPL sebagai pemenuhan perizinan berusaha berbasis risiko dan regulasi lingkungan operasional.",
              },
              {
                title: "Kajian Teknis TUKS PT Bahtera Kharisma Abadi",
                tag: "Kajian Teknis",
                icon: (
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 20h18" />
                    <path d="M4 20v-6l4-2 4 2 4-2 4 2v6" />
                    <path d="M6 6h6l2 3" />
                  </svg>
                ),
                desc: "Analisis teknis TUKS meliputi aspek lingkungan, keselamatan, dan operasional.",
              },
              {
                title: "Laporan Pemantauan Lingkungan PT Sierad Produce Tbk",
                tag: "Pemantauan",
                icon: (
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="4" y="3" width="16" height="18" rx="2" />
                    <path d="M8 7h8M8 11h8M8 15h5" />
                  </svg>
                ),
                desc: "Pemantauan rutin parameter kualitas air, udara, dan kebisingan serta pelaporan instansi.",
              },
              {
                title: "SLF PT Pupuk Sriwidjaja Palembang",
                tag: "Perizinan Teknis",
                icon: (
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="2" />
                    <path d="M7 21V9h4v12M13 21V5h4v16" />
                  </svg>
                ),
                desc: "Pendampingan penerbitan SLF gedung/instalasi sebagai bukti kelayakan pemanfaatan bangunan.",
              },
              {
                title: "IUP OP Batuan Andesit (beragam klien)",
                tag: "Pertambangan",
                icon: (
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M3 20l9-16 9 16H3z" />
                    <path d="M12 8v12" />
                  </svg>
                ),
                desc: "Pendampingan izin usaha pertambangan operasi produksi, dokumen lingkungan, dan kewajiban pengelolaan.",
              },
              {
                title: "Pertek Pemanfaatan Limbah B3 PT Paramesti Maju Karya",
                tag: "Limbah B3",
                icon: (
                  <svg
                    className="w-5 h-5"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M6 9l-3 5h6l-3-5zM12 4l3 5h-6l3-5zM21 16l-3-5-3 5h6z" />
                  </svg>
                ),
                desc: "Penyusunan & perolehan persetujuan teknis pemanfaatan limbah B3 sesuai peraturan.",
              },
            ].map((item, i) => (
              <div
                key={i}
                data-aos="zoom-in-up"
                data-aos-delay={i * 100}
                className="group relative rounded-2xl bg-white p-6 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
              >
                {/* Icon */}
                <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-gradient-to-br from-emerald-500 to-teal-500 text-white shadow">
                  {item.icon}
                </div>
                {/* Title */}
                <h4 className="mt-4 font-semibold text-slate-900 group-hover:text-emerald-700 transition-colors">
                  {item.title}
                </h4>
                {/* Tag */}
                <span className="mt-2 inline-block px-2 py-1 text-xs rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200">
                  {item.tag}
                </span>
                {/* Desc */}
                <p className="mt-3 text-sm text-slate-600 line-clamp-3">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="/riwayat-kerja"
              className="inline-flex items-center gap-2 rounded-xl px-5 py-3 font-semibold
                 bg-emerald-600 text-white shadow-md hover:shadow-lg hover:brightness-110 transition"
            >
              Lihat Riwayat Kerja Lainnya
              <svg
                className="w-4 h-4"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="relative overflow-hidden bg-gray-50">
        {/* Background pattern lembut */}
        <div className="absolute inset-0 opacity-[0.04] bg-[radial-gradient(circle_at_center,#0A1D4A,transparent_60%)]" />

        <div className="relative max-w-7xl mx-auto grid lg:grid-cols-12">
          {/* Gambar kiri */}
          <div
            data-aos="fade-right"
            data-aos-delay="100"
            className="hidden lg:block lg:col-span-4"
          >
            <img
              src="/img/kiri.png"
              alt="Ilustrasi FAQ"
              className="h-full w-full object-cover"
            />
          </div>

          {/* Konten FAQ */}
          <div className="lg:col-span-8 px-6 lg:px-12 py-20">
            {/* Judul */}
            <div className="text-center max-w-2xl mx-auto mb-12">
              <h2
                data-aos="fade-up"
                className="text-3xl font-extrabold text-[#0A1D4A]"
              >
                FAQ
              </h2>
              <p
                data-aos="fade-up"
                data-aos-delay="150"
                className="mt-3 text-gray-600"
              >
                Beberapa pertanyaan umum seputar layanan kami di bidang
                lingkungan. Klik pertanyaan di bawah untuk melihat jawabannya.
              </p>
            </div>

            {/* FAQ list */}
            <div data-aos="fade-up" className="space-y-4">
              {[
                {
                  q: "Apa saja dokumen lingkungan yang bisa kami bantu?",
                  a: "AMDAL, UKL–UPL, DPLH, RKL–RPL, PERTEK, kajian teknis, serta pemantauan dan pelaporan berkala.",
                },
                {
                  q: "Apakah Asrindo menangani pembangunan instalasi?",
                  a: "Ya. Termasuk unit pengolahan limbah (cair/padat/gas, termasuk B3), WTP, insinerator, dan pengukuran geolistrik.",
                },
                {
                  q: "Bisakah mendampingi proses perizinan usaha?",
                  a: "Bisa. Kami bantu SLF, OSS (NIB, Izin Usaha, Lokasi), IMB, PKP, NPWP, BPJS, dan perizinan terkait lainnya.",
                },
                {
                  q: "Apakah Asrindo melayani pemetaan topografi & batimetri?",
                  a: "Ya. Layanan pemetaan kami mencakup topografi dan batimetri, serta dukungan remote sensing dan kartografi digital.",
                },
                {
                  q: "Apakah tersedia program pelatihan/sertifikasi kompetensi?",
                  a: "Tersedia. Kami menyelenggarakan pelatihan kompetensi di bidang lingkungan untuk peningkatan SDM industri maupun instansi, dengan materi yang disesuaikan kebutuhan dan regulasi yang berlaku.",
                },
              ].map((item, i) => {
                const [open, setOpen] = React.useState(false);

                return (
                  <div
                    key={i}
                    onClick={() => setOpen(!open)}
                    className={`cursor-pointer rounded-xl border p-5 transition-all ${
                      open
                        ? "bg-white shadow-md border-emerald-200"
                        : "bg-white border-gray-200 hover:border-emerald-300"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-semibold text-gray-800">{item.q}</h4>

                      <span
                        className={`ml-4 inline-flex w-8 h-8 items-center justify-center rounded-full 
                      bg-emerald-100 text-emerald-700 shadow-sm ring-1 ring-emerald-200/60 
                      transition-transform duration-300 ${
                        open ? "rotate-180" : "rotate-0"
                      }`}
                      >
                        <ChevronDown className="w-4 h-4" />
                      </span>
                    </div>

                    <div
                      className={`mt-3 text-gray-600 text-sm leading-relaxed transition-all duration-300 overflow-hidden ${
                        open ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                      }`}
                    >
                      {item.a}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* CTA AKHIR */}
      <section
        data-aos="fade-up"
        id="contact"
        className="relative text-white"
        style={{
          backgroundImage: `url(${bgPemetaan})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/90 via-blue-900/70 to-emerald-800/80"></div>

        <div className="relative container mx-auto px-6 lg:px-24 py-24 flex flex-col items-center">
          {/* glass card */}
          <div
            data-aos="zoom-in"
            data-aos-delay="150"
            className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-xl p-10 max-w-3xl text-center"
          >
            <h2 className="text-4xl lg:text-5xl font-extrabold tracking-tight drop-shadow-lg">
              Siap Wujudkan Pengelolaan Lingkungan yang Lebih Baik?
            </h2>
            <p className="mt-5 text-lg text-emerald-50 leading-relaxed">
              Hubungi tim kami untuk konsultasi dan penawaran layanan terbaik.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-5 justify-center">
              <a
                href="https://wa.me/6281222522192"
                className="px-10 py-3 rounded-xl font-semibold shadow-lg bg-gradient-to-r from-yellow-400 to-yellow-300 text-emerald-900 hover:scale-105 transform transition"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

/**
 * useCountUp – animasi angka saat elemen terlihat di viewport
 * options: { end:number, duration:ms, easing:'linear'|'easeOut' }
 */
/* === Component & Hook === */
function StatCard({ icon, numberEnd, suffix = "", label }) {
  const { ref, value } = useCountUp({
    end: numberEnd,
    duration: 1500,
    easing: "easeOut",
  });

  return (
    <div
      ref={ref}
      className="group rounded-2xl bg-white/70 backdrop-blur-md
                 shadow-[0_8px_30px_rgba(0,0,0,0.08)]
                 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)]
                 transition-all duration-500 p-8 flex flex-col items-center text-center"
    >
      <div
        className="mb-4 grid place-items-center w-14 h-14 rounded-xl 
                      bg-gradient-to-br from-sky-500 to-emerald-500 text-white"
      >
        {icon}
      </div>
      <div className="text-4xl font-extrabold text-slate-900 tracking-tight">
        {value}
        {suffix}
      </div>
      <p className="mt-2 text-gray-600">{label}</p>
    </div>
  );
}

function useCountUp({ end = 0, duration = 1200, easing = "easeOut" } = {}) {
  const ref = React.useRef(null);
  const [value, setValue] = React.useState(0);
  const startedRef = React.useRef(false);

  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting && !startedRef.current) {
            startedRef.current = true;
            animateCount(
              0,
              end,
              duration,
              (v) => setValue(Math.round(v)),
              easing
            );
          }
        });
      },
      { threshold: 0.4 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, [end, duration, easing]);

  return { ref, value };
}

function animateCount(from, to, duration, onUpdate, easing = "easeOut") {
  const start = performance.now();
  const ease = (t) => {
    if (easing === "linear") return t;
    return 1 - Math.pow(1 - t, 3); // easeOutCubic
  };

  function frame(now) {
    const p = Math.min(1, (now - start) / duration);
    const v = from + (to - from) * ease(p);
    onUpdate(v);
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

/* ===== Ikon (SVG inline) ===== */

function ScaleIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.07-6.07L17.66 7.34M7.34 17.66L5.93 19.07m12.73 0l-1.41-1.41M7.34 6.34 5.93 4.93" />
    </svg>
  );
}
function LawIcon() {
  return (
    <svg
      className="w-6 h-6"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      viewBox="0 0 24 24"
    >
      <path d="M12 3L2 9l10 6 10-6-10-6z" />
      <path d="M2 9v6l10 6 10-6V9" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
    >
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  );
}
