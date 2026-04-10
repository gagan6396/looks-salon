"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const slides = [
  {
    id: 1,
    tagline: "Signature Experience",
    heading: ["Perfect", "Haircut"],
    sub: "Special haircut crafted for your face shape",
    cta: "Learn More",
    image: "/looksban.webp",
  },
  {
    id: 2,
    tagline: "Luxurious Treatment",
    heading: ["Elegant", "Coloring"],
    sub: "Premium color services with the finest products",
    cta: "Explore Services",
    image: "/images/slide-2.jpg",
  },
  {
    id: 3,
    tagline: "Expert Stylists",
    heading: ["Timeless", "Beauty"],
    sub: "Over 15 years transforming looks with artistry",
    cta: "Meet Our Team",
    image: "/images/slide-3.jpg",
  },
];

export default function HeroSlider() {
  return (
    <>
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@1,600&family=Jost:wght@300;400&display=swap');

        .hero-swiper {
          width: 100%;
          height: 100vh;
          min-height: 580px;
        }

        /* Mobile: half screen height */
        @media (max-width: 768px) {
          .hero-swiper {
            height: 50vh;
            min-height: 300px;
            max-height: 50vh;
          }
        }

        /* Pagination dots */
        .hero-swiper .swiper-pagination {
          bottom: 16px !important;
        }
        
        @media (max-width: 768px) {
          .hero-swiper .swiper-pagination {
            bottom: 12px !important;
          }
        }
        
        .hero-swiper .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: rgba(255,255,255,0.35);
          opacity: 1;
          transition: all 0.35s ease;
        }
        
        .hero-swiper .swiper-pagination-bullet-active {
          width: 28px;
          border-radius: 4px;
          background: #c9a96e;
        }

        /* Navigation arrows - hide on mobile */
        .hero-swiper .swiper-button-prev,
        .hero-swiper .swiper-button-next {
          width: 44px;
          height: 44px;
          background: rgba(0,0,0,0.35);
          border: 1px solid rgba(255,255,255,0.2);
          border-radius: 50%;
          color: #fff;
          transition: border-color 0.3s, background 0.3s;
        }
        
        @media (max-width: 768px) {
          .hero-swiper .swiper-button-prev,
          .hero-swiper .swiper-button-next {
            display: none;
          }
        }
        
        .hero-swiper .swiper-button-prev:hover,
        .hero-swiper .swiper-button-next:hover {
          background: rgba(201,169,110,0.2);
          border-color: #c9a96e;
        }
        
        .hero-swiper .swiper-button-prev::after,
        .hero-swiper .swiper-button-next::after {
          font-size: 13px;
          font-weight: 700;
        }
        
        .hero-swiper .swiper-button-prev {
          left: 24px;
        }
        
        .hero-swiper .swiper-button-next {
          right: 24px;
        }

        /* Content fade-up per slide */
        .slide-content > * {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.6s ease, transform 0.6s ease;
        }
        
        .swiper-slide-active .slide-content > *:nth-child(1) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.25s;
        }
        
        .swiper-slide-active .slide-content > *:nth-child(2) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.4s;
        }
        
        .swiper-slide-active .slide-content > *:nth-child(3) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.55s;
        }
        
        .swiper-slide-active .slide-content > *:nth-child(4) {
          opacity: 1;
          transform: translateY(0);
          transition-delay: 0.68s;
        }

        /* Typography */
        .slide-heading {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 600;
          color: #fff;
          line-height: 1.05;
          font-size: clamp(2.5rem, 7.5vw, 6rem);
        }
        
        @media (max-width: 768px) {
          .slide-heading {
            font-size: clamp(1.5rem, 5vw, 2rem);
          }
        }
        
        .slide-tagline {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: clamp(0.65rem, 2vw, 0.72rem);
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: #c9a96e;
        }
        
        @media (max-width: 768px) {
          .slide-tagline {
            font-size: 0.6rem;
            letter-spacing: 0.2em;
          }
        }
        
        .slide-sub {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: clamp(0.85rem, 2.5vw, 0.95rem);
          color: rgba(255,255,255,0.6);
        }
        
        @media (max-width: 768px) {
          .slide-sub {
            font-size: 0.75rem;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
          }
        }
        
        .slide-cta-btn {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: clamp(0.9rem, 2.5vw, 1rem);
          display: inline-flex;
          align-items: center;
          gap: 12px;
          color: #fff;
          border: 1px solid rgba(255,255,255,0.35);
          padding: 10px 24px;
          border-radius: 100px;
          transition: border-color 0.3s, background 0.3s;
          text-decoration: none;
        }
        
        @media (max-width: 768px) {
          .slide-cta-btn {
            padding: 6px 16px;
            gap: 6px;
            font-size: 0.8rem;
          }
          
          .slide-cta-btn svg {
            width: 12px;
            height: auto;
          }
        }
        
        .slide-cta-btn:hover {
          border-color: #c9a96e;
          background: rgba(201,169,110,0.12);
        }
        
        /* Ensure images cover properly on all devices */
        .hero-swiper .swiper-slide {
          overflow: hidden;
        }
        
        /* Center content vertically for mobile */
        @media (max-width: 768px) {
          .hero-swiper .flex.items-center {
            align-items: center !important;
          }
          
          /* Slightly darker overlay on mobile for better readability */
          .hero-swiper .bg-black\\/45 {
            background-color: rgba(0, 0, 0, 0.55);
          }
        }
      `}</style>

      <section className="relative w-full overflow-hidden">
        <Swiper
          className="hero-swiper"
          modules={[Autoplay, EffectFade, Pagination, Navigation]}
          effect="fade"
          fadeEffect={{ crossFade: true }}
          autoplay={{ delay: 4500, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          navigation={{
            prevEl: '.swiper-button-prev',
            nextEl: '.swiper-button-next',
          }}
          loop={true}
          speed={800}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={slide.id}>
              {/* Background image with proper containment */}
              <div className="absolute inset-0 w-full h-full">
                <Image
                  src={slide.image}
                  alt={`${slide.heading[0]} ${slide.heading[1]}`}
                  fill
                  className="object-cover object-center"
                  priority={index === 0}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 100vw, 100vw"
                  quality={90}
                />
              </div>

              {/* Dark overlay with responsive opacity */}
              <div className="absolute inset-0 bg-black/45" />

              {/* Slide content - responsive padding and positioning */}
              <div className="absolute inset-0 flex items-center">
                <div className="max-w-[1400px] mx-auto w-full px-5 sm:px-8 lg:px-20">
                  <div className="slide-content flex flex-col gap-2 sm:gap-4 max-w-sm sm:max-w-md md:max-w-lg">
                    {/* Tagline */}
                    <p className="slide-tagline">{slide.tagline}</p>

                    {/* Heading */}
                    <h1 className="slide-heading">
                      {slide.heading[0]}
                      <br />
                      {slide.heading[1]}
                    </h1>

                    {/* Subtext */}
                    <p className="slide-sub">{slide.sub}</p>

                    {/* CTA */}
                    <div className="mt-1 sm:mt-2">
                      <a href="#" className="slide-cta-btn">
                        {slide.cta}
                        <svg 
                          width="16" 
                          height="10" 
                          viewBox="0 0 16 10" 
                          fill="none"
                          className="w-3 sm:w-4 h-auto"
                        >
                          <path 
                            d="M1 5h14M10 1l5 4-5 4" 
                            stroke="currentColor" 
                            strokeWidth="1.2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round"
                          />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </>
  );
}