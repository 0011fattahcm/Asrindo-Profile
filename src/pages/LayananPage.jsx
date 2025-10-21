// src/pages/LayananPage.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import AOS from "aos";
import "aos/dist/aos.css";

/** Gambar yang kita blend di hero */
const heroImgs = {
  center: "/img/pemetaan.jpg",
  tl: "/img/peralatan.jpg",
  tr: "/img/perizinan.jpg",
  bl: "/img/konsultasi-dokumen.jpg",
  br: "/img/profil.jpg", // cadangan agar komposisi kaya
};

export default function LayananPage() {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <BackToTopButton />

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
              maskImage:
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
              maskImage:
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
              maskImage:
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
              maskImage:
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
              maskImage:
                "radial-gradient(60% 60% at 42% 50%, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 100%)",
            }}
            draggable={false}
          />

          {/* lapisan penyejuk tipis */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/16 to-white/10" />
        </div>

        {/* Overlay brand TRANSPARAN di atas foto, z-10 */}
        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-[#0A1D4A]/70 via-emerald-900/55 to-sky-800/50 backdrop-blur-[2px]" />
        <div className="absolute inset-0 z-10 opacity-30 bg-[radial-gradient(70rem_40rem_at_-10%_-20%,#F0C419_12%,transparent_60%)]" />

        {/* Teks, z-20 supaya selalu di atas */}
        <div className="relative z-20 container mx-auto px-6 lg:px-24 py-20 text-center">
          <span className="inline-block text-xs font-semibold tracking-wider bg-white/10 px-3 py-1 rounded-full ring-1 ring-white/30">
            Mewujudkan Sektor Lingkungan yang Lebih Baik
          </span>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold tracking-tight">
            Layanan PT ASRINDO ENVIRONT INVESTAMA
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-emerald-100">
            Kami menghadirkan layanan lingkungan yang komprehensif dengan
            pendekatan profesional, efisien, dan berstandar tinggi.
          </p>
        </div>
      </section>

      {/* ================= SUB-NAV STICKY ================= */}
      <nav
        data-aos="fade-down"
        data-aos-delay="100"
        className="sticky top-0 z-30 bg-white/80 backdrop-blur border-b border-emerald-100"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-3 flex flex-wrap gap-2">
          {[
            { id: "s1", t: "1. Konsultasi & Dokumen" },
            { id: "s2", t: "2. Studi & Kajian LH" },
            { id: "s3", t: "3. Pembangunan & Peralatan" },
            { id: "s4", t: "4. Izin & Sertifikat Usaha" },
            { id: "s5", t: "5. Pemetaan" },
          ].map((x) => (
            <a
              key={x.id}
              href={`#${x.id}`}
              className="text-sm px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200 hover:bg-emerald-100 transition"
            >
              {x.t}
            </a>
          ))}
        </div>
      </nav>

      {/* ================= KONTEN ================= */}
      <main
        data-aos="fade-up"
        data-aos-delay="150"
        className="relative bg-gradient-to-b from-white via-emerald-50/40 to-white"
      >
        <div className="absolute inset-0 opacity-10 bg-[linear-gradient(to_right,#0A1D4A10_1px,transparent_1px),linear-gradient(to_bottom,#0A1D4A10_1px,transparent_1px)] bg-[size:36px_36px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-14 space-y-14">
          <Section
            id="s1"
            data-aos="fade-up"
            data-aos-delay="100"
            number="1"
            title="Konsultasi dan Penyusunan Dokumen Lingkungan"
            image="/img/konsultasi-dokumen.jpg"
            items={[
              "Penyusunan dokumen AMDAL",
              "Penyusunan dokumen DPLH",
              "Penyusunan dokumen pemantauan dan pelaporan rutin per triwulan atau semester",
              "Penyusunan dokumen TUKS (Terminal Untuk Kepentingan Sendiri)",
              "Penyusunan dokumen kajian teknis",
              "Implementasi RKL-RPL dan UKL-UPL",
              "Penyusunan dokumen PERTEK (Persetujuan Teknis)",
            ]}
          />

          <Section
            id="s2"
            data-aos="fade-up"
            data-aos-delay="200"
            number="2"
            title="Studi Kelayakan dan Kajian Lingkungan Hidup"
            image="/img/studi dan kajian.png"
            items={[
              "Studi rona lingkungan hidup",
              "Studi kelayakan pembangunan dan lingkungan hidup",
              "Studi Geoteknik dan Hidrogeologi",
              "Kajian Lingkungan Hidup Strategis (KLHS)",
              "Kajian kebijakan lingkungan hidup",
              "Kajian Teknis dalam Bidang Kelautan dan Pelabuhan",
              "Kajian Eksplorasi Sektor Pertambangan",
              "Kajian Salvage (bawah laut)",
              "Kajian Teknis Pengelolaan dan Pemanfaatan Limbah Domestik dan LB3",
              "Pemanfaatan Citra Remote Sensing untuk menunjang pembangunan di berbagai sektor",
            ]}
          />

          <Section
            id="s3"
            data-aos="fade-up"
            data-aos-delay="300"
            number="3"
            title="Pembangunan & Penyedia Peralatan Lingkungan Hidup"
            image="/img/peralatan.jpg"
            items={[
              "Insenerator",
              "Pembangunan Unit pengolahan limbah cair, limbah padat, limbah gas, dan limbah B3 (industri, domestik dan medis)",
              "Pembangunan Unit pengolahan air bersih (Water treatment plan for ground water, surface water and sea water)",
              "Pengukuran Geolistrik",
            ]}
          />

          <Section
            id="s4"
            data-aos="fade-up"
            data-aos-delay="400"
            number="4"
            title="Pendampingan Pengurusan Izin dan Sertifikat Usaha"
            image="/img/perizinan.jpg"
            twoCols
            items={[
              "Sertifikat Laik Fungsi (SLF)",
              "Akta Perusahaan",
              "NPWP Perusahaan",
              "NPWP Penanggung Jawab",
              "IMB (Izin Mendirikan Bangunan)",
              "NIB (Nomor Induk Berusaha) (OSS)",
              "Izin Usaha (OSS)",
              "Izin Lokasi (OSS)",
              "Izin Lingkungan Sekitar",
              "Izin Usaha Industri",
              "Pengusaha Kena Pajak (PKP)",
              "BPJS Kesehatan",
              "BPJS Ketenagakerjaan",
              "Lain-lain",
            ]}
          />

          <Section
            id="s5"
            data-aos="fade-up"
            data-aos-delay="500"
            number="5"
            title="Pemetaan"
            image="/img/pemetaan.jpg"
            items={["Topografi", "Batimetri", "Kartografi", "Remote Sensing"]}
          />
        </div>
      </main>

      {/* ================= CTA ================= */}
      <section
        className="relative text-white"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="absolute inset-0">
          <img
            src="/img/cta-layanan.jpg"
            alt="Kolaborasi"
            className="w-full h-full object-cover"
            draggable={false}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0A1D4A]/85 via-emerald-800/70 to-sky-900/80" />
        </div>
        <div className="relative container mx-auto px-6 lg:px-24 py-16 text-center">
          <h3 className="text-3xl lg:text-4xl font-extrabold">
            Butuh penjelasan layanan lebih detail?
          </h3>
          <p className="mt-3 text-emerald-50 max-w-2xl mx-auto">
            Tim kami siap mengulas kebutuhan, ruang lingkup, dan timeline
            penyelesaian sesuai regulasi yang berlaku.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:asrindoenvirontinvestama@gmail.com"
              className="inline-block px-8 py-3 rounded-xl font-semibold shadow-lg bg-gradient-to-r from-yellow-400 to-yellow-300 text-emerald-900 hover:scale-105 transition"
            >
              Hubungi Kami
            </a>
            <a
              href="/profil"
              className="inline-block px-8 py-3 rounded-xl font-semibold border border-white/70 hover:bg-white/10"
            >
              Profil Perusahaan
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ==================== REUSABLE SECTION ==================== */
function Section({ id, number, title, image, items, twoCols = false }) {
  return (
    <section id={id} className="relative">
      <div className="grid lg:grid-cols-12 gap-10 items-start">
        {/* Kiri: nomor + judul + list */}
        <div
          className="lg:col-span-7"
          data-aos="fade-right"
          data-aos-delay="100"
        >
          <div className="flex items-center gap-4">
            <span
              className="inline-grid place-items-center w-11 h-11 rounded-xl 
              bg-gradient-to-br from-emerald-500 to-teal-500 text-white 
              font-extrabold text-lg shadow"
            >
              {number}
            </span>
            <h2 className="text-2xl lg:text-3xl font-extrabold text-[#0A1D4A]">
              {title}
            </h2>
          </div>

          {/* GLASS CARD modern */}
          <div
            className="mt-6 relative rounded-3xl p-[1px] 
              bg-gradient-to-br from-emerald-200/60 via-white to-sky-200/60"
          >
            <div
              className="rounded-3xl bg-white/65 backdrop-blur-xl 
                border border-white/40 shadow-[0_12px_40px_rgba(10,29,74,0.08)] relative"
            >
              {/* tekstur halus */}
              <div
                className="absolute inset-0 pointer-events-none rounded-3xl 
                  opacity-[0.08] bg-[radial-gradient(circle_at_1px_1px,#0A1D4A,transparent_1.2px)] 
                  bg-[length:20px_20px]"
              />
              <ul
                className={`relative z-[1] p-6 lg:p-7 grid ${
                  twoCols ? "sm:grid-cols-2" : "grid-cols-1"
                } gap-y-3 gap-x-6 text-gray-800`}
              >
                {items.map((it, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-3 leading-relaxed"
                  >
                    <span
                      className="mt-0.5 flex h-5 w-5 flex-none items-center justify-center 
                        rounded-full bg-emerald-100 ring-1 ring-emerald-300/60 text-emerald-700"
                    >
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3.5 w-3.5"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="3"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span>{it}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Kanan: foto dengan highlight clean */}
        <div
          className="lg:col-span-5 relative"
          data-aos="zoom-in"
          data-aos-delay="200"
        >
          <div
            className="absolute -inset-6 -z-10 bg-gradient-to-tr 
              from-[#F0C419]/35 via-[#FFD86A]/20 to-transparent blur-3xl"
          />
          <div className="overflow-hidden rounded-3xl shadow-xl ring-1 ring-black/5">
            <img
              src={image}
              alt={title}
              className="w-full h-[320px] object-cover"
              draggable={false}
              style={{
                WebkitMaskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "linear-gradient(to bottom, rgba(0,0,0,1) 82%, rgba(0,0,0,0) 100%)",
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
