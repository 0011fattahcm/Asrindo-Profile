// src/pages/TradingChemicalPage.jsx
import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTopButton";
import { motion, AnimatePresence } from "framer-motion";
import { FlaskConical, ChevronDown, ChevronUp } from "lucide-react";

const categories = [
  {
    name: "Antiseptik & Desinfektan",
    desc: "Produk untuk kebersihan dan sterilisasi lingkungan kerja serta fasilitas umum, mendukung kebersihan industri dan kantor.",
    products: [
      "Hand Sanitizer Gel",
      "Hand Sanitizer Liquid",
      "Desinfektan",
      "Hand Soap",
    ],
  },
  {
    name: "Personal Protective Equipment & Test Kit",
    desc: "Perlengkapan keselamatan kerja dan alat uji kesehatan yang mendukung operasional industri berstandar K3.",
    products: [
      "Medical Mask",
      "Vinyl/Latex Gloves",
      "Safety Shoes",
      "Safety Boots",
      "Infrared Thermometer",
      "Covid-19 Test Kit (Rapid Test)",
      "Hazmat Suit",
      "Goggle Glasses",
    ],
  },
  {
    name: "Boiler & Cooling Water Treatment Chemical",
    desc: "Solusi kimia untuk menjaga efisiensi, keawetan, dan keamanan sistem boiler serta pendingin air industri.",
    products: [
      "BWT-279 Multipurpose Boiler Treatment",
      "BWT-227 Oxygen Scavenger",
      "BWT-289 Hot Water Closed Treatment",
      "CWT-127 Scale & Corrosion Inhibitor",
      "CWT-216 Microbiocide",
      "CWT-219 Bio Inhibitor",
      "CWT-135 Corrosion Inhibitor",
    ],
  },
  {
    name: "General & Solvent Chemical",
    desc: "Berbagai bahan kimia umum dan pelarut industri untuk kebutuhan proses produksi yang beragam.",
    products: [
      "Acetic Acid",
      "Alkohol 96% Food Grade",
      "Methanol",
      "CYCLO HEXANONE",
      "ISOPROPYL ALCOHOL",
      "METHYL ETHYL KETONE",
      "PROPYLENE GLYCOL",
      "TOLUEN",
      "BENZIUM KLORIUM CHLORIDE (BKC)",
    ],
  },
  {
    name: "Water Treatment Chemical",
    desc: "Bahan kimia pengolahan air bersih dan limbah industri untuk menunjang efisiensi serta keberlanjutan lingkungan.",
    products: [
      "Alum Bubuk / Kristal",
      "PAC Liquid / Powder",
      "Carbon Aktif",
      "Parafin Wax",
      "Silica Sand",
      "Resin Water (Purolite, Lewatit, Thermax)",
    ],
  },
];

