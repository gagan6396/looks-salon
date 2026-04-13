"use client";

import { useState } from "react";
import Image from "next/image";

const services = [
  {
    id: 1,
    letter: "H",
    title: "Hair Care",
    desc: "After deciding on the care your hair needs, we help you achieve a glamorous look.",
    image: "/images/service-1.jpg",
    back: {
      heading: "What's Included",
      points: ["Deep conditioning treatment", "Scalp massage & analysis", "Custom moisture therapy", "Heat protection styling"],
      // duration: "60 min",
      // price: "From $45",
    },
  },
  {
    id: 2,
    letter: "A",
    title: "Advanced Styling",
    desc: "We make you feel special by applying the latest and modern hairstyle.",
    image: "/images/service-2.jpg",
    back: {
      heading: "What's Included",
      points: ["Consultation & face shape analysis", "Blow dry & finish", "Curling or straightening", "Style hold & protect"],
      // duration: "75 min",
      // price: "From $60",
    },
  },
  {
    id: 3,
    letter: "I",
    title: "Innovative Haircut",
    desc: "You will be reborn with our innovative modern haircut techniques.",
    image: "/images/service-3.jpg",
    back: {
      heading: "What's Included",
      points: ["Precision cut technique", "Face-shape tailored style", "Razor or scissor finish", "Complimentary wash & dry"],
      // duration: "45 min",
      // price: "From $35",
    },
  },
  {
    id: 4,
    letter: "R",
    title: "Range Hair",
    desc: "You will have a magnificent look with color ranges specific to your head structure.",
    image: "/images/service-4.jpg",
    back: {
      heading: "What's Included",
      points: ["Color consultation", "Full or partial highlights", "Balayage / ombre options", "Toner & gloss finish"],
      // duration: "90 min",
      // price: "From $80",
    },
  },
];

function ServiceCard({ service }: { service: typeof services[0] }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <>
      <style>{`
        .card-scene {
          perspective: 1000px;
        }
        .card-inner {
          position: relative;
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          transition: transform 0.7s cubic-bezier(0.4, 0.2, 0.2, 1);
        }
        .card-inner.flipped {
          transform: rotateY(180deg);
        }
        .card-face {
          position: absolute;
          inset: 0;
          backface-visibility: hidden;
          -webkit-backface-visibility: hidden;
          border-radius: 12px;
          overflow: hidden;
        }
        .card-back {
          transform: rotateY(180deg);
        }
      `}</style>

      <div
        className="card-scene cursor-pointer"
        style={{ height: 420 }}
        onClick={() => setFlipped(!flipped)}
      >
        <div className={`card-inner ${flipped ? "flipped" : ""}`}>

          {/* ── FRONT ── */}
          <div className="card-face">
            {/* Background image */}
            <div className="absolute inset-0">
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover object-center"
                sizes="(max-width: 768px) 100vw, 25vw"
              />
            </div>
            {/* Dark overlay */}
            <div className="absolute inset-0 bg-black/55" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-between px-6 py-8 text-center">
              {/* Big letter */}
              <span style={{
                fontFamily: "'Dancing Script', cursive",
                fontSize: "clamp(5rem, 10vw, 7rem)",
                color: "#fff",
                lineHeight: 1,
                opacity: 0.95,
                textShadow: "0 2px 20px rgba(0,0,0,0.4)",
              }}>
                {service.letter}
              </span>

              {/* Bottom text */}
              <div className="flex flex-col items-center gap-3">
                <h3 style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: "1.5rem",
                  color: "#fff",
                  fontWeight: 700,
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.83rem",
                  color: "rgba(255,255,255,0.75)",
                  lineHeight: 1.6,
                }}>
                  {service.desc}
                </p>
                <button style={{
                  fontFamily: "'Dancing Script', cursive",
                  fontSize: "0.95rem",
                  color: "#fff",
                  border: "1px solid rgba(255,255,255,0.5)",
                  borderRadius: "100px",
                  padding: "9px 28px",
                  background: "rgba(26,48,64,0.6)",
                  marginTop: 4,
                  display: "flex",
                  alignItems: "center",
                  gap: 8,
                  cursor: "pointer",
                  transition: "background 0.3s",
                }}>
                  Learn More &nbsp;→
                </button>
              </div>
            </div>
          </div>

          {/* ── BACK ── */}
          <div className="card-face card-back" style={{ background: "#1a3040" }}>
            <div className="absolute inset-0 flex flex-col justify-between px-7 py-8">

              {/* Top accent */}
              <div>
                <div style={{
                  width: 36, height: 2,
                  background: "#c9a96e",
                  marginBottom: 16,
                }} />
                <h3 style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontStyle: "italic",
                  fontWeight: 600,
                  fontSize: "1.6rem",
                  color: "#fff",
                  lineHeight: 1.2,
                  marginBottom: 4,
                }}>
                  {service.title}
                </h3>
                <p style={{
                  fontFamily: "'Jost', sans-serif",
                  fontWeight: 300,
                  fontSize: "0.72rem",
                  letterSpacing: "0.2em",
                  textTransform: "uppercase",
                  color: "#c9a96e",
                  marginBottom: 20,
                }}>
                  {service.back.heading}
                </p>

                <ul className="flex flex-col gap-2.5">
                  {service.back.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5">
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" style={{ marginTop: 2, flexShrink: 0 }}>
                        <circle cx="7" cy="7" r="6" stroke="#c9a96e" strokeWidth="1.2"/>
                        <path d="M4 7l2 2 4-4" stroke="#c9a96e" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span style={{
                        fontFamily: "'Jost', sans-serif",
                        fontWeight: 300,
                        fontSize: "0.84rem",
                        color: "rgba(255,255,255,0.8)",
                        lineHeight: 1.5,
                      }}>
                        {pt}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom: duration + price + flip back hint */}
              {/* <div>
                <div style={{ height: 1, background: "rgba(255,255,255,0.1)", marginBottom: 16 }} />
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Duration</p>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "#fff", fontWeight: 600 }}>{service.back.duration}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontFamily: "'Jost', sans-serif", fontSize: "0.7rem", color: "rgba(255,255,255,0.4)", letterSpacing: "0.15em", textTransform: "uppercase" }}>Price</p>
                    <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "#c9a96e", fontWeight: 600 }}>{service.back.price}</p>
                  </div>
                </div>
                <p style={{
                  fontFamily: "'Jost', sans-serif",
                  fontSize: "0.7rem",
                  color: "rgba(255,255,255,0.3)",
                  textAlign: "center",
                  letterSpacing: "0.08em",
                }}>
                  tap to flip back
                </p>
              </div> */}

            </div>
          </div>

        </div>
      </div>
    </>
  );
}

export default function ServicesSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Cormorant+Garamond:ital,wght@1,600&family=Jost:wght@300;400&display=swap');
      `}</style>

      <section className="bg-black text-white py-16 lg:py-24">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12">

          {/* Section header */}
          <div className="text-center mb-12">
            <p style={{
              fontFamily: "'Jost', sans-serif",
              fontWeight: 300,
              fontSize: "0.72rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#c9a96e",
              marginBottom: 10,
            }}>
              What We Offer
            </p>
            <h2 style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              fontWeight: 600,
              fontSize: "clamp(2rem, 4vw, 3rem)",
              color: "white",
              lineHeight: 1.15,
            }}>
              Our Services
            </h2>
          </div>

          {/* Cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>

        </div>
      </section>
    </>
  );
}