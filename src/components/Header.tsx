"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/je-suis-memoy", label: "Je suis Memoy" },
  { href: "/pour-les-patients", label: "Pour les patients" },
  { href: "/pour-les-familles", label: "Pour les familles" },
  { href: "/mon-intelligence-sensorielle", label: "Fonctionnalités" },
  { href: "/capteurs", label: "Capteurs" },
  { href: "/mode-hors-ligne", label: "Mode hors ligne" },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <div className="fixed left-0 right-0 top-6 z-50 flex w-full justify-center">
      <div className="inline-flex items-center gap-6 rounded-[50px] bg-white/10 px-6 py-4 backdrop-blur-md">
        <Link href="/" className="inline-flex items-center">
          <img
            src="/img/logo.webp"
            alt="Memoy"
            className="h-6 w-auto"
          />
        </Link>

        <nav className="hidden gap-6 text-[16px] font-medium text-white md:flex">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className="relative flex flex-col items-center transition"
                style={{
                  color: isActive ? "#FFBE5D" : undefined,
                }}
              >
                {link.label}
                {isActive && (
                  <span
                    className="absolute -bottom-2 h-[5px] w-[5px] rounded-full"
                    style={{
                      backgroundColor: "#FFBE5D",
                      boxShadow: "0 0 6px 2px rgba(255,190,93,0.7)",
                    }}
                  />
                )}
              </Link>
            );
          })}
        </nav>

        <a href="mailto:contact@memoy.app" className="ml-2 rounded-[40px] bg-white/20 px-5 py-3 text-[16px] font-medium text-white shadow-sm hover:bg-white/30 transition">
          Nous contacter
        </a>
      </div>
    </div>
  );
}
