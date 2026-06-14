"use client";

import { useState } from "react";

export default function ContactClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* ══════════════════════ HERO ══════════════════════ */}
      <section className="relative h-[320px] flex items-end overflow-hidden bg-[#080c14]">
        <div className="absolute inset-0">
          <svg viewBox="0 0 1024 320" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
            <defs>
              <radialGradient id="cntGlow" cx="50%" cy="30%" r="55%">
                <stop offset="0%" stopColor="#c9a050" stopOpacity="0.45" />
                <stop offset="40%" stopColor="#3a2800" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#080c14" stopOpacity="0" />
              </radialGradient>
              <linearGradient id="cntFade" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#080c14" stopOpacity="0" />
                <stop offset="70%" stopColor="#080c14" stopOpacity="0.5" />
                <stop offset="100%" stopColor="#080c14" stopOpacity="0.92" />
              </linearGradient>
            </defs>
            <rect width="1024" height="320" fill="#0d1520" />
            {[80, 160, 240].map((y, i) => (
              <line key={`h-${i}`} x1="0" y1={y} x2="1024" y2={y} stroke="#1e3050" strokeWidth="0.8" strokeOpacity="0.5" />
            ))}
            {[100, 200, 300, 400, 500, 600, 700, 800, 900].map((x, i) => (
              <line key={`v-${i}`} x1={x} y1="0" x2={x} y2="320" stroke="#1e3050" strokeWidth="0.8" strokeOpacity="0.35" />
            ))}
            <ellipse cx="512" cy="160" rx="200" ry="120" fill="url(#cntGlow)" fillOpacity="0.7" />
            <rect width="1024" height="320" fill="url(#cntFade)" />
          </svg>
        </div>
        <div className="relative z-10 mx-auto max-w-7xl w-full px-6 lg:px-12 pb-10">
          <p
            className="text-[#b8975a] text-[10px] tracking-[0.3em] uppercase font-semibold mb-3"
            style={{ fontFamily: "Raleway, sans-serif" }}
          >
            GET IN TOUCH
          </p>
          <h1
            className="text-white text-5xl lg:text-6xl"
            style={{ fontFamily: "Playfair Display, serif", fontWeight: 400 }}
          >
            Start a{" "}
            <em className="italic" style={{ color: "#c9a96e" }}>Conversation</em>
          </h1>
        </div>
      </section>

      {/* ══════════════════════ CONTACT BODY ══════════════════════ */}
      <section className="bg-[#f5f2ed] py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">

            {/* Left — info */}
            <div>
              <p
                className="text-[#b8975a] text-[10px] tracking-[0.3em] uppercase font-semibold mb-5"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                CONTACT INFORMATION
              </p>
              <h2
                className="text-[#1a1a1a] text-4xl lg:text-[2.75rem] leading-[1.1] mb-8"
                style={{ fontFamily: "Playfair Display, serif", fontWeight: 400 }}
              >
                We&apos;re Here to
                <br />
                <em className="italic">Help You</em>
              </h2>
              <p
                className="text-[#3a3a3a] text-sm leading-[1.95] mb-10"
                style={{ fontFamily: "Raleway, sans-serif" }}
              >
                Whether you have a complex IT challenge or simply want to explore how LANCOR can serve
                your organization, we welcome the conversation. Reach out and one of our consultants
                will respond within one business day.
              </p>

              <div className="space-y-8">
                {/* Address */}
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-[#e0d9cf] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#b8975a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-[#b8975a] text-[9px] tracking-[0.2em] uppercase font-semibold mb-1"
                      style={{ fontFamily: "Raleway, sans-serif" }}
                    >
                      HEADQUARTERS
                    </p>
                    <p
                      className="text-[#1a1a1a] text-sm leading-[1.7]"
                      style={{ fontFamily: "Raleway, sans-serif" }}
                    >
                      Newton, Massachusetts
                      <br />
                      United States
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-[#e0d9cf] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#b8975a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-[#b8975a] text-[9px] tracking-[0.2em] uppercase font-semibold mb-1"
                      style={{ fontFamily: "Raleway, sans-serif" }}
                    >
                      EMAIL
                    </p>
                    <a
                      href="mailto:info@lancor.com"
                      className="text-[#1a1a1a] text-sm hover:text-[#b8975a] transition-colors duration-200"
                      style={{ fontFamily: "Raleway, sans-serif" }}
                    >
                      info@lancor.com
                    </a>
                  </div>
                </div>

                {/* Established */}
                <div className="flex items-start gap-5">
                  <div className="w-10 h-10 border border-[#e0d9cf] flex items-center justify-center flex-shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-[#b8975a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <p
                      className="text-[#b8975a] text-[9px] tracking-[0.2em] uppercase font-semibold mb-1"
                      style={{ fontFamily: "Raleway, sans-serif" }}
                    >
                      ESTABLISHED
                    </p>
                    <p
                      className="text-[#1a1a1a] text-sm"
                      style={{ fontFamily: "Raleway, sans-serif" }}
                    >
                      1994 — Over 30 years of service
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div>
              {submitted ? (
                <div className="h-full flex flex-col items-center justify-center text-center py-16">
                  <div className="w-16 h-16 border border-[#b8975a] flex items-center justify-center mb-6">
                    <svg className="w-7 h-7 text-[#b8975a]" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                  </div>
                  <h3
                    className="text-[#1a1a1a] text-2xl mb-4"
                    style={{ fontFamily: "Playfair Display, serif", fontWeight: 400 }}
                  >
                    Message Received
                  </h3>
                  <p
                    className="text-[#6b6b6b] text-sm leading-[1.8]"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    Thank you for reaching out. A member of our team will respond within one business day.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-[9px] tracking-[0.2em] uppercase font-semibold text-[#b8975a] mb-2"
                        style={{ fontFamily: "Raleway, sans-serif" }}
                      >
                        FULL NAME *
                      </label>
                      <input
                        id="name"
                        name="name"
                        type="text"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full bg-transparent border border-[#e0d9cf] px-4 py-3 text-sm text-[#1a1a1a] outline-none focus:border-[#b8975a] transition-colors duration-200"
                        style={{ fontFamily: "Raleway, sans-serif" }}
                        placeholder="John Smith"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-[9px] tracking-[0.2em] uppercase font-semibold text-[#b8975a] mb-2"
                        style={{ fontFamily: "Raleway, sans-serif" }}
                      >
                        EMAIL ADDRESS *
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-transparent border border-[#e0d9cf] px-4 py-3 text-sm text-[#1a1a1a] outline-none focus:border-[#b8975a] transition-colors duration-200"
                        style={{ fontFamily: "Raleway, sans-serif" }}
                        placeholder="john@company.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="company"
                      className="block text-[9px] tracking-[0.2em] uppercase font-semibold text-[#b8975a] mb-2"
                      style={{ fontFamily: "Raleway, sans-serif" }}
                    >
                      ORGANIZATION
                    </label>
                    <input
                      id="company"
                      name="company"
                      type="text"
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-[#e0d9cf] px-4 py-3 text-sm text-[#1a1a1a] outline-none focus:border-[#b8975a] transition-colors duration-200"
                      style={{ fontFamily: "Raleway, sans-serif" }}
                      placeholder="Your organization"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="subject"
                      className="block text-[9px] tracking-[0.2em] uppercase font-semibold text-[#b8975a] mb-2"
                      style={{ fontFamily: "Raleway, sans-serif" }}
                    >
                      SUBJECT *
                    </label>
                    <input
                      id="subject"
                      name="subject"
                      type="text"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-[#e0d9cf] px-4 py-3 text-sm text-[#1a1a1a] outline-none focus:border-[#b8975a] transition-colors duration-200"
                      style={{ fontFamily: "Raleway, sans-serif" }}
                      placeholder="How can we help?"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-[9px] tracking-[0.2em] uppercase font-semibold text-[#b8975a] mb-2"
                      style={{ fontFamily: "Raleway, sans-serif" }}
                    >
                      MESSAGE *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-transparent border border-[#e0d9cf] px-4 py-3 text-sm text-[#1a1a1a] outline-none focus:border-[#b8975a] transition-colors duration-200 resize-none"
                      style={{ fontFamily: "Raleway, sans-serif" }}
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    id="contact-submit-btn"
                    className="inline-flex items-center gap-3 border border-[#b8975a] text-[#b8975a] px-8 py-4 text-[10px] tracking-[0.25em] uppercase font-semibold transition-all duration-300 hover:bg-[#b8975a] hover:text-white"
                    style={{ fontFamily: "Raleway, sans-serif" }}
                  >
                    SEND MESSAGE
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
