import Link from "next/link";
import SectionIntro from "../SectionIntro";
import NashmiBot from "./NashmiBot";
import { getContent } from "@/lib/content";
import { localize, type Lang } from "@/lib/site";

const btnPrimary =
  "inline-flex items-center rounded-full bg-neon-500 text-ink px-6 py-3 text-sm font-semibold shadow-neon hover:bg-neon-400 transition-all";

/** "Meet Nashmi" — intro with the illustrated robot. */
export function NashmiIntro({ lang, showCta = true }: { lang: Lang; showCta?: boolean }) {
  const n = getContent(lang).nashmi;
  return (
    <section className="relative py-20 lg:py-28 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-radial-violet-bl opacity-60" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <SectionIntro eyebrow={n.intro.eyebrow} heading={n.intro.heading} className="!mb-6" />
          <div className="space-y-4 text-paper-dim text-lg leading-relaxed">
            {n.intro.body.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          {showCta && (
            <div className="mt-8">
              <Link href={localize(lang, n.intro.cta.href)} className={btnPrimary}>
                {n.intro.cta.label}
              </Link>
            </div>
          )}
        </div>
        <div className="flex justify-center">
          <NashmiBot className="w-full max-w-sm" label={n.page.title} />
        </div>
      </div>
    </section>
  );
}

/** Six ways Nashmi helps. `detailed` adds the bullet points and anchors. */
export function WaysGrid({ lang, detailed = false }: { lang: Lang; detailed?: boolean }) {
  const w = getContent(lang).nashmi.ways;
  return (
    <section className="relative py-20 lg:py-28 bg-ink-soft border-y border-ink-line">
      <div className="absolute inset-0 bg-radial-violet opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={w.eyebrow} heading={w.heading} body={w.body} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {w.items.map((item, i) => (
            <div
              key={item.key}
              id={item.key}
              className={`scroll-mt-24 rounded-2xl p-6 glow-border transition-all ${i === 0 ? "glass-violet shadow-neon-sm" : "glass"}`}
            >
              <div className="text-3xl mb-3" aria-hidden="true">{item.icon}</div>
              <h3 className="text-lg font-semibold text-paper mb-2">{item.title}</h3>
              <p className="text-sm text-paper-dim leading-relaxed">{item.body}</p>
              {detailed && (
                <ul className="mt-4 space-y-2">
                  {item.points.map((p) => (
                    <li key={p} className="flex gap-2.5 text-sm text-paper">
                      <span className="text-neon-400">▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Education spotlight on the home page. */
export function EducationSpotlight({ lang }: { lang: Lang }) {
  const e = getContent(lang).nashmi.education;
  return (
    <section className="relative py-20 lg:py-28 bg-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl glass-violet shadow-neon p-8 lg:p-12 grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <SectionIntro eyebrow={e.eyebrow} heading={e.heading} body={e.body} className="!mb-0" />
            <div className="mt-8">
              <Link href={localize(lang, e.cta.href)} className={btnPrimary}>
                {e.cta.label}
              </Link>
            </div>
          </div>
          <ul className="grid sm:grid-cols-2 gap-3">
            {e.points.map((p, i) => (
              <li key={p} className="rounded-2xl bg-ink/60 border border-ink-line p-5">
                <span className="font-mono text-xs text-neon-300">{String(i + 1).padStart(2, "0")}</span>
                <p className="text-paper mt-2 leading-snug">{p}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Real statistics (WHO, UNICEF) with sources. */
export function ImpactStats({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const im = c.nashmi.impact;
  return (
    <section className="relative py-20 lg:py-24 bg-ink-soft border-y border-ink-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={im.eyebrow} heading={im.heading} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {im.stats.map((s) => (
            <div key={s.label} className="rounded-2xl glass p-6 flex flex-col">
              <div className="text-4xl font-semibold text-paper mb-3"><bdi dir="ltr">{s.value}</bdi></div>
              <p className="text-sm text-paper-dim leading-relaxed mb-4">{s.label}</p>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="mt-auto text-xs text-neon-300 hover:text-neon-400">
                {c.common.source}: {s.source} ↗
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Listen → Personalise → Support → Learn & improve. */
export function HowItWorks({ lang }: { lang: Lang }) {
  const h = getContent(lang).nashmi.how;
  return (
    <section className="relative py-20 lg:py-24 bg-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={h.eyebrow} heading={h.heading} />
        <ol className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {h.steps.map((s, i) => (
            <li key={s.title} className="relative rounded-2xl glass p-6">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-neon-400 to-neon-700 text-ink font-bold mb-4 shadow-[0_0_18px_rgba(168,85,247,0.5)]">
                {i + 1}
              </span>
              <h3 className="text-lg font-semibold text-paper mb-2">{s.title}</h3>
              <p className="text-sm text-paper-dim leading-relaxed">{s.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

/** Six design principles. */
export function Principles({ lang }: { lang: Lang }) {
  const p = getContent(lang).nashmi.principles;
  return (
    <section className="relative py-20 lg:py-24 bg-ink-soft border-y border-ink-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={p.eyebrow} heading={p.heading} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {p.items.map((it, i) => (
            <div key={it.title} className="rounded-2xl glass p-6">
              <span className="font-mono text-xs text-neon-300">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-lg font-semibold text-paper mt-2 mb-2">{it.title}</h3>
              <p className="text-sm text-paper-dim leading-relaxed">{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** The three Nashmi robots. */
export function RobotFamily({ lang }: { lang: Lang }) {
  const r = getContent(lang).nashmi.robots;
  return (
    <section className="relative py-20 lg:py-28 bg-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={r.eyebrow} heading={r.heading} body={r.body} />
        <div className="grid md:grid-cols-3 gap-5">
          {r.items.map((bot, i) => (
            <article key={bot.name} className={`rounded-2xl p-7 flex flex-col ${i === 0 ? "glass-violet shadow-neon" : "glass"}`}>
              <span
                className={`self-start rounded-full px-3 py-1 text-[11px] font-semibold ${
                  i === 0 ? "bg-signal-ok/15 text-signal-ok border border-signal-ok/30" : "bg-neon-500/10 text-neon-300 border border-neon-500/25"
                }`}
              >
                {bot.status}
              </span>
              <h3 className="text-2xl font-semibold text-paper mt-5 mb-1">{bot.name}</h3>
              <p className="text-xs uppercase tracking-[0.15em] text-neon-300 mb-4">{bot.role}</p>
              <p className="text-sm text-paper-dim leading-relaxed mb-6">{bot.body}</p>
              <ul className="mt-auto space-y-2 border-t border-ink-line pt-5">
                {bot.features.map((f) => (
                  <li key={f} className="flex gap-2.5 text-sm text-paper">
                    <span className="text-signal-ok">✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Frequently asked questions (native <details>, keyboard-accessible). */
export function Faq({ lang }: { lang: Lang }) {
  const f = getContent(lang).nashmi.faq;
  return (
    <section className="relative py-20 lg:py-24 bg-ink-soft border-y border-ink-line">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={f.eyebrow} heading={f.heading} />
        <div className="space-y-3">
          {f.items.map((it) => (
            <details key={it.q} className="group rounded-2xl glass p-5 open:glass-violet">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4 text-paper font-semibold">
                {it.q}
                <span className="text-neon-300 text-xl transition-transform group-open:rotate-45" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 text-paper-dim leading-relaxed">{it.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

