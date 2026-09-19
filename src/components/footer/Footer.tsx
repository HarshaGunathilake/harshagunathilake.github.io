"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useLenis } from "@/components/animations/SmoothScroll";

const NAV_ITEMS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

const SOCIALS = [
  { label: "GitHub", href: "https://github.com/HarshaGunathilake" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/harsha-gunathilake5" },
  { label: "Email", href: "mailto:harshagunathilaka5@gmail.com" },
];

export default function Footer() {
  const [showTop, setShowTop] = useState(false);
  const lenis = useLenis();

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 800);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    if (lenis) lenis.scrollTo(0, { duration: 1.4 });
    else window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target && lenis) lenis.scrollTo(target as HTMLElement, { offset: -24 });
  };

  return (
    <footer className="relative bg-[var(--bg)] border-t border-[var(--border)] pt-20 pb-10">
      <div className="container-px">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-12 pb-16">
          <div>
            <p className="text-display text-3xl sm:text-4xl font-medium tracking-tight mb-4">HARSHA GUNATHILAKE</p>
            <p className="text-[var(--muted)] max-w-sm">
              Full-Stack Developer based in Sri Lanka, available for freelance projects and collaborations worldwide.
            </p>
          </div>

          <nav aria-label="Footer">
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-x-10 gap-y-3">
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={(e) => handleNavClick(e, item.href)}
                    className="text-sm text-[var(--muted)] hover:text-[var(--fg)] transition-colors duration-300"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="divider-line" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-8">
          <p className="text-xs text-[var(--muted-dim)]">
            © {new Date().getFullYear()} Harsha Gunathilake. All rights reserved.
          </p>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="text-xs text-[var(--muted)] hover:text-[var(--fg)] transition-colors duration-300"
              >
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </div>

      <motion.button
        onClick={scrollTop}
        aria-label="Back to top"
        data-cursor="text"
        data-cursor-text="TOP"
        initial={{ opacity: 0, scale: 0.8, pointerEvents: "none" }}
        animate={
          showTop
            ? { opacity: 1, scale: 1, pointerEvents: "auto" }
            : { opacity: 0, scale: 0.8, pointerEvents: "none" }
        }
        whileHover={{ rotate: 20 }}
        transition={{ duration: 0.3 }}
        className="fixed bottom-8 right-6 sm:right-10 z-[70] flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg)]/80 backdrop-blur-md hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors duration-300"
      >
        <ArrowUp size={18} />
      </motion.button>
    </footer>
  );
}
