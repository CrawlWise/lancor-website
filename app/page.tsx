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
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-[#0e1520]">
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#0d1822_0%,#16232e_30%,#1a2030_50%,#12181f_100%)]" />
        <div className="absolute inset-0 [background-image:repeating-linear-gradient(90deg,rgba(30,50,70,0.25)_0px,rgba(30,50,70,0.25)_2px,transparent_2px,transparent_80px),repeating-linear-gradient(0deg,rgba(30,50,70,0.1)_0px,rgba(30,50,70,0.1)_1px,transparent_1px,transparent_60px)]" />
        <div className="absolute right-[10%] top-[10%] w-[55%] h-[85%] bg-[radial-gradient(ellipse_at_60%_40%,rgba(180,120,50,0.12)_0%,transparent_60%)] pointer-events-none" />
        <div className="h-16" />
        <div className="relative z-[2] px-[3rem] py-[4rem] max-w-[1200px] w-full mx-auto">
          <div className="max-w-[680px]">
            <p className="label-text text-[#9d8553] mb-[2rem]">EST. 1994 — NEWTON, MASSACHUSETTS</p>
            <h1 className="font-cormorant text-[clamp(3rem,7vw,5.5rem)] font-normal leading-[1.05] text-white mb-0">
              Dynamic<br />
              <em className="text-[#9d8553] italic font-light">Technology</em><br />
              Solutions
            </h1>
            <p className="font-montserrat text-[0.85rem] text-[rgba(255,255,255,0.7)] leading-[1.8] max-w-[420px] mt-[2rem] mb-[2.5rem]">
              Professional consulting, research, and development services — offering strategic process reengineering solutions to clients around the world.
            </p>
            <div className="flex gap-4 flex-wrap">
              <Link href="/services" className="btn-gold">EXPLORE SERVICES</Link>
              <Link href="/contact" className="btn-outline">GET IN TOUCH</Link>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[2.5rem] left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-[2]">
          <span className="label-text text-[rgba(255,255,255,0.4)] text-[0.55rem]">SCROLL</span>
          <div className="text-[rgba(255,255,255,0.4)]">↓</div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-[#0e0d0c] py-[5rem] px-[3rem]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-4 text-center">
          {[{ val: "30+", label: "YEARS OF EXPERIENCE" }, { val: "20+", label: "GLOBAL CLIENTS" }, { val: "5", label: "SERVICE DOMAINS" }, { val: "100%", label: "CLIENT RETENTION" }].map((s, i) => (
            <div key={i} className={`px-[2rem] ${i < 3 ? "border-r border-[rgba(157,133,83,0.15)]" : ""}`}>
              <div className="font-cormorant text-[3.5rem] font-normal text-[#9d8553] leading-none mb-3">{s.val}</div>
              <div className="w-[30px] h-px bg-[#9d8553] mx-auto mb-3" />
              <p className="label-text text-[rgba(255,255,255,0.45)] text-[0.6rem]">{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="bg-[#f2ede6] py-[7rem] px-[3rem]">
        <div className="max-w-[1200px] mx-auto">
          <p className="label-text text-[#9d8553] mb-[1.2rem]">WHAT WE DO</p>
          <h2 className="font-cormorant text-[clamp(2.5rem,5vw,4rem)] font-normal text-[#1a1714] leading-[1.1] mb-[4rem]">
            Comprehensive<br /><em className="italic">Solutions</em> Portfolio
          </h2>
          <div className="grid grid-cols-3 border-t border-[rgba(0,0,0,0.1)]">
            {services.map((svc, i) => {
              const Icon = svc.icon;
              return (
                <div
                  key={i}
                  className={`p-[2.5rem_2rem] border-b border-[rgba(0,0,0,0.1)] ${(i + 1) % 3 !== 0 ? "border-r border-[rgba(0,0,0,0.1)]" : ""} ${svc.featured ? "bg-[#1a1714]" : "bg-transparent"}`}
                >
                  <Icon size={20} color="#9d8553" className="mb-[1.25rem]" />
                  <h3 className={`font-cormorant text-[1.4rem] font-normal mb-[0.9rem] ${svc.featured ? "text-white" : "text-[#3d3020]"}`}>{svc.title}</h3>
                  <p className={`font-montserrat text-[0.75rem] leading-[1.8] ${svc.featured ? "text-[rgba(255,255,255,0.65)]" : "text-[#7a6a55]"}`}>{svc.description}</p>
                  {svc.featured && <div className="mt-6"><ArrowRight size={18} color="#9d8553" /></div>}
                </div>
              );
            })}
            <div className="p-[2.5rem_2rem] bg-[#e8e2d8] border-b border-[rgba(0,0,0,0.1)]" />
          </div>
          <div className="text-center mt-[3rem]">
            <Link href="/services" className="font-montserrat text-[0.7rem] tracking-[0.15em] text-[#9d8553] no-underline inline-flex items-center gap-[0.6rem]">
              VIEW ALL SERVICES <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="bg-[#0e0d0c] py-[8rem] px-[3rem]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-2 gap-[5rem] items-center">
          <div className="relative">
            <div className="w-full aspect-[4/5] bg-[linear-gradient(160deg,#1a2535_0%,#0d1522_40%,#121a24_100%)] relative overflow-hidden">
              <div className="absolute inset-0 [background-image:linear-gradient(0deg,rgba(157,133,83,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(157,133,83,0.08)_1px,transparent_1px)] [background-size:40px_40px]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[2px] h-[60%] bg-[linear-gradient(to_bottom,transparent,rgba(157,133,83,0.4),transparent)]" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[2px] bg-[linear-gradient(to_right,transparent,rgba(157,133,83,0.3),transparent)]" />
            </div>
            <div className="absolute bottom-[3rem] right-[-2rem] bg-[#9d8553] p-[1.5rem_2rem] text-center">
              <div className="font-cormorant text-[2.5rem] font-normal text-white leading-none">30+</div>
              <div className="label-text text-[rgba(255,255,255,0.8)] text-[0.6rem] mt-[0.3rem]">YEARS</div>
            </div>
          </div>
          <div>
            <p className="label-text text-[#9d8553] mb-[1.2rem]">ABOUT LANCOR</p>
            <h2 className="font-cormorant text-[clamp(2rem,4vw,3.2rem)] font-normal text-white leading-[1.2] mb-6">
              The Intrepid Handlers of<br /><em className="italic text-[#9d8553]">Technology Complexity</em>
            </h2>
            <p className="font-montserrat text-[0.8rem] text-[rgba(255,255,255,0.65)] leading-[1.9] mb-5">
              Established in 1994, Lagos Analysis Corporation (LANCOR) is a privately held company headquartered in Newton, Massachusetts. We are a professional consulting, research, and development services firm offering strategic process reengineering solutions to private and public sector clients around the world.
            </p>
            <p className="font-montserrat text-[0.8rem] text-[rgba(255,255,255,0.65)] leading-[1.9] mb-[2.5rem]">
              If there&apos;s a big, complicated, even messy, perhaps convoluted, and halfway-botched IT project that nobody wants to touch — we&apos;re just the right company to take over. We&apos;re terrific at problem-solving.
            </p>
            <div className="grid grid-cols-3 gap-6 mb-[2.5rem]">
              {[{ label: "EMPHASIS", val: "Precision & Excellence" }, { label: "HEADQUARTERS", val: "Newton, MA" }, { label: "CLIENTS", val: "Global Reach" }].map((item) => (
                <div key={item.label}>
                  <p className="label-text text-[rgba(255,255,255,0.35)] mb-[0.4rem] text-[0.55rem]">{item.label}</p>
                  <p className="font-montserrat text-[0.78rem] text-white font-medium">{item.val}</p>
                </div>
              ))}
            </div>
            <Link href="/about" className="font-montserrat text-[0.7rem] tracking-[0.15em] text-[#9d8553] no-underline inline-flex items-center gap-[0.6rem]">
              LEARN MORE <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </section>

      {/* NIN PROMO */}
      <section className="bg-[#9d8553] py-[8rem] px-[3rem] relative overflow-hidden">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(45deg,rgba(0,0,0,0.04)_0px,rgba(0,0,0,0.04)_1px,transparent_1px,transparent_20px)]" />
        <div className="max-w-300 mx-auto grid grid-cols-2 gap-[5rem] items-start relative z-[1]">
          <div>
            <div className="flex items-center gap-3 mb-[2rem]">
              <Shield size={16} color="rgba(0,0,0,0.5)" />
              <span className="label-text text-[rgba(0,0,0,0.55)] text-[0.6rem]">NEW SERVICE — IN PARTNERSHIP WITH KNOWLEDGE SQUARE LLC</span>
            </div>
            <h2 className="font-cormorant text-[clamp(2.2rem,4vw,3.5rem)] font-normal text-[#1a1714] leading-[1.1] mb-6">
              Nigerian National <em className="italic">Identification Number</em><br />(NIN) Enrollment
            </h2>
            <p className="font-montserrat text-[0.8rem] text-[rgba(20,15,10,0.75)] leading-[1.9]">
              LANCOR, in partnership with Knowledge Square LLC, offers a convenient retail NIN enrollment service for Nigerians. We facilitate the official registration process for the Nigerian Government&apos;s National Identification Number — enabling identity verification, access to government services, and digital inclusion.
            </p>
          </div>
          <div>
            <div className="border border-[rgba(0,0,0,0.12)] p-[2rem] mb-6 bg-[rgba(0,0,0,0.06)]">
              {["Official NIN enrollment for Nigerian nationals", "Convenient US-based enrollment center", "Secure processing in partnership with Knowledge Square LLC", "Supports access to Nigerian government services", "Fast, professional, and confidential service"].map((item) => (
                <div key={item} className="flex gap-3 items-start mb-[0.9rem] font-montserrat text-[0.78rem] text-[rgba(20,15,10,0.8)] leading-[1.6]">
                  <span className="text-[0.5rem] mt-[5px] shrink-0">●</span>{item}
                </div>
              ))}
            </div>
            <div className="flex gap-4">
              <a href="/nin-enrollment" className="btn-gold bg-[#1a1714] no-underline">
                <Calendar size={14} /> BOOK APPOINTMENT
              </a>
              <a href="/nin-enrollment" className="font-montserrat text-[0.7rem] tracking-[0.12em] text-[#1a1714] no-underline inline-flex items-center gap-[0.6rem] border border-[rgba(0,0,0,0.3)] px-6 py-4 font-medium">
                LEARN MORE <ArrowRight size={14} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-40 px-12 bg-[#0e1218] text-center overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(157,133,83,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(157,133,83,0.05)_1px,transparent_1px)] bg-size-[60px_60px]" />
        <div className="relative z-1">
          <p className="label-text text-[#9d8553] mb-6">READY TO TRANSFORM?</p>
          <h2 className="font-cormorant text-[clamp(3rem,6vw,5rem)] font-normal text-white leading-[1.1]">
            Let&apos;s Build<br /><em className="italic text-[#9d8553]">Something Remarkable</em>
          </h2>
          <p className="font-montserrat text-[0.82rem] text-[rgba(255,255,255,0.6)] max-w-140 mx-auto mt-8 mb-12 leading-[1.8]">
            We&apos;re the no-nonsense, never-say-never, super-efficient lovers of challenges. Bring us your toughest IT problems.
          </p>
          <Link href="/contact" className="btn-gold">START A CONVERSATION <ArrowRight size={14} /></Link>
        </div>
      </section>
    </>
  );
}