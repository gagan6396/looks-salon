"use client";

import Image from "next/image";

// Grid layout: 3 columns, 3 rows = 9 cells
// Center cell (index 4) = logo
// All others = gallery images
// Place your images at /public/images/gallery-1.jpg ... gallery-8.jpg

const cells = [
  { type: "image", src: "/images/gallery-1.jpg", span: "" },
  { type: "image", src: "/images/gallery-2.jpg", span: "" },
  { type: "image", src: "/images/gallery-3.jpg", span: "" },
  { type: "image", src: "/images/gallery-4.jpg", span: "" },
  { type: "logo" },
  { type: "image", src: "/images/gallery-5.jpg", span: "" },
  { type: "image", src: "/images/gallery-6.jpg", span: "" },
  { type: "image", src: "/images/gallery-7.jpg", span: "" },
  { type: "image", src: "/images/gallery-8.jpg", span: "" },
];

export default function GalleryGrid() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,600&family=Jost:wght@300;400&display=swap');

        .gallery-cell {
          overflow: hidden;
          position: relative;
          aspect-ratio: 1 / 1;
        }
        .gallery-cell img {
          transition: transform 0.6s cubic-bezier(0.4,0,0.2,1);
        }
        .gallery-cell:hover img {
          transform: scale(1.07);
        }
        .gallery-cell .overlay {
          position: absolute;
          inset: 0;
          background: rgba(26,48,64,0.0);
          transition: background 0.4s ease;
          z-index: 2;
        }
        .gallery-cell:hover .overlay {
          background: rgba(26,48,64,0.35);
        }
        .gallery-cell .zoom-icon {
          position: absolute;
          inset: 0;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 3;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .gallery-cell:hover .zoom-icon {
          opacity: 1;
        }

        .logo-cell {
          aspect-ratio: 1 / 1;
          background: #000000;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        .logo-text {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          color: #fff;
          font-size: clamp(1.6rem, 3vw, 2.4rem);
          letter-spacing: 0.06em;
          line-height: 1;
        }
        .logo-sub {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          letter-spacing: 0.35em;
          font-size: clamp(0.5rem, 1vw, 0.65rem);
          text-transform: uppercase;
          color: #c9a96e;
        }
        .logo-divider {
          width: 32px;
          height: 1px;
          background: rgba(201,169,110,0.5);
          margin: 2px 0;
        }
      `}</style>

      <section className="w-full bg-[#f9f7f4] py-16 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

          {/* Header */}
          <div className="text-center mb-10">
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "0.7rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#c9a96e",
              marginBottom: 8,
            }}>
              Our Work
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: "clamp(2rem, 4vw, 2.8rem)",
              color: "#1a1a1a",
              lineHeight: 1.15,
            }}>
              Gallery
            </h2>
          </div>

          {/* 3×3 Grid */}
          <div className="grid grid-cols-3 gap-1.5 sm:gap-2">
            {cells.map((cell, i) =>
              cell.type === "logo" ? (
                /* ── Logo cell ── */
                <div key={i} className="logo-cell">
                  {/*
                    Option A: use your PNG logo
                    <Image src="/logo.png" alt="Hairi" width={120} height={60} className="object-contain" />

                    Option B: text logo (default below)
                  */}
                  <Image
                    src="/Looks-salon-logo.png"
                    alt="Hairi Hair Salon"
                    width={110}
                    height={60}
                    className="object-cover w-full brightness-0 invert"
                    // brightness-0 invert = makes any colored logo white
                  />
                  {/* Fallback text logo — remove if using Image above */}
                  {/* 
                  <div className="logo-divider" />
                  <span className="logo-text">Hairi</span>
                  <div className="logo-divider" />
                  <span className="logo-sub">Hair Salon</span>
                  */}
                </div>
              ) : (
                /* ── Image cell ── */
                <div key={i} className="gallery-cell">
                  <Image
                    src={(cell as { type: string; src: string }).src}
                    alt={`Gallery ${i + 1}`}
                    fill
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 33vw, (max-width: 1024px) 33vw, 430px"
                  />
                  <div className="overlay" />
                  <div className="zoom-icon">
                    <div style={{
                      width: 40, height: 40,
                      border: "1.5px solid rgba(255,255,255,0.8)",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}>
                      <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M8 3v10M3 8h10" stroke="white" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              )
            )}
          </div>

        </div>
      </section>
    </>
  );
}