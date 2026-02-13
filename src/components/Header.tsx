"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before using pathname to avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="fixed left-0 right-0 top-6 z-50 flex w-full justify-center px-4">
        <div className="inline-flex items-center gap-6 rounded-[50px] bg-white/10 px-6 py-4 backdrop-blur-md">
          <Link href="/" className="inline-flex items-center">
            <img
              src="/img/logo.svg"
              alt="Memoy"
              className="h-6 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden gap-6 text-[16px] font-medium text-white lg:flex">
            {navLinks.map((link) => {
              const isActive = mounted && pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative flex flex-col items-center transition ${
                    isActive ? "text-[#FFBE5D]" : ""
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute -bottom-2 h-[5px] w-[5px] rounded-full bg-[#FFBE5D]"
                      style={{
                        boxShadow: "0 0 6px 2px rgba(255,190,93,0.7)",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Nous contacter – hidden on mobile */}
          <a
            href="mailto:contact@memoy.app"
            className="ml-2 hidden rounded-[40px] bg-white/20 px-5 py-3 text-[16px] font-medium text-white shadow-sm transition hover:bg-white/30 lg:inline-flex"
          >
            Nous contacter
          </a>

          {/* Burger button – visible on mobile only */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="relative ml-2 flex h-10 w-10 flex-col items-center justify-center gap-[5px] lg:hidden"
            aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          >
            <span
              className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block h-[2px] w-5 rounded-full bg-white transition-all duration-300 ${
                menuOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center bg-[#161722]/95 backdrop-blur-lg transition-all duration-300 lg:hidden ${
          menuOpen
            ? "pointer-events-auto opacity-100"
            : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex flex-col items-center gap-8">
          <Link href="/" onClick={() => setMenuOpen(false)} className="mb-4">
            <img
              src="/img/logo.svg"
              alt="Memoy"
              className="h-8 w-auto"
            />
          </Link>
          {navLinks.map((link) => {
            const isActive = mounted && pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`text-[24px] font-medium transition ${
                  isActive ? "text-[#FFBE5D]" : "text-white"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

          <a
            href="mailto:contact@memoy.app"
            className="mt-4 rounded-[40px] bg-white/20 px-6 py-3 text-[18px] font-medium text-white shadow-sm transition hover:bg-white/30"
          >
            Nous contacter
          </a>
        </nav>
      </div>
    </>
  );
}
