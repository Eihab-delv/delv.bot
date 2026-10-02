import Image from "next/image";
import PageHeader from "../PageHeader";
import SectionIntro from "../SectionIntro";
import CredentialsStrip from "../CredentialsStrip";
import Timeline from "../Timeline";
import FounderSnippet from "../FounderSnippet";
import WhyDelv from "../WhyDelv";
import Presence from "../Presence";
import CtaBand from "../CtaBand";
import { ImpactStats } from "../nashmi/Sections";
import { getContent } from "@/lib/content";
import { IMAGES, LINKS, localize, type Lang } from "@/lib/site";

export default function AboutView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const a = c.pages.about;
  const G = c.delv;
  const L = G.labels;
  return (
    <>
      <PageHeader eyebrow={a.eyebrow} heading={a.heading} body={a.body} />

      {/* Mission */}
      <section className="py-20 bg-ink">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow={a.missionEyebrow} heading={a.missionHeading} />
          <div className="space-y-5 text-paper-dim text-lg leading-relaxed">
            {a.mission.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <ImpactStats lang={lang} />
      <FounderSnippet lang={lang} />

      {/* DELV Group */}
      <section className="relative overflow-hidden bg-ink">
        <Image src={IMAGES.delvHero} alt="" fill sizes="100vw" className="object-cover opacity-25" />
        <div className="absolute inset-0 bg-gradient-to-r rtl:bg-gradient-to-l from-ink via-ink/85 to-ink/30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-24">
          <p className="text-xs uppercase tracking-[0.25em] text-neon-400 mb-4 neon-text">{a.groupEyebrow}</p>
          <h2 className="display-heading text-3xl sm:text-5xl font-semibold text-paper mb-5 max-w-3xl">{G.story.heading}</h2>
          <p className="text-paper-dim text-lg max-w-2xl mb-8">{G.story.body}</p>
          <a
            href={LINKS.delvSite}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full glass text-paper px-6 py-3 text-sm font-medium glow-border transition-all"
          >
            {L.visitSite}
          </a>
        </div>
      </section>
      <CredentialsStrip lang={lang} />

      <section className="py-20 bg-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionIntro eyebrow={G.purpose.eyebrow} heading={G.purpose.heading} />
            {G.purpose.body.map((b) => (
              <p key={b} className="text-paper-dim leading-relaxed mb-4">{b}</p>
            ))}
            <div className="grid sm:grid-cols-3 gap-3 mt-8">
              {G.heritage.map((h) => (
                <div key={h.title} className="rounded-2xl glass p-5">
                  <p className="text-[11px] uppercase tracking-[0.2em] text-neon-300 mb-2">{h.eyebrow}</p>
                  <h3 className="font-semibold text-paper mb-1">{h.title}</h3>
                  <p className="text-xs text-paper-dim leading-relaxed">{h.body}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <SectionIntro eyebrow={L.evolutionEyebrow} heading={L.evolutionHeading} />
            <Timeline items={G.timeline} />
          </div>
        </div>
      </section>

      <WhyDelv lang={lang} />

      <section className="py-20 bg-ink-soft border-y border-ink-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow={L.valuesEyebrow} heading={L.valuesHeading} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {G.values.map((v, i) => (
              <div key={v.title} className="rounded-2xl glass p-6">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neon-300 mb-2">
                  {L.valueLabel} / {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-lg font-semibold text-paper mb-1">{v.title}</h3>
                <p className="text-sm text-paper-dim leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Presence lang={lang} />
      <CtaBand heading={G.future.heading} body={G.future.body} cta={{ label: L.contact, href: localize(lang, "/contact") }} />
    </>
  );
}
