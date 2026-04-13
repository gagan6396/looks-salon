"use client";

import { useState } from "react";

const faqs = [
  {
    q: "What services does Looks Salon offer?",
    a: "We offer a full range of hair and beauty services including cuts, colouring, highlights, keratin treatments, bridal makeup, facials, threading, and more — all delivered by certified professionals.",
  },
  {
    q: "Do I need to book an appointment in advance?",
    a: "While walk-ins are welcome, we recommend booking in advance to secure your preferred time slot and stylist. You can book online or call us directly.",
  },
  {
    q: "What products do you use?",
    a: "We exclusively use internationally certified, salon-grade products from trusted brands. All products are tested for safety and chosen for their performance and results.",
  },
  {
    q: "How long does a typical appointment take?",
    a: "It depends on the service. A basic haircut takes around 30–45 minutes, while colour treatments or bridal packages may take 2–4 hours. We will give you an accurate time estimate at booking.",
  },
  {
    q: "Do you offer services for men?",
    a: "Absolutely. We offer a full range of grooming services for men including haircuts, beard styling, scalp treatments, and more.",
  },
  {
    q: "Is Looks Salon suitable for kids?",
    a: "Yes, we welcome clients of all ages. Our stylists are experienced with children's haircuts and ensure a comfortable, friendly experience for younger clients.",
  },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="bg-black py-20 px-6 md:px-16">
      <div className="max-w-4xl mx-auto">

        <div className="mb-14">
          <p className="text-neutral-500 text-xs tracking-[0.3em] uppercase mb-3">Got Questions?</p>
          <h2 className="text-white text-3xl md:text-4xl font-bold tracking-widest uppercase">
            FAQ
          </h2>
          <div className="w-12 h-px bg-white mt-5" />
        </div>

        <div className="flex flex-col divide-y divide-neutral-800">
          {faqs.map((faq, i) => (
            <div key={i}>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between py-6 text-left group"
              >
                <span className={`text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ${open === i ? "text-white" : "text-neutral-400 group-hover:text-white"}`}>
                  {faq.q}
                </span>
                <span className={`ml-6 shrink-0 w-6 h-6 border flex items-center justify-center transition-all duration-200 ${open === i ? "border-white" : "border-neutral-700 group-hover:border-white"}`}>
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round">
                    <line x1="5" y1="1" x2="5" y2="9" className={`transition-all duration-200 ${open === i ? "opacity-0" : "opacity-100"}`}/>
                    <line x1="1" y1="5" x2="9" y2="5"/>
                  </svg>
                </span>
              </button>
              <div className={`overflow-hidden transition-all duration-300 ${open === i ? "max-h-40 pb-6" : "max-h-0"}`}>
                <p className="text-neutral-500 text-sm leading-relaxed">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FAQ;