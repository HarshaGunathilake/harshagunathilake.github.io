"use client";

import { GraduationCap } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import { education } from "@/lib/education";

export default function Education() {
  return (
    <section id="education" className="relative bg-[var(--bg)] py-28 lg:py-40">
      <div className="container-px">
        <Reveal>
          <span className="eyebrow">Background</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-display mt-4 mb-16 lg:mb-24 text-[10vw] sm:text-6xl lg:text-7xl font-medium tracking-tight">
            EDUCATION
          </h2>
        </Reveal>

        <ul className="flex flex-col border-t border-[var(--border)]">
          {education.map((item, i) => (
            <Reveal key={item.degree} delay={i * 0.06} amount={0.3} y={16}>
              <li className="group flex flex-col sm:flex-row sm:items-start gap-3 sm:gap-8 py-7 sm:py-8 border-b border-[var(--border)]">
                <span className="flex items-center justify-center w-11 h-11 shrink-0 rounded-full border border-[var(--border)] group-hover:border-[var(--accent)] transition-colors duration-300">
                  <GraduationCap size={18} className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors duration-300" />
                </span>

                <div className="flex-1 flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 sm:gap-8">
                  <div>
                    <h3 className="text-display text-xl sm:text-2xl font-medium tracking-tight text-[var(--fg)]">
                      {item.degree}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-[var(--muted)]">{item.institution}</p>
                  </div>
                  {item.duration && (
                    <p className="shrink-0 text-sm text-[var(--muted-dim)] sm:text-right">{item.duration}</p>
                  )}
                </div>
              </li>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
