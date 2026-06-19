import { MapPin, Phone, Clock, Users, CheckCircle, Calendar } from "lucide-react";
import Link from "next/link";

export default function NINEnrollment() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "#0e0d0c", paddingTop: 64, minHeight: "auto", position: "relative", padding: "calc(64px + 4rem) 3rem 5rem" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #0a0e14 0%, #0e0d0c 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "4rem", alignItems: "start" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.6rem", marginBottom: "1.5rem" }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: "#4ade80" }} />
              <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.6rem", letterSpacing: "0.2em", color: "rgba(255,255,255,0.5)", textTransform: "uppercase" }}>NIMC-AUTHORIZED ENROLLMENT CENTER</span>
            </div>
            <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, color: "white", lineHeight: 1.05, marginBottom: "1.5rem" }}>
              Nigerian NIN<br />
              <em style={{ fontStyle: "italic", color: "#9d8553" }}>Enrollment</em><br />
              Service
            </h1>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.9, marginBottom: "2rem" }}>
              LANCOR, in partnership with <strong style={{ color: "white", fontWeight: 500 }}>Knowledge Square LLC</strong>, is an officially authorized center for Nigerian National Identification Number (NIN) enrollment serving Nigerians in the Greater Boston area and beyond.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <a href="#" className="btn-gold"><Calendar size={14} /> BOOK APPOINTMENT</a>
              <a href="tel:+16174316200" className="btn-outline"><Phone size={14} /> CALL US</a>
            </div>
          </div>

          {/* Info card */}
          <div style={{ border: "1px solid rgba(157,133,83,0.3)", padding: "2.5rem", background: "rgba(157,133,83,0.05)" }}>
            <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", fontWeight: 400, color: "white", marginBottom: "2rem" }}>Enrollment Center Details</h3>
            {[
              { icon: MapPin, label: "LOCATION", val: "2000 Commonwealth Ave, Suite 310\nNewton Auburndale, MA 02466" },
              { icon: Phone, label: "PHONE", val: "+1 617.431.6200" },
              { icon: Clock, label: "HOURS", val: "Monday – Friday: 9:00 AM – 6:00 PM EST\nBy Appointment Only — No Walk-ins" },
              { icon: Users, label: "PARTNERSHIP", val: "Knowledge Square LLC\nNIMC Authorized Partner" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} style={{ display: "flex", gap: "1rem", alignItems: "flex-start", marginBottom: "1.75rem" }}>
                  <Icon size={16} color="#9d8553" style={{ marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.55rem", letterSpacing: "0.18em", color: "rgba(255,255,255,0.35)", marginBottom: "0.4rem" }}>{item.label}</p>
                    <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.75)", lineHeight: 1.7, whiteSpace: "pre-line" }}>{item.val}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT IS NIN + WHY YOU NEED */}
      <section style={{ background: "#f2ede6", padding: "7rem 3rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem" }}>
          <div>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#9d8553", textTransform: "uppercase", marginBottom: "1.2rem" }}>BACKGROUND</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#1a1714", lineHeight: 1.15, marginBottom: "1.5rem" }}>
              What is the <em style={{ fontStyle: "italic" }}>NIN?</em>
            </h2>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "#7a6a55", lineHeight: 1.9, marginBottom: "1.25rem" }}>
              The National Identification Number (NIN) is an 11-digit unique identifier issued by Nigeria&apos;s National Identity Management Commission (NIMC) to every Nigerian citizen and legal resident. It is the cornerstone of Nigeria&apos;s digital identity infrastructure.
            </p>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "#7a6a55", lineHeight: 1.9, marginBottom: "2rem" }}>
              The NIN consolidates your biometric data — fingerprints, facial image, and demographic information — into a single secure identity. It is now mandatory for most official transactions in Nigeria.
            </p>
            <blockquote style={{ borderLeft: "3px solid #9d8553", paddingLeft: "1.5rem" }}>
              <p style={{ fontFamily: "Cormorant Garamond, serif", fontStyle: "italic", fontSize: "1.05rem", color: "#5a4a38", lineHeight: 1.7 }}>
                &ldquo;LANCOR is listed as an official NIN enrollment center in the United States.&rdquo;
              </p>
            </blockquote>
          </div>

          <div>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#9d8553", textTransform: "uppercase", marginBottom: "1.2rem" }}>WHY YOU NEED A NIN</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(1.8rem, 3vw, 2.5rem)", fontWeight: 400, color: "#9d8553", fontStyle: "italic", marginBottom: "2rem" }}>
              Essential for Every Nigerian
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              {[
                "Required for Nigerian passport renewal and issuance",
                "Mandatory for SIM card registration in Nigeria",
                "Needed for bank account operations in Nigeria",
                "Access to Nigerian government services and benefits",
                "Required for voter registration (PVC)",
                "Essential for tax identification and financial transactions",
              ].map((item) => (
                <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                  <CheckCircle size={16} color="#9d8553" style={{ marginTop: 1, flexShrink: 0 }} />
                  <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.78rem", color: "#7a6a55", lineHeight: 1.7 }}>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section style={{ background: "#0e0d0c", padding: "7rem 3rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#9d8553", textTransform: "uppercase", marginBottom: "1.2rem" }}>ENROLLMENT PROCESS</p>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "white", marginBottom: "4rem" }}>
            How It <em style={{ fontStyle: "italic", color: "#9d8553" }}>Works</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem" }}>
            {[
              { step: "01", title: "Book Appointment", desc: "Schedule your enrollment session online or by phone. Appointments are required — no walk-ins." },
              { step: "02", title: "Gather Documents", desc: "Bring your Nigerian passport, birth certificate, or other valid Nigerian identity documents." },
              { step: "03", title: "Biometric Capture", desc: "Your fingerprints, photograph, and demographic information are captured securely on-site." },
              { step: "04", title: "NIN Issued", desc: "Your NIN is issued by NIMC and you receive your enrollment slip. Processing takes 2–4 weeks." },
            ].map((s) => (
              <div key={s.step} style={{ paddingTop: "2rem", borderTop: "1px solid rgba(157,133,83,0.3)" }}>
                <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.5rem", color: "rgba(157,133,83,0.3)", lineHeight: 1, marginBottom: "1.25rem" }}>{s.step}</div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.3rem", fontWeight: 400, color: "white", marginBottom: "0.75rem" }}>{s.title}</h3>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: "#9d8553", padding: "6rem 3rem", textAlign: "center" }}>
        <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "rgba(0,0,0,0.5)", textTransform: "uppercase", marginBottom: "1.2rem" }}>GET STARTED TODAY</p>
        <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.5rem)", fontWeight: 400, color: "#1a1714", marginBottom: "1.5rem" }}>
          Book Your Enrollment <em style={{ fontStyle: "italic" }}>Appointment</em>
        </h2>
        <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "rgba(0,0,0,0.6)", maxWidth: 480, margin: "0 auto 2.5rem", lineHeight: 1.8 }}>
          Appointments are available Monday through Friday, 9:00 AM – 6:00 PM EST. Contact us to schedule your visit.
        </p>
        <div style={{ display: "flex", gap: "1rem", justifyContent: "center" }}>
          <a href="#" className="btn-gold" style={{ background: "#1a1714" }}><Calendar size={14} /> BOOK APPOINTMENT</a>
          <Link href="/contact" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em", color: "#1a1714", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.6rem", border: "1px solid rgba(0,0,0,0.3)", padding: "1rem 1.8rem", fontWeight: 500 }}>CONTACT US</Link>
        </div>
      </section>
    </>
  );
}
