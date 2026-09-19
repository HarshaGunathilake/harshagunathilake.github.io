"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useScroll, useSpring, useTransform } from "framer-motion";
import { AlertCircle, ArrowUpRight, Briefcase, Check, Code2, Loader2, Mail, MessageCircle } from "lucide-react";
import Reveal from "@/components/animations/Reveal";
import MagneticButton from "@/components/ui/MagneticButton";
import { useReducedMotion } from "@/lib/useReducedMotion";

const CONTACT_LINKS = [
  { label: "Email", value: "harshagunathilaka5@gmail.com", href: "mailto:harshagunathilaka5@gmail.com", icon: Mail },
  { label: "LinkedIn", value: "harsha-gunathilake5", href: "https://www.linkedin.com/in/harsha-gunathilake5", icon: Briefcase },
  { label: "GitHub", value: "HarshaGunathilake", href: "https://github.com/HarshaGunathilake", icon: Code2 },
  { label: "WhatsApp", value: "+94 76 868 1740", href: "https://wa.me/94768681740", icon: MessageCircle },
];

type Status = "idle" | "loading" | "success";

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const reduced = useReducedMotion();
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start end", "end start"] });
  const headingY = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [40, -40]);
  const bgX = useTransform(scrollYProgress, [0, 1], reduced ? [0, 0] : [-30, 30]);

  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowXSpring = useSpring(glowX, { stiffness: 60, damping: 20 });
  const glowYSpring = useSpring(glowY, { stiffness: 60, damping: 20 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduced || !sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    glowX.set(e.clientX - rect.left);
    glowY.set(e.clientY - rect.top);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (status === "loading") return;

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: data.get("name")?.toString().trim() ?? "",
      email: data.get("email")?.toString().trim() ?? "",
      projectType: data.get("projectType")?.toString() ?? "",
      budget: data.get("budget")?.toString() ?? "",
      message: data.get("message")?.toString().trim() ?? "",
    };

    if (!payload.name || !payload.email || !payload.message) {
      setError("Please fill in your name, email, and message.");
      return;
    }

    setError(null);
    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const result = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(result?.error || "Failed to send your message.");
      }

      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 3200);
    } catch (err) {
      setStatus("idle");
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      onMouseMove={handleMove}
      className="relative bg-[var(--bg)] py-28 lg:py-40 overflow-hidden"
    >
      <motion.div
        style={{ x: glowXSpring, y: glowYSpring }}
        className="pointer-events-none absolute w-[36vw] h-[36vw] max-w-[520px] max-h-[520px] rounded-full bg-[var(--accent)]/[0.08] glow-blur -translate-x-1/2 -translate-y-1/2"
        aria-hidden="true"
      />
      <motion.div
        style={{ x: bgX }}
        className="pointer-events-none absolute top-1/4 -right-1/4 w-[50vw] h-[50vw] rounded-full bg-[var(--fg)]/[0.03] glow-blur"
        aria-hidden="true"
      />
      <div className="pointer-events-none absolute top-24 right-[8%] w-24 h-24 rounded-full border border-[var(--border)]" aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-32 left-[6%] w-16 h-16 rounded-full border border-[var(--border)]" aria-hidden="true" />

      <div className="container-px relative">
        <Reveal>
          <span className="eyebrow">Contact</span>
        </Reveal>

        <motion.h2
          style={{ y: headingY }}
          className="text-display mt-4 mb-16 text-[11vw] sm:text-6xl lg:text-[5.5rem] font-medium tracking-tight leading-[0.95]"
        >
          LET&apos;S BUILD
          <br />
          SOMETHING GREAT.
        </motion.h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8">
          <div className="lg:col-span-5">
            <Reveal delay={0.1}>
              <p className="text-[var(--muted)] leading-relaxed max-w-sm mb-10">
                Available for freelance projects and collaborations. Tell me about what you&apos;re
                building — I usually reply within a day.
              </p>
            </Reveal>

            <div className="flex flex-col divide-y divide-[var(--border)] border-t border-b border-[var(--border)]">
              {CONTACT_LINKS.map((link, i) => (
                <Reveal key={link.label} delay={0.15 + i * 0.06} y={16}>
                  <a
                    href={link.href}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    data-cursor="text"
                    data-cursor-text="OPEN"
                    className="group flex items-center justify-between py-5"
                  >
                    <span className="flex items-center gap-3">
                      <link.icon size={16} className="text-[var(--muted)]" />
                      <span className="text-sm text-[var(--muted)]">{link.label}</span>
                    </span>
                    <span className="flex items-center gap-2 text-[var(--fg)] font-medium">
                      {link.value}
                      <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                    </span>
                  </a>
                </Reveal>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:col-start-7">
            <Reveal delay={0.15}>
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <Field label="Name" name="name" type="text" required />
                  <Field label="Email" name="email" type="email" required />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <SelectField
                    label="Project Type"
                    name="projectType"
                    options={["Web Application", "Website", "E-commerce", "Dashboard / Admin", "API / Backend", "Other"]}
                  />
                  <SelectField
                    label="Budget"
                    name="budget"
                    options={["< $500", "$500 – $1000", "$1000 – $2000", "$2000+", "Not sure yet"]}
                  />
                </div>
                <Field label="Message" name="message" type="textarea" required />

                {error && (
                  <div className="flex items-start gap-2 text-sm text-[var(--accent)]">
                    <AlertCircle size={16} className="mt-0.5 shrink-0" />
                    <span>{error}</span>
                  </div>
                )}

                <MagneticButton
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full sm:w-auto rounded-full bg-[var(--fg)] text-[var(--bg)] px-8 py-4 text-sm font-semibold tracking-wide hover:bg-[var(--accent)] transition-colors duration-300 disabled:opacity-70"
                  cursorLabel="SEND"
                >
                  {status === "idle" && <>Send Message</>}
                  {status === "loading" && (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending
                    </>
                  )}
                  {status === "success" && (
                    <>
                      <Check size={16} /> Message Sent
                    </>
                  )}
                </MagneticButton>
              </form>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  name,
  type,
  required,
}: {
  label: string;
  name: string;
  type: "text" | "email" | "textarea";
  required?: boolean;
}) {
  return (
    <div className="group">
      <label htmlFor={name} className="mb-2 block text-xs font-medium tracking-wide text-[var(--muted)]">
        {label} {required && <span className="text-[var(--accent)]">*</span>}
      </label>
      {type === "textarea" ? (
        <textarea
          id={name}
          name={name}
          required={required}
          rows={4}
          className="w-full resize-none border-b border-[var(--border-strong)] bg-transparent py-2 text-[var(--fg)] placeholder:text-[var(--muted-dim)] outline-none transition-colors duration-300 focus:border-[var(--accent)]"
          placeholder="Tell me about your project…"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          required={required}
          className="w-full border-b border-[var(--border-strong)] bg-transparent py-2 text-[var(--fg)] placeholder:text-[var(--muted-dim)] outline-none transition-colors duration-300 focus:border-[var(--accent)]"
          placeholder={type === "email" ? "you@example.com" : "Your name"}
        />
      )}
    </div>
  );
}

function SelectField({ label, name, options }: { label: string; name: string; options: string[] }) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-medium tracking-wide text-[var(--muted)]">
        {label}
      </label>
      <select
        id={name}
        name={name}
        className="w-full appearance-none border-b border-[var(--border-strong)] bg-transparent py-2 text-[var(--fg)] outline-none transition-colors duration-300 focus:border-[var(--accent)]"
        defaultValue=""
      >
        <option value="" disabled className="bg-[var(--bg-elevated)]">
          Select…
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt} className="bg-[var(--bg-elevated)]">
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}
