"use client";

import { Award, ArrowUpRight, BadgeCheck } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import { certifications } from "@/lib/certifications";

export default function Certifications() {
  return (
    <section id="certifications" className="relative bg-[var(--bg)] py-28 lg:py-40">
      <div className="container-px">
        <Reveal>
          <span className="eyebrow">Credentials</span>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="text-display mt-4 mb-16 lg:mb-24 text-[10vw] sm:text-6xl lg:text-7xl font-medium tracking-tight">
            CERTIFICATIONS
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {certifications.map((cert, i) => {
            const Wrapper = cert.credentialUrl ? "a" : "div";
            const wrapperProps = cert.credentialUrl
              ? {
                  href: cert.credentialUrl,
                  target: "_blank",
                  rel: "noreferrer",
                  "data-cursor": "text",
                  "data-cursor-text": "VIEW",
                }
              : {};

            return (
              <Reveal key={cert.credentialId} delay={i * 0.08} amount={0.3}>
                <Wrapper
                  {...wrapperProps}
                  className="group flex flex-col h-full rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-7 sm:p-8 transition-all duration-300 hover:border-[var(--accent)] hover:-translate-y-1"
                >
                  <div className="flex items-start justify-between mb-6">
                    <span className="flex items-center justify-center w-11 h-11 rounded-full border border-[var(--border)] group-hover:border-[var(--accent)] transition-colors duration-300">
                      <Award size={18} className="text-[var(--muted)] group-hover:text-[var(--accent)] transition-colors duration-300" />
                    </span>
                    {cert.credentialUrl && (
                      <ArrowUpRight
                        size={18}
                        className="text-[var(--muted-dim)] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-[var(--accent)]"
                      />
                    )}
                  </div>

                  <h3 className="text-display text-xl sm:text-2xl font-medium tracking-tight text-[var(--fg)]">
                    {cert.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-[var(--muted)]">{cert.issuer}</p>

                  <div className="mt-auto pt-6 flex flex-col gap-1.5 text-xs text-[var(--muted-dim)]">
                    <span>Issued {cert.date}</span>
                    <span className="flex items-center gap-1.5">
                      <BadgeCheck size={13} className="shrink-0" />
                      Credential ID: {cert.credentialId}
                    </span>
                  </div>
                </Wrapper>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
