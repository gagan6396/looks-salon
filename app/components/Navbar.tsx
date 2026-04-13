"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about-us" },
  // { label: "Services", href: "/services" },
  // { label: "Pricings", href: "/pricings" },
  // { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact-us" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&display=swap');

        .nav-link {
          font-family: 'Jost', sans-serif;
          font-weight: 400;
          font-size: 0.88rem;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: rgba(255,255,255,0.82);
          position: relative;
          padding-bottom: 3px;
          transition: color 0.3s;
        }
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0; left: 0;
          width: 0; height: 1px;
          background: #c9a96e;
          transition: width 0.3s cubic-bezier(0.4,0,0.2,1);
        }
        .nav-link:hover { color: #c9a96e; }
        .nav-link:hover::after { width: 100%; }

        .phone-btn {
          font-family: 'Jost', sans-serif;
          font-size: 0.82rem;
          letter-spacing: 0.04em;
          background: #1a3a4a;
          border: 1px solid rgba(201,169,110,0.3);
          transition: background 0.3s, border-color 0.3s;
        }
        .phone-btn:hover {
          background: #1e4558;
          border-color: #c9a96e;
        }

        .hamburger span {
          display: block;
          width: 22px; height: 1.5px;
          background: #fff;
          transition: transform 0.3s, opacity 0.3s;
          transform-origin: center;
        }
        .hamburger.open span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
        .hamburger.open span:nth-child(2) { opacity: 0; }
        .hamburger.open span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }

        @keyframes slideDown {
          from { opacity: 0; transform: translateY(-8px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .slide-down { animation: slideDown 0.3s ease forwards; }
      `}</style>

      <nav
        className={`fixed py-0 top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-black shadow-[0_2px_30px_rgba(0,0,0,0.5)]"
            : "bg-black"
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6 lg:px-10 flex items-center justify-between h-[72px]">

          {/* ── Logo ── */}
          <Link href="/" className="flex-shrink-0">
            <Image
              src="/Looks-salon-logo.png"
              alt="Hairi Hair Salon"
              width={130}
              height={48}
              className="object-contain mt-4 h-full w-full"
              priority
            />
          </Link>

          {/* ── Desktop Nav ── */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link href={link.href} className="nav-link">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* ── Phone CTA ── */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:+12345678910"
              className="phone-btn flex items-center gap-2.5 px-4 py-2 rounded-full text-white"
            >
              <span className="w-7 h-7 rounded-full bg-[#c9a96e]/20 border border-[#c9a96e]/50 flex items-center justify-center flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                  <path d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1-9.4 0-17-7.6-17-17 0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.3.2 2.5.6 3.6.1.3 0 .7-.2 1L6.6 10.8z" fill="#c9a96e"/>
                </svg>
              </span>
              +1 (234) 567 89 10
            </a>
          </div>

          {/* ── Mobile Hamburger ── */}
          <button
            className={`hamburger lg:hidden flex flex-col gap-[5px] p-2 ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

        {/* ── Mobile Menu ── */}
        {menuOpen && (
          <div className="slide-down lg:hidden bg-black border-t border-white/5 px-6 pb-6 pt-4">
            <ul className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="block font-['Jost'] tracking-widest uppercase text-sm text-white/75 hover:text-[#c9a96e] transition-colors py-3 border-b border-white/5"
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            <a
              href="tel:+12345678910"
              className="phone-btn mt-5 inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full text-white text-sm"
            >
              +1 (234) 567 89 10
            </a>
          </div>
        )}
      </nav>
    </>
  );
}