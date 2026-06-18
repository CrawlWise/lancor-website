"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "NIN ENROLLMENT", href: "/nin-enrollment" },
  { label: "CONTACT", href: "/contact" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-[100] bg-dark/92 backdrop-blur-md border-b border-gold/15 h-16 flex items-center justify-between px-12">
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 no-underline">
        <div className="w-9 h-9 border border-gold flex items-center justify-center flex-shrink-0">
          <span className="font-cormorant text-[1.1rem] text-gold font-normal">
            L
          </span>
        </div>
        <div>
          <div className="font-montserrat text-[0.95rem] font-semibold text-white tracking-[0.1em]">
            LANCOR
          </div>
          <div className="font-montserrat text-[0.55rem] text-gold tracking-[0.2em]">
            EST. 1994
          </div>
        </div>
      </Link>

      {/* Nav Links */}
      <div className="flex gap-10 items-center">
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              className={`font-montserrat text-[0.65rem] tracking-[0.15em] no-underline font-medium transition-colors duration-200 ${
                isActive ? "text-gold" : "text-white/80"
              }`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
