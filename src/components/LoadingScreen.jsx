// src/components/LoadingScreen.jsx
import React, { useEffect, useState } from "react";
import logo from "/img/logo.png";

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(false), 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div
      className={`fixed inset-0 z-[9999] flex items-center justify-center bg-white transition-opacity duration-700 ${
        visible ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
    >
      <div className="relative w-44 h-44 flex items-center justify-center">
        {/* Spinner gradasi biru */}
        <div className="absolute inset-0 rounded-full border-[6px] border-transparent animate-spin-gradient shadow-[0_0_25px_rgba(59,130,246,0.35)]" />

        {/* Logo */}
        <img
          src={logo}
          alt="ASRINDO Logo"
          className="w-24 h-24 object-contain animate-pulse drop-shadow-[0_0_10px_rgba(10,29,74,0.25)]"
        />
      </div>
    </div>
  );
}
