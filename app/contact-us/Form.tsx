"use client";

import { useState } from "react";

const ContactSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire up API call here
    setSubmitted(true);
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border border-neutral-200">

          {/* Form */}
          <div className="p-10 md:p-14 border-b md:border-b-0 md:border-r border-neutral-200">
            {submitted ? (
              <div className="flex flex-col justify-center h-full gap-4 py-12">
                <div className="w-10 h-10 border border-black flex items-center justify-center">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <h3 className="text-black text-lg font-bold tracking-widest uppercase">Message Sent</h3>
                <p className="text-neutral-500 text-sm leading-relaxed">
                  Thank you for reaching out. We'll get back to you shortly.
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                  className="mt-2 text-xs tracking-widest uppercase underline underline-offset-4 text-black hover:text-neutral-500 transition-colors w-fit"
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="Jane Doe"
                    className="bg-transparent border-b border-neutral-300 focus:border-black outline-none py-2.5 text-sm text-black placeholder:text-neutral-300 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="jane@email.com"
                    className="bg-transparent border-b border-neutral-300 focus:border-black outline-none py-2.5 text-sm text-black placeholder:text-neutral-300 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">Phone</label>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="+91 00000 00000"
                    className="bg-transparent border-b border-neutral-300 focus:border-black outline-none py-2.5 text-sm text-black placeholder:text-neutral-300 transition-colors"
                  />
                </div>

                <div className="flex flex-col gap-1.5">
                  <label className="text-[10px] tracking-[0.2em] uppercase text-neutral-400">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    placeholder="How can we help you?"
                    className="bg-transparent border-b border-neutral-300 focus:border-black outline-none py-2.5 text-sm text-black placeholder:text-neutral-300 transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="mt-2 bg-black text-white text-xs font-semibold tracking-[0.2em] uppercase px-8 py-4 hover:bg-neutral-800 transition-colors w-full md:w-fit"
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Map + Info */}
          <div className="flex flex-col">

            {/* Google Map embed */}
            <div className="w-full h-64 md:h-72">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3444.1876979739886!2d78.00925697464349!3d30.31717850559881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39092b12b171f34b%3A0x7d6b0adfd4917bf6!2sLooks%20Salon%20GMS!5e0!3m2!1sen!2sin!4v1776080576067!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Info */}
            <div className="p-10 md:p-12 flex flex-col gap-7 flex-1 bg-neutral-50">
              {[
                {
                  icon: (
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  ),
                  label: "Address",
                  value: "GMS Road, Next to Raymond Showroom, Dehradun, Uttarakhand 248001",
                },
                {
                  icon: (
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.89 10.8 19.79 19.79 0 01.82 2.18 2 2 0 012.8 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 7.77a16 16 0 006.29 6.29l1.13-1.14a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
                  ),
                  label: "Phone",
                  value: "+91 8006022266",
                },
                // {
                //   icon: (
                //     <>
                //       <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                //       <polyline points="22,6 12,13 2,6"/>
                //     </>
                //   ),
                //   label: "Email",
                //   value: "hello@lookssalon.in",
                // },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-9 h-9 border border-neutral-300 flex items-center justify-center shrink-0">
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                      {item.icon}
                    </svg>
                  </div>
                  <div>
                    <p className="text-[10px] tracking-[0.2em] uppercase text-neutral-400 mb-0.5">{item.label}</p>
                    <p className="text-black text-sm">{item.value}</p>
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