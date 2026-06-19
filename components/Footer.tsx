import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#0e0d0c] border-t border-[rgba(157,133,83,0.2)] py-[5rem_0_3rem] pt-20 pb-12">
      <div className="max-w-300 mx-auto px-12">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1.3fr] gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Image
                src="/logo.png"
                alt="Lancor Logo"
                width={100}
                height={50}
              />
            </div>
            <p className="font-montserrat text-[0.78rem] text-[rgba(255,255,255,0.5)] leading-[1.8] mb-6">
              Dynamic Technology Solutions Provider. Precision, Excellence, Performance, and Service since 1994.
            </p>
            <div className="inline-block border border-[rgba(157,133,83,0.4)] px-4 py-[0.4rem]">
              <span className="font-montserrat text-[0.6rem] text-[#9d8553] tracking-widest">D-U-N-S # 009498669</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="label-text text-[rgba(255,255,255,0.5)] mb-6">NAVIGATION</div>
            <ul className="list-none flex flex-col gap-[0.9rem]">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="font-montserrat text-[0.78rem] text-[rgba(255,255,255,0.6)] no-underline transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="label-text text-[rgba(255,255,255,0.5)] mb-6">SERVICES</div>
            <ul className="list-none flex flex-col gap-[0.9rem]">
              {["Software Development", "Cloud Computing", "IT Infrastructure", "Business Consulting", "Government IT"].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="font-montserrat text-[0.78rem] text-[rgba(255,255,255,0.6)] no-underline"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Headquarters */}
          <div>
            <div className="label-text text-[rgba(255,255,255,0.5)] mb-6">HEADQUARTERS</div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <MapPin size={14} color="#9d8553" className="mt-[2px] shrink-0" />
                <span className="font-montserrat text-[0.75rem] text-[rgba(255,255,255,0.6)] leading-[1.7]">
                  2000 Commonwealth Ave, Suite 310<br />Newton Auburndale, MA 02466
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={14} color="#9d8553" className="shrink-0" />
                <span className="font-montserrat text-[0.75rem] text-[rgba(255,255,255,0.6)]">617.431.6200</span>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={14} color="#9d8553" className="shrink-0" />
                <span className="font-montserrat text-[0.75rem] text-[rgba(255,255,255,0.6)]">Oyegbola@lancorltd.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.08)] flex justify-between items-center">
          <span className="font-montserrat text-[0.65rem] text-[rgba(255,255,255,0.3)]">
            © 2024 Lagos Analysis Corporation. All rights reserved.
          </span>
          <span className="font-montserrat text-[0.65rem] text-[rgba(255,255,255,0.3)]">
            UNGM Registration # 104496
          </span>
        </div>
      </div>
    </footer>
  );
}