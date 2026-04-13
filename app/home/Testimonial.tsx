"use client";

import { useState, useEffect, useRef } from "react";

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Regular Client",
    initials: "PS",
    rating: 5,
    text: "I've been coming to Looks Salon for over two years now. Every single visit feels like a luxury experience — the attention to detail is unmatched. My hair has never looked better.",
    service: "Hair Colour & Cut",
  },
  {
    id: 2,
    name: "Anika Verma",
    role: "Bride",
    initials: "AV",
    rating: 5,
    text: "They did my bridal makeup and hair for my wedding day. I cried happy tears when I saw myself in the mirror. The team understood exactly the look I wanted and delivered it flawlessly.",
    service: "Bridal Package",
  },
  {
    id: 3,
    name: "Rohan Mehta",
    role: "New Client",
    initials: "RM",
    rating: 5,
    text: "Walked in with no appointment and was treated like royalty. The stylist took time to understand what I wanted before picking up the scissors. Best haircut I've had in years.",
    service: "Men's Cut & Style",
  },
  {
    id: 4,
    name: "Sneha Kapoor",
    role: "Regular Client",
    initials: "SK",
    rating: 5,
    text: "The keratin treatment they did was absolutely transformative. My hair went from frizzy to silky smooth. I keep getting compliments everywhere I go. Worth every rupee.",
    service: "Keratin Treatment",
  },
  {
    id: 5,
    name: "Divya Nair",
    role: "Monthly Client",
    initials: "DN",
    rating: 5,
    text: "Clean, chic, and incredibly professional. Every stylist here is highly skilled. I've referred all my friends and they all became regulars too. The ambiance alone is worth it.",
    service: "Highlights & Blowout",
  },
];

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill={filled ? "currentColor" : "none"}
      stroke="currentColor"
      strokeWidth="1.2"
      className="inline-block"
    >
      <polygon points="7,1 8.8,5.2 13.4,5.6 10.1,8.5 11.1,13 7,10.5 2.9,13 3.9,8.5 0.6,5.6 5.2,5.2" />
    </svg>
  );
}

function QuoteIcon() {
  return (
    <svg
      width="32"
      height="24"
      viewBox="0 0 32 24"
      fill="currentColor"
      className="text-black/8 dark:text-white/8 absolute top-6 right-6"
    >
      <path d="M0 24V14.4C0 6.4 5.333 1.467 16 0l1.6 2.8C12.267 4.133 9.2 6.8 8.4 10.8H14V24H0zm18 0V14.4C18 6.4 23.333 1.467 34 0l1.6 2.8c-5.333 1.333-8.4 4-9.2 8H32V24H18z" />
    </svg>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<"left" | "right">("right");
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const goTo = (index: number, dir: "left" | "right") => {
    if (animating || index === active) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setActive(index);
      setAnimating(false);
    }, 320);
  };

  const prev = () =>
    goTo((active - 1 + testimonials.length) % testimonials.length, "left");
  const next = () =>
    goTo((active + 1) % testimonials.length, "right");

  useEffect(() => {
    intervalRef.current = setInterval(next, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [active]);

  const t = testimonials[active];

  return (
    <section className="w-full bg-white dark:bg-black py-18 px-4 overflow-hidden">
      {/* Header */}
      <div className="max-w-5xl mx-auto mb-16 flex flex-col items-center text-center">
        <span className="text-[10px] tracking-[0.4em] uppercase text-black/40 dark:text-white/40 mb-4 font-light">
          Client Stories
        </span>
        <h2 className="text-4xl md:text-5xl font-extralight tracking-tight text-black dark:text-white leading-tight">
          What our clients say
        </h2>
        <div className="mt-5 w-8 h-px bg-black dark:bg-white opacity-20" />
      </div>

      {/* Main testimonial card */}
      <div className="max-w-3xl mx-auto">
        <div
          className="relative border border-black/10 dark:border-white/10 p-10 md:p-14"
          style={{ minHeight: 280 }}
        >
          <QuoteIcon />

          {/* Animated content */}
          <div
            key={active}
            style={{
              opacity: animating ? 0 : 1,
              transform: animating
                ? `translateX(${direction === "right" ? "-24px" : "24px"})`
                : "translateX(0)",
              transition: "opacity 0.32s ease, transform 0.32s ease",
            }}
          >
            {/* Stars */}
            <div className="flex gap-0.5 mb-6 text-black dark:text-white">
              {Array.from({ length: 5 }).map((_, i) => (
                <StarIcon key={i} filled={i < t.rating} />
              ))}
            </div>

            {/* Quote */}
            <blockquote className="text-lg md:text-xl font-light leading-relaxed text-black/80 dark:text-white/80 mb-8 tracking-wide">
              &ldquo;{t.text}&rdquo;
            </blockquote>

            {/* Author row */}
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                {/* Avatar */}
                <div className="w-11 h-11 rounded-full border border-black/20 dark:border-white/20 flex items-center justify-center">
                  <span className="text-xs font-medium tracking-wider text-black/60 dark:text-white/60">
                    {t.initials}
                  </span>
                </div>
                <div>
                  <p className="text-sm font-medium text-black dark:text-white tracking-wide">
                    {t.name}
                  </p>
                  <p className="text-xs text-black/40 dark:text-white/40 mt-0.5">
                    {t.role}
                  </p>
                </div>
              </div>

              {/* Service tag */}
              <span className="text-[10px] tracking-[0.25em] uppercase border border-black/15 dark:border-white/15 px-3 py-1.5 text-black/50 dark:text-white/50">
                {t.service}
              </span>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div className="mt-8 flex items-center justify-between">
          {/* Dot indicators */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i, i > active ? "right" : "left")}
                className={`transition-all duration-300 ${
                  i === active
                    ? "w-6 h-px bg-black dark:bg-white"
                    : "w-2 h-px bg-black/20 dark:bg-white/20 hover:bg-black/50 dark:hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          {/* Prev / Next arrows */}
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="w-10 h-10 border border-black/15 dark:border-white/15 flex items-center justify-center text-black/50 dark:text-white/50 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200"
              aria-label="Previous"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 2L4 7l5 5" />
              </svg>
            </button>
            <button
              onClick={next}
              className="w-10 h-10 border border-black/15 dark:border-white/15 flex items-center justify-center text-black/50 dark:text-white/50 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-colors duration-200"
              aria-label="Next"
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M5 2l5 5-5 5" />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Bottom strip — all names */}
      {/* <div className="max-w-5xl mx-auto mt-16 border-t border-black/8 dark:border-white/8 pt-8">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {testimonials.map((t, i) => (
            <button
              key={t.id}
              onClick={() => goTo(i, i > active ? "right" : "left")}
              className={`text-xs tracking-widest uppercase transition-all duration-300 ${
                i === active
                  ? "text-black dark:text-white"
                  : "text-black/30 dark:text-white/30 hover:text-black/60 dark:hover:text-white/60"
              }`}
            >
              {t.name}
            </button>
          ))}
        </div>
      </div> */}
    </section>
  );
}