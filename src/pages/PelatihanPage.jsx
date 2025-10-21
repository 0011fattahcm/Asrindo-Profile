// src/pages/PelatihanPage.jsx
import React, { useEffect, useMemo, useRef, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import AOS from "aos";
import "aos/dist/aos.css";

/* ===== Hero background images ===== */
const bgImgs = [
  "/img/pemetaan.jpg",
  "/img/peralatan.jpg",
  "/img/studi dan kajian.png",
];

/* ===== Materi dari Compro (diringkas sesuai instruksi) ===== */
const RAW_ITEMS = [
  "Penanggung jawab Pengendalian Pencemaran Udara (PPPU) dan Penanggung jawab Operasional Instalasi Pengendalian Pencemaran Udara (POPPU)",
  "Penanggung jawab Pengendalian Pencemaran Air (PPPA) dan Penanggung jawab Operasional Instalasi Pengendalian Pencemaran Air (POPAL)",
  "Pengelolaan Limbah Bahan Berbahaya dan Beracun (PLB3) dan Operasional Pengelolaan Limbah Bahan Berbahaya dan Beracun (OPLB3)",
  "Operator Hoist Crane",
  "Ahli K3 Umum",
  "Petugas Pengambil Contoh Uji Air",
  "Operator Scaffolding",
  "Operator Forklift",
  "Operator Wheel Excavator",
  "Ahli K3 Muda",
  "Ahli K3 Madya",
  "Ahli K3 Utama",
  "Operator Excavator Kelas",
  "Operator Excavator Kelas (III)",
  "Operator Tower Crane",
  "Pemeriksa Kelaikan Fungsi Sistem Daya Listrik Pada Bangunan Gedung",
  "Supervisor K3 Konstruksi (SPVK3K)",
  "Ahli Muda K3 Konstruksi (ADK3K)",
  "Ahli Madya K3 Konstruksi (AMK3K)",
  "Ahli Utama K3 Konstruksi (AUK3K)",
  "Operator Scaffolding",
  "Operator Dump Truck",
  "Operator Motor Grader",
  "Operator Backhoe Loader",
  "Operator Crane Jembatan",
  "Operator Mobil 35 Ton",
  "Operator Mobil 70 Ton",
  "Operator Mobil di atas 70 Ton",
  "Juru Ikat Beban / Rigger",
  "Pengawas K3 Bekerja Di Ketinggian",
  "Teknisi ruang terbatas",
  "Petugas P3K",
  "Teknisi Fire Alarm",
  "Petugas Fireman",
  "Teknisi K3 Bekerja pada Ketinggian",
  "Operator Lantai Perawatan Sumur",
  "Operator Menara Perawatan Sumur",
  "Operator Unit Perawatan Sumur",
  "Ahli Pengendali Perawatan Sumur",
  "Pengawas Perawatan Sumur",
  "Operator K3 Industri Migas",
  "Pengawas K3 Industri Migas",
  "TESS",
  "Inspektur Pesawat Angkat",
  "Pipe Fitter",
  "TESS",
  "Operator Boiler",
  "Operator Pengambil Contoh Minyak Bumi",
  "Operator Pengujian Minyak Bumi",
  "Inspektur Kelistrikan",
  "Petugas K3 Konstruksi",
  "Petugas Penanganan Bahaya Gas H₂S",
  "Ahli Pelaksana Teknik Plumbing",
  "Manager Pengelolaan Bangunan Gedung",
  "Pengawas Scaffolding",
  "Teknisi Maintenance & Repair",
  "Operator K3 Umum",
  "Teknisi K3 Umum",
  "Operator Wheel Excavator",
  "Pemeriksa Kelaikan Fungsi Elektrikal Bangunan Gedung",
  "Supervisor K3 konstruksi",
  "Ahli muda K3 konstruksi (ADK3K)",
  "Ahli Madya K3 Konstruksi (AMK3K)",
  "Ahli utama K3 konstruksi",
  "Pengawas Scaffolding",
  "Skema Sertifikasi Okupasi Operator Forklift",
  "Skema Sertifikasi Okupasi Operator Crane Jembatan",
  "Skema Sertifikasi Okupasi Operator Mobil Crane 35 Ton",
  "Skema Sertifikasi Okupasi Operator Mobil Crane 70 Ton",
  "Skema Sertifikasi Okupasi Operator Mobil Crane Diatas 70 Ton",
  "Skema Sertifikasi Okupasi Juru Ikat / Rigger",
  "Skema Sertifikasi Okupasi Pengawas Bekerja di Ketinggian",
  "Skema Sertifikasi Okupasi Teknisi Ruang Terbatas",
  "Skema Sertifikasi Okupasi Petugas P3K",
  "Skema Sertifikasi Okupasi Petugas Fireman",
  "Skema Sertifikasi Okupasi Teknisi Bekerja di Ketinggian",
  "Skema Sertifikasi Okupasi Ahli Bekerja di Ketinggian",
  "Skema Sertifikasi Okupasi Operator Lantai Perawatan Sumur",
  "Skema Sertifikasi Okupasi Operator Menara Perawatan Sumur",
  "Skema Sertifikasi Okupasi Operator Unit Perawatan Sumur",
  "Skema Sertifikasi Okupasi Ahli Pengendali Perawatan Sumur",
  "Skema Sertifikasi Okupasi Operator K3 Industri Migas",
  "Skema Sertifikasi Okupasi Pengawas K3 Industri Migas",
  "Skema Sertifikasi Okupasi Welding Inspector",
  "Skema Sertifikasi Okupasi Inspektur Pesawat Angkat",
  "Skema Sertifikasi Okupasi Pipe Fitter",
  "Skema Sertifikasi Okupasi Operator Boiler",
  "Skema Sertifikasi Okupasi Operator Pengambil Contoh Minyak Bumi",
  "Skema Sertifikasi Okupasi Operator Pengujian Minyak Bumi",
  "Skema Sertifikasi Okupasi Inspektur Kelistrikan",
  "Skema Sertifikasi Okupasi Petugas K3 Konstruksi",
  "Skema Sertifikasi Okupasi Petugas Penanganan Bahaya Gas H₂S",
  "Skema Sertifikasi Okupasi Pengkaji Teknis Proteksi Kebakaran",
  "Skema Sertifikasi Okupasi Manajer Pengelolaan Bangunan Gedung",
  "Skema Sertifikasi Okupasi Auditor SMK3 Migas",
  "Skema Sertifikasi Okupasi Inspektur RIG",
  "Skema Sertifikasi Okupasi Pengawas Utama K3 Industri Migas",
  "Skema Sertifikasi Okupasi Manajer Lapangan Pelaksanaan Pekerjaan Gedung",
  "Skema Sertifikasi Okupasi Manajer Pelaksana Lapangan Pekerjaan Jalan/Jembatan",
  "Skema Sertifikasi Klaster Pengoperasian Genset",
  "Skema Sertifikasi Okupasi Inspektur Genset",
  "Skema Sertifikasi Okupasi Penguji K3",
  "Skema Sertifikasi Okupasi Blasting & Coating Operator",
  "Skema Sertifikasi Okupasi Coating Inspector",
  "Skema Sertifikasi Okupasi Pengawas Operasional Pertama (POP)",
  "Skema Sertifikasi Okupasi Pengawas Operasional Madya (POM)",
  "Skema Sertifikasi Okupasi Pengawas Operasional Utama (POU)",
  "Skema Sertifikasi Okupasi Inspektur Bejana Tekan",
  "Skema Sertifikasi Okupasi Ahli Muda Ruang Terbatas",
  "Skema Sertifikasi Okupasi Ahli Madya Ruang Terbatas",
  "Skema Sertifikasi Okupasi Operator Lantai Bor",
  "Skema Sertifikasi Okupasi Operator Menara Bor",
  "Skema Sertifikasi Okupasi Juru Bor",
  "Skema Sertifikasi Okupasi Ahli Pengendali Bor",
  "Skema Sertifikasi Okupasi Authorized Gas Tester",
  "Skema Sertifikasi Okupasi Ahli Muda Teknik Jalan",
  "Skema Sertifikasi Okupasi Ahli Teknik Lingkungan",
  "Skema Sertifikasi Okupasi ICT Project Manager",
  "Skema Sertifikasi Okupasi Operator K3 Listrik",
  "Skema Sertifikasi Okupasi Teknisi K3 Listrik",
  "Skema Sertifikasi Okupasi Ahli K3 Listrik",
  "Skema Sertifikasi Okupasi Operator Welder",
  "Skema Sertifikasi Okupasi Pemantauan dan Analisis Pengelolaan Limbah B3",
  "Ahli Higiene Industri Madya",
  "Ahli Muda K3 Pertambangan",
  "Ahli Higiene Industri Muda (HIMU)",
  "Ahli Muda K3 Pertambangan",
];

function tagify(name) {
  const n = name.toLowerCase();
  const tags = [];
  if (n.includes("k3")) tags.push("K3");
  if (n.includes("migas")) tags.push("Migas");
  if (n.includes("scaffolding")) tags.push("Scaffolding");
  if (n.includes("forklift")) tags.push("Forklift");
  if (n.includes("crane")) tags.push("Crane");
  if (n.includes("boiler")) tags.push("Boiler");
  if (n.includes("genset")) tags.push("Genset");
  if (n.includes("rig") || n.includes("bor")) tags.push("Rig/Bor");
  if (n.includes("limbah") || n.includes("plb3") || n.includes(" b3"))
    tags.push("Limbah B3");
  if (n.includes("operator")) tags.push("Operator");
  if (n.includes("inspektur")) tags.push("Inspektur");
  if (n.includes("pengawas")) tags.push("Pengawas");
  if (n.includes("ahli")) tags.push("Ahli");
  if (n.includes("teknisi")) tags.push("Teknisi");
  if (n.includes("manajer") || n.includes("manager")) tags.push("Manajer");
  if (n.includes("sertifikasi")) tags.push("Sertifikasi Okupasi");
  return [...new Set(tags)];
}

const ITEMS = RAW_ITEMS.map((t, i) => ({
  id: i + 1,
  title: t,
  tags: tagify(t),
}));
const ALL_TAGS = [
  "Semua",
  "K3",
  "Migas",
  "Operator",
  "Pengawas",
  "Inspektur",
  "Teknisi",
  "Ahli",
  "Manajer",
  "Scaffolding",
  "Forklift",
  "Crane",
  "Boiler",
  "Rig/Bor",
  "Limbah B3",
  "Genset",
  "Sertifikasi Okupasi",
];

export default function PelatihanPage() {
  const [q, setQ] = useState("");
  const [tag, setTag] = useState("Semua");

  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  /* ====== FILTER LOGIC ====== */
  const filtered = useMemo(
    () =>
      ITEMS.filter((it) => {
        const mq =
          !q ||
          it.title.toLowerCase().includes(q.toLowerCase()) ||
          it.id.toString() === q;
        const mt = tag === "Semua" || it.tags.includes(tag);
        return mq && mt;
      }),
    [q, tag]
  );

  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-gray-900">
      {/* util: hide scrollbar */}
      <style>{`
        .no-scrollbar::-webkit-scrollbar{display:none}
        .no-scrollbar{-ms-overflow-style:none;scrollbar-width:none}
      `}</style>

      <Navbar />
      <BackToTopButton />

      {/* ================= HERO (blend foto + overlay biru) ================= */}
      <section className="animate-fadeInHero relative overflow-hidden text-white mb-8">
        {/* base gradient */}
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-blue-700 via-indigo-700 to-slate-900" />
        {/* texture photos */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          {bgImgs.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className={`absolute ${
                i === 0
                  ? "left-[-10%] top-[-18%] w-[46%]"
                  : i === 1
                  ? "right-[-12%] top-[-14%] w-[44%]"
                  : "left-1/2 bottom-[-16%] w-[60%] -translate-x-1/2"
              } opacity-45 object-cover`}
              style={{
                WebkitMaskImage:
                  "radial-gradient(60% 60% at 50% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
                maskImage:
                  "radial-gradient(60% 60% at 50% 50%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
              }}
              draggable={false}
              onError={(e) => (e.currentTarget.style.display = "none")}
            />
          ))}
        </div>
        {/* overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-tr from-blue-900/70 via-indigo-900/55 to-sky-900/45 backdrop-blur-[1.5px]" />
        <div className="absolute inset-0 z-10 opacity-30 bg-[radial-gradient(70rem_40rem_at_-10%_-20%,#60A5FA_14%,transparent_60%)]" />

        {/* text */}
        <div className="relative z-20 container mx-auto px-6 lg:px-24 py-20 text-center">
          <span className="inline-block text-xs font-semibold tracking-wider bg-white/10 px-3 py-1 rounded-full ring-1 ring-white/30">
            Program Pelatihan & Sertifikasi
          </span>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold tracking-tight">
            Pelatihan PT ASRINDO ENVIRONT INVESTAMA
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-blue-100">
            Menyediakan {ITEMS.length} program pelatihan berbasis lingkungan
            sesuai bidang keahlian PT Asrindo, dilengkapi fitur pencarian dan
            filter agar Anda lebih mudah menemukan topik yang relevan.
          </p>
        </div>
      </section>

      {/* ================= FILTER SECTION (fixed) ================= */}
      <FilterSection
        allTags={ALL_TAGS}
        tag={tag}
        setTag={setTag}
        q={q}
        setQ={setQ}
        count={filtered.length}
      />

      {/* ================= LIST ================= */}
      <main className="relative bg-gradient-to-b from-white via-blue-50/40 to-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((it) => (
              <TrainingCard key={it.id} it={it} />
            ))}
          </div>
        </div>
      </main>

      {/* ================= CTA FULL-BLEED ================= */}
      <section
        className="relative mt-2"
        data-aos="fade-up"
        data-aos-delay="150"
      >
        <div className="absolute inset-0">
          <div className="w-full h-full bg-gradient-to-r from-blue-900 via-indigo-800 to-slate-900" />
          <div className="absolute inset-0 opacity-30 bg-[radial-gradient(50rem_30rem_at_-10%_-20%,#60A5FA_16%,transparent_60%)]" />
        </div>
        <div className="relative max-w-6xl mx-auto px-6 lg:px-8 py-14 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-extrabold">
            Butuh kurikulum & jadwal resmi?
          </h2>
          <p className="mt-2 text-blue-100">
            Kami siapkan proposal &amp; silabus pelatihan sesuai kebutuhan
            perusahaan Anda.
          </p>
          <div className="mt-6 flex justify-center gap-3">
            <a
              href="/kontak"
              className="px-6 py-2 rounded-xl font-semibold bg-white text-blue-900 hover:opacity-90"
            >
              Hubungi Kami
            </a>
            <a
              href="/profil"
              className="px-6 py-2 rounded-xl font-semibold border border-white/70 hover:bg-white/10"
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

