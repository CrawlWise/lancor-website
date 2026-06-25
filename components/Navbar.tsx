"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "NIN ENROLLMENT", href: "/nin-enrollment"},
  { label: "CONTACT", href: "/contact" },
];


export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-100 bg-[rgba(14,13,12,0.92)] backdrop-blur-sm border-b border-[rgba(157,133,83,0.15)] h-16 flex items-center justify-between px-12"
    >
      {/* Logo */}
      <Link href="/" className="flex items-center gap-3 no-underline">
        <div
          className="w-full h-9 flex items-center justify-center shrink-0"
        >
          <Image
            src="/logo.png"
            alt="Lancor Logo"
            width={100}
            height={50}
          />
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
              className={`font-montserrat text-[0.65rem] tracking-[0.15em] ${isActive ? "text-[#9d8553]" : "text-[rgba(255,255,255,0.8)]"} no-underline font-medium transition-colors duration-200`}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
