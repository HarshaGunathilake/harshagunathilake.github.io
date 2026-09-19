"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/projects";

export default function ProjectCard({
  project,
  onOpen,
  className,
}: {
  project: Project;
  onOpen: (project: Project) => void;
  className?: string;
}) {
  return (
    <button
      type="button"
      onClick={() => onOpen(project)}
      data-cursor="large"
      data-cursor-text="VIEW"
      className={`group relative block w-full h-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] text-left ${className ?? ""}`}
    >
      <div className="absolute inset-0 overflow-hidden">
        <Image
          src={project.image}
          alt={`${project.title} project preview`}
          fill
          sizes="(max-width: 1024px) 90vw, 45vw"
          className="object-cover object-left scale-[1.15] transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/70 to-[var(--bg)]/10 opacity-90 transition-opacity duration-500 group-hover:opacity-95" />
        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-[var(--bg)] via-[var(--bg)]/80 to-transparent" />
      </div>

      <div className="relative h-full flex flex-col justify-between p-6 sm:p-8">
        <div className="flex items-start justify-between">
          <span className="eyebrow text-[var(--fg)]">{project.index}</span>
          <span className="eyebrow text-[var(--fg)]">{project.year}</span>
        </div>

        <div>
          <p className="eyebrow mb-2" style={{ color: project.color }}>
            {project.category}
          </p>
          <div className="flex items-end justify-between gap-4">
            <h3 className="text-display text-3xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-[var(--fg)] transition-transform duration-500 group-hover:-translate-y-1">
              {project.title}
            </h3>
            <span className="shrink-0 mb-1 flex h-11 w-11 items-center justify-center rounded-full border border-[var(--border-strong)] transition-all duration-500 group-hover:bg-[var(--fg)] group-hover:text-[var(--bg)] group-hover:rotate-45">
              <ArrowUpRight size={18} />
            </span>
          </div>
          <p className="mt-3 max-w-md text-sm text-[var(--muted)] leading-relaxed line-clamp-2">
            {project.description}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tech.slice(0, 4).map((t) => (
              <span key={t} className="rounded-full border border-[var(--border)] px-2.5 py-1 text-[11px] text-[var(--muted)]">
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </button>
  );
}
