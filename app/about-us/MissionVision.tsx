import Image from "next/image";

const MissionVision = () => {
  return (
    <section className="bg-black py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-16">
          <p className="text-neutral-500 text-xs tracking-[0.3em] uppercase mb-3">Who We Are</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-widest uppercase">
            Mission & Vision
          </h2>
          <div className="w-12 h-px bg-white mt-5" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-neutral-800">

          {/* Mission */}
          <div className="bg-black p-10 md:p-14 flex flex-col gap-6">
            <div className="w-10 h-10 border border-white flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <circle cx="12" cy="12" r="4"/>
                <line x1="12" y1="2" x2="12" y2="4"/>
                <line x1="12" y1="20" x2="12" y2="22"/>
                <line x1="2" y1="12" x2="4" y2="12"/>
                <line x1="20" y1="12" x2="22" y2="12"/>
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold tracking-widest uppercase">Our Mission</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              To provide every client with a personalised, professional experience that celebrates
              their natural beauty. We are committed to delivering exceptional hair and beauty
              services using the finest techniques and products — in a space where you feel
              seen, valued, and transformed.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-neutral-950 p-10 md:p-14 flex flex-col gap-6">
            <div className="w-10 h-10 border border-white flex items-center justify-center shrink-0">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
            </div>
            <h3 className="text-white text-xl font-bold tracking-widest uppercase">Our Vision</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">
              To be the most trusted name in beauty — a salon where artistry meets excellence.
              We envision a community built on confidence, self-expression, and lasting
              relationships, setting the standard for modern salon culture across India.
            </p>
          </div>

        </div>

        {/* Bottom stat strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-neutral-800 mt-px">
          {[
            { value: "15+", label: "Years of Excellence" },
            { value: "10k+", label: "Happy Clients" },
            { value: "50+", label: "Expert Stylists" },
            { value: "12+", label: "Locations" },
          ].map((stat) => (
            <div key={stat.label} className="bg-black px-8 py-8 flex flex-col gap-1">
              <span className="text-white text-2xl font-bold">{stat.value}</span>
              <span className="text-neutral-500 text-xs tracking-widest uppercase">{stat.label}</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MissionVision;