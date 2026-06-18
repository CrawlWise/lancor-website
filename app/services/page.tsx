import { Shield, ShieldCheck, Briefcase, Code2, Cloud, Network, Building2, GraduationCap, ArrowRight } from "lucide-react";

const serviceDetails = [
  {
    icon: ShieldCheck,
    title: "NIN Enrollment Service",
    description: "LANCOR, in partnership with Knowledge Square LLC, offers a convenient and official retail enrollment service for the Nigerian Government's National Identification Number (NIN). We facilitate the registration process for Nigerians residing in the United States, enabling identity verification and access to a broad range of Nigerian government services.",
    bullets: ["Official NIN enrollment for Nigerian nationals in the US", "Secure, confidential processing in partnership with Knowledge Square LLC", "Enables access to Nigerian government services & digital inclusion", "Professional, US-based enrollment center", "Appointment-based scheduling for convenience"],
    image: true,
  },
  {
    icon: Briefcase,
    title: "Business Consulting Services",
    description: "We offer a wide range of business solutions including business opportunities and risk management, to meet the needs of clients in a professional and procedural manner Services are provided for supporting investment decisions to maximize returns or minimize risks",
    bullets: ["Strategic planning and Business Planning", "Sales and Marketing Model Development", "Viability Analysis & Growth Strategy", "Infrastructure Requirement Analysis", "Implementation Strategy & Process Management"],
    image: true,
  },
  {
    icon: Code2,
    title: "Software Application Development",
    description: "LANCOR offers custom software application development services built to fit into your environment with minimal disruption. We begin every product development cycle with a thorough analysis of your business and specific requirements, following our Standard Software Development Life Cycle (SDLC).",
    bullets: ["Custom End-to-End Solution Development", "Database Design & Development", "Biometrics Software Development", "Records & Document Management Systems", "Quality Assurance & Parallel Testing"],
    image: true,
  },
  {
    icon: Cloud,
    title: "Cloud Computing Services",
    description: "LANCOR helps you understand Cloud Computing solutions and apply them effectively to deliver real-world solutions to your organization. Our services can be leveraged specifically towards implementation and/or management of a Cloud Computing solution.",
    bullets: ["Requirements Analysis for Cloud Readiness", "Cloud Service Assessment & Selection", "Design, Implementation & Integration", "Management & Monitoring of Cloud Solutions", "Future-Proof Infrastructure Strategy"],
    image: true,
  },
  {
    icon: Network,
    title: "IT Infrastructure Services",
    description: "Our Infrastructure Consulting team consists of professional consultants with every member having a minimum of 10 years of experience. We support companies in all stages of challenging IT projects, helping them plan and optimize infrastructure with lasting effect.",
    bullets: ["Data Centre & Infrastructure Architecture", "Network Design & Multi-Vendor Integration","Virtualization (Xen, VMWare, HyperV, OVM)", "Network Audit & Performance Optimization", "Turn-key Installation & Commissioning"],
    image: true,
  },
  {
    icon: Building2,
    title: "Government IT Solutions",
    description: "LANCOR helps government clients improve existing processes and implement new ones. As a prime contractor, we have the depth of resources and range of experience needed to help build business cases for change and lead all aspects of agency process re-engineering.",
    bullets: ["Operational Assessment & Process Improvement", "Organizational Assessment & Design", "Transformation Roadmaps", "Shared Services Capability Design", "Performance & Quality Metrics Implementation"],
    image: true,
  },
  {
    icon: GraduationCap,
    title: "Manpower Development Services",
    description: "LANCOR's training program is uniquely positioned to prepare organizations and individuals with strategic and tactical responsibilities. Our trainers help organizations expand their purview of business and industry without abandoning core IT responsibilities.",
    bullets: ["IT Management & Frameworks Training", "Project Management Certification Prep", "Information Security Management", "Performance Coaching & Strategy Sessions", "HR, Entrepreneurship & Conflict Resolution"],
    image: true,
  },
];

export default function Services() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0e0d0c] pt-16 min-h-[360px] flex items-end relative">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0a0f15_0%,#101820_60%,#0e0d0c_100%)]" />
        <div className="relative z-[2] max-w-[1200px] w-full mx-auto px-[3rem] pt-[5rem] pb-[4rem]">
          <p className="font-montserrat text-[0.65rem] tracking-[0.2em] text-[#9d8553] uppercase mb-4">OUR CAPABILITIES</p>
          <h1 className="font-cormorant text-[clamp(2.5rem,6vw,4.5rem)] font-normal text-white leading-[1.05] mb-6">
            <em className="italic text-[#9d8553]">Services</em> Portfolio
          </h1>
          <p className="font-montserrat text-[0.82rem] text-[rgba(255,255,255,0.6)] max-w-[640px] leading-[1.85]">
            Comprehensive technology solutions spanning software development, cloud computing, infrastructure, government IT, strategic business consulting — and NIN enrollment services for Nigerians.
          </p>
        </div>
      </section>

      {/* PROCESS BAND */}
      <section className="bg-[#9d8553] py-[2.5rem] px-[3rem]">
        <div className="max-w-[1200px] mx-auto flex items-center justify-between flex-wrap gap-4">
          <h3 className="font-cormorant text-[1.6rem] font-normal text-[#1a1714]">
            Business Process <em className="italic">Reengineering</em>
          </h3>
          <div className="flex gap-8">
            {["Analysis", "Design", "Development", "Implementation", "Evaluation"].map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="font-montserrat text-[0.6rem] text-[rgba(0,0,0,0.5)] font-medium">0{i + 1}</span>
                <span className="font-montserrat text-[0.72rem] text-[#1a1714] font-medium">{step}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE LISTINGS */}
      <section className="bg-[#f2ede6] py-[6rem] px-[3rem]">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-[5rem]">
          {serviceDetails.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <div
                key={i}
                className={`grid ${svc.image ? "grid-cols-2" : "grid-cols-1"} gap-16 pb-[5rem] ${i < serviceDetails.length - 1 ? "border-b border-[rgba(0,0,0,0.1)]" : ""}`}
              >
                <div>
                  <Icon size={22} color="#9d8553" className="mb-[1.25rem]" />
                  <h2 className="font-cormorant text-[2rem] font-normal text-[#1a1714] mb-[1.25rem]">{svc.title}</h2>
                  <p className="font-montserrat text-[0.8rem] text-[#7a6a55] leading-[1.9] mb-6">{svc.description}</p>
                  <ul className="list-none">
                    {svc.bullets.map((b) => (
                      <li key={b} className="flex gap-3 items-start mb-[0.6rem] font-montserrat text-[0.75rem] text-[#9d8553]">
                        <span className="mt-[3px] shrink-0 text-[0.5rem]">●</span><span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                {svc.image && (
                  <div className="bg-[linear-gradient(140deg,#1a2535_0%,#0d1522_60%,#121a24_100%)] relative overflow-hidden min-h-[320px]">
                    <div className="absolute inset-0 [background-image:linear-gradient(0deg,rgba(157,133,83,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(157,133,83,0.06)_1px,transparent_1px)] [background-size:30px_30px]" />
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