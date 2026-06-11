import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#0e0d0c", borderTop: "1px solid rgba(157,133,83,0.2)", padding: "5rem 0 3rem" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 3rem" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr 1fr 1.3fr", gap: "3rem" }}>
          {/* Brand */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "1.5rem" }}>
              <div style={{ width: 36, height: 36, border: "1px solid #9d8553", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.1rem", color: "#9d8553" }}>L</span>
              </div>
              <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.9rem", fontWeight: 600, color: "white", letterSpacing: "0.1em" }}>LANCOR</span>
            </div>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8, marginBottom: "1.5rem" }}>
              Dynamic Technology Solutions Provider. Precision, Excellence, Performance, and Service since 1994.
            </p>
            <div style={{ display: "inline-block", border: "1px solid rgba(157,133,83,0.4)", padding: "0.4rem 1rem" }}>
              <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.6rem", color: "#9d8553", letterSpacing: "0.1em" }}>D-U-N-S # 009498669</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="label-text" style={{ color: "rgba(255,255,255,0.5)", marginBottom: "1.5rem" }}>NAVIGATION</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", textDecoration: "none", transition: "color 0.2s" }}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="label-text" style={{ color: "rgba(255,255,255,0.5)", marginBottom: "1.5rem" }}>SERVICES</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.9rem" }}>
              {["Software Development", "Cloud Computing", "IT Infrastructure", "Business Consulting", "Government IT"].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.78rem", color: "rgba(255,255,255,0.6)", textDecoration: "none" }}
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Headquarters */}
          <div>
            <div className="label-text" style={{ color: "rgba(255,255,255,0.5)", marginBottom: "1.5rem" }}>HEADQUARTERS</div>
            <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                <MapPin size={14} color="#9d8553" style={{ marginTop: 2, flexShrink: 0 }} />
                <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.6)", lineHeight: 1.7 }}>
                  2000 Commonwealth Ave, Suite 310<br />Newton Auburndale, MA 02466
                </span>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <Phone size={14} color="#9d8553" style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>617.431.6200</span>
              </div>
              <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
                <Mail size={14} color="#9d8553" style={{ flexShrink: 0 }} />
                <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.6)" }}>Oyegbola@lancorltd.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ marginTop: "4rem", paddingTop: "2rem", borderTop: "1px solid rgba(255,255,255,0.08)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", color: "rgba(255,255,255,0.3)" }}>
            © 2024 Lagos Analysis Corporation. All rights reserved.
          </span>
          <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", color: "rgba(255,255,255,0.3)" }}>
            UNGM Registration # 104496
          </span>
        </div>
      </div>
    </footer>
  );
}
