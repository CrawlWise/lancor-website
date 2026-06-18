import { Shield, Briefcase, Code2, Cloud, Network, Building2, GraduationCap } from "lucide-react";

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
      <section className="bg-dark pt-16 min-h-[360px] flex items-end relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0a0f15_0%,#101820_60%,#0e0d0c_100%)]" />
        <div className="relative z-[2] container-custom pt-20 pb-16">
          <p className="font-montserrat text-[0.65rem] tracking-[0.2em] text-gold uppercase mb-4">OUR CAPABILITIES</p>
          <h1 className="font-cormorant text-[clamp(2.5rem,6vw,4.5rem)] font-normal text-white leading-[1.05] mb-6">
            <em className="italic text-gold">Services</em> Portfolio
          </h1>
          <p className="font-montserrat text-[0.82rem] text-white/60 max-w-[640px] leading-[1.85]">
            Comprehensive technology solutions spanning software development, cloud computing, infrastructure, government IT, strategic business consulting — and NIN enrollment services for Nigerians.
          </p>
        </div>
      </section>

      {/* PROCESS BAND */}
      <section className="bg-gold px-12 py-10">
        <div className="container-custom p-0 flex items-center justify-between flex-wrap gap-4">
          <h3 className="font-cormorant text-[1.6rem] font-normal text-[#1a1714]">
            Business Process <em className="italic">Reengineering</em>
          </h3>
          <div className="flex gap-8">
            {["Analysis", "Design", "Development", "Implementation", "Evaluation"].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="font-montserrat text-[0.6rem] text-black/50 font-medium">0{i + 1}</span>
                <span className="font-montserrat text-[0.72rem] text-[#1a1714] font-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE LISTINGS */}
      <section className="bg-cream section-padding pt-24 pb-24">
        <div className="container-custom p-0 flex flex-col gap-20">
          {serviceDetails.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div key={i} className={`grid ${svc.image ? "grid-cols-2" : "grid-cols-1"} gap-16 pb-20 ${i < serviceDetails.length - 1 ? "border-b border-black/10" : "border-none"}`}>
                <div>
                  <Icon size={22} className="text-gold mb-5" />
                  <h2 className="font-cormorant text-[2rem] font-normal text-[#1a1714] mb-5">{svc.title}</h2>
                  <p className="font-montserrat text-[0.8rem] text-[#7a6a55] leading-[1.9] mb-6">{svc.description}</p>
                  <ul className="list-none">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex gap-3 items-start mb-2 font-montserrat text-[0.75rem] text-gold">
                        <span className="mt-[3px] flex-shrink-0 text-[0.5rem]">●</span><span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {svc.image && (
                  <div className="bg-[linear-gradient(140deg,#1a2535_0%,#0d1522_60%,#121a24_100%)] relative overflow-hidden min-h-[320px]">
                    <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(157,133,83,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(157,133,83,0.06)_1px,transparent_1px)] bg-[length:30px_30px]" />
                    <div className="absolute bottom-0 left-0 right-0 h-[40%] bg-[linear-gradient(to_top,rgba(157,133,83,0.1),transparent)]" />
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
