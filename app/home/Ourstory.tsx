"use client"

import { useEffect, useRef, useState } from "react";

const chapters = [
  {
    num: "01",
    title: "The salon that started it all",
    desc: "Looks Salon built its reputation one client at a time, delivering exceptional hair and beauty services with consistency, care, and creativity.",
  },
  {
    num: "02",
    title: "Crafted by real experts",
    desc: "Our stylists aren't just trained — they are experienced professionals who understand real client needs, trends, and techniques that truly work.",
  },
  {
    num: "03",
    title: "A destination for great hair",
    desc: "Looks Salon Dehradun is where style meets precision. A place where every client walks in with an idea and walks out with confidence.",
  },
];

const values = [
  {
    title: "Client-first approach",
    desc: "Every service is tailored to suit your personality, preferences, and lifestyle.",
  },
  {
    title: "Excellence in every detail",
    desc: "From consultation to finish, we focus on precision, quality, and perfection.",
  },
  {
    title: "Confidence through style",
    desc: "We don't just style hair — we create looks that make you feel your best.",
  },
  {
    title: "Evolving with trends",
    desc: "We stay ahead with modern techniques, products, and styles that define today.",
  },
];

// ── Replace with your actual image path ──
const HERO_IMAGE_SRC = "/looksh.png";

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
  const heroRef     = useInView(0.1);
  const chaptersRef = useInView(0.1);
  const valuesRef   = useInView(0.1);
  const quoteRef    = useInView(0.2);

  return (
    <section className="w-full bg-white overflow-hidden">

      {/* ── Hero ── Responsive: stacks on mobile, side-by-side on desktop ── */}
      <div className="w-full bg-black flex flex-col md:flex-row min-h-[480px] overflow-hidden">

        {/* Left: text */}
        <div className="flex-1 px-6 md:px-16 lg:px-28 py-16 md:py-20 lg:py-32 relative flex flex-col justify-center order-2 md:order-1">
          {/* Decorative letter */}
          <span
            className="absolute right-0 top-1/2 -translate-y-1/2 text-[15rem] md:text-[18rem] lg:text-[22rem] font-bold leading-none select-none pointer-events-none"
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
            className="relative z-10 max-w-xl"
            style={{
              transition: "opacity 0.9s ease, transform 0.9s ease",
              opacity: heroRef.inView ? 1 : 0,
              transform: heroRef.inView ? "translateY(0)" : "translateY(32px)",
            }}
          >
            <p className="text-[11px] tracking-[0.3em] uppercase text-white/30 mb-6 md:mb-8">
              Our Story
            </p>
            <h2
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium text-white leading-[1.1] md:leading-[1.05] mb-6 md:mb-8"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Where passion<br />
              meets{" "}
              <em className="not-italic border-b border-white/25 pb-0.5">craft</em>
            </h2>
            <p className="text-sm text-white/40 leading-relaxed max-w-md">
              Our salon was built on a simple belief: great hair is both an art and a skill.
              Every style we create is shaped by passion, experience, and attention to
              detail — because you deserve nothing less.
            </p>
          </div>
        </div>

        {/* Right: image — stacks below on mobile, beside on desktop */}
        <div
          className="relative w-full md:w-[45%] lg:w-[38%] h-[320px] sm:h-[400px] md:h-auto min-h-[320px] shrink-0 overflow-hidden order-1 md:order-2"
          style={{
            transition: "opacity 1.1s ease 0.2s",
            opacity: heroRef.inView ? 1 : 0,
          }}
        >
          <div
            className="absolute inset-0 z-10 pointer-events-none"
            style={{
              background:
                "linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, transparent 30%), " +
                "linear-gradient(to top, rgba(0,0,0,0.4) 0%, transparent 30%), " +
                "linear-gradient(to right, rgba(0,0,0,0.3) 0%, transparent 40%)",
            }}
          />
          <img
            src={HERO_IMAGE_SRC}
            alt="Looks Salon — our story"
            className="absolute inset-0 w-full h-full object-cover object-center"
            onError={(e) => {
              const t = e.currentTarget;
              t.style.display = "none";
              (t.parentElement as HTMLElement).style.background =
                "linear-gradient(135deg, #1a1a1a 0%, #2e2e2e 100%)";
            }}
          />
        </div>

      </div>

      {/* ── Chapters ── Fully responsive grid */}
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
              "group px-6 sm:px-8 md:px-8 lg:px-12 py-10 md:py-12 cursor-default",
              "border-b border-neutral-200",
              "transition-colors duration-300 hover:bg-black",
              // Border logic: only right border on md+ between items
              i < chapters.length - 1 ? "md:border-r" : "",
              // Remove bottom border on last item for md+ but keep on mobile
              i === chapters.length - 1 ? "md:border-b-0" : "",
            ].join(" ")}
          >
            <span
              className="block text-5xl sm:text-6xl md:text-7xl lg:text-[4.5rem] font-medium leading-none mb-4 md:mb-6 group-hover:text-white/10 transition-colors duration-300 select-none"
              style={{ fontFamily: "Georgia, serif", color: "#ebebeb" }}
            >
              {c.num}
            </span>
            <h3 className="text-sm font-medium mb-2 md:mb-3 text-neutral-900 group-hover:text-white transition-colors duration-300">
              {c.title}
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed group-hover:text-white/50 transition-colors duration-300">
              {c.desc}
            </p>
          </div>
        ))}
      </div>

      {/* ── Values ── Responsive grid with proper border handling */}
      <div
        ref={valuesRef.ref}
        style={{
          transition: "opacity 0.7s ease 0.15s, transform 0.7s ease 0.15s",
          opacity: valuesRef.inView ? 1 : 0,
          transform: valuesRef.inView ? "translateY(0)" : "translateY(24px)",
        }}
      >
        <div className="w-full px-6 md:px-12 lg:px-28 py-6 border-b border-neutral-200 flex items-center gap-6">
          <span className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 whitespace-nowrap">
            What we stand for
          </span>
          <div className="flex-1 h-px bg-neutral-200" />
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border-b border-neutral-200">
          {values.map((v, i) => (
            <div
              key={i}
              className={[
                "group px-6 sm:px-8 md:px-8 lg:px-10 py-8 md:py-10 cursor-default",
                "transition-colors duration-300 hover:bg-black",
                // Borders: bottom on all, right on sm+ for items 1,3? Let's do proper responsive borders
                // All items get bottom border on mobile
                "border-b border-neutral-200",
                // On sm (640px+) and up, remove bottom border for first two items? Actually grid handles it
                // Better: On sm and above, items in first row (i < 2) get border-b? But grid is 2 cols so row1 = i=0,1
                i < 2 ? "sm:border-b" : "sm:border-b-0",
                // On lg and above, all items get no bottom border (since 4 cols, only last row if we had more items)
                "lg:border-b-0",
                // Right border for items that are not last in their row on sm and md
                i % 2 === 0 ? "sm:border-r border-neutral-200" : "sm:border-r-0",
                i < 3 ? "lg:border-r border-neutral-200" : "lg:border-r-0",
                // Last item on lg has no right border
                i === 3 ? "lg:border-r-0" : "",
              ].join(" ")}
            >
              <div className="w-4 h-px bg-neutral-300 mb-6 md:mb-7 group-hover:bg-white/30 transition-colors duration-300" />
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

      {/* ── Pull Quote ── Responsive spacing */}
      <div
        ref={quoteRef.ref}
        className="w-full bg-black px-6 md:px-12 lg:px-28 py-16 md:py-20 lg:py-28 flex flex-col md:flex-row md:items-end md:justify-between gap-8 md:gap-10"
        style={{
          transition: "opacity 0.9s ease 0.1s, transform 0.9s ease 0.1s",
          opacity: quoteRef.inView ? 1 : 0,
          transform: quoteRef.inView ? "translateY(0)" : "translateY(20px)",
        }}
      >
        <blockquote
          className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-medium leading-tight max-w-2xl"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          <span className="text-white">"We don't just style hair.</span>
          <br className="hidden sm:inline" />
          <span className="text-white/30"> We create confidence."</span>
        </blockquote>
        <cite className="text-[11px] tracking-[0.2em] uppercase text-white/25 not-italic md:pb-1 shrink-0">
          — Looks Salon, Dehradun
        </cite>
      </div>

    </section>
  );
}