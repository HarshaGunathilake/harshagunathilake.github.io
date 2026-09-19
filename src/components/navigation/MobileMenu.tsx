"use client";

import { AnimatePresence, motion } from "framer-motion";
import { EASE } from "@/lib/utils";
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

export default function MobileMenu({ open, onClose }: { open: boolean; onClose: () => void }) {
  const lenis = useLenis();

  const handleClick = (e: React.MouseEvent, href: string) => {
    e.preventDefault();
    onClose();
    setTimeout(() => {
      const target = document.querySelector(href);
      if (target && lenis) lenis.scrollTo(target as HTMLElement, { offset: -24, duration: 1.2 });
      else target?.scrollIntoView({ behavior: "smooth" });
    }, 350);
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ clipPath: "inset(0 0 100% 0)" }}
          animate={{ clipPath: "inset(0 0 0% 0)" }}
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.6, ease: EASE.power }}
          className="fixed inset-0 z-[65] bg-[var(--bg)] flex flex-col justify-between container-px pt-28 pb-12 lg:hidden"
        >
          <div className="grain-overlay" aria-hidden="true" />
          <nav aria-label="Mobile">
            <ul className="flex flex-col gap-2">
              {NAV_ITEMS.map((item, i) => (
                <motion.li
                  key={item.href}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.15 + i * 0.06, ease: EASE.smooth }}
                >
                  <a
                    href={item.href}
                    onClick={(e) => handleClick(e, item.href)}
                    className="text-display block py-3 text-[13vw] leading-none font-medium tracking-tight text-[var(--fg)] sm:text-6xl"
                  >
                    {item.label}
                  </a>
                </motion.li>
              ))}
            </ul>
          </nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5, ease: EASE.smooth }}
            className="flex flex-wrap items-center gap-x-6 gap-y-2"
          >
            {SOCIALS.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="eyebrow hover:text-[var(--fg)] transition-colors"
              >
                {s.label}
              </a>
            ))}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
