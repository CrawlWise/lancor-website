"use client";
import { MapPin, Phone, Printer, Mail, Clock, Calendar, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <>
      {/* HERO */}
      <section className="bg-[#0e0d0c] pt-16 min-h-[220px] flex items-end">
        <div className="absolute left-0 right-0 top-0 h-[284px] bg-[linear-gradient(to_bottom,#0a0e14_0%,#0e0d0c_100%)]" />
        <div className="relative z-[2] max-w-[1200px] w-full mx-auto px-[3rem] pt-[4rem] pb-[3rem]">
          <h1 className="font-cormorant text-[clamp(2.5rem,6vw,4.5rem)] font-normal text-white leading-[1.05]">
            Contact <em className="italic text-[#9d8553]">Us</em>
          </h1>
        </div>
      </section>

      {/* MAIN CONTACT */}
      <section className="bg-[#f2ede6] py-[7rem] px-[3rem]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-[5rem] items-start">
          {/* Info */}
          <div>
            <p className="font-montserrat text-[0.65rem] tracking-[0.2em] text-[#9d8553] uppercase mb-[1.2rem]">CONTACT INFORMATION</p>
            <h2 className="font-cormorant text-[clamp(2rem,4vw,3rem)] font-normal text-[#1a1714] leading-[1.15] mb-[2.5rem]">
              Let&apos;s Start a <em className="italic">Conversation</em>
            </h2>
            <div className="flex flex-col gap-6 mb-[2.5rem]">
              {[
                { icon: MapPin, label: "HEADQUARTERS", val: "2000 Commonwealth Avenue, Suite 310\nNewton Auburndale, MA 02466 USA" },
                { icon: Phone, label: "TELEPHONE", val: "+1.617.431.6200" },
                { icon: Printer, label: "FAX", val: "+1.617.939.3900" },
                { icon: Mail, label: "EMAIL", val: "info@lancorltd.com" },
                { icon: Clock, label: "BUSINESS HOURS", val: "Mon–Fri: 9:00 AM – 6:00 PM EST" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-4 items-start">
                    <div className="w-10 h-10 border border-[rgba(0,0,0,0.12)] flex items-center justify-center shrink-0">
                      <Icon size={16} color="#9d8553" />
                    </div>
                    <div>
                      <p className="font-montserrat text-[0.55rem] tracking-[0.18em] text-[#9d8553] mb-[0.3rem]">{item.label}</p>
                      <p className="font-montserrat text-[0.78rem] text-[#5a4a38] leading-[1.7] whitespace-pre-line">{item.val}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            {/* <div>
              <a href="https://calendly.com/iqid_usa/boston" target="_blank" className="btn-gold inline-flex no-underline mb-3">
                <Calendar size={14} /> BOOK A MEETING
              </a>
              <p className="font-montserrat text-[0.65rem] text-[#9d8553] tracking-[0.05em] mt-2">Schedule a free consultation via Calendly</p>
            </div> */}

            {/* Registration box */}
            <div className="border border-[rgba(0,0,0,0.1)] p-6 mt-8">
              <p className="font-montserrat text-[0.55rem] tracking-[0.18em] text-[#9d8553] mb-4">REGISTRATIONS</p>
              <p className="font-montserrat text-[0.7rem] text-[#7a6a55] mb-[0.4rem]">D-U-N-S # 009498669</p>
              <p className="font-montserrat text-[0.7rem] text-[#7a6a55]">UNGM Registration # 104496</p>
            </div>
          </div>

          {/* Form */}
          {/* <div className="bg-[#1a1714] p-[2.5rem]">
            <h3 className="font-cormorant text-[1.8rem] font-normal text-white mb-8">Send a Message</h3>
            <div className="flex flex-col gap-5">
              <div>
                <label className="font-montserrat text-[0.55rem] tracking-[0.18em] text-[rgba(255,255,255,0.4)] block mb-2">FULL NAME</label>
                <input type="text" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-transparent border border-[rgba(255,255,255,0.15)] px-4 py-[0.85rem] font-montserrat text-[0.8rem] text-white" />
              </div>
              <div>
                <label className="font-montserrat text-[0.55rem] tracking-[0.18em] text-[rgba(255,255,255,0.4)] block mb-2">EMAIL ADDRESS</label>
                <input type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-transparent border border-[rgba(255,255,255,0.15)] px-4 py-[0.85rem] font-montserrat text-[0.8rem] text-white" />
              </div>
              <div>
                <label className="font-montserrat text-[0.55rem] tracking-[0.18em] text-[rgba(255,255,255,0.4)] block mb-2">SUBJECT</label>
                <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  className={`w-full bg-[#1a1714] border border-[rgba(255,255,255,0.15)] px-4 py-[0.85rem] font-montserrat text-[0.8rem] appearance-none ${form.subject ? "text-white" : "text-[#6b6055]"}`}>
                  <option value="">Select a topic</option>
                  <option value="consulting">Business Consulting</option>
                  <option value="software">Software Development</option>
                  <option value="cloud">Cloud Computing</option>
                  <option value="nin">NIN Enrollment</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label className="font-montserrat text-[0.55rem] tracking-[0.18em] text-[rgba(255,255,255,0.4)] block mb-2">MESSAGE</label>
                <textarea placeholder="Tell us about your project or inquiry..." rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full bg-transparent border border-[rgba(255,255,255,0.15)] px-4 py-[0.85rem] font-montserrat text-[0.8rem] text-white resize-y" />
              </div>
              <button type="button" className="btn-gold w-full justify-center mt-2">
                <Send size={14} /> SEND MESSAGE
              </button>
            </div>
          </div> */}
        </div>
      </section>
    </>
  );
}                                                                                                                                                                                                                                                 