"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

// Brand logo data
const brands = [
  {
    id: 1,
    name: "Chanel",
    logo: "/1.webp",
    alt: "Chanel logo",
  },
  {
    id: 2,
    name: "Dior",
    logo: "/2.webp",
    alt: "Dior logo",
  },
  {
    id: 3,
    name: "Gucci",
    logo: "/3.webp",
    alt: "Gucci logo",
  },
  {
    id: 4,
    name: "Louis Vuitton",
    logo: "/3.webp",
    alt: "Louis Vuitton logo",
  },
  {
    id: 5,
    name: "Hermès",
    logo: "/4.webp",
    alt: "Hermès logo",
  },
  {
    id: 6,
    name: "Prada",
    logo: "/5.webp",
    alt: "Prada logo",
  },
  {
    id: 7,
    name: "Versace",
    logo: "/6.webp",
    alt: "Versace logo",
  },
  {
    id: 8,
    name: "Armani",
    logo: "/7.webp",
    alt: "Armani logo",
  },
  {
    id: 9,
    name: "Armani",
    logo: "/9.webp",
    alt: "Armani logo",
  },
  {
    id: 10,
    name: "Armani",
    logo: "/10.webp",
    alt: "Armani logo",
  },
  {
    id: 11,
    name: "Armani",
    logo: "/11.webp",
    alt: "Armani logo",
  },
  {
    id: 12,
    name: "Armani",
    logo: "/12.webp",
    alt: "Armani logo",
  },
  {
    id: 13,
    name: "Armani",
    logo: "/13.webp",
    alt: "Armani logo",
  },
  {
    id: 14,
    name: "Armani",
    logo: "/14.webp",
    alt: "Armani logo",
  },
  {
    id: 15,
    name: "Armani",
    logo: "/15.webp",
    alt: "Armani logo",
  },
];

interface BrandMarqueeProps {
  direction?: "left" | "right";
  speed?: "slow" | "normal" | "fast";
  pauseOnHover?: boolean;
  className?: string;
}

export default function BrandMarquee({
  direction = "left",
  speed = "slow",
  pauseOnHover = true,
  className = "",
}: BrandMarqueeProps) {
  const [isPaused, setIsPaused] = useState(false);
  const marqueeRef = useRef<HTMLDivElement>(null);

  // Speed mapping
  const speedMap = {
    slow: "30s",
    normal: "15s",
    fast: "10s",
  };

  // Duplicate brands for seamless looping
  const duplicatedBrands = [...brands, ...brands, ...brands];

  return (
    <div
      className={`w-full overflow-hidden bg-white backdrop-blur-sm py-8 md:py-12 ${className}`}
      style={{
        maskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        WebkitMaskImage: "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
      }}
    >
      <div
        ref={marqueeRef}
        className="flex items-center gap-12 md:gap-16"
        style={{
          animation: `marquee-${direction} ${speedMap[speed]} linear infinite`,
          animationPlayState: isPaused && pauseOnHover ? "paused" : "running",
          width: "max-content",
        }}
        onMouseEnter={() => pauseOnHover && setIsPaused(true)}
        onMouseLeave={() => pauseOnHover && setIsPaused(false)}
      >
        {duplicatedBrands.map((brand, index) => (
          <div
            key={`${brand.id}-${index}`}
            className="flex-shrink-0 group relative"
            style={{ width: "120px" }}
          >
            <div className="relative h-12 md:h-16 w-full grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300">
              <Image
                src={brand.logo}
                alt={brand.alt}
                fill
                className="object-contain"
                sizes="120px"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Animation styles */}
      <style jsx>{`
        @keyframes marquee-left {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marquee-right {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
      `}</style>
    </div>
  );
}