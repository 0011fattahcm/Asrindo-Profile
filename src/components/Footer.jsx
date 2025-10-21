// src/components/Footer.jsx
import React from "react";
import logo from "/img/logo.png";

const socials = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/asrindo_aei/",
    icon: (props) => (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        {...props}
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.5" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "WhatsApp",
    href: "https://wa.me/6281222522192",
    icon: (props) => (
      <svg
        viewBox="0 0 32 32"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path d="M16.002 2.666c-7.366 0-13.333 5.967-13.333 13.333 0 2.353.614 4.625 1.781 6.637L2.667 29.333l6.906-1.76a13.25 13.25 0 006.429 1.694c7.366 0 13.333-5.967 13.333-13.333 0-7.365-5.967-13.268-13.333-13.268zm0 24.002a10.57 10.57 0 01-5.38-1.474l-.385-.228-4.095 1.047 1.095-3.99-.25-.385a10.64 10.64 0 01-1.645-5.64c0-5.886 4.775-10.662 10.662-10.662s10.662 4.776 10.662 10.662-4.776 10.67-10.662 10.67zm5.882-8.031c-.32-.16-1.884-.928-2.176-1.03-.293-.102-.507-.16-.72.16-.214.32-.825 1.03-1.013 1.243-.187.213-.373.24-.693.08-.32-.16-1.35-.496-2.573-1.58-.95-.85-1.592-1.9-1.777-2.22-.187-.32-.02-.493.14-.653.14-.133.32-.347.48-.52.16-.173.213-.293.32-.506.107-.213.053-.4-.027-.56-.08-.16-.72-1.74-.987-2.38-.267-.64-.533-.56-.72-.573l-.613-.013c-.214 0-.56.08-.853.4-.293.32-1.12 1.093-1.12 2.666 0 1.573 1.147 3.093 1.307 3.307.16.214 2.253 3.44 5.46 4.826 3.206 1.386 3.206.906 3.786.853.58-.053 1.733-.707 1.987-1.386.253-.68.253-1.24.173-1.386-.08-.147-.293-.24-.613-.4z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto px-6 lg:px-24 py-12">
        {/* Panel utama */}
        <div className="relative rounded-3xl bg-gradient-to-tr from-[#0A1D4A] via-[#0B2B6D] to-[#0A1D4A] text-white px-6 lg:px-12 py-10 shadow-[0_20px_40px_rgba(10,29,74,.25)]">
          {/* glow lembut */}
          <div className="pointer-events-none absolute -inset-1 rounded-[28px] bg-white/5 blur-xl"></div>

          <div className="relative grid gap-10 md:grid-cols-3 items-center">
            {/* Logo + identitas */}
            <div className="flex items-center gap-4">
              <img
                src={logo}
                alt="PT Asrindo Environt Investama"
                className="w-12 h-12 object-contain"
              />
              <div>
                <h3 className="text-xl font-extrabold tracking-tight">
                  PT Asrindo Environt Investama
                </h3>
                <p className="text-white/70 text-sm">
                  Mewujudkan sektor lingkungan yang lebih baik
                </p>
              </div>
            </div>

            {/* Alamat */}
            <div className="md:col-span-2">
              <div className="font-semibold">Alamat & Kontak</div>
              <p className="text-white/80 mt-2 text-sm">
                Perum Citra Garden BMW Blok B 01 No. 01, Serang, Banten
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm">
                <span className="inline-flex items-center gap-2">
                  <svg
                    viewBox="0 0 24 24"
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M22 16.9v3a2 2 0 01-2.2 2A19.8 19.8 0 013.1 5.2 2 2 0 015 3h3a2 2 0 012 1.7c.1.9.3 1.8.6 2.6a2 2 0 01-.5 2.1l-1.2 1.2a16 16 0 006.7 6.7l1.2-1.2a2 2 0 012.1-.5c.8.3 1.7.5 2.6.6A2 2 0 0122 16.9z" />
                  </svg>
                  (0254) 794-2717 • 081-222-522-192
                </span>
                <a
                  href="mailto:asrindoenvirontinvestama@gmail.com"
                  className="inline-flex items-center gap-2 underline decoration-white/30 hover:decoration-white"
                >
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
                  asrindoenvirontinvestama@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* garis */}
          <div className="relative my-8 h-px bg-white/10" />

          {/* Sosial */}
          <div className="relative grid gap-6 md:grid-cols-2 items-center">
            <div className="text-white/80 text-sm">
              Legalitas: AHU-0037847.AH.01.01.TAHUN2020 • NIB 0220101900616
            </div>
            <div className="md:justify-self-end">
              <div className="text-right font-semibold md:text-right">
                Terhubung dengan Kami
              </div>
              <div className="mt-3 flex md:justify-end gap-3">
                {socials.map((s) => (
                  <a
                    key={s.name}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.name}
                    className="w-12 h-12 rounded-full bg-white text-[#0A1D4A] grid place-items-center
                               ring-1 ring-white/20 hover:ring-[#D4AF37] hover:text-[#D4AF37] hover:scale-110 transition-all duration-300 shadow-sm hover:shadow-[0_0_12px_#D4AF3770]"
                  >
                    {s.icon({ className: "w-6 h-6" })}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Link bar + copyright */}
        <div className="mt-6 items-center justify-between text-sm text-gray-600">
          <div className="text-center">
            © {new Date().getFullYear()} PT Asrindo Environt Investama
          </div>
        </div>
      </div>
    </footer>
  );
}
