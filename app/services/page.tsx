import { Shield, Briefcase, Code2, Cloud, Network, Building2, GraduationCap, ArrowRight } from "lucide-react";

const serviceDetails = [
  {
    icon: Shield,
    title: "NIN Enrollment Service",
    description: "LANCOR, in partnership with Knowledge Square LLC, offers a convenient and official retail enrollment service for the Nigerian Government's National Identification Number (NIN). We facilitate the registration process for Nigerians residing in the United States, enabling identity verification and access to a broad range of Nigerian government services.",
    bullets: ["Official NIN enrollment for Nigerian nationals in the US", "Secure, confidential processing in partnership with Knowledge Square LLC", "Enables access to Nigerian government services & digital inclusion", "Professional, US-based enrollment center", "Appointment-based scheduling for convenience"],
    image: true,
  },
  {
    icon: Briefcase,
    title: "Business Consulting Services",
    description: "We offer a wide range of business solutions including strategic planning, viability analysis, and growth strategies. Our consulting teams work alongside your leadership to identify opportunities, mitigate risks, and build sustainable competitive advantages across industries.",
    bullets: ["Strategic planning and business analysis", "Viability and feasibility studies", "Growth and market entry strategies", "Organizational design and transformation", "Risk assessment and mitigation"],
    image: true,
  },
  {
    icon: Code2,
    title: "Software Development",
    description: "Custom-built applications and enterprise software solutions. We specialize in database design, biometrics software, and full-cycle software development life cycle (SDLC) management tailored to your specific business requirements.",
    bullets: ["Custom enterprise application development", "Database architecture and design", "Biometrics and identity software", "Full-cycle SDLC management", "System integration and API development"],
    image: false,
  },
  {
    icon: Cloud,
    title: "Cloud Computing",
    description: "End-to-end cloud strategy, implementation, and management. We help organizations migrate to the cloud, optimize cloud costs, and build resilient, scalable infrastructure for modern digital operations.",
    bullets: ["Cloud migration and adoption strategy", "Multi-cloud architecture and design", "Cloud cost optimization", "DevOps and CI/CD implementation", "Cloud security and compliance"],
    image: false,
  },
  {
    icon: Network,
    title: "IT Infrastructure",
    description: "Comprehensive data center design, network engineering, and infrastructure consulting services. We help organizations build and maintain robust, future-ready technology foundations.",
    bullets: ["Data center design and management", "Network engineering and optimization", "Multi-vendor integration", "Infrastructure assessment and roadmapping", "Disaster recovery planning"],
    image: false,
  },
  {
    icon: Building2,
    title: "Government IT",
    description: "Specialized IT consulting for government agencies. We provide process reengineering, shared services implementation, and digital transformation roadmaps aligned with government mandates and citizen service goals.",
    bullets: ["Process reengineering for public sector", "Shared services design and implementation", "Operational assessment and improvement", "Digital transformation roadmaps", "Compliance and policy alignment"],
    image: false,
  },
  {
    icon: GraduationCap,
    title: "Manpower Development",
    description: "Comprehensive training and development programs to build high-performing technology teams. From IT management to information security, we equip professionals with the skills they need to deliver results.",
    bullets: ["IT management training programs", "Information security certifications", "Project management coaching", "Performance development programs", "Leadership and organizational training"],
    image: false,
  },
];

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section style={{ background: "#0e0d0c", paddingTop: 64, minHeight: 360, display: "flex", alignItems: "flex-end", position: "relative" }}>
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, #0a0f15 0%, #101820 60%, #0e0d0c 100%)" }} />
        <div style={{ position: "relative", zIndex: 2, maxWidth: 1200, width: "100%", margin: "0 auto", padding: "5rem 3rem 4rem" }}>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.65rem", letterSpacing: "0.2em", color: "#9d8553", textTransform: "uppercase", marginBottom: "1rem" }}>OUR CAPABILITIES</p>
          <h1 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "clamp(2.5rem, 6vw, 4.5rem)", fontWeight: 400, color: "white", lineHeight: 1.05, marginBottom: "1.5rem" }}>
            <em style={{ fontStyle: "italic", color: "#9d8553" }}>Services</em> Portfolio
          </h1>
          <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.82rem", color: "rgba(255,255,255,0.6)", maxWidth: 640, lineHeight: 1.85 }}>
            Comprehensive technology solutions spanning software development, cloud computing, infrastructure, government IT, strategic business consulting — and NIN enrollment services for Nigerians.
          </p>
        </div>
      </section>

      {/* PROCESS BAND */}
      <section style={{ background: "#9d8553", padding: "2.5rem 3rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: "1rem" }}>
          <h3 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "1.6rem", fontWeight: 400, color: "#1a1714" }}>
            Business Process <em style={{ fontStyle: "italic" }}>Reengineering</em>
          </h3>
          <div style={{ display: "flex", gap: "2rem" }}>
            {["Analysis", "Design", "Development", "Implementation", "Evaluation"].map((step, i) => (
              <div key={step} style={{ display: "flex", alignItems: "center", gap: "0.5rem" }}>
                <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.6rem", color: "rgba(0,0,0,0.5)", fontWeight: 500 }}>0{i + 1}</span>
                <span style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.72rem", color: "#1a1714", fontWeight: 500 }}>{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE LISTINGS */}
      <section style={{ background: "#f2ede6", padding: "6rem 3rem" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexDirection: "column", gap: "5rem" }}>
          {serviceDetails.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div key={i} style={{ display: "grid", gridTemplateColumns: svc.image ? "1fr 1fr" : "1fr", gap: "4rem", paddingBottom: "5rem", borderBottom: i < serviceDetails.length - 1 ? "1px solid rgba(0,0,0,0.1)" : "none" }}>
                <div>
                  <Icon size={22} color="#9d8553" style={{ marginBottom: "1.25rem" }} />
                  <h2 style={{ fontFamily: "Cormorant Garamond, serif", fontSize: "2rem", fontWeight: 400, color: "#1a1714", marginBottom: "1.25rem" }}>{svc.title}</h2>
                  <p style={{ fontFamily: "Montserrat, sans-serif", fontSize: "0.8rem", color: "#7a6a55", lineHeight: 1.9, marginBottom: "1.5rem" }}>{svc.description}</p>
                  <ul style={{ listStyle: "none" }}>
                    {svc.bullets.map((b) => (
                      <li key={b} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start", marginBottom: "0.6rem", fontFamily: "Montserrat, sans-serif", fontSize: "0.75rem", color: "#9d8553" }}>
                        <span style={{ marginTop: 3, flexShrink: 0, fontSize: "0.5rem" }}>●</span><span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {svc.image && (
                  <div style={{ background: "linear-gradient(140deg, #1a2535 0%, #0d1522 60%, #121a24 100%)", position: "relative", overflow: "hidden", minHeight: 320 }}>
                    <div style={{ position: "absolute", inset: 0, backgroundImage: "linear-gradient(0deg, rgba(157,133,83,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(157,133,83,0.06) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                    <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, height: "40%", background: "linear-gradient(to top, rgba(157,133,83,0.1), transparent)" }} />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </>
  );
}
