"use client";
import { MapPin, Phone, Printer, Mail, Clock, Calendar, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });

  return (
    <>
      {/* HERO */}
      <section style={{ background: "#0e0d0c", paddingTop: 64, minHeight: 220, display: "flex", alignItems: "flex-end" }}>
        <div style={{ position: "absolute", left: 0, right: 0, top: 0, height: 284, background: "linear-gradient(to bottom, #0a0e14 0%, #0e0d0c 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, width: "100%", margin: "0 auto", padding: "4rem 3rem 3rem" }}>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, color: "white", lineHeight: 1.05 }}>
            Contact <em style={{ fontStyle: "italic", color: "#9d8553" }}>Us</em>
          </h1>
        </div>
      </section>

      {/* MAIN CONTACT */}
      <section style={{ background: "#f2ede6", padding: "7rem 3rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start" }}>
          {/* Info */}
          <div>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#9d8553", textTransform: "uppercase", marginBottom: "1.2rem" }}>CONTACT INFORMATION</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#1a1714", lineHeight: 1.15, marginBottom: "2.5rem" }}>
              Let&apos;s Start a <em style={{ fontStyle: "italic" }}>Conversation</em>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem", marginBottom: "2.5rem" }}>
              {[
                { icon: MapPin, label: "HEADQUARTERS", val: "2000 Commonwealth Avenue, Suite 310\nNewton Auburndale, MA 02466 USA" },
                { icon: Phone, label: "TELEPHONE", val: "+1.617.431.6200" },
                { icon: Printer, label: "FAX", val: "+1.617.939.3900" },
                { icon: Mail, label: "EMAIL", val: "Oyegbola@lancorltd.com" },
                { icon: Clock, label: "BUSINESS HOURS", val: "Mon–Fri: 9:00 AM – 6:00 PM EST" },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start" }}>
                    <div style={{ width: 40, height: 40, border: "1px solid rgba(0,0,0,0.12)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                      <Icon size={16} color="#9d8553" />
                    </div>
                    <div>
                      <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.55rem", letterSpacing: "0.18em", color: "#9d8553", marginBottom: "0.3rem" }}>{item.label}</p>
                      <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.78rem", color: "#5a4a38", lineHeight: 1.7, whiteSpace: "pre-line" }}>{item.val}</p>
                    </div>
                  </div>
                );
              })}
            </div>
            <div>
              <a href="#" className="btn-gold" style={{ display: "inline-flex", textDecoration: "none", marginBottom: "0.75rem" }}>
                <Calendar size={14} /> BOOK A MEETING
              </a>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", color: "#9d8553", letterSpacing: "0.05em", marginTop: "0.5rem" }}>Schedule a free consultation via Calendly</p>
            </div>

            {/* Registration box */}
            <div style={{ border: "1px solid rgba(0,0,0,0.1)", padding: "1.5rem", marginTop: "2rem" }}>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.55rem", letterSpacing: "0.18em", color: "#9d8553", marginBottom: "1rem" }}>REGISTRATIONS</p>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.7rem", color: "#7a6a55", marginBottom: "0.4rem" }}>D-U-N-S # 009498669</p>
              <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.7rem", color: "#7a6a55" }}>UNGM Registration # 104496</p>
            </div>
          </div>

          {/* Form */}
          <div style={{ background: "#1a1714", padding: "2.5rem" }}>
            <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.8rem", fontWeight: 400, color: "white", marginBottom: "2rem" }}>Send a Message</h3>
            <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
              <div>
                <label style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.55rem", letterSpacing: "0.18em", color: "rgba(255,255,255,0.4)", display: "block", marginBottom: "0.5rem" }}>FULL NAME</label>
                <input type="text" placeholder="Your name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })}
                  style={{ width: "100%", background: "transparent", border: "1px solid rgba(255,255,255,0.15)", padding: "0.85rem 1rem", fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "white" }} />
              </div>
              <div>
                <label style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.55rem", letterSpacing: "0.18em", color: "rgba(255,255,255,0.4)", display: "block", marginBottom: "0.5rem" }}>EMAIL ADDRESS</label>
                <input type="email" placeholder="your@email.com" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })}
                  style={{ width: "100%", background: "transparent", border: "1px solid rgba(255,255,255,0.15)", padding: "0.85rem 1rem", fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "white" }} />
              </div>
              <div>
                <label style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.55rem", letterSpacing: "0.18em", color: "rgba(255,255,255,0.4)", display: "block", marginBottom: "0.5rem" }}>SUBJECT</label>
                <select value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })}
                  style={{ width: "100%", background: "#1a1714", border: "1px solid rgba(255,255,255,0.15)", padding: "0.85rem 1rem", fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: form.subject ? "white" : "#6b6055", appearance: "none" }}>
                  <option value="">Select a topic</option>
                  <option value="consulting">Business Consulting</option>
                  <option value="software">Software Development</option>
                  <option value="cloud">Cloud Computing</option>
                  <option value="nin">NIN Enrollment</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <label style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.55rem", letterSpacing: "0.18em", color: "rgba(255,255,255,0.4)", display: "block", marginBottom: "0.5rem" }}>MESSAGE</label>
                <textarea placeholder="Tell us about your project or inquiry..." rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })}
                  style={{ width: "100%", background: "transparent", border: "1px solid rgba(255,255,255,0.15)", padding: "0.85rem 1rem", fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "white", resize: "vertical" }} />
              </div>
              <button type="button" className="btn-gold" style={{ width: "100%", justifyContent: "center", marginTop: "0.5rem" }}>
                <Send size={14} /> SEND MESSAGE
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
