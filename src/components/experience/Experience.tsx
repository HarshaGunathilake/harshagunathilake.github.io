"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Reveal from "@/components/animations/Reveal";
import { experience } from "@/lib/experience";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function Experience() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.5"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="experience" className="relative bg-[var(--bg)] py-28 lg:py-40">
      <div className="container-px">
        <Reveal>
          <span className="eyebrow">Career</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-display mt-4 mb-16 lg:mb-24 text-[10vw] sm:text-6xl lg:text-7xl font-medium tracking-tight">
            EXPERIENCE
          </h2>
        </Reveal>

        <div ref={containerRef} className="relative">
          <div className="absolute left-[7px] sm:left-[9px] top-2 bottom-2 w-px bg-[var(--border)]" aria-hidden="true" />
          <motion.div
            className="absolute left-[7px] sm:left-[9px] top-2 w-px bg-[var(--accent)] origin-top"
            style={{ height: reduced ? "100%" : lineHeight }}
            aria-hidden="true"
          />

          <ul className="flex flex-col">
            {experience.map((item) => (
              <li key={item.company} className="relative pl-10 sm:pl-14 py-8 sm:py-10 border-b border-[var(--border)] last:border-none group">
                <span className="absolute left-0 top-9 sm:top-11 w-[15px] h-[15px] sm:w-[19px] sm:h-[19px] rounded-full bg-[var(--bg)] border border-[var(--border-strong)] group-hover:border-[var(--accent)] transition-colors duration-300 flex items-center justify-center">
                  <span className="w-1.5 h-1.5 rounded-full bg-[var(--muted-dim)] group-hover:bg-[var(--accent)] transition-colors duration-300" />
                </span>

                <Reveal amount={0.4} y={20}>
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-8">
                    <div>
                      <h3 className="text-display text-2xl sm:text-3xl font-medium tracking-tight text-[var(--fg)] group-hover:text-[var(--accent)] transition-colors duration-300">
                        {item.company}
                      </h3>
                      <p className="mt-1 text-sm font-medium text-[var(--muted)]">{item.role}</p>
                    </div>
                    <div className="shrink-0 text-right">
                      <p className="text-sm text-[var(--fg)] font-medium">{item.duration}</p>
                      <p className="text-sm text-[var(--muted)]">{item.location}</p>
                    </div>
                  </div>

                  <p className="mt-4 max-w-2xl text-[var(--muted)] leading-relaxed">{item.description}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)] group-hover:border-[var(--border-strong)] transition-colors duration-300"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
