// src/pages/ContactPage.jsx
import React, { useState, useEffect, useRef } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import BackToTopButton from "../components/BackToTopButton";
import AOS from "aos";
import "aos/dist/aos.css";

/* Foto background hero — taruh di /public/img */
const bgImgs = [
  "/img/pemetaan.jpg",
  "/img/peralatan.jpg",
  "/img/studi dan kajian.png",
];

/* Data kartu info singkat */
const CONTACTS = [
  {
    title: "Kantor Pusat",
    lines: ["Perum Citra Garden BMW Blok B 01 No. 1", "Serang, Banten"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          d="M12 2C8.7 2 6 4.7 6 8c0 4.4 6 12 6 12s6-7.6 6-12c0-3.3-2.7-6-6-6Zm0 8.5a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Telepon",
    lines: ["(0254) 794-2717", "HP: 081-222-522-192"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          d="M6.6 10.8a15.5 15.5 0 0 0 6.6 6.6l2.2-2.2a1.5 1.5 0 0 1 1.5-.4c1.7.6 3.6.9 5.5.9.8 0 1.5.7 1.5 1.5v3.6c0 .8-.7 1.5-1.5 1.5C10.7 22.8 1.2 13.3 1.2 1.5 1.2.7 1.9 0 2.7 0h3.6c.8 0 1.5.7 1.5 1.5 0 1.9.3 3.8.9 5.5.2.5.1 1.1-.4 1.5L6.6 10.8Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
  {
    title: "Email",
    lines: ["asrindoenvirontinvestama@gmail.com"],
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6">
        <path
          d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z"
          fill="currentColor"
        />
      </svg>
    ),
  },
];

export default function ContactPage() {
  // init AOS
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  // form state (keperluan controlled inputs + reset)
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
    hp: "", // honeypot
  });
  const [submitting, setSubmitting] = useState(false);
  const [resultMsg, setResultMsg] = useState(null); // { type: 'success' | 'error', text: string }
  const formRef = useRef(null);

  const onChange = (e) =>
    setForm((s) => ({ ...s, [e.target.name]: e.target.value }));

  // NOTE: replace this ACCESS_KEY with your real one when ready
  const ACCESS_KEY = "0254eda4-fec3-4142-8763-c3673ba01abb";

  // Submit handler — mengirim ke Web3Forms via fetch (FormData)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setResultMsg(null);

    // simple validation
    if (form.hp) return; // bot
    if (!form.name || !form.email || !form.message) {
      setResultMsg({
        type: "error",
        text: "Nama, email, dan pesan wajib diisi.",
      });
      return;
    }

    setSubmitting(true);
    try {
      const fd = new FormData();
      fd.append("access_key", ACCESS_KEY);
      fd.append(
        "subject",
        form.subject?.trim() ? form.subject.trim() : `Kontak dari ${form.name}`
      );
      fd.append("name", form.name);
      fd.append("email", form.email);
      fd.append("phone", form.phone || "-");
      fd.append("message", form.message);
      // optional: add redirect (commented out)
      // fd.append("redirect", "https://yourdomain.com/thanks");

      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: fd,
      });

      const data = await res.json();

      if (data.success) {
        setResultMsg({
          type: "success",
          text: "✅ Pesan berhasil dikirim. Terima kasih!",
        });
        // reset controlled state + form element (to clear form)
        setForm({
          name: "",
          email: "",
          phone: "",
          subject: "",
          message: "",
          hp: "",
        });
        if (formRef.current) formRef.current.reset();
      } else {
        // web3forms may return errors array or message
        const errMsg = (data && data.message) || "Gagal mengirim pesan.";
        setResultMsg({ type: "error", text: `❌ ${errMsg}` });
        console.error("Web3Forms response:", data);
      }
    } catch (err) {
      console.error("Submit error:", err);
      setResultMsg({
        type: "error",
        text: "❌ Terjadi kesalahan jaringan, coba lagi.",
      });
    } finally {
      setSubmitting(false);
      // auto-hide message setelah 7 detik
      setTimeout(() => setResultMsg(null), 7000);
    }
  };

  return (
    <div className="w-full min-h-screen flex flex-col bg-white text-gray-900">
      <Navbar />
      <BackToTopButton />

      {/* ================= HERO (tema kuning + foto + jarak bawah) ================= */}
      <section className="animate-fadeInHero relative overflow-hidden text-amber-950 pb-36">
        <div className="absolute inset-0 z-0 bg-gradient-to-br from-amber-400 via-amber-500 to-orange-500" />
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          {bgImgs.map((src, i) => (
            <img
              key={i}
              src={src}
              alt=""
              className={`absolute ${
                i === 0
                  ? "left-[-8%] top-[-18%] w-[48%]"
                  : i === 1
                  ? "right-[-10%] top-[-14%] w-[46%]"
                  : "left-1/2 bottom-[-20%] w-[62%] -translate-x-1/2"
              } opacity-40 object-cover`}
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

        <div className="absolute inset-0 z-0 opacity-30 bg-[radial-gradient(60rem_30rem_at_-10%_-20%,#fff8_25%,transparent_60%)]" />

        <div className="relative z-10 container mx-auto px-6 lg:px-24 pt-16">
          <div className="text-center text-white">
            <span className="inline-block text-xs font-semibold tracking-wider bg-white/15 px-3 py-1 rounded-full ring-1 ring-white/40">
              Hubungi Kami
            </span>
            <h1 className="mt-4 text-4xl lg:text-5xl font-extrabold tracking-tight">
              Kontak PT ASRINDO ENVIRONT INVESTAMA
            </h1>
            <p className="mt-3 max-w-3xl mx-auto text-amber-50/90">
              Ada pertanyaan, kebutuhan penawaran, atau ingin berkonsultasi?
              Kirim pesan atau kunjungi kantor kami.
            </p>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-24 bg-white rounded-t-[2rem]" />
      </section>

      {/* ================= CONTENT ================= */}
      <main className="relative -mt-16">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* Kartu info */}
          <div
            className="grid gap-5 md:grid-cols-3"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            {CONTACTS.map((c, idx) => (
              <div
                key={idx}
                className="rounded-2xl p-5 bg-white border border-amber-100 shadow-[0_10px_30px_rgba(120,53,15,0.08)]"
                data-aos="zoom-in"
                data-aos-delay={idx * 120}
              >
                <div className="flex items-start gap-3">
                  <div className="flex-none grid place-items-center w-10 h-10 rounded-xl bg-amber-100 text-amber-700">
                    {c.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold text-amber-900">{c.title}</h3>
                    <div className="mt-1 text-sm text-amber-800/80 space-y-0.5">
                      {c.lines.map((t, i) => (
                        <p key={i}>{t}</p>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Form + Maps */}
          <div className="mt-8 grid lg:grid-cols-2 gap-8">
            {/* ---- FORM (Web3Forms frontend-only) ---- */}
            <section
              data-aos="fade-right"
              data-aos-delay="150"
              className="rounded-2xl p-6 md:p-8 bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100"
            >
              <h2 className="text-2xl font-bold text-amber-900">Kirim Pesan</h2>
              <p className="mt-1 text-sm text-amber-800/80">
                Sampaikan kebutuhan Anda. Tim kami akan membalas secepatnya.
              </p>

              <form
                ref={formRef}
                className="mt-6 grid grid-cols-1 gap-4"
                onSubmit={handleSubmit}
                noValidate
              >
                {/* honeypot */}
                <input
                  type="text"
                  name="hp"
                  value={form.hp}
                  onChange={onChange}
                  className="hidden"
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* hidden fields for web3forms */}
                <input type="hidden" name="access_key" value={ACCESS_KEY} />
                <input
                  type="hidden"
                  name="subject"
                  value="Pesan Baru dari Website PT ASRINDO"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-amber-900">
                      Nama
                    </label>
                    <input
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={onChange}
                      required
                      className="mt-1 w-full rounded-xl border border-amber-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                      placeholder="Nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-amber-900">
                      Email
                    </label>
                    <input
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={onChange}
                      required
                      className="mt-1 w-full rounded-xl border border-amber-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                      placeholder="nama@domain.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-amber-900">
                      Telepon
                    </label>
                    <input
                      name="phone"
                      type="tel"
                      value={form.phone}
                      onChange={onChange}
                      className="mt-1 w-full rounded-xl border border-amber-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                      placeholder="08xxxxxxxxxx"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-amber-900">
                      Perihal
                    </label>
                    <input
                      name="subject"
                      type="text"
                      value={form.subject}
                      onChange={onChange}
                      className="mt-1 w-full rounded-xl border border-amber-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                      placeholder="Konsultasi, penawaran, dll."
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-amber-900">
                    Pesan
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={onChange}
                    required
                    className="mt-1 w-full rounded-xl border border-amber-200 px-4 py-3 focus:outline-none focus:ring-2 focus:ring-amber-500/30"
                    placeholder="Tuliskan pesan Anda di sini..."
                  />
                </div>

                <div className="flex items-center justify-between">
                  <p className="text-xs text-amber-700/70">
                    Dengan mengirim, Anda menyetujui untuk dihubungi kembali.
                  </p>

                  <div className="flex items-center gap-3">
                    <button
                      type="submit"
                      disabled={submitting}
                      className="px-6 py-2.5 rounded-xl font-semibold text-amber-900 bg-amber-300 hover:bg-amber-400 transition shadow disabled:opacity-60"
                    >
                      {submitting ? "Mengirim..." : "Kirim"}
                    </button>
                  </div>
                </div>

                {/* result message */}
                {resultMsg && (
                  <div
                    className={`mt-3 p-3 rounded-md text-sm ${
                      resultMsg.type === "success"
                        ? "bg-green-50 text-green-800"
                        : "bg-red-50 text-red-800"
                    }`}
                    role="status"
                  >
                    {resultMsg.text}
                  </div>
                )}
              </form>
            </section>

            {/* ---- MAPS ---- */}
            <section
              data-aos="fade-left"
              data-aos-delay="200"
              className="rounded-2xl overflow-hidden bg-white border border-amber-100 shadow-[0_10px_30px_rgba(120,53,15,0.08)]"
            >
              <div className="p-6">
                <h2 className="text-2xl font-bold text-amber-900">
                  Lokasi Kami
                </h2>
                <p className="mt-1 text-sm text-amber-800/80">
                  Silakan kunjungi alamat kantor kami pada peta berikut.
                </p>
              </div>
              <div className="w-full aspect-[16/10]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3967.6524179018465!2d106.09115937452879!3d-6.042338459317983!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e418dcf76cba1cf%3A0xfad2cf238b3b97be!2sPT%20ASRINDO%20ENVIRONT%20INVESTAMA!5e0!3m2!1sid!2sid!4v1759055239395!5m2!1sid!2sid"
                  className="w-full h-full"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="PT ASRINDO ENVIRONT INVESTAMA - Google Maps"
                />
              </div>
            </section>
          </div>

          {/* ======== STRIP BOTTOM: Butuh bantuan cepat? ======== */}
          <section
            data-aos="fade-up"
            data-aos-delay="200"
            className="mt-12 mb-8"
          >
            <div className="relative overflow-hidden rounded-2xl p-6 md:p-10 text-amber-950 isolation-isolate">
              <div className="absolute inset-0 z-0 bg-gradient-to-r from-amber-100 via-amber-200 to-orange-100" />
              <div className="absolute inset-0 z-0 bg-gradient-to-tr from-white/40 via-transparent to-white/20" />
              <div className="absolute -right-20 -bottom-20 z-0 w-72 h-72 rounded-full bg-white/40 blur-3xl" />
              <div className="pointer-events-none absolute inset-0 z-0 opacity-10 bg-[radial-gradient(circle_at_20%_0%,white,transparent_35%),radial-gradient(circle_at_80%_100%,white,transparent_35%)]" />

              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-extrabold">
                  Butuh bantuan cepat?
                </h3>
                <p className="mt-2 text-amber-950/80">
                  Chat WhatsApp kami respons secepatnya di jam kerja.
                </p>

                <div className="mt-4 flex flex-wrap gap-3">
                  <a
                    href="https://wa.me/6281222522192"
                    target="_blank"
                    rel="noreferrer"
                    data-aos="zoom-in"
                    data-aos-delay="300"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-semibold bg-white text-amber-900 hover:opacity-90 shadow-sm"
                  >
                    {/* WhatsApp icon */}
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 24 24"
                      className="w-5 h-5"
                      fill="none"
                    >
                      <path
                        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.272-.099-.47-.149-.669.15-.198.297-.767.967-.94 1.166-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.477-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.607.134-.133.298-.347.446-.521.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.074-.149-.669-1.611-.916-2.205-.242-.58-.487-.5-.669-.509l-.571-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.064 2.875 1.213 3.074.148.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.693.625.711.226 1.359.194 1.871.118.571-.085 1.758-.718 2.006-1.411.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347Z"
                        fill="#25D366"
                      />
                      <path
                        d="M12.005 22C6.49 22 2 17.51 2 11.995 2 6.48 6.49 2 12.005 2 17.52 2 22 6.49 22 12.005 22 17.52 17.52 22 12.005 22Zm0-18.4A6.39 6.39 0 0 0 5.6 12.005c0 3.534 2.871 6.405 6.405 6.405s6.395-2.871 6.395-6.405S15.539 3.6 12.005 3.6Z"
                        fill="#25D366"
                      />
                    </svg>
                    Chat WhatsApp
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
