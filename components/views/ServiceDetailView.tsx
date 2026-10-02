import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import SectionIntro from "../SectionIntro";
import CtaBand from "../CtaBand";
import { getContent } from "@/lib/content";
import { IMAGES, localize, type Lang } from "@/lib/site";

export default function ServiceDetailView({ lang, slug }: { lang: Lang; slug: string }) {
  const content = getContent(lang);
  const c = content.capabilities.find((x) => x.slug === slug);
  if (!c) notFound();
  const p = content.pages.services;
  const contactHref = localize(lang, "/contact?topic=delv");
  const processHeading =
    c.process.length <= 4 ? c.process.map((s) => s.title).join(" · ") : p.processHeading;

  return (
    <>
      {/* Header with image */}
      <section className="relative overflow-hidden bg-ink border-b border-ink-line">
        <Image src={IMAGES.capabilities[c.slug]} alt="" fill priority sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-ink via-ink/85 to-ink/40" />
        <div className="absolute inset-0 bg-radial-violet" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-14 lg:pt-20 lg:pb-20 animate-slide-up">
          <Link href={localize(lang, "/services")} className="text-sm text-paper-dim hover:text-neon-300">
            {p.backLabel}
          </Link>
          <p className="text-xs uppercase tracking-[0.25em] text-neon-400 mt-8 mb-4 neon-text">
            {c.number} / {p.eyebrow}
          </p>
          <h1 className="display-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-paper mb-5 max-w-4xl">
            {c.name}
          </h1>
          <p className="text-paper-dim text-lg max-w-2xl mb-8">{c.intro}</p>
          <Link
            href={contactHref}
            className="inline-flex items-center rounded-full bg-neon-500 text-ink px-6 py-3 text-sm font-semibold shadow-neon hover:bg-neon-400 transition-all"
          >
            {c.closing.cta}
          </Link>
        </div>
      </section>

      {/* Prompts */}
      <section className="py-14 bg-ink-soft border-b border-ink-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.25em] text-paper-dim mb-5">{p.startHere}</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {c.prompts.map((q) => (
              <div key={q} className="rounded-xl border border-ink-line bg-ink/60 p-4 text-sm text-paper">
                <span className="text-neon-400 me-1.5">?</span>
                {q}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Groups */}
      <section className="py-20 bg-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-14">
          {c.groups.filter((g) => g.items.length > 0).map((g) => (
            <div key={g.title}>
              <SectionIntro eyebrow={c.name} heading={g.title} body={g.summary} className="!mb-6" />
              {g.items.length > 0 && (
                <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {g.items.map((it) => (
                    <li key={it} className="rounded-xl glass px-4 py-3 text-sm text-paper flex gap-3">
                      <span className="text-neon-400">▸</span>
                      {it}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          {/* Item-less groups (e.g. robot platform types) render as cards */}
          {c.groups.some((g) => g.items.length === 0) && (
            <div className="grid md:grid-cols-3 gap-4">
              {c.groups
                .filter((g) => g.items.length === 0)
                .map((g) => (
                  <div key={g.title} className="rounded-2xl glass-violet p-6 shadow-neon-sm">
                    <h3 className="text-xl font-semibold text-paper mb-2">{g.title}</h3>
                    <p className="text-sm text-paper-dim leading-relaxed">{g.summary}</p>
                  </div>
                ))}
            </div>
          )}
        </div>
      </section>

      {/* Highlight */}
      {c.highlight && (
        <section className="py-16 bg-ink-soft border-y border-ink-line">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-2xl glass-violet shadow-neon p-8 lg:p-10 grid lg:grid-cols-2 gap-8">
              <div>
                <p className="text-xs uppercase tracking-[0.25em] text-neon-300 mb-3 neon-text">
                  {c.highlight.eyebrow}
                </p>
                <h2 className="text-3xl font-semibold text-paper mb-4">{c.highlight.title}</h2>
                <p className="text-paper-dim leading-relaxed mb-4">{c.highlight.body}</p>
                {c.highlight.note && (
                  <p className="text-xs uppercase tracking-wider text-signal-ok">{c.highlight.note}</p>
                )}
              </div>
              {c.highlight.items && (
                <ul className="space-y-2.5 self-center">
                  {c.highlight.items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm text-paper">
                      <span className="text-signal-ok">✓</span>
                      {it}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Process */}
      {c.process.length > 0 && (
        <section className="py-20 bg-ink">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <SectionIntro eyebrow={p.howWeWork} heading={processHeading} />
            <ol
              className={`grid gap-4 sm:grid-cols-2 ${
                c.process.length > 4 ? "lg:grid-cols-3" : c.process.length === 4 ? "lg:grid-cols-4" : ""
              }`}
            >
              {c.process.map((s, i) => (
                <li key={s.title} className="rounded-2xl glass p-6">
                  <span className="font-mono text-xs text-neon-300">
                    {String(i + 1).padStart(2, "0")}
                    {s.label !== String(i + 1).padStart(2, "0") && ` · ${s.label}`}
                  </span>
                  <h3 className="text-lg font-semibold text-paper mt-3 mb-2">{s.title}</h3>
                  <p className="text-sm text-paper-dim leading-relaxed">{s.body}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>
      )}

      <CtaBand
        heading={c.closing.heading}
        body={c.closing.body}
        cta={{ label: c.closing.cta, href: contactHref }}
      />
    </>
  );
}
