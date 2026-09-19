"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowDown } from "lucide-react";
import SplitText from "@/components/animations/SplitText";
import MagneticButton from "@/components/ui/MagneticButton";
import HeroBackground from "@/components/hero/HeroBackground";
import { useLenis } from "@/components/animations/SmoothScroll";
import { useReducedMotion } from "@/lib/useReducedMotion";
import { gsap } from "@/lib/gsap";
import { EASE } from "@/lib/utils";

export default function Hero({ loaded }: { loaded: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bgLayerRef = useRef<HTMLDivElement>(null);
  const lenis = useLenis();
  const reduced = useReducedMotion();

  // Mouse parallax
  useEffect(() => {
    if (reduced) return;
    const el = contentRef.current;
    if (!el) return;

    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      gsap.to(el, { x: x * 14, y: y * 8, duration: 1.1, ease: "power3.out" });
      gsap.to(bgLayerRef.current, { x: x * -24, y: y * -14, duration: 1.6, ease: "power3.out" });
    };
    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, [reduced]);

  // Scroll-driven scale/fade
  useEffect(() => {
    if (reduced) return;
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top top",
          end: "bottom top",
          scrub: 1,
        },
      });
      tl.to(contentRef.current, { yPercent: -20, scale: 0.94, opacity: 0.3, ease: "none" }, 0);
      tl.to(bgLayerRef.current, { scale: 1.15, ease: "none" }, 0);
    }, sectionRef);

    return () => ctx.revert();
  }, [reduced]);

  const scrollToWork = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#work");
    if (target && lenis) lenis.scrollTo(target as HTMLElement, { offset: -24 });
  };
  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    const target = document.querySelector("#contact");
    if (target && lenis) lenis.scrollTo(target as HTMLElement, { offset: -24 });
  };

  return (
    <section
      id="home"
      ref={sectionRef}
      className="relative min-h-[100svh] flex flex-col justify-center overflow-hidden bg-[var(--bg)]"
    >
      <div ref={bgLayerRef} className="absolute inset-0 -z-10">
        <HeroBackground />
      </div>

      <div ref={contentRef} className="container-px pt-28 pb-16 will-change-transform">
        {loaded && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: EASE.smooth }}
            className="flex items-center gap-2.5 mb-8"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--accent)] opacity-60" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[var(--accent)]" />
            </span>
            <span className="eyebrow">Available For Work</span>
          </motion.div>
        )}

        {loaded && (
          <h1 className="text-display font-medium leading-[0.92] tracking-tight text-[var(--fg)] text-[13vw] sm:text-[9vw] lg:text-[7.2vw]">
            <SplitText
              text="I BUILD DIGITAL"
              delay={0.1}
              wordClassName="transition-colors duration-300 ease-out hover:text-[var(--accent)] cursor-default"
            />
            <SplitText
              text="EXPERIENCES"
              delay={0.4}
              wordClassName="transition-colors duration-300 ease-out hover:text-[var(--accent)] cursor-default"
            />
            <span className="block text-[var(--muted)]">
              <SplitText
                text="THAT PEOPLE REMEMBER."
                delay={0.7}
                wordClassName="transition-colors duration-300 ease-out hover:text-[var(--accent)] cursor-default"
              />
            </span>
          </h1>
        )}

        {loaded && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.3, ease: EASE.smooth }}
            className="mt-10 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8"
          >
            <div className="max-w-md">
              <p className="text-sm font-semibold tracking-wide text-[var(--fg)] mb-2">Full-Stack Developer</p>
              <p className="text-[var(--muted)] leading-relaxed">
                I build modern, high-performance web applications and digital experiences
                using React, Next.js, Angular, Node.js, Laravel, and modern web technologies.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              <MagneticButton
                as="a"
                href="#work"
                onClick={() => scrollToWork({ preventDefault() {} } as React.MouseEvent)}
                className="rounded-full bg-[var(--fg)] text-[var(--bg)] px-7 py-3.5 text-sm font-semibold tracking-wide hover:bg-[var(--accent)] transition-colors duration-300"
                cursorLabel="VIEW"
              >
                View My Work
              </MagneticButton>
              <MagneticButton
                as="a"
                href="#contact"
                onClick={() => scrollToContact({ preventDefault() {} } as React.MouseEvent)}
                className="rounded-full border border-[var(--border-strong)] px-7 py-3.5 text-sm font-semibold tracking-wide hover:border-[var(--fg)] transition-colors duration-300"
                cursorLabel="TALK"
              >
                Let&apos;s Talk
              </MagneticButton>
            </div>
          </motion.div>
        )}
      </div>

      {loaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        >
          <span className="eyebrow">Scroll</span>
          <motion.div
            animate={reduced ? {} : { y: [0, 10, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          >
            <ArrowDown size={16} className="text-[var(--muted)]" />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
}
