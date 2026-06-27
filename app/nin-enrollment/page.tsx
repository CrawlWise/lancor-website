import { MapPin, Phone, Clock, Users, CheckCircle, Calendar, Globe, Star, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";

export default function NINEnrollment() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#0e0d0c] pt-16 min-h-auto relative px-6 md:px-[3rem] pt-[calc(64px+3rem)] md:pt-[calc(64px+4rem)] pb-12 md:pb-[5rem]">
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,#0a0e14_0%,#0e0d0c_100%)]" />
        <div className="relative z-[2] max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-start">
          <div>
            <div className="flex items-center gap-[0.6rem] mb-6">
              <div className="w-2 h-2 rounded-full bg-[#4ade80]" />
              <span className="font-montserrat text-[0.6rem] tracking-[0.2em] text-[rgba(255,255,255,0.5)] uppercase">NIMC-AUTHORIZED ENROLLMENT CENTER</span>
            </div>
            <h1 className="font-cormorant text-[clamp(2.5rem,5vw,4rem)] font-normal text-white leading-[1.05] mb-6">
              Nigerian NIN<br />
              <em className="italic text-[#9d8553]">Enrollment</em><br />
              Service
            </h1>
            <p className="font-montserrat text-[0.8rem] text-[rgba(255,255,255,0.65)] leading-[1.9] mb-8">
              LANCOR, in partnership with <strong className="text-white font-medium">Knowledge Square LLC</strong>, is an officially authorized center for Nigerian National Identification Number (NIN) enrollment serving Nigerians in the Greater Boston area and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 flex-wrap">
              <a href="https://calendly.com/iqid_usa/boston" className="btn-gold justify-center"><Calendar size={14} /> BOOK APPOINTMENT</a>
              <a href="tel:+16174316200" className="btn-outline justify-center"><Phone size={14} /> CALL US</a>
            </div>
          </div>

          {/* Info card */}
          <div className="border border-[rgba(157,133,83,0.3)] p-6 md:p-[2.5rem] bg-[rgba(157,133,83,0.05)]">
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
                  <Icon size={16} color="#9d8553" className="mt-[2px] shrink-0" />
                  <div>
                    <p className="font-montserrat text-[0.55rem] tracking-[0.18em] text-[rgba(255,255,255,0.35)] mb-[0.4rem]">{item.label}</p>
                    <p className="font-montserrat text-[0.78rem] text-[rgba(255,255,255,0.75)] leading-[1.7] whitespace-pre-line">{item.val}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT IS NIN + WHY YOU NEED */}
      <section className="bg-[#f2ede6] py-14 md:py-[7rem] px-6 md:px-[3rem]">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-[5rem]">
          <div>
            <p className="font-montserrat text-[0.65rem] tracking-[0.2em] text-[#9d8553] uppercase mb-[1.2rem]">BACKGROUND</p>
            <h2 className="font-cormorant text-[clamp(2rem,4vw,3rem)] font-normal text-[#1a1714] leading-[1.15] mb-6">
              What is the <em className="italic">NIN?</em>
            </h2>
            <p className="font-montserrat text-[0.8rem] text-[#7a6a55] leading-[1.9] mb-5">
              The National Identification Number (NIN) is an 11-digit unique identifier issued by Nigeria&apos;s National Identity Management Commission (NIMC) to every Nigerian citizen and legal resident. It is the cornerstone of Nigeria&apos;s digital identity infrastructure.
            </p>
            <p className="font-montserrat text-[0.8rem] text-[#7a6a55] leading-[1.9] mb-8">
              The NIN consolidates your biometric data — fingerprints, facial image, and demographic information — into a single secure identity. It is now mandatory for most official transactions in Nigeria.
            </p>
            <blockquote className="border-l-[3px] border-[#9d8553] pl-6">
              <p className="font-cormorant italic text-[1.05rem] text-[#5a4a38] leading-[1.7]">
                &ldquo;LANCOR is listed as an official NIN enrollment center in Massachusetts by the Nigerian Government, serving the diaspora community in the United States.&rdquo;
              </p>
              <p className="text-[#5a4a38]">- NIMC OFFICIAL DIRECTORY</p>
            </blockquote>
          </div>

          <div>
            <p className="font-montserrat text-[0.65rem] tracking-[0.2em] text-[#9d8553] uppercase mb-[1.2rem]">WHY YOU NEED A NIN</p>
            <h2 className="font-cormorant text-[clamp(1.8rem,3vw,2.5rem)] font-normal text-[#9d8553] italic mb-8">
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
                  <CheckCircle size={16} color="#9d8553" className="mt-[1px] shrink-0" />
                  <span className="font-montserrat text-[0.78rem] text-[#7a6a55] leading-[1.7]">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="bg-[#0e0d0c] py-14 md:py-[7rem] px-6 md:px-[3rem]">
        <div className="max-w-[1200px] mx-auto">
          <p className="font-montserrat text-[0.65rem] tracking-[0.2em] text-[#9d8553] uppercase mb-[1.2rem]">THE PROCESS</p>
          <h2 className="font-cormorant text-[clamp(2rem,4vw,3rem)] font-normal text-white mb-10 md:mb-[4rem]">
            How It <em className="italic text-[#9d8553]">Works</em>
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Book an Appointment", desc: "Schedule your NIN enrollment appointment online via Calendly. Enrollment is by appointments only — no walk-ins." },
              { step: "02", title: "Prepare Your Documents", desc: "Bring a valid International passport, birth certificate, and NPC Digitized Certificate to your appointment." },
              { step: "03", title: "Visit Our Center", desc: "Come to our Newton, MA office at your scheduled time. Arrive on time - appointments run efficiently with minimal wait." },
              { step: "04", title: "Receive Your NIN", desc: "Your National Identification Number is issued by NIMC. We facilitate the process securely and professionally." },
            ].map((s, index, arr) => (
            <div key={s.step} className={`pt-8 ${index < arr.length - 1 ? "md:border-r md:mr-4":""} border-[rgba(157,133,83,0.3)]`}>
                <div className="font-cormorant text-[2.5rem] text-[rgba(157,133,83,0.3)] leading-none mb-5">{s.step}</div>
                <h3 className="font-cormorant text-[1.3rem] font-normal text-white mb-3">{s.title}</h3>
                <p className="font-montserrat text-[0.75rem] text-[rgba(255,255,255,0.5)] leading-[1.8]">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
        <section className="bg-[#f2ede6] py-14 md:py-[7rem] px-6 md:px-[3rem]">
          <div className="max-w-[672px] mx-auto bg-[#9d8553] p-6 md:p-[3rem]">
            <Globe size={28} color="#1a1714" className="mb-6" />
            <h2 className="font-cormorant text-[clamp(2rem,4vw,2.8rem)] font-normal text-[#1a1714] mb-6">
              Ready to Get Your NIN?
            </h2>
            <p className="font-montserrat text-[0.8rem] text-[rgba(20,15,10,0.75)] leading-[1.8] mb-10">
              Enrollment is <strong className="font-semibold">by appointment only</strong> — no walk-ins accepted. Book your slot online or call us to schedule. Our friendly staff will guide you through the entire process.
            </p>
            <div className="flex flex-col gap-4">
              
              <a href="https://calendly.com/iqid_usa/boston"
                className="bg-[#1a1714] text-white font-montserrat text-[0.75rem] tracking-widest font-semibold py-4 px-6 flex items-center justify-center gap-2 no-underline"
              >
                <Calendar size={16} /> BOOK ONLINE
              </a>
              
              <a href="tel:+16174316200"
                className="border border-[rgba(0,0,0,0.3)] text-[#1a1714] font-montserrat text-[0.75rem] tracking-widest font-semibold py-4 px-6 flex items-center justify-center gap-2 no-underline"
              >
                <Phone size={16} /> CALL +1 617.431.6200
              </a>
            </div>
            <p className="font-montserrat text-[0.6rem] tracking-[0.15em] text-[rgba(20,15,10,0.5)] mt-8 uppercase">
              In partnership with Knowledge Square LLC · NIMC Authorized
            </p>
          </div>
        </section>
        {/* GOOGLE REVIEWS */}
        {/* <section className="bg-[#0e0d0c] py-28 px-12">
          <div className="max-w-300 mx-auto">
            <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
              <div>
                <p className="font-montserrat text-[0.65rem] tracking-[0.2em] text-[#9d8553] uppercase mb-[1.2rem]">WHAT PEOPLE SAY</p>
                <h2 className="font-cormorant text-[clamp(2.2rem,4vw,3.2rem)] font-normal text-white">
                  Google <em className="italic text-[#9d8553]">Reviews</em>
                </h2>
              </div>
              <div className="flex items-center gap-6">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-cormorant text-[1.6rem] font-normal text-white">4.8</span>
                    <div className="flex gap-0.5">
                      {[1, 2, 3, 4].map((i) => (
                        <Star key={i} size={14} fill="#9d8553" color="#9d8553" />
                      ))}
                      <Star size={14} fill="none" color="#9d8553" />
                    </div>
                  </div>
                  <p className="font-montserrat text-[0.6rem] text-[rgba(255,255,255,0.4)] tracking-wider mt-1">Based on 64 reviews</p>
                </div>
                
                <a href="#"
                  className="border border-[rgba(157,133,83,0.4)] text-[#9d8553] font-montserrat text-[0.65rem] tracking-widest font-medium py-3 px-5 flex items-center gap-2 no-underline"
                >
                  <svg width="14" height="14" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                  </svg>
                  VIEW ON GOOGLE
                </a>
              </div>
            </div>

            <div className="grid grid-cols-3 border-t border-l border-[rgba(255,255,255,0.08)]">
              {[
                {
                  name: "Agu Ugwu",
                  time: "a year ago",
                  rating: 5,
                  text: "\"The Service Provider did an amazing job with NIN Enrolment. He was Professional, efficient, and exceeded my expectations. I highly recommend them.\"",
                },
                {
                  name: "Uduak Uko",
                  time: "a year ago",
                  rating: 5,
                  text: "\"The service was very quick. Mr. Ayo was very professional and very straightforward.\"",
                },
                {
                  name: "Kelvin Edosomwan",
                  time: "a year ago",
                  rating: 5,
                  text: "\"Mr Ade was courteous and informative about the process. Went fast also.\"",
                },
              ].map((r) => (
                <div key={r.name} className="border-r border-b border-[rgba(255,255,255,0.08)] p-8">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-[rgba(157,133,83,0.2)] flex items-center justify-center overflow-hidden shrink-0">
                        <span className="font-cormorant text-[1rem] text-[#9d8553]">{r.name.charAt(0)}</span>
                      </div>
                      <div>
                        <p className="font-montserrat text-[0.8rem] text-white font-medium">{r.name}</p>
                        <p className="font-montserrat text-[0.65rem] text-[rgba(255,255,255,0.4)]">{r.time}</p>
                      </div>
                    </div>
                    <svg width="16" height="16" viewBox="0 0 24 24">
                      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                    </svg>
                  </div>
                  <div className="flex gap-0.5 mb-4">
                    {Array.from({ length: r.rating }).map((_, i) => (
                      <Star key={i} size={13} fill="#9d8553" color="#9d8553" />
                    ))}
                  </div>
                  <p className="font-montserrat text-[0.8rem] text-[rgba(255,255,255,0.6)] leading-[1.7]">{r.text}</p>
                </div>
              ))}
            </div>

            <div className="flex items-center justify-between mt-10">
              <div className="flex items-center gap-4">
                <button className="w-9 h-9 border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-[rgba(255,255,255,0.4)]">
                  <ChevronLeft size={16} />
                </button>
                <span className="font-montserrat text-[0.75rem] text-[rgba(255,255,255,0.5)]">1 / 3</span>
                <button className="w-9 h-9 border border-[rgba(255,255,255,0.15)] flex items-center justify-center text-white">
                  <ChevronRight size={16} />
                </button>
              </div>
              
              <a href="#"
                className="border border-[rgba(157,133,83,0.4)] text-[#9d8553] font-montserrat text-[0.65rem] tracking-widest font-medium py-3 px-5 no-underline"
              >
                + WRITE A REVIEW
              </a>
            </div>
          </div>
        </section> */}
    </>
  );
}
