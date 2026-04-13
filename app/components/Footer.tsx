// ─────────────────────────────────────────────────────────────
//  Footer.tsx  —  Looks Academy
//  Usage:  <Footer logo="/logo-white.png" />
//  Pass your white logo PNG via the `logo` prop.
//  For multi-page website: Home, About, Contact
// ─────────────────────────────────────────────────────────────



const navLinks: Record<string, { label: string; href: string }[]> = {
  Academy: [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about-us" },
    { label: "Contact", href: "/contact-us" },
    // { label: "Our Story", href: "/about-us#story" },
    // { label: "Faculty", href: "/about#faculty" },
    // { label: "Gallery", href: "/gallery" },
  ],
  Connect: [
    // { label: "Contact Us", href: "/contact" },
    // { label: "Admissions", href: "/admissions" },
    // { label: "Careers", href: "/careers" },
    // { label: "Blog", href: "/blog" },
  ],
};

const socials = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/looks_dehradun?igsh=bGtzYnk0OXptd2Vl",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1CoQuC9JGC/",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  // {
  //   label: "YouTube",
  //   href: "https://youtube.com",
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
  //       <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
  //       <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
  //     </svg>
  //   ),
  // },
  // {
  //   label: "Twitter",
  //   href: "https://twitter.com",
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
  //       <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
  //     </svg>
  //   ),
  // },
  // {
  //   label: "LinkedIn",
  //   href: "https://linkedin.com",
  //   icon: (
  //     <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-[18px] h-[18px]">
  //       <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
  //       <rect x="2" y="9" width="4" height="12" />
  //       <circle cx="4" cy="4" r="2" />
  //     </svg>
  //   ),
  // },
];

export default function Footer() {
  return (
    <footer className="w-full bg-black text-white">

      {/* ── Main footer content: Logo, Academy info, Nav links, Address ── */}
      <div className="w-full px-6 md:px-16 lg:px-28 py-12 grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/[0.08]">
        
        {/* Column 1: Logo + Academy Info */}
        <div className="md:col-span-4 space-y-5">
          {/* Logo PNG */}
          <img
            src="Looks-salon-logo.png"
            alt="Looks Academy"
            className="h-26 w-auto object-contain object-left"
            draggable={false}
          />
          
          {/* Academy description */}
          <div className="space-y-3">
            <p className="text-white text-sm leading-relaxed">
              India's premier beauty & wellness academy, empowering aspiring artists 
              with industry-leading skills since 2010.
            </p>
            <div className="flex flex-wrap items-center gap-3 text-white text-xs">
              <span>✓ 5000+ Graduates</span>
              <span className="w-1 h-1 rounded-full bg-white" />
              <span>✓ 50+ Expert Faculty</span>
              <span className="w-1 h-1 rounded-full bg-white" />
              <span>✓ 100% Placement Support</span>
            </div>
          </div>
        </div>

        {/* Column 2: Academy Links */}
        <div className="md:col-span-2">
          <p className="text-[16px] tracking-[0.22em] uppercase text-white mb-5">
            Salon
          </p>
          <ul className="space-y-3">
            {navLinks.Academy.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[13px] text-white hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Visit Us (Address) */}
        <div className="md:col-span-3">
          <p className="text-[16px] font-bold tracking-[0.22em] uppercase text-white mb-5">
            Visit Us
          </p>
          <address className="not-italic space-y-1">
            <p className="text-[13px] text-white">GMS Road</p>
            <p className="text-[13px] text-white"> Next to Raymond Showroom</p>
            <p className="text-[13px] text-white">Dehradun, 248001</p>
          </address>
        </div>

        {/* Column 4: Connect (Social Icons + Mobile & Email - on the very right) */}
        <div className="md:col-span-3">
          <p className="text-[16px] tracking-[0.22em] uppercase text-white mb-5">
            Connect
          </p>
          
          {/* Contact info: Mobile & Email */}
          <div className="space-y-2 mb-5">
            <a
              href="tel:+918006022266"
              className="block text-[13px] text-white hover:text-white transition-colors duration-200"
            >
              +91 8006022266
            </a>
            {/* <a
              href="mailto:info@looksacademy.in"
              className="block text-[13px] text-white hover:text-white transition-colors duration-200"
            >
              info@looksacademy.in
            </a> */}
          </div>
          
          <ul className="space-y-3 mb-6">
            {navLinks.Connect.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="text-[13px] text-white/50 hover:text-white transition-colors duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Social Icons */}
          <div className="flex items-center gap-4 pt-2">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="text-white/30 hover:text-white transition-colors duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div className="w-full px-6 md:px-16 lg:px-28 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        <p className="text-[11px] text-white/15 tracking-wide order-3 sm:order-1">
          © {new Date().getFullYear()} Looks Academy. All rights reserved.
        </p>

        {/* Legal Links */}
        <div className="flex items-center gap-6 order-2 sm:order-2">
          <a href="/privacy" className="text-[11px] text-white/20 hover:text-white/60 transition-colors duration-200">
            Privacy Policy
          </a>
          <a href="/terms" className="text-[11px] text-white/20 hover:text-white/60 transition-colors duration-200">
            Terms of Use
          </a>
        </div>
      </div>

    </footer>
  );
}