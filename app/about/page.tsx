import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionIntro from "@/components/SectionIntro";
import CredentialsStrip from "@/components/CredentialsStrip";
import Timeline from "@/components/Timeline";
import AboutSnippet from "@/components/AboutSnippet";
import WhyDelv from "@/components/WhyDelv";
import Presence from "@/components/Presence";
import CtaBand from "@/components/CtaBand";
import { PAGES } from "@/lib/constants";
import { DELV_GROUP as G } from "@/lib/delv-group";

export const metadata: Metadata = { title: PAGES.about.title, description: G.story.body };

export default function AboutPage() {
  const L = G.labels;
  return (
    <>
      <section className="relative overflow-hidden bg-ink">
        <Image src={G.heroImage} alt="" fill priority sizes="100vw" className="object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/85 to-ink/30" />
        <div className="absolute inset-0 bg-radial-violet" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-16 lg:pt-24 lg:pb-24 animate-slide-up">
          <p className="text-xs uppercase tracking-[0.25em] text-neon-400 mb-4 neon-text">{PAGES.about.title}</p>
          <h1 className="display-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-paper mb-5 max-w-4xl">
            {G.story.heading}
          </h1>
          <p className="text-paper-dim text-lg max-w-2xl mb-8">{G.story.body}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="inline-flex items-center rounded-full bg-neon-500 text-ink px-6 py-3 text-sm font-semibold shadow-neon hover:bg-neon-400 transition-all">
              {L.talk}
            </Link>
            <Link href="/services" className="inline-flex items-center rounded-full glass text-paper px-6 py-3 text-sm font-medium glow-border transition-all">
              {L.servicesCta}
            </Link>
          </div>
        </div>
      </section>

      <CredentialsStrip />

      {/* Purpose */}
      <section className="py-20 bg-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12">
          <div>
            <SectionIntro eyebrow={G.purpose.eyebrow} heading={G.purpose.heading} />
            {G.purpose.body.map((b) => (
              <p key={b} className="text-paper-dim leading-relaxed mb-4">{b}</p>
            ))}
          </div>
          <div>
            <SectionIntro eyebrow={L.evolutionEyebrow} heading={L.evolutionHeading} />
            <Timeline />
          </div>
        </div>
      </section>

      {/* Heritage */}
      <section className="py-20 bg-ink-soft border-y border-ink-line">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow={L.heritageEyebrow} heading={L.heritageHeading} body={L.heritageBody} />
          <div className="grid md:grid-cols-3 gap-4">
            {G.heritage.map((h) => (
              <div key={h.title} className="rounded-2xl glass p-6">
                <p className="text-[11px] uppercase tracking-[0.2em] text-neon-300 mb-2">{h.eyebrow}</p>
                <h3 className="text-lg font-semibold text-paper mb-1">{h.title}</h3>
                <p className="text-sm text-paper-dim leading-relaxed">{h.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <AboutSnippet />
      <WhyDelv />

      {/* Values */}
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

      <Presence />
      <CtaBand heading={G.future.heading} body={G.future.body} cta={{ label: L.contact, href: "/contact" }} />
    </>
  );
}
