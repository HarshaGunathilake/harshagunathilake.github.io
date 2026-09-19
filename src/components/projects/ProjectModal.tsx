"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Code2, X } from "lucide-react";
import type { Project } from "@/lib/projects";
import { EASE } from "@/lib/utils";

export default function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  const closeBtnRef = useRef<HTMLButtonElement>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!project) return;
    document.body.style.overflow = "hidden";
    closeBtnRef.current?.focus();

    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKey);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [project, onClose]);

  if (!mounted) return null;

  return createPortal(
    <AnimatePresence>
      {project && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label={`${project.title} case study`}
          data-lenis-prevent
          className="fixed inset-0 z-[95] overflow-y-auto overscroll-contain bg-[var(--bg)]"
          initial={{ clipPath: "circle(2% at 90% 5%)", opacity: 0.6 }}
          animate={{ clipPath: "circle(150% at 90% 5%)", opacity: 1 }}
          exit={{ clipPath: "circle(2% at 90% 5%)", opacity: 0.6 }}
          transition={{ duration: 0.7, ease: EASE.power }}
        >
          <div className="grain-overlay" aria-hidden="true" />

          <button
            ref={closeBtnRef}
            onClick={onClose}
            aria-label="Close case study"
            data-cursor="text"
            data-cursor-text="CLOSE"
            className="fixed top-6 right-6 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--border-strong)] bg-[var(--bg)]/80 backdrop-blur-md hover:bg-[var(--fg)] hover:text-[var(--bg)] transition-colors duration-300"
          >
            <X size={18} />
          </button>

          <div className="container-px pt-28 pb-24">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: EASE.smooth }}
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="eyebrow" style={{ color: project.color }}>
                  {project.category}
                </span>
                <span className="h-1 w-1 rounded-full bg-[var(--muted-dim)]" />
                <span className="eyebrow">{project.year}</span>
              </div>

              <h2 className="text-display text-[11vw] sm:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95]">
                {project.title}
              </h2>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-[var(--fg)] text-[var(--bg)] px-5 py-2.5 text-sm font-semibold hover:bg-[var(--accent)] transition-colors duration-300"
                  >
                    Live Website <ArrowUpRight size={15} />
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-[var(--border-strong)] px-5 py-2.5 text-sm font-semibold hover:border-[var(--fg)] transition-colors duration-300"
                  >
                    <Code2 size={15} /> GitHub
                  </a>
                )}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 1.05 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE.smooth }}
              className="relative mt-14 aspect-[16/9] w-full overflow-hidden rounded-2xl border border-[var(--border)]"
            >
              <Image src={project.image} alt={`${project.title} showcase`} fill sizes="100vw" className="object-cover" />
            </motion.div>

            <div className="mt-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8">
              <div className="lg:col-span-7 space-y-10">
                <Block label="Overview" text={project.description} />
                <Block label="Challenge" text={project.challenge} />
                <Block label="Solution" text={project.solution} />
                <Block label="Results" text={project.results} accent={project.color} />
              </div>

              <div className="lg:col-span-4 lg:col-start-9 space-y-10">
                <div>
                  <p className="eyebrow mb-4">Technologies</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span key={t} className="rounded-full border border-[var(--border)] px-3 py-1 text-xs text-[var(--muted)]">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <p className="eyebrow mb-4">Responsibilities</p>
                  <ul className="space-y-2">
                    {project.responsibilities.map((r) => (
                      <li key={r} className="text-sm text-[var(--muted)] leading-relaxed flex gap-2">
                        <span className="text-[var(--accent)]">—</span> {r}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body
  );
}

function Block({ label, text, accent }: { label: string; text: string; accent?: string }) {
  return (
    <div>
      <p className="eyebrow mb-3" style={accent ? { color: accent } : undefined}>
        {label}
      </p>
      <p className="text-lg sm:text-xl leading-relaxed text-[var(--fg)]">{text}</p>
    </div>
  );
}
