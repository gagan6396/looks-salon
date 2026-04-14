"use client";

import { useState } from "react";

const TOPICS = ["Appointment", "Services", "Pricing", "Other"] as const;
type Topic = (typeof TOPICS)[number];

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [topic, setTopic] = useState<Topic | null>(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Helper to format message for WhatsApp
  const formatWhatsAppMessage = () => {
    let message = `*New Contact Form Submission*%0A%0A`;
    message += `*Name:* ${form.name || "Not provided"}%0A`;
    message += `*Email:* ${form.email || "Not provided"}%0A`;
    message += `*Phone:* ${form.phone || "Not provided"}%0A`;
    message += `*Topic:* ${topic || "Not selected"}%0A`;
    message += `*Message:* ${form.message || "Not provided"}%0A`;
    return message;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation (since fields are required, we rely on HTML required attribute)
    if (!form.name || !form.email || !form.message) {
      alert("Please fill in all required fields (Name, Email, Message)");
      return;
    }

    // WhatsApp number (include country code without '+')
    const phoneNumber = "918006022266"; // +91 8006022266
    
    const message = formatWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;
    
    // Open WhatsApp in a new tab
    window.open(whatsappUrl, "_blank");
    
    // Optionally show success state (can be removed if you want to keep form visible)
    setSubmitted(true);
  };

  const reset = () => {
    setSubmitted(false);
    setForm({ name: "", email: "", phone: "", message: "" });
    setTopic(null);
  };

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="mb-14">
          <p className="text-neutral-400 text-xs tracking-[0.3em] uppercase mb-3">Get In Touch</p>
          <h2 className="text-black text-3xl md:text-4xl font-bold tracking-widest uppercase">
            Contact Us
          </h2>
          <div className="w-12 h-px bg-black mt-5" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 border border-neutral-200 rounded-xl overflow-hidden">

          {/* ── Form Panel ── */}
          <div className="p-10 md:p-12 border-b md:border-b-0 md:border-r border-neutral-200">
            {submitted ? (
              /* Success State */
              <div className="flex flex-col justify-center h-full gap-5 py-12">
                <div className="w-11 h-11 rounded-full bg-green-50 flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-black text-lg font-semibold tracking-wide mb-1">Message sent!</h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                </div>
                <button
                  onClick={reset}
                  className="text-xs tracking-widest uppercase underline underline-offset-4 text-neutral-500 hover:text-black transition-colors w-fit"
                >
                  Send another message
                </button>
              </div>
            ) : (
              /* Form */
              <form onSubmit={handleSubmit} className="flex flex-col gap-5">

                {/* Name */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">Full Name</label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" />
                    </svg>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Jane Doe"
                      className="w-full pl-9 pr-3 py-2.5 text-sm text-black placeholder:text-neutral-300 bg-neutral-50 border border-neutral-200 rounded-lg outline-none focus:border-black focus:ring-2 focus:ring-black/5 hover:border-neutral-400 transition-all"
                    />
                  </div>
                </div>

                {/* Email */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">Email</label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    </svg>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      required
                      placeholder="jane@email.com"
                      className="w-full pl-9 pr-3 py-2.5 text-sm text-black placeholder:text-neutral-300 bg-neutral-50 border border-neutral-200 rounded-lg outline-none focus:border-black focus:ring-2 focus:ring-black/5 hover:border-neutral-400 transition-all"
                    />
                  </div>
                </div>

                {/* Phone */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">
                    Phone{" "}
                    <span className="normal-case tracking-normal text-[9px] text-neutral-300 italic">optional</span>
                  </label>
                  <div className="relative">
                    <svg className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.89 10.8 19.79 19.79 0 01.82 2.18 2 2 0 012.8 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.77a16 16 0 006.29 6.29l1.13-1.14a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                    </svg>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+91 00000 00000"
                      className="w-full pl-9 pr-3 py-2.5 text-sm text-black placeholder:text-neutral-300 bg-neutral-50 border border-neutral-200 rounded-lg outline-none focus:border-black focus:ring-2 focus:ring-black/5 hover:border-neutral-400 transition-all"
                    />
                  </div>
                </div>

                {/* Topic Pills */}
                <div className="flex flex-col gap-2">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">Topic</label>
                  <div className="flex flex-wrap gap-2">
                    {TOPICS.map((t) => (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTopic(t === topic ? null : t)}
                        className={`px-3.5 py-1.5 text-xs rounded-full border transition-all ${
                          topic === t
                            ? "bg-black text-white border-black font-medium"
                            : "bg-white text-neutral-500 border-neutral-200 hover:border-neutral-400"
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="w-full px-3 py-2.5 text-sm text-black placeholder:text-neutral-300 bg-neutral-50 border border-neutral-200 rounded-lg outline-none focus:border-black focus:ring-2 focus:ring-black/5 hover:border-neutral-400 transition-all resize-none"
                  />
                  <p className="text-[10px] text-neutral-400 text-right">We reply within 24 hours</p>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="mt-1 flex items-center justify-center gap-2 bg-black text-white text-xs font-semibold tracking-[0.15em] uppercase px-8 py-4 rounded-lg hover:bg-neutral-800 active:scale-[0.98] transition-all w-full md:w-fit"
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" /><polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  Send Message
                </button>

              </form>
            )}
          </div>

          {/* ── Map + Info Panel ── */}
          <div className="flex flex-col">

            {/* Google Map */}
            <div className="w-full h-60 md:h-64">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.1876979739886!2d78.00925697464349!3d30.31717850559881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b12b171f34b%3A0x7d6b0adfd4917bf6!2sLooks%20Salon%20GMS!5e0!3m2!1sen!2sin!4v1776080576067!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "grayscale(15%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Info */}
            <div className="p-10 md:p-12 flex flex-col gap-6 flex-1 bg-neutral-50">

              {/* Hours
              <div>
                <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-3">Hours</p>
                <div className="flex flex-col gap-2">
                  {[
                    { days: "Mon – Sat", hours: "10am – 8pm" },
                    { days: "Sunday", hours: "11am – 6pm" },
                  ].map(({ days, hours }) => (
                    <div key={days} className="flex items-center gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-green-500 shrink-0" />
                      <span className="text-sm text-black">{days}</span>
                      <span className="text-sm text-neutral-400">{hours}</span>
                    </div>
                  ))}
                </div>
              </div> */}

              <div className="w-full h-px bg-neutral-200" />

              {/* Address & Phone */}
              {[
                {
                  icon: (
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                  ),
                  label: "Address",
                  value: "GMS Road, Next to Raymond Showroom, Dehradun, Uttarakhand 248001",
                  href: undefined,
                },
                {
                  icon: (
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.89 10.8 19.79 19.79 0 01.82 2.18 2 2 0 012.8 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.77a16 16 0 006.29 6.29l1.13-1.14a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
                  ),
                  label: "Phone",
                  value: "+91 8006022266",
                  href: "tel:+918006022266",
                },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg border border-neutral-200 bg-white flex items-center justify-center shrink-0">
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#525252" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.15em] uppercase text-neutral-400 mb-0.5">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-sm text-black hover:text-neutral-500 transition-colors">
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-black leading-relaxed">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;