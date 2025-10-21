// src/components/Navbar.jsx
import React from "react";
import { Link } from "react-router-dom";
import Logo from "/img/logo.png";

function useScrolled() {
  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return scrolled;
}

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [dropdown, setDropdown] = React.useState(null);
  const scrolled = useScrolled();

  const menus = [
    { label: "Beranda", path: "/" },
    {
      label: "Tentang Kami",
      sub: [
        { label: "Profil", path: "/profil" },
        { label: "Riwayat Kerja", path: "/riwayat-kerja" },
      ],
    },
    {
      label: "Program",
      sub: [
        { label: "Layanan", path: "/layanan" },
        { label: "Pelatihan", path: "/pelatihan" },
        { label: "Trading Chemical", path: "/trading-chemical" },
      ],
    },
    { label: "Galeri", path: "/galeri" },
    { label: "Kontak", path: "/kontak" },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-shadow ${
        scrolled ? "shadow-[0_8px_24px_-12px_rgba(2,8,23,0.25)]" : ""
      }`}
    >
      {/* Topbar */}
      <div
        className={`overflow-hidden text-sm transition-[max-height,opacity] duration-300 ${
          scrolled
            ? "max-h-0 opacity-0 border-b-0"
            : "max-h-20 opacity-100 bg-white border-b border-gray-200"
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 md:px-24 py-2 flex flex-col lg:flex-row items-center justify-between text-gray-600 text-sm">
          <div className="flex items-center gap-2 text-center lg:text-left">
            <span className="font-bold tracking-tight">
              Perum Citra Garden BMW Blok B 01 No. 1, Serang, Banten
            </span>
          </div>
          <div className="flex items-center gap-4 mt-1 lg:mt-0">
            <span>Telp: (0254) 794-2717</span>
            <span>HP: 081-222-522-192</span>
            <a
              href="mailto:asrindoenvirontinvestama@gmail.com"
              className="hover:text-[#0E7A5A] transition-colors"
            >
              asrindoenvirontinvestama@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Navbar utama */}
      <div
        className={`transition-colors duration-300 ${
          scrolled
            ? "backdrop-blur-md bg-white/70 text-[#0A1D4A] ring-1 ring-black/5"
            : "bg-[#0A1D4A] text-white"
        }`}
      >
        <div className="container mx-auto px-6 md:px-24 py-3 md:py-4 flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3">
            <img src={Logo} alt="ASRINDO Logo" className="h-10 md:h-14" />
            <span className="font-extrabold tracking-tight">
              PT ASRINDO ENVIRONT INVESTAMA
            </span>
          </Link>

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center gap-8 font-medium relative">
            {menus.map((m, i) =>
              m.sub ? (
                <div
                  key={m.label}
                  className="relative group"
                  onMouseEnter={() => setDropdown(i)}
                  onMouseLeave={() => setDropdown(null)}
                >
                  {/* Button dropdown */}
                  <button className="flex items-center gap-1 relative focus:outline-none transition-all">
                    <span
                      className={`transition-colors ${
                        dropdown === i
                          ? "text-[#D4AF37]"
                          : "group-hover:text-[#D4AF37]"
                      }`}
                    >
                      {m.label}
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className={`w-4 h-4 mt-[2px] transition-transform duration-300 ${
                        dropdown === i ? "rotate-180 text-[#D4AF37]" : ""
                      }`}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                      />
                    </svg>

                    {/* underline active */}
                    <span
                      className={`absolute left-0 -bottom-[2px] h-[2px] bg-[#D4AF37] transition-all duration-300 ${
                        dropdown === i ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </button>

                  {/* Dropdown submenu */}
                  <div
                    className={`absolute left-0 top-full mt-3 w-56 rounded-xl transition-all duration-200 ease-out overflow-hidden ${
                      dropdown === i
                        ? "opacity-100 visible translate-y-0"
                        : "opacity-0 invisible -translate-y-2"
                    }`}
                  >
                    {/* glowing border wrapper */}
                    <div className="relative bg-white rounded-xl shadow-[0_8px_30px_-12px_rgba(0,0,0,0.25)]">
                      <div className="absolute inset-0 rounded-xl border-[1.5px] border-transparent bg-[linear-gradient(160deg,#D4AF37,rgba(255,255,255,0))] bg-origin-border bg-clip-border opacity-70 pointer-events-none"></div>

                      {m.sub.map((s) => (
                        <Link
                          key={s.label}
                          to={s.path}
                          className="relative block px-5 py-3 text-sm font-medium transition-all duration-300 group/item overflow-hidden"
                        >
                          {/* Garis gold kiri */}
                          <span className="absolute inset-y-0 left-0 w-[5px] bg-[#D4AF37] shadow-[0_0_6px_#B38E1Daa] scale-y-0 group-hover/item:scale-y-100 origin-top transition-transform duration-200"></span>

                          {/* Background hover */}
                          <span className="absolute inset-0 bg-[#F9FAFB] opacity-0 group-hover/item:opacity-100 transition-opacity duration-200"></span>

                          {/* Text */}
                          <span className="relative z-10 group-hover/item:text-[#0A1D4A] group-hover/item:font-semibold transition-colors duration-200">
                            {s.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link key={m.label} to={m.path} className="relative group">
                  <span className="transition-colors group-hover:text-[#D4AF37]">
                    {m.label}
                  </span>
                  <span className="absolute left-0 -bottom-[2px] h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full w-0"></span>
                </Link>
              )
            )}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              to="/kontak"
              className={`px-4 py-2 rounded-lg transition ${
                scrolled
                  ? "border border-[#0A1D4A]/30 text-[#0A1D4A] hover:bg-[#0A1D4A] hover:text-white"
                  : "border border-white/60 text-white hover:bg-white hover:text-[#0A1D4A]"
              }`}
            >
              Hubungi Sekarang
            </Link>
          </div>

          {/* Hamburger mobile */}
          <button
            aria-label={open ? "Tutup menu" : "Buka menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
            className={`md:hidden relative inline-flex items-center justify-center w-10 h-10 rounded-lg transition ${
              scrolled
                ? "border border-[#0A1D4A]/30 text-[#0A1D4A]"
                : "border border-white/40 text-white"
            }`}
          >
            <span
              className={`absolute block h-0.5 w-5 bg-current transition-transform duration-300 ${
                open ? "rotate-45" : "-translate-y-2"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 bg-current transition-opacity duration-300 ${
                open ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute block h-0.5 w-5 bg-current transition-transform duration-300 ${
                open ? "-rotate-45" : "translate-y-2"
              }`}
            />
          </button>
        </div>

        {/* Drawer mobile */}
        <div
          id="mobile-menu"
          className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ${
            open ? "max-h-[480px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <nav
            className={`px-6 md:px-24 pb-4 pt-2 space-y-2 border-t ${
              scrolled
                ? "bg-white/80 backdrop-blur border-black/10 text-[#0A1D4A]"
                : "bg-[#0A1D4A] border-white/10 text-white"
            }`}
          >
            {menus.map((m) =>
              m.sub ? (
                <div key={m.label} className="space-y-1">
                  <span className="font-semibold">{m.label}</span>
                  <div className="pl-3 border-l border-gray-300/30">
                    {m.sub.map((s) => (
                      <Link
                        key={s.label}
                        to={s.path}
                        onClick={() => setOpen(false)}
                        className="block px-3 py-2 text-sm rounded-lg hover:bg-black/5"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={m.label}
                  to={m.path}
                  onClick={() => setOpen(false)}
                  className="block px-3 py-2 rounded-lg text-base hover:bg-black/5"
                >
                  {m.label}
                </Link>
              )
            )}
          </nav>
        </div>
      </div>
    </header>
  );
}
