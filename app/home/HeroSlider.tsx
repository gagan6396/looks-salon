"use client"

import { useState, useEffect } from "react";

const images = [
  {
    desktop: "/looks-salon2.webp",
    mobile: "/ph1.jpeg"
  },
  {
    desktop: "/homeb2.png",
    mobile: "/ph2.jpg"
  },
  {
    desktop: "/looksban5.jpeg",
    mobile: "/ph3.jpg"
  },
];

export default function ImageSlider() {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((p) => (p - 1 + images.length) % images.length);
  const next = () => setCurrent((p) => (p + 1) % images.length);

  return (
    <div className="w-full mt-22 md:mt-20">
      <div className="relative w-full overflow-hidden">

        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={isMobile ? img.mobile : img.desktop}
              alt={`banner-${i}`}
              className="w-full flex-shrink-0"
            />
          ))}
        </div>

        <button
          onClick={prev}
          aria-label="Previous"
          className="absolute left-3 top-1/2 -translate-y-1/2 text-white text-3xl px-2"
        >
          ‹
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="absolute right-3 top-1/2 -translate-y-1/2 text-white text-3xl px-2"
        >
          ›
        </button>

        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? "w-5 bg-white" : "w-2 bg-white/40"
              }`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}