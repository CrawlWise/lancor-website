import { Target, Award, Users, Globe } from "lucide-react";

export default function About() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-16 bg-[url('/home-about.png')] bg-cover bg-center bg-no-repeat bg-[#0e0d0c] min-h-105 flex items-end">
        <div className="absolute inset-0 bg-[repeating-linear-gradient(90deg,rgba(30,40,60,0.12)_0px,rgba(30,40,60,0.12)_2px,transparent_2px,transparent_80px),repeating-linear-gradient(0deg,rgba(30,40,60,0.06)_0px,rgba(30,40,60,0.06)_1px,transparent_1px,transparent_60px)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(10,15,21,0.35)_0%,rgba(16,24,32,0.25)_60%,rgba(14,13,12,0.4)_100%)] pointer-events-none" />
        <div className="absolute inset-0 bg-black/60 pointer-events-none" />
        <div className="relative z-2 max-w-300 w-full mx-auto px-12 pt-20 pb-16">
          <p className="font-montserrat text-[0.65rem] tracking-[0.2em] text-[#9d8553] uppercase mb-[1.2rem]">ABOUT US</p>
          <h1 className="font-cormorant text-[clamp(3rem,6vw,5rem)] font-normal text-white leading-[1.05]">
            Our <em className="italic text-[#9d8553]">Legacy</em>
          </h1>
        </div>
      </section>

      {/* OUR STORY */}
      <section className="bg-[#f2ede6] py-32 px-12">
        <div className="max-w-300 mx-auto grid grid-cols-2 gap-24">
          <div>
            <p className="font-montserrat text-[0.65rem] tracking-[0.2em] text-[#9d8553] uppercase mb-[1.2rem]">OUR STORY</p>
            <h2 className="font-cormorant text-[clamp(2rem,4vw,3rem)] font-normal text-[#1a1714] leading-[1.15]">
              Three Decades of<br /><em className="italic">Innovation</em>
            </h2>
          </div>
          <div>
            <p className="font-montserrat text-[0.8rem] text-[#7a6a55] leading-[1.9] mb-6">
              Established in 1994, Lagos Analysis Corporation (LANCOR) is a privately held company headquartered in Newton, Massachusetts, United States. LANCOR is a professional consulting, research, and development services firm; offering strategic process reengineering solutions to private and public sector clients around the world.
            </p>
            <p className="font-montserrat text-[0.8rem] text-[#7a6a55] leading-[1.9] mb-6">
              Our emphasis is on precision, excellence, performance, and service. Our stock in trade is innovative solutions guided by over 20+ years of experience in using process reengineering and collaborating with industry-specific experts.
            </p>
            <p className="font-montserrat text-[0.8rem] text-[#7a6a55] leading-[1.9]">
              We have consistently enabled our clients in various industries, through collaboration with specific industry experts, to achieve substantial improvements in their operations, successful completion of projects within budget, improved operating margins, and enhanced competitiveness.
            </p>
          </div>
        </div>
      </section>

      {/* CORE VALUES */}
      <section className="bg-[#0e0d0c] py-[7rem] px-[3rem]">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-montserrat text-[0.65rem] tracking-[0.2em] text-[#9d8553] uppercase mb-[1.2rem]">CORE VALUES</p>
          <h2 className="font-cormorant text-[clamp(2.5rem,5vw,4rem)] font-normal text-white mb-[4rem]">
            Our <em className="italic text-[#9d8553]">Pillars</em>
          </h2>
          <div className="grid grid-cols-4 ">
            {[
              { icon: Target, title: "Precision", desc: "Every solution is engineered with meticulous attention to detail." },
              { icon: Award, title: "Excellence", desc: "We set the bar high and consistently exceed expectations." },
              { icon: Users, title: "Performance", desc: "Delivering measurable results that impact the bottom line." },
              { icon: Globe, title: "Service", desc: "Global reach with a personal, dedicated approach to every client." },
            ].map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className={`p-[2.5rem_2rem] ${i < 3 ? "border-r border-[rgba(157,133,83,0.15)]" : ""}`}>
                  <Icon size={22} color="#9d8553" className="mb-[1.25rem]" />
                  <h3 className="font-cormorant text-[1.4rem] font-normal text-white mb-[0.9rem]">{v.title}</h3>
                  <p className="font-montserrat text-[0.75rem] text-[rgba(255,255,255,0.5)] leading-[1.8]">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LEADERSHIP */}
      <section className="bg-[#f2ede6] py-[7rem] px-[3rem]">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-montserrat text-[0.65rem] tracking-[0.2em] text-[#9d8553] uppercase mb-[1.2rem]">EXECUTIVE OFFICERS</p>
          <h2 className="font-cormorant text-[clamp(2.5rem,5vw,4rem)] font-normal text-[#1a1714] italic mb-[4rem]">Leadership</h2>
          <div className="grid grid-cols-2 gap-[2rem]">
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
              <div key={p.name} className="border border-[rgba(0,0,0,0.1)] p-[2.5rem]">
                <div className="w-[52px] h-[52px] bg-[rgba(157,133,83,0.15)] flex items-center justify-center mb-6">
                  <span className="font-cormorant text-[1.4rem] text-[#9d8553]">{p.init}</span>
                </div>
                <h3 className="font-cormorant text-[1.5rem] font-normal text-[#1a1714] mb-[0.4rem]">{p.name}</h3>
                <p className="font-montserrat text-[0.6rem] tracking-[0.15em] text-[#9d8553] mb-[1.25rem]">{p.title}</p>
                <p className="font-montserrat text-[0.78rem] text-[#7a6a55] leading-[1.85]">{p.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}