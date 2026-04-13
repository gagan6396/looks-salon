"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import logo from "@/public/Looks-salon-logo.png"; // adjust path if needed

export default function LooksLoader() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    let raf: number;
    let start: number | null = null;
    const duration = 2800;

    function easeInOutCubic(t: number) {
      return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }

    const animate = (ts: number) => {
      if (!start) start = ts;
      const elapsed = ts - start;
      const eased = easeInOutCubic(Math.min(elapsed / duration, 1));
      setProgress(eased * 100);

      if (elapsed < duration) {
        raf = requestAnimationFrame(animate);
      } else {
        setTimeout(() => setVisible(false), 400);
      }
    };

    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, []);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-black"
      style={{
        opacity: progress >= 100 ? 0 : 1,
        transition: "opacity 0.7s ease",
        pointerEvents: progress >= 100 ? "none" : "auto",
      }}
    >
      {/* Logo */}
      <div
        style={{
          opacity: progress > 5 ? 1 : 0,
          transform: `translateY(${progress > 5 ? "0px" : "14px"})`,
          transition: "opacity 0.9s ease, transform 0.9s ease",
        }}
        className="mb-14"
      >
        <Image
          src={logo}
          alt="Looks Salon"
          height={150}
          className="h-full w-full object-cover select-none"
          draggable={false}
          priority
        />
      </div>

      {/* Progress Bar */}
      <div className="flex flex-col items-center gap-3 w-64">
        {/* Track */}
        <div className="w-full h-px bg-white/10 rounded-full overflow-hidden">
          <div
            className="h-full bg-white rounded-full"
            style={{
              width: `${progress}%`,
              transition: "width 0.04s linear",
              boxShadow:
                "0 0 8px rgba(255,255,255,0.6), 0 0 20px rgba(255,255,255,0.2)",
            }}
          />
        </div>
      </div>

      {/* Tagline */}
      <p
        className="mt-10 text-white/20 text-[10px] tracking-[0.5em] uppercase font-light"
        style={{
          opacity: progress > 25 ? 1 : 0,
          transition: "opacity 1.2s ease",
        }}
      >
        experience elegance
      </p>
    </div>
  );
}