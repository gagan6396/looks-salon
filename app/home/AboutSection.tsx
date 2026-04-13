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
    desc: "Get a style that suits you. Our haircuts are designed to match your face shape and bring out your best look.",
  },
  {
    icon: (
      <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
        <circle cx="15" cy="15" r="11" stroke="#c9a96e" strokeWidth="1.5"/>
        <path d="M15 9v6l4 2" stroke="#c9a96e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M5 15 Q5 5 15 5" stroke="#c9a96e" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="2 2"/>
      </svg>
    ),
    title: "Short on Time? We’ve Got You",
    desc: "Great hair doesn’t have to wait. Book your appointment in minutes and get the look you’ve always wanted.",
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
        .tools-spin { animation: spin-tools 18s linear infinite; }

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
        }
        .feature-title {
          font-family: 'Cormorant Garamond', serif;
          font-style: italic;
          font-weight: 600;
          color: #1a1a1a;
        }
        .feature-desc {
          font-family: 'Jost', sans-serif;
          font-weight: 300;
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
          background: #1a3040;
          color: #fff;
          border-radius: 100px;
          display: inline-flex;
          align-items: center;
          gap: 12px;
          text-decoration: none;
          transition: background 0.3s, transform 0.2s;
        }
        .cta-dark:hover { background: #243f52; transform: translateX(3px); }
      `}</style>

      <section className="about-bg py-8 lg:py-24 overflow-hidden">
        <div className="max-w-[1300px] mx-auto px-4 lg:px-12 grid grid-cols-1 lg:grid-cols-2 gap-4 items-center">

          {/* ══ LEFT: Visual ══ */}
          <div className="relative flex items-center justify-center mx-auto w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] lg:w-full lg:h-[560px]">

            {/* Spinning tools */}
            <div
              className="tools-spin absolute w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[500px] lg:h-[500px]"
              style={{ zIndex: 1 }}
            >
              <Image
                src="/circle-hairr.png"
                alt="Salon tools"
                width={500}
                height={500}
                className="w-full h-full object-contain"
              />
            </div>

            {/* Model */}
            <div
              className="absolute bottom-0 w-[190px] h-[270px] sm:w-[230px] sm:h-[320px] lg:w-[340px] lg:h-[480px]"
              style={{ zIndex: 10 }}
            >
              <Image
                src="/haira-about-22.png"
                alt="Salon model"
                fill
                className="object-cover object-bottom"
                priority
              />
            </div>

            {/* Stat — Years */}
            <div
              className="stat-bubble w-[86px] h-[86px] sm:w-[100px] sm:h-[100px] lg:w-[136px] lg:h-[136px]"
              style={{ left: "0%", top: "26%", zIndex: 20 }}
            >
              <span className="stat-num text-[1.2rem] sm:text-[1.6rem] lg:text-[2.6rem]">24</span>
              <span className="stat-label text-[0.48rem] sm:text-[0.6rem] lg:text-[0.75rem]">
                Years of<br />Experience
              </span>
            </div>

            {/* Stat — Services */}
            <div
              className="stat-bubble w-[94px] h-[94px] sm:w-[110px] sm:h-[110px] lg:w-[150px] lg:h-[150px]"
              style={{ right: "0%", bottom: "18%", zIndex: 20 }}
            >
              <span className="stat-num text-[1rem] sm:text-[1.4rem] lg:text-[2.1rem]">3,800</span>
              <span className="stat-label text-[0.48rem] sm:text-[0.6rem] lg:text-[0.75rem]">
                Hairdresser<br />Service
              </span>
            </div>
          </div>

          {/* ══ RIGHT: Text ══ */}
          <div className="flex flex-col gap-4 lg:gap-6 lg:pl-8">
            <h2 className="section-heading text-[1.5rem] sm:text-[2rem] lg:text-[2.75rem]">
              Leave your hair to our<br />
              expert hairdressers<br />
              you can trust
            </h2>

            <p className="section-body text-[0.82rem] sm:text-[0.9rem] lg:text-[0.94rem] max-w-[420px]">
            From haircuts and coloring to blow-drying and treatments, we offer everything you need to keep your hair looking its best. We use modern techniques and quality products to care for your hair—because you deserve it.
            </p>

            <div className="divider-hatch" />

            <div className="flex flex-col gap-3 lg:gap-5">
              {features.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <div className="flex-shrink-0 mt-0.5 scale-75 sm:scale-90 lg:scale-100 origin-top-left">
                    {f.icon}
                  </div>
                  <div>
                    <div className="feature-title text-[0.95rem] lg:text-[1.15rem]">{f.title}</div>
                    <p className="feature-desc text-[0.78rem] lg:text-[0.87rem] mt-1">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-1">
              <a href="/about" className="cta-dark text-[0.9rem] sm:text-[1rem] lg:text-[1.05rem] px-6 py-3 sm:px-8 sm:py-4 lg:px-10 lg:py-4">
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