"use client";

import { useEffect, useRef, useState } from "react";
import Reveal from "@/components/animations/Reveal";
import ProjectCard from "@/components/projects/ProjectCard";
import ProjectModal from "@/components/projects/ProjectModal";
import { projects, type Project } from "@/lib/projects";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { gsap } from "@/lib/gsap";

export default function SelectedWork() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  const reduced = useReducedMotion();
  const total = projects.length;

  useEffect(() => {
    if (reduced) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      const track = trackRef.current;
      const section = sectionRef.current;
      if (!track || !section) return;

      const getDistance = () => track.scrollWidth - window.innerWidth;

      const tween = gsap.to(track, {
        x: () => -getDistance(),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${getDistance() + window.innerHeight}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.min(total - 1, Math.round(self.progress * (total - 1)));
            setActive(idx);
          },
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    });

    return () => mm.revert();
  }, [reduced, total]);

  return (
    <section id="work" ref={sectionRef} className="relative bg-[var(--bg)] lg:h-screen lg:overflow-hidden">
      <div className="container-px pt-24 pb-10 lg:pb-8 flex items-end justify-between gap-6">
        <div>
          <Reveal>
            <span className="eyebrow">Portfolio</span>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="text-display mt-4 text-[10vw] sm:text-6xl lg:text-7xl font-medium tracking-tight">
              SELECTED WORK
            </h2>
          </Reveal>
        </div>
        <div className="hidden lg:flex items-center gap-2 text-sm font-medium text-[var(--muted)] tabular-nums shrink-0">
          <span className="text-[var(--fg)]">{String(active + 1).padStart(2, "0")}</span>
          <span>/</span>
          <span>{String(total).padStart(2, "0")}</span>
        </div>
      </div>

      <div
        ref={trackRef}
        className="flex flex-col gap-6 container-px pb-24 lg:pb-0 lg:flex-row lg:gap-8 lg:will-change-transform lg:px-[6rem]"
      >
        {projects.map((project) => (
          <div key={project.id} className="w-full h-[62vh] shrink-0 sm:h-[68vh] lg:h-[64vh] lg:w-[52vw]">
            <ProjectCard project={project} onOpen={setActiveProject} className="h-full" />
          </div>
        ))}
      </div>

      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} />
    </section>
  );
}
