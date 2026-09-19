import { marqueeTech } from "@/lib/skills";

function Row({ reverse = false, offset = 0 }: { reverse?: boolean; offset?: number }) {
  const rotated = [...marqueeTech.slice(offset), ...marqueeTech.slice(0, offset)];
  const items = [...rotated, ...rotated];
  return (
    <div className="marquee-row overflow-hidden">
      <div className={`marquee-track ${reverse ? "marquee-track--reverse" : ""}`}>
        {items.map((tech, i) => (
          <span
            key={`${tech}-${i}`}
            className="flex items-center gap-8 pr-8 shrink-0 text-[clamp(1.5rem,4vw,3rem)] text-display font-medium tracking-tight text-[var(--muted-dim)] hover:text-[var(--fg)] transition-colors duration-300"
          >
            {tech}
            <span className="text-[var(--border-strong)]" aria-hidden="true">
              /
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

export default function TechMarquee() {
  const half = Math.floor(marqueeTech.length / 2);
  return (
    <section className="relative bg-[var(--bg)] py-20 border-y border-[var(--border)]" aria-label="Technologies">
      <div className="flex flex-col gap-6">
        <Row />
        <Row reverse offset={half} />
      </div>
    </section>
  );
}
