"use client";

import { useEffect, useRef } from "react";
import { useReducedMotion } from "@/lib/useReducedMotion";

export default function HeroBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const reduced = useReducedMotion();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || reduced) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = canvas.offsetWidth * devicePixelRatio);
    let height = (canvas.height = canvas.offsetHeight * devicePixelRatio);

    const count = Math.min(70, Math.floor((canvas.offsetWidth * canvas.offsetHeight) / 18000));
    const particles = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      r: (Math.random() * 1.4 + 0.4) * devicePixelRatio,
      vy: (Math.random() * 0.18 + 0.05) * devicePixelRatio,
      vx: (Math.random() - 0.5) * 0.06 * devicePixelRatio,
      alpha: Math.random() * 0.5 + 0.15,
    }));

    let raf = 0;
    const draw = () => {
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        p.y -= p.vy;
        p.x += p.vx;
        if (p.y < -10) p.y = height + 10;
        if (p.x < -10) p.x = width + 10;
        if (p.x > width + 10) p.x = -10;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(244, 243, 240, ${p.alpha})`;
        ctx.fill();
      });
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth * devicePixelRatio;
      height = canvas.height = canvas.offsetHeight * devicePixelRatio;
    };
    window.addEventListener("resize", handleResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", handleResize);
    };
  }, [reduced]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Base gradient */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(201,164,92,0.14), transparent 60%), linear-gradient(180deg, #0a0a0b 0%, #0d0d0f 60%, #0a0a0b 100%)",
        }}
      />

      {/* Slow moving gradient blobs */}
      <div className="absolute -top-1/4 -left-1/4 w-[60vw] h-[60vw] rounded-full bg-[var(--accent)]/[0.06] glow-blur animate-drift-slow" />
      <div className="absolute -bottom-1/3 -right-1/4 w-[50vw] h-[50vw] rounded-full bg-[var(--fg)]/[0.04] glow-blur animate-drift-slower" />

      {/* Particle canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 w-full h-full opacity-70" aria-hidden="true" />

      {/* Vignette */}
      <div
        className="absolute inset-0"
        style={{ background: "radial-gradient(ellipse 90% 70% at 50% 40%, transparent 40%, rgba(10,10,11,0.9) 100%)" }}
      />

      <style jsx>{`
        @keyframes drift-slow {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(4%, 3%) scale(1.08); }
        }
        @keyframes drift-slower {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(-3%, -4%) scale(1.05); }
        }
        .animate-drift-slow { animation: drift-slow 22s ease-in-out infinite; }
        .animate-drift-slower { animation: drift-slower 28s ease-in-out infinite; }
        @media (prefers-reduced-motion: reduce) {
          .animate-drift-slow, .animate-drift-slower { animation: none; }
        }
      `}</style>
    </div>
  );
}