export default function TradingChemicalPage() {
  const [openIndex, setOpenIndex] = useState(null);
  const toggleAccordion = (index) =>
    setOpenIndex(openIndex === index ? null : index);
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
            src="/img/lab.jpg"
            alt="Laboratorium"
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] max-w-[1200px] object-cover opacity-40"
            style={{
              WebkitMaskImage:
                "radial-gradient(55% 55% at 50% 50%, rgba(0,0,0,1) 48%, rgba(0,0,0,0) 100%)",
            }}
          />
          <img
            src="/img/chemical.jpg"
            alt="Chemical Storage"
            className="absolute left-[-10%] top-[-14%] w-[50%] max-w-[800px] object-cover opacity-85"
            style={{
              WebkitMaskImage:
                "radial-gradient(60% 60% at 62% 58%, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)",
            }}
          />
          <img
            src="/img/industry.jpg"
            alt="Industrial Plant"
            className="absolute right-[-12%] bottom-[-10%] w-[46%] max-w-[820px] object-cover opacity-80"
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
            Solusi Kimia & Lingkungan
          </span>
          <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold tracking-tight">
            Trading Chemical
          </h1>
          <p className="mt-4 max-w-3xl mx-auto text-emerald-100 leading-relaxed">
            Penyedia bahan kimia industri, perawatan air, antiseptik, dan
            perlengkapan keselamatan lingkungan berkualitas tinggi untuk
            kebutuhan profesional Anda.
          </p>
        </div>
      </section>

      {/* ================= CARD SECTION (VERTICAL + LINE) ================= */}
      <section className="relative py-24 overflow-hidden" data-aos="fade-up">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-white via-blue-50/40 to-white" />

        <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-14" data-aos="fade-up">
            <h2 className="text-3xl font-bold text-[#0A1D4A] mb-3">
              Produk & Kategori
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto leading-relaxed">
              Kami menghadirkan berbagai jenis bahan kimia industri dan produk
              pendukung untuk pengelolaan air, sanitasi, hingga kebutuhan
              lingkungan hidup.
            </p>
          </div>

          <div className="relative" data-aos="fade-up" data-aos-delay="100">
            {/* Garis vertikal aksen di kiri */}
            <div className="absolute left-5 top-0 bottom-0 w-[2px] bg-gradient-to-b from-blue-200 via-blue-100 to-transparent rounded-full" />

            <div className="space-y-10">
              {categories.map((cat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.08 }}
                  viewport={{ once: true }}
                  className="relative pl-10 group"
                >
                  {/* Titik kecil di garis */}
                  <span className="absolute left-4 top-10 h-3 w-3 rounded-full bg-blue-500 shadow-sm shadow-blue-200 group-hover:scale-125 transition-transform duration-300" />

                  {/* Card utama */}
                  <div className="relative bg-white/80 backdrop-blur-xl rounded-3xl border border-blue-100 shadow-sm hover:shadow-2xl hover:border-blue-200 transition-all duration-500 overflow-hidden">
                    <button
                      onClick={() => toggleAccordion(idx)}
                      className="w-full text-left px-8 py-6 flex justify-between items-center"
                    >
                      <div className="flex flex-col gap-2">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-gradient-to-br from-blue-500 to-sky-400 flex items-center justify-center shadow-inner shadow-blue-200">
                            <FlaskConical
                              className="text-white drop-shadow-sm"
                              size={20}
                            />
                          </div>
                          <h3 className="text-lg font-semibold text-[#0A1D4A] group-hover:text-blue-600 transition">
                            {cat.name}
                          </h3>
                        </div>
                        <p className="text-sm text-gray-500 leading-relaxed tracking-wide pl-[2.8rem] max-w-xl">
                          {cat.desc}
                        </p>
                      </div>

                      {openIndex === idx ? (
                        <ChevronUp className="text-blue-600 transition-transform duration-300" />
                      ) : (
                        <ChevronDown className="text-gray-500 transition-transform duration-300 group-hover:translate-y-1" />
                      )}
                    </button>

                    {/* Konten expand */}
                    <AnimatePresence initial={false}>
                      {openIndex === idx && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{
                            height: "auto",
                            opacity: 1,
                            transition: {
                              height: {
                                duration: 0.9,
                                ease: [0.16, 1, 0.3, 1],
                              },
                              opacity: { duration: 0.5, delay: 0.1 },
                            },
                          }}
                          exit={{
                            height: 0,
                            opacity: 0,
                            transition: {
                              duration: 0.5,
                              ease: [0.25, 0.1, 0.25, 1],
                            },
                          }}
                          className="px-10 pb-6"
                        >
                          <motion.ul
                            initial="hidden"
                            animate="visible"
                            variants={{
                              visible: {
                                transition: { staggerChildren: 0.05 },
                              },
                            }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 mt-4 list-disc list-inside text-gray-700 text-[15px] leading-relaxed"
                          >
                            {cat.products.map((p, i) => (
                              <motion.li
                                key={i}
                                variants={{
                                  hidden: { opacity: 0, y: 5 },
                                  visible: { opacity: 1, y: 0 },
                                }}
                                transition={{ duration: 0.3 }}
                                className="hover:text-blue-600 transition-colors"
                              >
                                {p}
                              </motion.li>
                            ))}
                          </motion.ul>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ======== CTA SECTION ======== */}
      <section
        className="relative overflow-hidden mb-10"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        {/* background gradient lembut */}
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-blue-100 via-sky-50 to-blue-50" />
        <div className="absolute inset-0 -z-10 opacity-10 bg-[radial-gradient(circle_at_20%_0%,white,transparent_35%),radial-gradient(circle_at_80%_100%,white,transparent_35%)]" />

        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h3 className="text-3xl font-bold text-[#0A1D4A] mb-3">
            Butuh Bahan Kimia Industri atau Konsultasi Teknis?
          </h3>
          <p className="text-gray-700 max-w-2xl mx-auto mb-6">
            Tim kami siap membantu Anda dalam pemilihan bahan kimia yang tepat,
            konsultasi lingkungan, hingga penyediaan produk dengan kualitas
            terbaik.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a
              href="/kontak"
              className="px-6 py-3 rounded-xl font-semibold text-white bg-[#0A1D4A] hover:bg-blue-800 transition shadow-sm"
            >
              Hubungi Kami
            </a>
            <a
              href="https://wa.me/6281222522192"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-3 rounded-xl font-semibold text-[#0A1D4A] border border-[#0A1D4A] hover:bg-[#0A1D4A] hover:text-white transition"
            >
              Chat WhatsApp
            </a>
          </div>
        </div>
      </section>

      <Footer />
      <BackToTop />
    </div>
  );
}
