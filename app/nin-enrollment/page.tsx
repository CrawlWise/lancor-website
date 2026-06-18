import { MapPin, Phone, Clock, Users, CheckCircle, Calendar } from "lucide-react";
import Link from "next/link";

export default function NINEnrollment() {
  return (
    <>
      {/* HERO */}
      <section className="bg-dark pt-16 min-h-auto relative px-12 py-16 pt-[calc(64px+4rem)] pb-20">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0a0e14_0%,#0e0d0c_100%)]" />
        <div className="relative z-[2] container-custom p-0 grid grid-cols-2 gap-16 items-start">
          <div>
            <div className="flex items-center gap-[0.6rem] mb-6">
              <div className="w-2 h-2 rounded-full bg-[#4ade80]" />
              <span className="font-montserrat text-[0.6rem] tracking-[0.2em] text-white/50 uppercase">NIMC-AUTHORIZED ENROLLMENT CENTER</span>
            </div>
            <h1 className="font-cormorant text-[clamp(2.5rem,5vw,4rem)] font-normal text-white leading-[1.05] mb-6">
              Nigerian NIN<br />
              <em className="italic text-gold">Enrollment</em><br />
              Service
            </h1>
            <p className="font-montserrat text-[0.8rem] text-white/65 leading-[1.9] mb-8">
              LANCOR, in partnership with <strong className="text-white font-medium">Knowledge Square LLC</strong>, is an officially authorized center for Nigerian National Identification Number (NIN) enrollment serving Nigerians in the Greater Boston area and beyond.
            </p>
            <div className="flex gap-4 flex-wrap">
              <a href="#" className="btn-gold"><Calendar size={14} /> BOOK APPOINTMENT</a>
              <a href="tel:+16174316200" className="btn-outline"><Phone size={14} /> CALL US</a>
            </div>
          </div>

          {/* Info card */}
          <div className="border border-gold/30 p-10 bg-gold/5">
            <h3 className="font-cormorant text-[1.5rem] font-normal text-white mb-8">Enrollment Center Details</h3>
            {[
              { icon: MapPin, label: "LOCATION", val: "2000 Commonwealth Ave, Suite 310\nNewton Auburndale, MA 02466" },
              { icon: Phone, label: "PHONE", val: "+1 617.431.6200" },
              { icon: Clock, label: "HOURS", val: "Monday – Friday: 9:00 AM – 6:00 PM EST\nBy Appointment Only — No Walk-ins" },
              { icon: Users, label: "PARTNERSHIP", val: "Knowledge Square LLC\nNIMC Authorized Partner" },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex gap-4 items-start mb-7">
                  <Icon size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-montserrat text-[0.55rem] tracking-[0.18em] text-white/35 mb-1.5">{item.label}</p>
                    <p className="font-montserrat text-[0.78rem] text-white/75 leading-[1.7] whitespace-pre-line">{item.val}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT IS NIN + WHY YOU NEED */}
      <section className="bg-cream section-padding">
        <div className="container-custom p-0 grid grid-cols-2 gap-20">
          <div>
            <p className="font-montserrat text-[0.65rem] tracking-[0.2em] text-gold uppercase mb-[1.2rem]">BACKGROUND</p>
            <h2 className="font-cormorant text-[clamp(2rem,4vw,3rem)] font-normal text-[#1a1714] leading-[1.15] mb-6">
              What is the <em className="italic">NIN?</em>
            </h2>
            <p className="font-montserrat text-[0.8rem] text-[#7a6a55] leading-[1.9] mb-5">
              The National Identification Number (NIN) is an 11-digit unique identifier issued by Nigeria&apos;s National Identity Management Commission (NIMC) to every Nigerian citizen and legal resident. It is the cornerstone of Nigeria&apos;s digital identity infrastructure.
            </p>
            <p className="font-montserrat text-[0.8rem] text-[#7a6a55] leading-[1.9] mb-8">
              The NIN consolidates your biometric data — fingerprints, facial image, and demographic information — into a single secure identity. It is now mandatory for most official transactions in Nigeria.
            </p>
            <blockquote className="border-l-[3px] border-gold pl-6">
              <p className="font-cormorant italic text-[1.05rem] text-[#5a4a38] leading-[1.7]">
                &ldquo;LANCOR is listed as an official NIN enrollment center in the United States.&rdquo;
              </p>
            </blockquote>
          </div>

          <div>
            <p className="font-montserrat text-[0.65rem] tracking-[0.2em] text-gold uppercase mb-[1.2rem]">WHY YOU NEED A NIN</p>
            <h2 className="font-cormorant text-[clamp(1.8rem,3vw,2.5rem)] font-normal text-gold italic mb-8">
              Essential for Every Nigerian
            </h2>
            <div className="flex flex-col gap-4">
              {[
                "Required for Nigerian passport renewal and issuance",
                "Mandatory for SIM card registration in Nigeria",
                "Needed for bank account operations in Nigeria",
                "Access to Nigerian government services and benefits",
                "Required for voter registration (PVC)",
                "Essential for tax identification and financial transactions",
              ].map((item) => (
                <div key={item} className="flex gap-3 items-start">
                  <CheckCircle size={16} className="text-gold mt-0.5 flex-shrink-0" />
                  <span className="font-montserrat text-[0.78rem] text-[#7a6a55] leading-[1.7]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-dark section-padding">
        <div className="container-custom p-0">
          <p className="font-montserrat text-[0.65rem] tracking-[0.2em] text-gold uppercase mb-[1.2rem]">ENROLLMENT PROCESS</p>
          <h2 className="font-cormorant text-[clamp(2rem,4vw,3rem)] font-normal text-white mb-16">
            How It <em className="italic text-gold">Works</em>
          </h2>
          <div className="grid grid-cols-4 gap-8">
            {[
              { step: "01", title: "Book Appointment", desc: "Schedule your enrollment session online or by phone. Appointments are required — no walk-ins." },
              { step: "02", title: "Gather Documents", desc: "Bring your Nigerian passport, birth certificate, or other valid Nigerian identity documents." },
              { step: "03", title: "Biometric Capture", desc: "Your fingerprints, photograph, and demographic information are captured securely on-site." },
              { step: "04", title: "NIN Issued", desc: "Your NIN is issued by NIMC and you receive your enrollment slip. Processing takes 2–4 weeks." },
            ].map((s) => (
              <div key={s.step} className="pt-8 border-t border-gold/30">
                <div className="font-cormorant text-[2.5rem] text-gold/30 leading-none mb-5">{s.step}</div>
                <h3 className="font-cormorant text-[1.3rem] font-normal text-white mb-3">{s.title}</h3>
                <p className="font-montserrat text-[0.75rem] text-white/50 leading-[1.8]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gold section-padding text-center">
        <p className="font-montserrat text-[0.65rem] tracking-[0.2em] text-black/50 uppercase mb-[1.2rem]">GET STARTED TODAY</p>
        <h2 className="font-cormorant text-[clamp(2rem,4vw,3.5rem)] font-normal text-[#1a1714] mb-6">
          Book Your Enrollment <em className="italic">Appointment</em>
        </h2>
        <p className="font-montserrat text-[0.8rem] text-black/60 max-w-[480px] mx-auto mb-10 leading-[1.8]">
          Appointments are available Monday through Friday, 9:00 AM – 6:00 PM EST. Contact us to schedule your visit.
        </p>
        <div className="flex gap-4 justify-center">
          <a href="#" className="btn-gold bg-[#1a1714]"><Calendar size={14} /> BOOK APPOINTMENT</a>
          <Link href="/contact" className="font-montserrat text-[0.7rem] tracking-[0.12em] text-[#1a1714] no-underline inline-flex items-center gap-[0.6rem] border border-black/30 px-7 py-4 font-medium">CONTACT US</Link>
        </div>
      </section>
    </>
  );
}
