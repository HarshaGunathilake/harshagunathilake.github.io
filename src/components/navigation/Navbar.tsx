"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import MagneticButton from "@/components/ui/MagneticButton";
import { useLenis } from "@/components/animations/SmoothScroll";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar({ onMenuToggle, menuOpen }: { onMenuToggle: () => void; menuOpen: boolean }) {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("#home");
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_ITEMS.map((i) => document.querySelector(i.href)).filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (!target) return;
    if (lenis) {
      lenis.scrollTo(target as HTMLElement, { offset: -24, duration: 1.4 });
    } else {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-[70] transition-colors duration-500",
        scrolled ? "nav-glass" : "bg-transparent"
      )}
    >
      <nav className="container-px flex items-center justify-between h-20" aria-label="Primary">
        <a
          href="#home"
          onClick={(e) => handleNavClick(e, "#home")}
          className="flex items-center"
          data-cursor="text"
          data-cursor-text="TOP"
        >
          <Image
            src="/images/logo.png"
            alt="Harsha Gunathilake"
            width={463}
            height={214}
            priority
            className="h-7 w-auto select-none"
          />
        </a>

        <ul className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <li key={item.href} className="relative">
              <a
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={cn(
                  "relative px-4 py-2 text-sm font-medium transition-colors duration-300",
                  active === item.href ? "text-[var(--fg)]" : "text-[var(--muted)] hover:text-[var(--fg)]"
                )}
              >
                {item.label}
                {active === item.href && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute left-4 right-4 -bottom-0.5 h-[1.5px] bg-[var(--accent)]"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <div className="hidden sm:block">
            <MagneticButton
              as="a"
              href="#contact"
              onClick={() => {
                const target = document.querySelector("#contact");
                if (target && lenis) lenis.scrollTo(target as HTMLElement, { offset: -24 });
              }}
              className="rounded-full border border-[var(--border-strong)] px-5 py-2.5 text-sm font-medium hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors duration-300"
              cursorLabel="TALK"
            >
              Let&apos;s Talk
            </MagneticButton>
          </div>

          <button
            onClick={onMenuToggle}
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            className="lg:hidden relative w-10 h-10 flex flex-col items-center justify-center gap-1.5"
          >
            <motion.span
              animate={menuOpen ? { rotate: 45, y: 3 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-[var(--fg)] origin-center transition-transform"
            />
            <motion.span
              animate={menuOpen ? { rotate: -45, y: -3 } : { rotate: 0, y: 0 }}
              className="block w-6 h-[1.5px] bg-[var(--fg)] origin-center transition-transform"
            />
          </button>
        </div>
      </nav>
    </header>
  );
}
