import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-dark border-t border-gold/20 pt-20 pb-12">
      <div className="container-custom">
        <div className="grid grid-cols-[1.5fr_1fr_1fr_1.3fr] gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-9 h-9 border border-gold flex items-center justify-center">
                <span className="font-cormorant text-[1.1rem] text-gold">L</span>
              </div>
              <span className="font-montserrat text-[0.9rem] font-semibold text-white tracking-[0.1em]">LANCOR</span>
            </div>
            <p className="font-montserrat text-[0.78rem] text-white/50 leading-[1.8] mb-6">
              Dynamic Technology Solutions Provider. Precision, Excellence, Performance, and Service since 1994.
            </p>
            <div className="inline-block border border-gold/40 px-4 py-1.5">
              <span className="font-montserrat text-[0.6rem] text-gold tracking-[0.1em]">D-U-N-S # 009498669</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="label-text text-white/50 mb-6">NAVIGATION</div>
            <ul className="list-none flex flex-col gap-[0.9rem]">
              {["Home", "About", "Services", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="font-montserrat text-[0.78rem] text-white/60 no-underline transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <div className="label-text text-white/50 mb-6">SERVICES</div>
            <ul className="list-none flex flex-col gap-[0.9rem]">
              {["Software Development", "Cloud Computing", "IT Infrastructure", "Business Consulting", "Government IT"].map((s) => (
                <li key={s}>
                  <Link
                    href="/services"
                    className="font-montserrat text-[0.78rem] text-white/60 no-underline"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Headquarters */}
          <div>
            <div className="label-text text-white/50 mb-6">HEADQUARTERS</div>
            <div className="flex flex-col gap-4">
              <div className="flex gap-3 items-start">
                <MapPin size={14} className="text-gold mt-0.5 flex-shrink-0" />
                <span className="font-montserrat text-[0.75rem] text-white/60 leading-[1.7]">
                  2000 Commonwealth Ave, Suite 310<br />Newton Auburndale, MA 02466
                </span>
              </div>
              <div className="flex gap-3 items-center">
                <Phone size={14} className="text-gold flex-shrink-0" />
                <span className="font-montserrat text-[0.75rem] text-white/60">617.431.6200</span>
              </div>
              <div className="flex gap-3 items-center">
                <Mail size={14} className="text-gold flex-shrink-0" />
                <span className="font-montserrat text-[0.75rem] text-white/60">Oyegbola@lancorltd.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-white/8 flex justify-between items-center">
          <span className="font-montserrat text-[0.65rem] text-white/30">
            © 2024 Lagos Analysis Corporation. All rights reserved.
          </span>
          <span className="font-montserrat text-[0.65rem] text-white/30">
            UNGM Registration # 104496
          </span>
        </div>
      </div>
    </footer>
  );
}
