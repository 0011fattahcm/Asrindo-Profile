import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import AOS from "aos";
import "aos/dist/aos.css";

const heroPhoto = "/img/profil.jpg";
const ctaPhoto = "/img/peralatan.jpg"; // ganti ke foto lain kalau mau

export default function ProfilePage() {
  React.useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <BackToTopButton />

      {/* ============== HERO PROFIL ============== */}
      <section className="relative overflow-hidden animate-fadeInHero">
        {/* Gradient dasar + aksen brand */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-r from-[#FFF4CF] via-white to-white" />
          <div className="absolute inset-0 opacity-[0.05] bg-[radial-gradient(60rem_40rem_at_-10%_-20%,#F0C419_0%,transparent_60%)]" />
        </div>

        {/* Foto kanan dengan mask super halus (lebih banyak foto yang terlihat) */}
        <div className="absolute inset-y-0 right-0 w-full lg:w-1/2 pointer-events-none">
          <img
            src={heroPhoto}
            alt="Tim PT Asrindo Environt Investama"
            className="h-full w-full object-cover"
            style={{
              // Fade panjang dan feather halus untuk hilangkan garis pertemuan (banding)
              WebkitMaskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 85%, rgba(0,0,0,0.9) 92%, rgba(0,0,0,0.5) 97%, rgba(0,0,0,0) 100%)",
              maskImage:
                "linear-gradient(to left, rgba(0,0,0,1) 85%, rgba(0,0,0,0.9) 92%, rgba(0,0,0,0.5) 97%, rgba(0,0,0,0) 100%)",
              transform: "translateZ(0)",
              backfaceVisibility: "hidden",
            }}
            draggable={false}
          />
          {/* Feather overlay putih sangat tipis untuk melembutkan seam di kiri */}
          <div className="absolute inset-y-0 left-0 w-40 bg-gradient-to-r from-white/70 via-white/30 to-transparent" />
        </div>

        {/* Konten kiri */}
        <div className="relative container mx-auto px-6 lg:px-24 py-16 lg:py-24">
          <div className="max-w-2xl">
            <span className="inline-flex text-sm font-semibold text-[#0A1D4A] bg-[#FFE8A3] px-3 py-1 rounded-md">
              Profil Perusahaan
            </span>
            <h1 className="mt-5 text-4xl lg:text-5xl font-extrabold leading-tight text-[#0A1D4A]">
              PT ASRINDO ENVIRONT INVESTAMA
            </h1>
            <p className="mt-6 text-base lg:text-lg text-justify text-gray-700">
              Konsultan lingkungan yang menyediakan solusi menyeluruh—penyusunan
              dokumen &amp; perizinan berusaha, pengukuran &amp; pemantauan,
              pemetaan topografi–batimetri, hingga kajian lingkungan hidup &amp;
              kelautan. Kami mengedepankan Regulasi regulasi, transparansi
              proses, dan efisiensi implementasi dengan tenaga ahli
              tersertifikasi lintas disiplin.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#visi-misi"
                className="px-6 py-3 rounded-lg font-semibold shadow-sm transition bg-[#0A1D4A] text-white hover:bg-[#1445b8]"
              >
                Lihat Visi & Misi
              </a>
              <a
                href="#struktur"
                className="px-6 py-3 rounded-lg font-medium transition border-2 border-[#0A1D4A] text-[#0A1D4A] hover:bg-[#91c5f0]"
              >
                Struktur Perusahaan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============== TENTANG & LEGALITAS ============== */}
      <section id="tentang" className="relative py-16" data-aos="fade-up">
        <div className="max-w-7xl mx-auto px-6 lg:px-24 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="text-3xl font-extrabold text-[#0A1D4A]"
            >
              Tentang PT Asrindo
            </h2>
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className="mt-4 text-gray-700 leading-relaxed text-justify"
            >
              Berdiri sejak 2020 di Serang–Banten, Asrindo mendukung pembangunan
              berkelanjutan melalui layanan konsultansi profesional dan patuh
              regulasi. Portofolio kami meliputi AMDAL/UKL–UPL/DPLH, RKL–RPL,
              PERTEK, pemantauan &amp; pelaporan berkala, pendampingan OSS (NIB,
              Izin Usaha, Lokasi), SLF/IMB, serta pemetaan topografi &amp;
              batimetri.
            </p>

            <div className="mt-6 grid sm:grid-cols-2 gap-4">
              {[
                { k: "Legalitas", v: "AHU-0037847.AH.01.01.TAHUN2020" },
                { k: "NIB", v: "0220101900616" },
                {
                  k: "Alamat",
                  v: "Perum Citra Garden BMW Blok B 01 No. 23, Serang, Banten",
                },
                { k: "Kontak", v: "(0254) 794-2717 • 081-222-522-192" },
              ].map((it) => (
                <div
                  key={it.k}
                  className="rounded-2xl border border-emerald-100/70 bg-white p-4 shadow-[0_8px_30px_rgba(10,29,74,0.05)]"
                >
                  <div className="text-xs text-emerald-700/80">{it.k}</div>
                  <div className="font-semibold text-[#0A1D4A]">{it.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Nilai Utama (materi halaman 2) */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-gradient-to-br from-emerald-50 to-sky-50 p-6 h-full">
              <h3 className="font-semibold text-[#0A1D4A]">Nilai Utama</h3>
              <ul className="mt-3 space-y-3 text-gray-700">
                {[
                  [
                    "Regulasi & Transparansi",
                    "Proses terdokumentasi dan dapat diaudit.",
                  ],
                  [
                    "Profesional & Kompeten",
                    "Tenaga ahli bersertifikat lintas disiplin.",
                  ],
                  [
                    "Efisiensi & Ketepatan Waktu",
                    "Perencanaan jelas, eksekusi terukur.",
                  ],
                  [
                    "Kolaboratif",
                    "Bersinergi dengan pemerintah, industri, dan akademisi.",
                  ],
                ].map(([title, sub]) => (
                  <li key={title} className="flex gap-3">
                    <span className="mt-1 inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                    <div>
                      <div className="font-medium text-[#0A1D4A]">{title}</div>
                      <div className="text-sm">{sub}</div>
                    </div>
                  </li>
                ))}
              </ul>
              <a
                href="#struktur"
                className="inline-block mt-6 text-[#0A1D4A] font-semibold hover:underline"
              >
                Lihat struktur organisasi →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
    MEWUJUDKAN SEKTOR LINGKUNGAN YANG LEBIH BAIK (BG JPG)
   ===================================================== */}
      <section
        data-aos="fade-up"
        id="mewujudkan"
        className="relative py-20 overflow-hidden"
      >
        {/* base gradient (tipis) */}
        <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-transparent to-white/30" />

        <div className="pointer-events-none select-none absolute inset-0 z-0">
          {/* center faint (profil paling atas) */}
          <img
            src="/img/profil.jpg"
            alt=""
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[72%] max-w-[1200px] object-cover opacity-35"
            style={{
              WebkitMaskImage:
                "radial-gradient(55% 55% at 50% 50%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)",
              maskImage:
                "radial-gradient(55% 55% at 50% 50%, rgba(0,0,0,1) 45%, rgba(0,0,0,0) 100%)",
            }}
            draggable={false}
          />

          {/* top-left */}
          <img
            src="/img/peralatan.jpg"
            alt=""
            className="absolute left-[-8%] top-[-12%] w-[48%] max-w-[800px] object-cover opacity-80"
            style={{
              WebkitMaskImage:
                "radial-gradient(60% 60% at 60% 55%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
              maskImage:
                "radial-gradient(60% 60% at 60% 55%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            }}
            draggable={false}
          />

          {/* top-right */}
          <img
            src="/img/pemetaan.jpg"
            alt=""
            className="absolute right-[-10%] top-[-14%] w-[46%] max-w-[760px] object-cover opacity-80 rotate-1"
            style={{
              WebkitMaskImage:
                "radial-gradient(62% 62% at 38% 42%, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 100%)",
              maskImage:
                "radial-gradient(62% 62% at 38% 42%, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 100%)",
            }}
            draggable={false}
          />

          {/* bottom-right */}
          <img
            src="/img/perizinan.jpg"
            alt=""
            className="absolute right-[-6%] bottom-[-16%] w-[44%] max-w-[720px] object-cover opacity-75 -rotate-1"
            style={{
              WebkitMaskImage:
                "radial-gradient(58% 58% at 45% 55%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
              maskImage:
                "radial-gradient(58% 58% at 45% 55%, rgba(0,0,0,1) 55%, rgba(0,0,0,0) 100%)",
            }}
            draggable={false}
          />
          {/* bottom-left (filler) */}
          <img
            src="/img/konsultasi-dokumen.jpg" // boleh ganti /img/peralatan.jpg kalau mau
            alt=""
            className="absolute left-[-10%] bottom-[-16%] w-[42%] max-w-[700px] object-cover opacity-75 -scale-x-100 -rotate-1"
            style={{
              WebkitMaskImage:
                "radial-gradient(60% 60% at 55% 50%, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 100%)",
              maskImage:
                "radial-gradient(60% 60% at 55% 50%, rgba(0,0,0,1) 58%, rgba(0,0,0,0) 100%)",
            }}
            draggable={false}
          />

          {/* overlay tipis */}
          <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/16 to-white/8" />
        </div>

        {/* CONTENT */}
        <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-24">
          <div className="text-center mb-8">
            <span className="inline-block px-4 py-1 rounded-full bg-[#0A1D4A]/10 text-[#0A1D4A] text-sm font-semibold">
              Komitmen Perusahaan
            </span>
            <h2
              data-aos="fade-up"
              data-aos-delay="100"
              className="mt-4 text-3xl lg:text-4xl font-extrabold text-[#0A1D4A]"
            >
              Mewujudkan Sektor Lingkungan yang Lebih Baik
            </h2>
          </div>

          {/* glass card */}
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            className="rounded-3xl border border-white/50 bg-white/50 backdrop-blur-xl shadow-[0_20px_60px_rgba(10,29,74,0.15)]"
          >
            <div className="h-1 w-full bg-gradient-to-r from-emerald-400 via-teal-400 to-sky-400 rounded-t-3xl" />
            <div className="p-6 lg:p-10">
              <div className="grid lg:grid-cols-2 gap-8">
                <p className="text-gray-800 leading-relaxed text-justify">
                  PT Asrindo Environt Investama mulai melangkah sejak tahun 2020
                  dan terus berkembang sebagai penyedia jasa konsultasi
                  lingkungan yang berlandaskan peningkatan kesejahteraan
                  masyarakat melalui pemanfaatan sumber daya alam secara
                  berwawasan lingkungan. Layanan kami berfokus pada perlindungan
                  dan pengelolaan lingkungan hidup terpadu sesuai peraturan
                  perundang-undangan serta mendorong pembangunan berkelanjutan.
                  Sebagai konsultan, kami memastikan proses berjalan transparan,
                  adil, profesional, dan fleksibel dengan dukungan tenaga ahli
                  yang sesuai bidangnya.
                </p>
                <p className="text-gray-800 leading-relaxed text-justify">
                  Kami berkomitmen mengedepankan kebutuhan layanan dan solusi
                  terbaik guna meningkatkan kinerja di sektor industri,
                  perizinan, investasi, serta pemecahan problem lingkungan
                  lainnya. Kolaborasi dengan pemerintah, pelaku usaha, dan
                  praktisi profesional menjadi landasan kami untuk memberi hasil
                  yang terukur—tepat waktu, terdokumentasi, dan dapat diaudit.
                </p>
              </div>

              <div className="mt-8 grid sm:grid-cols-3 gap-4">
                {[
                  "Transparansi & Regulasi",
                  "Solusi Komprehensif",
                  "Tepat Waktu & Terukur",
                ].map((t) => (
                  <div
                    key={t}
                    className="rounded-xl border border-emerald-200/70 bg-white/70 backdrop-blur-md px-4 py-3 text-sm font-medium text-[#0A1D4A] shadow-[0_8px_24px_rgba(10,29,74,0.08)]"
                  >
                    {t}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          NILAI UTAMA / KEKUATAN (dari halaman 2 Compro)
         ===================================================== */}
      <section className="relative py-16" data-aos="zoom-in-up">
        <div className="max-w-7xl mx-auto px-6 lg:px-24">
          <h3 className="text-2xl font-extrabold text-[#0A1D4A] mb-10 text-center">
            Nilai Utama Asrindo
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                t: "Regulasi & Transparansi",
                d: "Proses terdokumentasi, dapat diaudit, dan mengikuti regulasi.",
                color: "from-emerald-400 to-teal-500",
              },
              {
                t: "Profesional & Kompeten",
                d: "Tenaga ahli bersertifikat dari berbagai disiplin ilmu.",
                color: "from-sky-400 to-blue-500",
              },
              {
                t: "Efisien & Tepat Waktu",
                d: "Perencanaan jelas, eksekusi terukur, hasil terverifikasi.",
                color: "from-yellow-400 to-orange-500",
              },
              {
                t: "Kolaboratif",
                d: "Bersinergi dengan industri, pemerintah, dan akademisi.",
                color: "from-purple-400 to-pink-500",
              },
            ].map((x, i) => (
              <div
                key={x.t}
                className="relative group rounded-2xl bg-white border border-gray-100 shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
              >
                {/* Accent gradient bar */}
                <div
                  className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${x.color}`}
                />

                <div className="p-6 flex flex-col space-y-3">
                  {/* Nomor index */}
                  <span
                    className={`inline-block w-9 h-9 rounded-lg bg-gradient-to-br ${x.color} text-white font-bold text-center leading-9 shadow-sm`}
                  >
                    {i + 1}
                  </span>

                  {/* Judul */}
                  <h4 className="font-semibold text-lg text-[#0A1D4A] leading-snug">
                    {x.t}
                  </h4>

                  {/* Deskripsi */}
                  <p className="text-sm text-gray-600 leading-relaxed">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          VISI & MISI (desain modern)
         ===================================================== */}
      <section id="visi-misi" className="relative py-20" data-aos="fade-up">
        {/* Background lembut */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-emerald-50/60 to-white" />

        <div className="max-w-6xl mx-auto px-6 lg:px-12 space-y-12">
          {/* VISI */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="rounded-3xl border border-emerald-100 bg-white/90 backdrop-blur p-8 shadow-[0_12px_40px_rgba(10,29,74,0.06)]"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-emerald-100 text-emerald-800 text-sm font-semibold">
              <span className="inline-block h-2 w-2 rounded-full bg-emerald-600" />
              Visi
            </div>
            <h3 className="mt-6 text-3xl lg:text-4xl font-extrabold text-[#0A1D4A] leading-relaxed max-w-4xl">
              Menjadi perusahaan penyedia jasa konsultasi, pelatihan, dan
              sertifikasi di bidang lingkungan hidup yang terbaik di Indonesia.
            </h3>
          </div>

          {/* MISI – single column timeline kiri */}
          <div
            data-aos="fade-up"
            data-aos-delay="100"
            className="rounded-3xl border border-emerald-100 bg-white p-8 shadow-[0_12px_40px_rgba(10,29,74,0.05)]"
          >
            <div className="mb-6 inline-flex items-center gap-2 px-4 py-1 rounded-full bg-sky-100 text-sky-800 text-sm font-semibold">
              <span className="inline-block h-2 w-2 rounded-full bg-sky-600" />
              Misi
            </div>

            <div className="relative">
              {/* central line (kiri) */}
              <div className="absolute left-4 top-0 bottom-0 w-px bg-emerald-200" />

              <ul className="space-y-6">
                {[
                  "Mendukung program pemerintah dalam merencanakan dan meningkatkan perekonomian masyarakat dalam sektor industri, pengelolaan sumber daya alam, dan pemanfaatan limbah melalui 3R dengan prinsip pembangunan berkelanjutan.",
                  "Memberikan pelayanan terbaik untuk seluruh stakeholder dengan profesionalisme serta membentuk hubungan baik jangka panjang.",
                  "Meningkatkan kualitas perusahaan secara kontinu.",
                ].map((m, i) => (
                  <li key={i} className="relative pl-12">
                    {/* dot */}
                    <div className="absolute left-4 top-5 -translate-x-1/2">
                      <span className="block w-3.5 h-3.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100" />
                    </div>
                    {/* card */}
                    <div className="rounded-2xl border border-emerald-100 bg-white/95 backdrop-blur p-5 shadow-sm">
                      <div className="flex gap-3 items-start">
                        <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-emerald-100 text-emerald-700 font-bold flex-none">
                          {i + 1}
                        </span>
                        <p className="text-gray-700 leading-relaxed">{m}</p>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ================== STRUKTUR PERUSAHAAN ================== */}
      <section
        id="struktur"
        className="relative py-16 bg-gradient-to-b from-emerald-50 via-white to-sky-50"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-[#0A1D4A] text-center">
            Struktur Perusahaan
          </h2>
          <p className="mt-3 text-gray-600 text-center max-w-2xl mx-auto">
            Hirarki organisasi untuk pengambilan keputusan cepat, mutu layanan
            yang terjaga, dan Regulasi regulasi.
          </p>

          {/* Komisaris */}
          <div className="mt-10 relative">
            <CardCenter label="Komisaris" />
            <ConnectorDown />
          </div>

          {/* Direktur Utama */}
          <div className="relative mt-6">
            <CardCenter label="Direktur Utama" />
            <ConnectorDown />
          </div>

          {/* Tiga Direktur */}
          <div className="relative mt-6 grid sm:grid-cols-3 gap-6">
            {["Direktur", "Direktur", "Direktur"].map((t, i) => (
              <div key={i} className="relative">
                <ConnectorUp />
                <Card label={t} />
              </div>
            ))}
          </div>

          {/* General Manager */}
          <div className="relative mt-6">
            <ConnectorUpCenter />
            <CardCenter label="General Manager" />
            <ConnectorDown />
          </div>

          {/* Departemen */}
          <div className="relative mt-8">
            {/* Horizontal bar penghubung ke-4 departemen */}
            <HorizontalBar />
            <div className="grid sm:grid-cols-4 gap-6">
              {[
                "Keuangan",
                "Operasional",
                "Marketing",
                "Administrasi & Tax",
              ].map((d) => (
                <div key={d} className="relative">
                  <ConnectorUp />
                  <Card label={d} />
                </div>
              ))}
            </div>
          </div>

          {/* Sub-unit (Operasional & Marketing) */}
          <div className="relative mt-8">
            {/* Horizontal bar penghubung sub-unit */}
            <HorizontalBar />
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { head: "Dokumen", parent: "Operasional" },
                { head: "Konsultan • Laboratory", parent: "Operasional" },
                { head: "Training & Sertifikasi", parent: "Operasional" },
                { head: "Marketing & Branding", parent: "Marketing" },
              ].map((x) => (
                <div key={x.head} className="relative">
                  <ConnectorUp />
                  <CardSub parent={x.parent} head={x.head} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================
          CTA: SIAP BERKOLABORASI (background foto)
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
            Siap berkolaborasi dengan Asrindo?
          </h3>
          <p className="mt-3 text-emerald-50 max-w-2xl mx-auto">
            Dapatkan paparan awal kebutuhan, rekomendasi langkah teknis, serta
            estimasi timeline penyelesaian dokumen/perizinan. Tim kami siap
            menjadwalkan konsultasi atau presentasi perusahaan.
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
    </div>
  );
}

/* ================== MINI COMPONENTS (replace versi lama) ================== */

function Card({ label }) {
  return (
    <div className="rounded-2xl bg-white/90 backdrop-blur border border-emerald-100 shadow-[0_10px_30px_rgba(10,29,74,0.06)] p-5 text-center">
      <div className="font-semibold text-[#0A1D4A]">{label}</div>
    </div>
  );
}

function CardCenter({ label }) {
  return (
    <div className="mx-auto w-full sm:w-[420px] rounded-2xl bg-white/90 backdrop-blur border border-emerald-100 shadow-[0_10px_30px_rgba(10,29,74,0.06)]">
      <div className="p-5 text-center">
        <div className="font-semibold text-[#0A1D4A] text-lg">{label}</div>
      </div>
    </div>
  );
}

function CardSub({ parent, head }) {
  return (
    <div className="rounded-2xl bg-white/90 backdrop-blur border border-emerald-100 shadow-[0_10px_30px_rgba(10,29,74,0.06)] p-5 text-center">
      <div className="text-xs text-emerald-700/80">{parent}</div>
      <div className="font-semibold text-[#0A1D4A]">{head}</div>
    </div>
  );
}

/* Garis konektor — diperjelas (tebal & warna brand) */
function ConnectorDown() {
  return (
    <div className="hidden sm:block absolute left-1/2 -bottom-6 h-6 w-[2px] bg-emerald-500/70" />
  );
}
function ConnectorUp() {
  return (
    <div className="hidden sm:block absolute -top-6 left-1/2 -translate-x-1/2 h-6 w-[2px] bg-emerald-500/70" />
  );
}
function ConnectorUpCenter() {
  return (
    <div className="hidden sm:block absolute left-1/2 -top-6 h-6 w-[2px] bg-emerald-500/70" />
  );
}
/* Bar horizontal lebar penuh untuk mempertegas konektor kiri–kanan */
function HorizontalBar() {
  return (
    <div className="hidden sm:block absolute -top-6 left-0 right-0 mx-auto h-[2px] bg-emerald-500/60 rounded" />
  );
}
