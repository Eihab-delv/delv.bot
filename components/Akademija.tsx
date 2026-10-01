import Link from "next/link";
import { AKADEMIJA } from "@/lib/constants";

export default function Akademija({ showCta = true }: { showCta?: boolean }) {
  return (
    <section className="relative py-20 lg:py-28 bg-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.25em] text-neon-400 mb-4 neon-text">
          {AKADEMIJA.eyebrow}
        </p>
        <h2 className="display-heading text-4xl sm:text-5xl font-semibold text-paper mb-6">
          {AKADEMIJA.heading}
        </h2>
        <div className="grid lg:grid-cols-2 gap-10 mb-12">
          <p className="text-paper-dim leading-relaxed">{AKADEMIJA.body1}</p>
          <p className="text-paper-dim leading-relaxed">{AKADEMIJA.body2}</p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {AKADEMIJA.pillars.map((p) => (
            <div key={p.title} className="rounded-2xl glass p-6 glow-border transition-all">
              <div className="text-3xl mb-3">{p.icon}</div>
              <h3 className="font-semibold text-paper mb-2">{p.title}</h3>
              <p className="text-sm text-paper-dim leading-relaxed">{p.body}</p>
            </div>
          ))}
        </div>

        {showCta && (
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href={AKADEMIJA.cta.href}
            className="inline-flex items-center rounded-full bg-neon-500 text-ink px-6 py-3 text-sm font-semibold shadow-neon hover:bg-neon-400 transition-all"
          >
            {AKADEMIJA.cta.label}
          </Link>
          <span className="text-sm text-paper-dim">{AKADEMIJA.ctaNote}</span>
        </div>
        )}
      </div>
    </section>
  );
}