/* ========= FILTER COMPONENT ========= */
function FilterSection({ allTags, tag, setTag, q, setQ, count }) {
  const trackRef = useRef(null);
  const [canLeft, setCanLeft] = useState(false);
  const [canRight, setCanRight] = useState(false);

  const updateArrows = () => {
    const el = trackRef.current;
    if (!el) return;
    setCanLeft(el.scrollLeft > 4);
    setCanRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    const el = trackRef.current;
    if (!el) return;
    const onWheel = (e) => {
      if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
        el.scrollBy({ left: e.deltaY, behavior: "smooth" });
        e.preventDefault();
      }
    };
    el.addEventListener("scroll", updateArrows, { passive: true });
    el.addEventListener("wheel", onWheel, { passive: false });
    window.addEventListener("resize", updateArrows);
    return () => {
      el.removeEventListener("scroll", updateArrows);
      el.removeEventListener("wheel", onWheel);
      window.removeEventListener("resize", updateArrows);
    };
  }, []);

  const nudge = (dir) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.6), behavior: "smooth" });
  };

  return (
    <section className="bg-white border-y border-blue-100">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-5 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
        {/* chips scroller */}
        <div className="relative w-full md:w-auto overflow-x-hidden">
          {/* edge-fade tetap aman */}
          <div
            className={`pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-white to-transparent transition-opacity ${
              canLeft ? "opacity-100" : "opacity-0"
            }`}
          />
          <div
            className={`pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-white to-transparent transition-opacity ${
              canRight ? "opacity-100" : "opacity-0"
            }`}
          />

          {/* tombol panah */}
          {canLeft && (
            <button
              onClick={() => nudge(-1)}
              className="absolute left-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 grid place-items-center rounded-full bg-white shadow ring-1 ring-blue-200"
              aria-label="Scroll kiri"
            >
              ‹
            </button>
          )}
          {canRight && (
            <button
              onClick={() => nudge(1)}
              className="absolute right-1 top-1/2 -translate-y-1/2 z-10 w-8 h-8 grid place-items-center rounded-full bg-white shadow ring-1 ring-blue-200"
              aria-label="Scroll kanan"
            >
              ›
            </button>
          )}

          {/*** Track: tambah padding Y agar chip tidak mepet atas/bawah ***/}
          <div
            ref={trackRef}
            className="no-scrollbar overflow-x-auto scroll-smooth pl-10 pr-10 py-2"
            role="tablist"
            aria-label="Filter kategori pelatihan"
          >
            <div className="flex items-center gap-2 w-max">
              {allTags.map((t) => (
                <button
                  key={t}
                  role="tab"
                  aria-selected={tag === t}
                  onClick={() => setTag(t)}
                  className={`whitespace-nowrap px-4 h-9 rounded-full text-sm ring-1 transition
            ${
              tag === t
                ? "bg-blue-600 text-white ring-blue-600"
                : "bg-blue-50 text-blue-700 ring-blue-200 hover:bg-blue-100"
            }
          `}
                  style={{ lineHeight: 1.1 }} // biar teks gak “nempel” ke tepi
                >
                  {t}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* search */}
        <div className="flex items-center gap-2 w-full md:w-auto">
          <input
            type="text"
            placeholder="Cari materi / nomor..."
            value={q}
            onChange={(e) => setQ(e.target.value)}
            className="w-full md:w-72 px-4 py-2 rounded-xl border border-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30"
          />
          <span className="text-sm text-gray-500">{count} ditemukan</span>
        </div>
      </div>
    </section>
  );
}

/* ========= Card modern (tanpa Ringkasan & Konsultasi) ========= */
function TrainingCard({ it }) {
  return (
    <article className="group relative rounded-2xl p-[1px] bg-gradient-to-br from-blue-200/60 via-white to-indigo-200/60 transition-transform duration-300 hover:-translate-y-1.5">
      <div className="rounded-2xl bg-white/75 backdrop-blur-xl border border-white/60 p-5 h-full shadow-[0_12px_40px_rgba(2,6,23,0.08)]">
        <div className="flex items-start gap-3">
          <div className="flex-none inline-grid place-items-center w-9 h-9 rounded-lg bg-blue-100 ring-1 ring-blue-300/60 text-blue-800 font-bold">
            {it.id}
          </div>
          <div className="flex-1">
            <h3 className="font-semibold leading-snug text-blue-900">
              {it.title}
            </h3>
            <div className="mt-2 flex flex-wrap gap-1.5">
              {it.tags.map((tg) => (
                <span
                  key={tg}
                  className="text-[11px] px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 ring-1 ring-blue-200"
                >
                  {tg}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-40 bg-gradient-to-br from-blue-400/30 via-sky-400/20 to-indigo-400/10" />
    </article>
  );
}
