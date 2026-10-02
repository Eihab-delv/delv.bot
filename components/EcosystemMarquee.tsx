import Link from "next/link";
import { getContent } from "@/lib/content";
import { localize, type Lang } from "@/lib/site";

export default function EcosystemMarquee({ lang }: { lang: Lang }) {
  const m = getContent(lang).marquee;
  const items = [...m.items, ...m.items];

  return (
    <section className="relative border-y border-ink-line bg-ink-soft py-10 overflow-hidden">
      <div className="absolute inset-0 bg-radial-violet opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-6">
        <p className="text-xs uppercase tracking-[0.25em] text-neon-400 text-center neon-text">{m.eyebrow}</p>
      </div>
      <div dir="ltr" className="relative mask-fade-x">
        <div className="flex gap-12 animate-marquee whitespace-nowrap w-max">
          {items.map((c, i) => (
            <Link
              key={`${c.label}-${i}`}
              href={localize(lang, c.href)}
              aria-hidden={i >= m.items.length ? true : undefined}
              tabIndex={i >= m.items.length ? -1 : undefined}
              className="text-xl font-semibold text-paper-dim hover:text-neon-300 transition-colors tracking-tight"
            >
              {c.label}
              <span className="ms-12 text-neon-500/60" aria-hidden="true">✦</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
