import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Briefcase,
  Code2,
  Cloud,
  Network,
  Building2,
  GraduationCap,
  Calendar,
} from "lucide-react";

const services = [
  {
    icon: Shield,
    title: "NIN Enrollment",
    description: "Official Nigerian National Identification Number enrollment service for Nigerians in the US, in partnership with Knowledge Square LLC.",
    featured: false,
  },
  {
    icon: Briefcase,
    title: "Business Consulting",
    description: "Strategic planning, viability analysis, and growth strategies to maximize returns and minimize risks.",
    featured: true,
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom-built applications, database design, biometrics software, and full-cycle SDLC solutions.",
    featured: false,
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "End-to-end cloud strategy, implementation, integration, and management for future-proof infrastructure.",
    featured: false,
  },
  {
    icon: Network,
    title: "IT Infrastructure",
    description: "Data center design, network engineering, multi-vendor integration, and infrastructure consulting.",
    featured: false,
  },
  {
    icon: Building2,
    title: "Government IT",
    description: "Process reengineering, shared services, operational assessment, and transformation roadmaps for agencies.",
    featured: false,
  },
  {
    icon: GraduationCap,
    title: "Manpower Development",
    description: "IT management training, information security, project management, and performance coaching programs.",
    featured: false,
  },
];

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", overflow: "hidden", background: "#0e1520" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(135deg, #0d1822 0%, #16232e 30%, #1a2030 50%, #12181f 100%)" }} />
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(90deg, rgba(30,50,70,0.25) 0px, rgba(30,50,70,0.25) 2px, transparent 2px, transparent 80px), repeating-linear-gradient(0deg, rgba(30,50,70,0.1) 0px, rgba(30,50,70,0.1) 1px, transparent 1px, transparent 60px)" }} />
        <div style={{ position: "absolute", right: "10%", top: "10%", width: "55%", height: "85%", background: "radial-gradient(ellipse at 60% 40%, rgba(180,120,50,0.12) 0%, transparent 60%)", pointerEvents: "none" }} />
        <div style={{ height: 64 }} />
        <div style={{ position: "relative", zIndex: 2, padding: "4rem 3rem", maxWidth: 1200, width: "100%", margin: "0 auto" }}>
          <div style={{ maxWidth: 680 }}>
            <p className="label-text" style={{ color: "#9d8553", marginBottom: "2rem" }}>EST. 1994 — NEWTON, MASSACHUSETTS</p>
            <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3rem, 7vw, 5.5rem)", fontWeight: 400, lineHeight: 1.05, color: "white", marginBottom: 0 }}>
              Dynamic<br />
              <em style={{ color: "#9d8553", fontStyle: "italic", fontWeight: 300 }}>Technology</em><br />
              Solutions
            </h1>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.85rem", color: "rgba(255,255,255,0.7)", lineHeight: 1.8, maxWidth: 420, marginTop: "2rem", marginBottom: "2.5rem" }}>
              Professional consulting, research, and development services — offering strategic process reengineering solutions to clients around the world.
            </p>
            <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <Link href="/services" className="btn-gold">EXPLORE SERVICES</Link>
              <Link href="/contact" className="btn-outline">GET IN TOUCH</Link>
            </div>
          </div>
        </div>
        <div style={{ position: "absolute", bottom: "2.5rem", left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: "0.5rem", zIndex: 2 }}>
          <span className="label-text" style={{ color: "rgba(255,255,255,0.4)", fontSize: "0.55rem" }}>SCROLL</span>
          <div style={{ color: "rgba(255,255,255,0.4)" }}>↓</div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ background: "#0e0d0c", padding: "5rem 3rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "repeat(4, 1fr)", textAlign: "center" }}>
          {[{ val: "30+", label: "YEARS OF EXPERIENCE" }, { val: "20+", label: "GLOBAL CLIENTS" }, { val: "5", label: "SERVICE DOMAINS" }, { val: "100%", label: "CLIENT RETENTION" }].map((s, i) => (
            <div key={i} style={{ borderRight: i < 3 ? "1px solid rgba(157,133,83,0.15)" : "none", padding: "0 2rem" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "3.5rem", fontWeight: 400, color: "#9d8553", lineHeight: 1, marginBottom: "0.75rem" }}>{s.val}</div>
              <div style={{ width: 30, height: 1, background: "#9d8553", margin: "0 auto 0.75rem" }} />
              <p className="label-text" style={{ color: "rgba(255,255,255,0.45)", fontSize: "0.6rem" }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section style={{ background: "#f2ede6", padding: "7rem 3rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p className="label-text" style={{ color: "#9d8553", marginBottom: "1.2rem" }}>WHAT WE DO</p>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, color: "#1a1714", lineHeight: 1.1, marginBottom: "4rem" }}>
            Comprehensive<br /><em style={{ fontStyle: "italic" }}>Solutions</em> Portfolio
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", borderTop: "1px solid rgba(0,0,0,0.1)" }}>
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div key={i} style={{ padding: "2.5rem 2rem", borderRight: (i + 1) % 3 !== 0 ? "1px solid rgba(0,0,0,0.1)" : "none", borderBottom: "1px solid rgba(0,0,0,0.1)", background: svc.featured ? "#1a1714" : "transparent" }}>
                  <Icon size={20} color="#9d8553" style={{ marginBottom: "1.25rem" }} />
                  <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem", fontWeight: 400, color: svc.featured ? "white" : "#3d3020", marginBottom: "0.9rem" }}>{svc.title}</h3>
                  <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.75rem", color: svc.featured ? "rgba(255,255,255,0.65)" : "#7a6a55", lineHeight: 1.8 }}>{svc.description}</p>
                  {svc.featured && <div style={{ marginTop: "1.5rem" }}><ArrowRight size={18} color="#9d8553" /></div>}
                </div>
              );
            })}
            <div style={{ padding: "2.5rem 2rem", background: "#e8e2d8", borderBottom: "1px solid rgba(0,0,0,0.1)" }} />
          </div>
          <div style={{ textAlign: "center", marginTop: "3rem" }}>
            <Link href="/services" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", color: "#9d8553", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.6rem" }}>
              VIEW ALL SERVICES <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ background: "#0e0d0c", padding: "8rem 3rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "center" }}>
          <div style={{ position: "relative" }}>
            <div style={{ width: "100%", aspectRatio: "4/5", background: "linear-gradient(160deg, #1a2535 0%, #0d1522 40%, #121a24 100%)", position: "relative", overflow: "hidden" }}>
              <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(0deg, rgba(157,133,83,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(157,133,83,0.08) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: 2, height: "60%", background: "linear-gradient(to bottom, transparent, rgba(157,133,83,0.4), transparent)" }} />
              <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)", width: "60%", height: 2, background: "linear-gradient(to right, transparent, rgba(157,133,83,0.3), transparent)" }} />
            </div>
            <div style={{ position: "absolute", bottom: "3rem", right: "-2rem", background: "#9d8553", padding: "1.5rem 2rem", textAlign: "center" }}>
              <div style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2.5rem", fontWeight: 400, color: "white", lineHeight: 1 }}>30+</div>
              <div className="label-text" style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.6rem", marginTop: "0.3rem" }}>YEARS</div>
            </div>
          </div>
          <div>
            <p className="label-text" style={{ color: "#9d8553", marginBottom: "1.2rem" }}>ABOUT LANCOR</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3.2rem)", fontWeight: 400, color: "white", lineHeight: 1.2, marginBottom: "1.5rem" }}>
              The Intrepid Handlers of<br /><em style={{ fontStyle: "italic", color: "#9d8553" }}>Technology Complexity</em>
            </h2>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.9, marginBottom: "1.25rem" }}>
              Established in 1994, Lagos Analysis Corporation (LANCOR) is a privately held company headquartered in Newton, Massachusetts. We are a professional consulting, research, and development services firm offering strategic process reengineering solutions to private and public sector clients around the world.
            </p>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "rgba(255,255,255,0.65)", lineHeight: 1.9, marginBottom: "2.5rem" }}>
              If there&apos;s a big, complicated, even messy, perhaps convoluted, and halfway-botched IT project that nobody wants to touch — we&apos;re just the right company to take over. We&apos;re terrific at problem-solving.
            </p>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: "1.5rem", marginBottom: "2.5rem" }}>
              {[{ label: "EMPHASIS", val: "Precision & Excellence" }, { label: "HEADQUARTERS", val: "Newton, MA" }, { label: "CLIENTS", val: "Global Reach" }].map((item) => (
                <div key={item.label}>
                  <p className="label-text" style={{ color: "rgba(255,255,255,0.35)", marginBottom: "0.4rem", fontSize: "0.55rem" }}>{item.label}</p>
                  <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.78rem", color: "white", fontWeight: 500 }}>{item.val}</p>
                </div>
              ))}
            </div>
            <Link href="/about" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.7rem", letterSpacing: "0.15em", color: "#9d8553", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.6rem" }}>
              LEARN MORE <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* NIN PROMO */}
      <section style={{ background: "#9d8553", padding: "8rem 3rem", position: "relative", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(45deg, rgba(0,0,0,0.04) 0px, rgba(0,0,0,0.04) 1px, transparent 1px, transparent 20px)" }} />
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "5rem", alignItems: "start", position: "relative", zIndex: 1 }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "2rem" }}>
              <Shield size={16} color="rgba(0,0,0,0.5)" />
              <span className="label-text" style={{ color: "rgba(0,0,0,0.55)", fontSize: "0.6rem" }}>NEW SERVICE — IN PARTNERSHIP WITH KNOWLEDGE SQUARE LLC</span>
            </div>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.2rem, 4vw, 3.5rem)", fontWeight: 400, color: "#1a1714", lineHeight: 1.1, marginBottom: "1.5rem" }}>
              Nigerian National <em style={{ fontStyle: "italic" }}>Identification Number</em><br />(NIN) Enrollment
            </h2>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "rgba(20,15,10,0.75)", lineHeight: 1.9 }}>
              LANCOR, in partnership with Knowledge Square LLC, offers a convenient retail NIN enrollment service for Nigerians. We facilitate the official registration process for the Nigerian Government&apos;s National Identification Number — enabling identity verification, access to government services, and digital inclusion.
            </p>
          </div>
          <div>
            <div style={{ border: "1px solid rgba(0,0,0,0.12)", padding: "2rem", marginBottom: "1.5rem", background: "rgba(0,0,0,0.06)" }}>
              {["Official NIN enrollment for Nigerian nationals", "Convenient US-based enrollment center", "Secure processing in partnership with Knowledge Square LLC", "Supports access to Nigerian government services", "Fast, professional, and confidential service"].map((item) => (
                <div key={item} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.9rem", fontFamily: "Montserrat, sans-serif", fontSize: "0.78rem", color: "rgba(20,15,10,0.8)", lineHeight: 1.6 }}>
                  <span style={{ fontSize: "0.5rem", marginTop: 5, flexShrink: 0 }}>●</span>{item}
                </div>
              ))}
            </div>
            <div style={{ display: "flex", gap: "1rem" }}>
              <a href="/nin-enrollment" className="btn-gold" style={{ background: "#1a1714", textDecoration: "none" }}>
                <Calendar size={14} /> BOOK APPOINTMENT
              </a>
              <a href="/nin-enrollment" style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.7rem", letterSpacing: "0.12em", color: "#1a1714", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: "0.6rem", border: "1px solid rgba(0,0,0,0.3)", padding: "1rem 1.5rem", fontWeight: 500 }}>
                LEARN MORE <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ position: "relative", padding: "10rem 3rem", background: "#0e1218", textAlign: "center", overflow: "hidden" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(0deg, rgba(157,133,83,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(157,133,83,0.05) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div style={{ position: "relative", zIndex: 1 }}>
          <p className="label-text" style={{ color: "#9d8553", marginBottom: "1.5rem" }}>READY TO TRANSFORM?</p>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 400, color: "white", lineHeight: 1.1 }}>
            Let&apos;s Build<br /><em style={{ fontStyle: "italic", color: "#9d8553" }}>Something Remarkable</em>
          </h2>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)", maxWidth: 560, margin: "2rem auto 3rem", lineHeight: 1.8 }}>
            We&apos;re the no-nonsense, never-say-never, super-efficient lovers of challenges. Bring us your toughest IT problems.
          </p>
          <Link href="/contact" className="btn-gold">START A CONVERSATION <ArrowRight size={14} /></Link>
        </div>
      </section>
    </>
  );
}
