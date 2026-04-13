"use client"

import { useEffect, useRef, useState } from "react";

const chapters = [
  {
    num: "01",
    title: "The salon that started it all",
    desc: "Looks Salon built its name across India, one client at a time. With it came a deep understanding of what the industry truly needed — trained, confident professionals.",
  },
  {
    num: "02",
    title: "A school born from the floor",
    desc: "Our mentors weren't just teachers — they were working stylists. So we built an academy that mirrors real salon life: fast, hands-on, and uncompromising.",
  },
  {
    num: "03",
    title: "Dehradun becomes our home",
    desc: "Nestled in the hills, Looks Academy Dehradun opened to students hungry for more than textbooks — they wanted a career, and we gave them a launchpad.",
  },
];

const values = [
  {
    title: "Real-world readiness",
    desc: "Every module is designed around actual salon scenarios, not theory alone.",
  },
  {
    title: "Excellence as a standard",
    desc: "We don't graduate students who are good enough. We graduate professionals.",
  },
  {
    title: "Confidence over credentials",
    desc: "Our certificate means something because our students can back it up in any salon.",
  },
  {
    title: "Lifelong growth",
    desc: "Graduating is day one, not the finish line. We stay with our students as they grow.",
  },
];

function useInView(threshold = 0.12) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          obs.disconnect();
        }
      },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);

  return { ref, inView };
}

export default function OurStory() {
  const heroRef = useInView(0.1);
  const chaptersRef = useInView(0.1);
  const valuesRef = useInView(0.1);
  const quoteRef = useInView(0.2);

  return (
    <section className="w-full bg-white overflow-hidden">

      {/* ── Hero ── */}
      <div className="w-full bg-black px-6 md:px-16 lg:px-28 py-20 md:py-32 relative overflow-hidden">

        {/* Decorative ghost letterform */}
        <span
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[22rem] font-bold leading-none select-none pointer-events-none"
          style={{
            fontFamily: "Georgia, serif",
            color: "transparent",
            WebkitTextStroke: "1px rgba(255,255,255,0.05)",
          }}
        >
          L
        </span>

        <div
          ref={heroRef.ref}
          className="relative z-10 max-w-2xl"
          style={{
            transition: "opacity 0.9s ease, transform 0.9s ease",
            opacity: heroRef.inView ? 1 : 0,
            transform: heroRef.inView ? "translateY(0)" : "translateY(32px)",
          }}
        >
          <p className="text-[11px] tracking-[0.3em] uppercase text-white/30 mb-8">
            Our Story
          </p>
          <h2
            className="text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.05] mb-8"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Where passion<br />
            becomes{" "}
            <em className="not-italic border-b border-white/25 pb-0.5">craft</em>
          </h2>
          <p className="text-sm text-white/40 leading-relaxed max-w-md">
            Looks Academy didn't start with classrooms. It started with a belief —
            that beauty is a skill, and every skill deserves a great teacher.
          </p>
        </div>
      </div>

      {/* ── Chapters ── */}
      <div
        ref={chaptersRef.ref}
        className="w-full grid grid-cols-1 md:grid-cols-3"
        style={{
          transition: "opacity 0.7s ease 0.1s, transform 0.7s ease 0.1s",
          opacity: chaptersRef.inView ? 1 : 0,
          transform: chaptersRef.inView ? "translateY(0)" : "translateY(24px)",
        }}
      >
        {chapters.map((c, i) => (
          <div
            key={c.num}
            className={[
              "group px-8 md:px-12 py-12 cursor-default",
              "border-b border-neutral-200",
              "transition-colors duration-300 hover:bg-black",
              i < chapters.length - 1 ? "md:border-r" : "",
            ].join(" ")}
          >
            <span
              className="block text-[4.5rem] font-medium leading-none mb-6 text-neutral-150 group-hover:text-white/10 transition-colors duration-300 select-none"
              style={{ fontFamily: "Georgia, serif", color: "#ebebeb" }}
            >
              {c.num}
            </span>
            <h3 className="text-sm font-medium mb-3 text-neutral-900 group-hover:text-white transition-colors duration-300">
              {c.title}
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed group-hover:text-white/50 transition-colors duration-300">
              {c.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ── Values ── */}
      <div
        ref={valuesRef.ref}
        style={{
          transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          opacity: valuesRef.inView ? 1 : 0,
          transform: valuesRef.inView ? "translateY(0)" : "translateY(24px)",
        }}
      >
        {/* Section label */}
        <div className="w-full px-8 md:px-12 lg:px-28 py-6 border-b border-neutral-200 flex items-center gap-6">
          <span className="text-[11px] tracking-[0.2em] uppercase text-neutral-400">
            What we stand for
          </span>
          <div className="flex-1 h-px bg-neutral-200" />
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-neutral-200">
          {values.map((v, i) => (
            <div
              key={i}
              className={[
                "group px-8 md:px-10 py-10 cursor-default",
                "transition-colors duration-300 hover:bg-black",
                i < values.length - 1 ? "border-b sm:border-b-0 sm:border-r border-neutral-200" : "",
                i === 2 ? "sm:border-b border-neutral-200 lg:border-b-0" : "",
              ].join(" ")}
            >
              <div className="w-4 h-px bg-neutral-300 mb-7 group-hover:bg-white/30 transition-colors duration-300" />
              <h4 className="text-xs font-medium text-neutral-900 mb-2 group-hover:text-white transition-colors duration-300">
                {v.title}
              </h4>
              <p className="text-xs text-neutral-400 leading-relaxed group-hover:text-white/50 transition-colors duration-300">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Pull Quote ── */}
      <div
        ref={quoteRef.ref}
        className="w-full bg-black px-6 md:px-16 lg:px-28 py-20 md:py-28 flex flex-col md:flex-row md:items-end md:justify-between gap-10"
        style={{
          transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
          opacity: quoteRef.inView ? 1 : 0,
          transform: quoteRef.inView ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <blockquote
          className="text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-2xl"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          <span className="text-white">"We don't just teach beauty.</span>
          <br />
          <span className="text-white/30">We build careers."</span>
        </blockquote>
        <cite className="text-[11px] tracking-[0.2em] uppercase text-white/25 not-italic md:pb-1 shrink-0">
          — Looks Academy, Dehradun
        </cite>
      </div>

    </section>
  );
}