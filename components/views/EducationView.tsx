import Link from "next/link";
import PageHeader from "../PageHeader";
import SectionIntro from "../SectionIntro";
import CtaBand from "../CtaBand";
import { ImpactStats } from "../nashmi/Sections";
import { getContent } from "@/lib/content";
import { localize, type Lang } from "@/lib/site";

export default function EducationView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const e = c.education;
  return (
    <>
      <PageHeader eyebrow={e.page.eyebrow} heading={e.page.heading} body={e.page.body} />

      {/* Learners */}
      <section className="py-20 lg:py-24 bg-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow={e.learnersEyebrow} heading={e.learnersHeading} />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {e.learners.map((l) => (
              <article key={l.key} id={l.key} className="scroll-mt-24 rounded-2xl glass p-6 glow-border transition-all flex flex-col">
                <div className="text-3xl mb-3" aria-hidden="true">{l.icon}</div>
                <h3 className="text-lg font-semibold text-paper">{l.title}</h3>
                <p className="text-xs text-neon-300 mt-1 mb-3">{l.who}</p>
                <p className="text-sm text-paper-dim leading-relaxed mb-5">{l.body}</p>
                <ul className="mt-auto space-y-2 border-t border-ink-line pt-4">
                  {l.tools.map((t) => (
                    <li key={t} className="flex gap-2.5 text-sm text-paper">
                      <span className="text-signal-ok">✓</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* A day with Nashmi */}
      <section className="py-20 lg:py-24 bg-ink-soft border-y border-ink-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionIntro eyebrow={e.day.eyebrow} heading={e.day.heading} />
            <p className="text-xs text-paper-dim/80 rounded-full glass inline-block px-3 py-1.5">{e.day.note}</p>
          </div>
          <ol className="lg:col-span-8 relative border-s border-neon-500/30 ms-2 space-y-7">
            {e.day.items.map((d) => (
              <li key={d.time} className="ps-8 relative">
                <span className="absolute -start-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-ink bg-neon-500 shadow-[0_0_10px_rgba(168,85,247,0.7)]" />
                <p className="font-mono text-xs text-neon-300 mb-1"><bdi dir="ltr">{d.time}</bdi></p>
                <h3 className="text-lg font-semibold text-paper mb-1">{d.title}</h3>
                <p className="text-sm text-paper-dim leading-relaxed">{d.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* For teachers & schools */}
      <section className="py-20 lg:py-24 bg-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow={e.featuresEyebrow} heading={e.featuresHeading} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {e.features.map((f, i) => (
              <div key={f.title} className="rounded-2xl glass p-6">
                <span className="font-mono text-xs text-neon-300">{String(i + 1).padStart(2, "0")}</span>
                <h3 className="text-lg font-semibold text-paper mt-2 mb-2">{f.title}</h3>
                <p className="text-sm text-paper-dim leading-relaxed">{f.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs */}
      <section className="py-20 lg:py-24 bg-ink-soft border-y border-ink-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow={e.programsEyebrow} heading={e.programsHeading} />
          <div className="grid md:grid-cols-3 gap-5">
            {e.programs.map((p, i) => (
              <div key={p.title} className={`rounded-2xl p-7 flex flex-col ${i === 0 ? "glass-violet shadow-neon" : "glass"}`}>
                <h3 className="text-2xl font-semibold text-paper mb-3">{p.title}</h3>
                <p className="text-sm text-paper-dim leading-relaxed mb-6">{p.body}</p>
                <Link href={localize(lang, p.cta.href)} className="mt-auto text-sm font-semibold text-neon-300 hover:text-neon-400">
                  {p.cta.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ImpactStats lang={lang} />
      <CtaBand heading={e.cta.heading} body={e.cta.body} cta={{ label: e.cta.label, href: localize(lang, e.cta.href) }} />
    </>
  );
}
