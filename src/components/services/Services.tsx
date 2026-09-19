"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import { services } from "@/lib/skills";
import { cn } from "@/lib/utils";

export default function Services() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="relative bg-[var(--bg)] py-28 lg:py-40" aria-label="Services">
      <div className="container-px">
        <Reveal>
          <span className="eyebrow">What I Do</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-display mt-4 mb-16 text-[10vw] sm:text-6xl lg:text-7xl font-medium tracking-tight">
            SERVICES
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 border-t border-l border-[var(--border)]">
          {services.map((service, i) => (
            <Reveal key={service.index} delay={(i % 2) * 0.05} amount={0.2} y={20}>
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                data-cursor="text"
                data-cursor-text="SERVICE"
                className={cn(
                  "group relative border-b border-r border-[var(--border)] p-8 sm:p-10 h-full transition-all duration-500",
                  hovered !== null && hovered !== i ? "opacity-45" : "opacity-100"
                )}
              >
                <div className="flex items-start justify-between mb-10">
                  <span className="text-display text-sm text-[var(--muted-dim)]">{service.index}</span>
                  <ArrowUpRight
                    size={22}
                    className="text-[var(--muted)] transition-all duration-500 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--accent)]"
                  />
                </div>
                <h3 className="text-display text-2xl sm:text-3xl font-medium tracking-tight mb-3 transition-transform duration-500 group-hover:translate-x-1">
                  {service.title}
                </h3>
                <p className="text-[var(--muted)] leading-relaxed max-w-sm mb-6">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span key={tag} className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[11px] text-[var(--muted)]">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
