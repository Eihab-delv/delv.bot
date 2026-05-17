import Link from "next/link";
import { ECOSYSTEM } from "@/lib/constants";

export default function EcosystemMarquee() {
  const items = [...ECOSYSTEM.companies, ...ECOSYSTEM.companies];

  return (
    <section className="relative border-y border-ink-line bg-ink-soft py-10 overflow-hidden">
      <div className="absolute inset-0 bg-radial-violet opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-xs uppercase tracking-[0.25em] text-neon-400 text-center neon-text">
          {ECOSYSTEM.sectionEyebrow}
        </p>
      </div>
      <div className="relative mask-fade-x">
        <div className="flex gap-12 animate-marquee whitespace-nowrap">
          {items.map((c, i) => (
            <Link
              key={`${c.name}-${i}`}
              href={c.href}
              className="text-xl font-semibold text-paper-dim hover:text-neon-300 transition-colors tracking-tight"
            >
              {c.name}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
