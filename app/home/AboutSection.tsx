"use client";

import Image from "next/image";

const features = [
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="13" stroke="#c9a96e" strokeWidth="1.5"/>
        <path d="M9 15l4 4 8-8" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    title: "Award Winning Haircut",
    desc: "Experience more than you can imagine with our special haircuts suitable for your face shape.",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="11" stroke="#c9a96e" strokeWidth="1.5"/>
        <path d="M15 9v6l4 2" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 15 Q5 5 15 5" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      </svg>
    ),
    title: "Time Is Shorting",
    desc: "Getting the hair you dream of with us is no longer a dream. Book in minutes.",
  },
];

export default function AboutSection() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,600;1,600&family=Jost:wght@300;400&display=swap');

        .about-bg { background: #f9f7f4; }

        @keyframes spin-tools {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
        .tools-spin {
          animation: spin-tools 18s linear infinite;
        }

        .stat-bubble {
          background: #1a3040;
          border-radius: 50%;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          box-shadow: 0 8px 28px rgba(26,48,64,0.28);
          position: absolute;
        }
        .stat-num {
          font-family: 'Cormorant Garamond', serif;
          font-weight: 600;
          color: #fff;
          line-height: 1;
        }
        .stat-label {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          color: rgba(255,255,255,0.72);
          text-align: center;
          line-height: 1.35;
        }
        .section-heading {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 600;
          color: #1a1a1a;
          line-height: 1.15;
        }
        .section-body {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          color: #5a5a5a;
          line-height: 1.78;
          font-size: 0.94rem;
        }
        .feature-title {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 600;
          font-size: 1.15rem;
          color: #1a1a1a;
        }
        .feature-desc {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
          font-size: 0.87rem;
          color: #6a6a6a;
          line-height: 1.65;
        }
        .divider-hatch {
          height: 2px;
          width: 110px;
          background: repeating-linear-gradient(
            90deg, #1a3040 0px, #1a3040 2px, transparent 2px, transparent 8px
          );
          opacity: 0.25;
        }
        .cta-dark {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-size: 1.05rem;
          background: #1a3040;
          color: #fff;
          border-radius: 100px;
          padding: 15px 40px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          transition: background 0.3s, transform 0.2s;
        }
        .cta-dark:hover { background: #243f52; transform: translateX(3px); }
      `}</style>

      <section className="about-bg py-16 lg:py-24 overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

          {/* ══ LEFT: Visual ══ */}
          <div className="relative flex items-center justify-center" style={{ height: 560 }}>

            {/* Layer 1 — spinning tools (z-0) */}
            <div
              className="tools-spin absolute"
              style={{ width: 500, height: 500, zIndex: 1 }}
            >
              <Image
                src="/circle-hairr.png"
                alt="Salon tools"
                width={500}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Layer 2 — model on top (z-10) */}
            <div
              className="absolute"
              style={{ width: 340, height: 480, zIndex: 10, bottom: 0 }}
            >
              <Image
                src="/haira-about-22.png"
                alt="Salon model"
                fill
                className="object-cover object-bottom"
                priority
              />
            </div>

            {/* Stat bubble — Years (left) */}
            <div className="stat-bubble" style={{ width: 136, height: 136, left: "0%", top: "26%", zIndex: 20 }}>
              <span className="stat-num" style={{ fontSize: "2.6rem" }}>24</span>
              <span className="stat-label" style={{ fontSize: "0.75rem" }}>Years of<br/>Experience</span>
            </div>

            {/* Stat bubble — Services (right) */}
            <div className="stat-bubble" style={{ width: 150, height: 150, right: "0%", bottom: "18%", zIndex: 20 }}>
              <span className="stat-num" style={{ fontSize: "2.1rem" }}>3,800</span>
              <span className="stat-label" style={{ fontSize: "0.75rem" }}>Hairdresser<br/>Service</span>
            </div>

          </div>

          {/* ══ RIGHT: Text ══ */}
          <div className="flex flex-col gap-6 lg:pl-8">
            <h2 className="section-heading text-[clamp(1.9rem,3.2vw,2.75rem)]">
              Leave your hair to our<br/>
              expert hairdressers<br/>
              you can trust
            </h2>

            <p className="section-body max-w-[420px]">
              Contact us for hair cutting, coloring, blow drying, care and more. We care about your hair
              with new generation and natural methods. Because you are valuable to us. We are at your
              service with innovative applications, customer satisfaction, new generation hair care.
            </p>

            <div className="divider-hatch" />

            <div className="flex flex-col gap-5 mt-1">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-4">
                  <div className="flex-shrink-0 mt-0.5">{f.icon}</div>
                  <div>
                    <div className="feature-title">{f.title}</div>
                    <p className="feature-desc mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-2">
              <a href="/about" className="cta-dark">
                Get to know us
                <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
                  <path d="M1 5h14M10 1l5 4-5 4" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}