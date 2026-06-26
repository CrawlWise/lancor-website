"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "NIN ENROLLMENT", href: "/nin-enrollment"},
  { label: "CONTACT", href: "/contact" },
];


export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-100 bg-[rgba(14,13,12,0.92)] backdrop-blur-sm border-b border-[rgba(157,133,83,0.15)] h-16 flex items-center justify-between px-4 sm:px-6 lg:px-12 ">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 no-underline">
          <div className="w-full h-9 flex items-center justify-center shrink-0">
            <Image
              src="/logo.png"
              alt="Lancor Logo"
              width={100}
              height={50}
            />
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-10">
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

        {/* Hamburger button */}
        <button
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          onClick={() => setMenuOpen((prev) => !prev)}
          className="md:hidden flex items-center justify-center p-2 rounded-md text-white"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile menu */}
      <div className={`fixed inset-x-0 top-16 bg-[rgba(14,13,12,0.98)] border-b border-[rgba(157,133,83,0.15)] transition-transform duration-200 ease-in-out md:hidden z-10 ${menuOpen ? "translate-y-0" : "-translate-y-full"}`}>
        <div className="flex flex-col gap-2 px-4 py-4">
          {navLinks.map((link) => {
            const isActive =
              link.href === "/"
                ? pathname === "/"
                : pathname.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`font-montserrat text-sm tracking-[0.15em] ${isActive ? "text-[#9d8553]" : "text-white"} no-underline font-medium py-3 border-b border-[rgba(255,255,255,0.08)]`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
