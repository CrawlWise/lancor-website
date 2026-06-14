import { Target, Award, Users, Globe } from "lucide-react";

export default function About() {
  return (
    <>
      {/* HERO */}
      <section style={{ position: "relative", paddingTop: 64, background: "#0e0d0c", minHeight: 420, display: "flex", alignItems: "flex-end" }}>
        <div style={{ position: "absolute", inset: 0, backgroundImage: "repeating-linear-gradient(90deg, rgba(30,40,60,0.3) 0px, rgba(30,40,60,0.3) 2px, transparent 2px, transparent 80px), repeating-linear-gradient(0deg, rgba(30,40,60,0.15) 0px, rgba(30,40,60,0.15) 1px, transparent 1px, transparent 60px)" }} />
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #0a0f15 0%, #101820 60%, #0e0d0c 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, width: "100%", margin: "0 auto", padding: "5rem 3rem 4rem" }}>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#9d8553", textTransform: "uppercase", marginBottom: "1.2rem" }}>ABOUT US</p>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(3rem, 6vw, 5rem)", fontWeight: 400, color: "white", lineHeight: 1.05 }}>
            Our <em style={{ fontStyle: "italic", color: "#9d8553" }}>Legacy</em>
          </h1>
        </div>
      </section>

      {/* OUR STORY */}
      <section style={{ background: "#f2ede6", padding: "8rem 3rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1fr", gap: "6rem" }}>
          <div>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#9d8553", textTransform: "uppercase", marginBottom: "1.2rem" }}>OUR STORY</p>
            <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 400, color: "#1a1714", lineHeight: 1.15 }}>
              Three Decades of<br /><em style={{ fontStyle: "italic" }}>Innovation</em>
            </h2>
          </div>
          <div>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "#7a6a55", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              Established in 1994, Lagos Analysis Corporation (LANCOR) is a privately held company headquartered in Newton, Massachusetts, United States. LANCOR is a professional consulting, research, and development services firm; offering strategic process reengineering solutions to private and public sector clients around the world.
            </p>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "#7a6a55", lineHeight: 1.9, marginBottom: "1.5rem" }}>
              Our emphasis is on precision, excellence, performance, and service. Our stock in trade is innovative solutions guided by over 20+ years of experience in using process reengineering and collaborating with industry-specific experts.
            </p>
            <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "#7a6a55", lineHeight: 1.9 }}>
              We have consistently enabled our clients in various industries, through collaboration with specific industry experts, to achieve substantial improvements in their operations, successful completion of projects within budget, improved operating margins, and enhanced competitiveness.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section style={{ background: "#0e0d0c", padding: "7rem 3rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#9d8553", textTransform: "uppercase", marginBottom: "1.2rem" }}>CORE VALUES</p>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, color: "white", marginBottom: "4rem" }}>
            Our <em style={{ fontStyle: "italic", color: "#9d8553" }}>Pillars</em>
          </h2>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: "1px solid rgba(157,133,83,0.2)" }}>
            {[
              { icon: Target, title: "Precision", desc: "Every solution is engineered with meticulous attention to detail." },
              { icon: Award, title: "Excellence", desc: "We set the bar high and consistently exceed expectations." },
              { icon: Users, title: "Performance", desc: "Delivering measurable results that impact the bottom line." },
              { icon: Globe, title: "Service", desc: "Global reach with a personal, dedicated approach to every client." },
            ].map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} style={{ padding: "2.5rem 2rem", borderRight: i < 3 ? "1px solid rgba(157,133,83,0.15)" : "none" }}>
                  <Icon size={22} color="#9d8553" style={{ marginBottom: "1.25rem" }} />
                  <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem", fontWeight: 400, color: "white", marginBottom: "0.9rem" }}>{v.title}</h3>
                  <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.75rem", color: "rgba(255,255,255,0.5)", lineHeight: 1.8 }}>{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section style={{ background: "#f2ede6", padding: "7rem 3rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#9d8553", textTransform: "uppercase", marginBottom: "1.2rem" }}>EXECUTIVE OFFICERS</p>
          <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 5vw, 4rem)", fontWeight: 400, color: "#1a1714", fontStyle: "italic", marginBottom: "4rem" }}>Leadership</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem" }}>
            {[
              {
                init: "A",
                name: "Adé Oyègbolá",
                title: "CHIEF EXECUTIVE OFFICER",
                bio: "A seasoned executive consultant with extensive experience using advanced technology for the analysis, design, and construction of systems that solve business problems. Expert in custom-built business process management solutions with significant project management experience including enterprise data modeling and knowledge engineering.",
              },
              {
                init: "E",
                name: "Engr. O. Walter Olúwolé",
                title: "PRESIDENT & CHIEF TECHNOLOGY OFFICER",
                bio: "A proven principal with 30+ years of experience in designing, deploying, migrating, and supporting critical multi-site data centers. Specializes in Security Systems, Systems Integration, Network Engineering, and Cloud Computing. Expert at leading complex multistage projects through their full lifecycle.",
              },
            ].map((p) => (
              <div key={p.name} style={{ border: "1px solid rgba(0,0,0,0.1)", padding: "2.5rem" }}>
                <div style={{ width: 52, height: 52, background: "rgba(157,133,83,0.15)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: "1.5rem" }}>
                  <span style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.4rem", color: "#9d8553" }}>{p.init}</span>
                </div>
                <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.5rem", fontWeight: 400, color: "#1a1714", marginBottom: "0.4rem" }}>{p.name}</h3>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.6rem", letterSpacing: "0.15em", color: "#9d8553", marginBottom: "1.25rem" }}>{p.title}</p>
                <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.78rem", color: "#7a6a55", lineHeight: 1.85 }}>{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
