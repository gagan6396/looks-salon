"use client"


const facilities = [
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
        </svg>
      ),
      title: "Modern Salon Space",
      desc: "Spacious, well-designed stations created for comfort, hygiene, and a premium salon experience.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
        </svg>
      ),
      title: "Personalized Consultation",
      desc: "Detailed one-on-one consultations to understand your hair type, preferences, and desired look.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
        </svg>
      ),
      title: "Premium Products",
      desc: "We use trusted, salon-grade products that ensure safe application and long-lasting results.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>
        </svg>
      ),
      title: "Advanced Techniques",
      desc: "Our stylists stay updated with the latest trends, techniques, and styles from across the industry.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
        </svg>
      ),
      title: "Relaxing Experience",
      desc: "A calm and welcoming environment designed to help you unwind while we take care of your hair.",
    },
    {
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
        </svg>
      ),
      title: "Easy Appointments",
      desc: "Convenient booking options with flexible timings to fit seamlessly into your schedule.",
    },
  ];
  
  const Facilities = () => {
    return (
      <section className="bg-white py-20 px-6 md:px-16">
        <div className="max-w-6xl mx-auto">
  
          <div className="mb-14">
            <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-3">What We Offer</p>
            <h2 className="text-black text-3xl md:text-4xl font-bold tracking-widest uppercase">
              Our Facilities
            </h2>
            <div className="w-12 h-px bg-black mt-5" />
          </div>
  
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-px bg-neutral-200">
            {facilities.map((f) => (
              <div key={f.title} className="bg-white p-10 flex flex-col gap-5 group hover:bg-black transition-colors duration-300">
                <div className="text-black group-hover:text-white transition-colors duration-300">
                  {f.icon}
                </div>
                <h3 className="text-black group-hover:text-white text-sm font-bold tracking-widest uppercase transition-colors duration-300">
                  {f.title}
                </h3>
                <p className="text-neutral-500 group-hover:text-neutral-400 text-sm leading-relaxed transition-colors duration-300">
                  {f.desc}
                </p>
              </div>
            ))}
          </div>
  
        </div>
      </section>
    );
  };
  
  export default Facilities;