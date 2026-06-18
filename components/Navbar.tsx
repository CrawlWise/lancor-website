"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { label: "HOME", href: "/" },
  { label: "ABOUT", href: "/about" },
  { label: "SERVICES", href: "/services" },
  { label: "CONTACT", href: "/contact" },
];


export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        background: "rgba(14,13,12,0.92)",
        backdropFilter: "blur(8px)",
        borderBottom: "1px solid rgba(157,133,83,0.15)",
        height: "64px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 3rem",
      }}
    >
      {/* Logo */}
      <Link href="/" style={{ display: "flex", alignItems: "center", gap: "0.75rem", textDecoration: "none" }}>
        <div
          style={{
            width: 36,
            height: 36,
            border: "1px solid #9d8553",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexShrink: 0,
          }}
        >
          <span
            style={{
              fontFamily: "Cormorant Garamond, serif",
              fontSize: "1.1rem",
              color: "#9d8553",
              fontWeight: 400,
            }}
          >
            L
          </span>
        </div>
        <div>
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "white",
              letterSpacing: "0.1em",
            }}
          >
            LANCOR
          </div>
          <div
            style={{
              fontFamily: "Montserrat, sans-serif",
              fontSize: "0.55rem",
              color: "#9d8553",
              letterSpacing: "0.2em",
            }}
          >
            EST. 1994
          </div>
        </div>
      </Link>

      {/* Nav Links */}
      <div style={{ display: "flex", gap: "2.5rem", alignItems: "center" }}>
        {navLinks.map((link) => {
          const isActive =
            link.href === "/"
              ? pathname === "/"
              : pathname.startsWith(link.href);
          return (
            <Link
              key={link.href}
              href={link.href}
              style={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "0.65rem",
                letterSpacing: "0.15em",
                color: isActive ? "#9d8553" : "rgba(255,255,255,0.8)",
                textDecoration: "none",
                fontWeight: 500,
                transition: "color 0.2s",
              }}
            >
              {link.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
