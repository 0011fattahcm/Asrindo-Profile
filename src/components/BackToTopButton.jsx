// src/components/BackToTopButton.jsx
import React, { useState, useEffect } from "react";
import { Rocket } from "lucide-react";

export default function BackToTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-10 pointer-events-none"
      }`}
    >
      <div className="relative group">
        {/* Tombol utama */}
        <button
          onClick={scrollToTop}
          className="p-4 rounded-full shadow-lg transition-all duration-300
            bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 
            text-white hover:scale-110 hover:shadow-xl"
          aria-label="Kembali ke atas"
        >
          <Rocket className="w-6 h-6" />
        </button>

        {/* Tooltip */}
        <div
          className="absolute right-full mr-3 top-1/2 -translate-y-1/2 px-3 py-1 rounded-lg
            bg-white/90 backdrop-blur-md text-emerald-800 text-sm font-medium shadow-md
            opacity-0 scale-95 group-hover:opacity-100 group-hover:scale-100
            transition-all duration-300 whitespace-nowrap"
        >
          Back to Top
        </div>
      </div>
    </div>
  );
}
