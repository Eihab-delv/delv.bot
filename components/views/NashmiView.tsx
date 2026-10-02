import CtaBand from "../CtaBand";
import NashmiBot from "../nashmi/NashmiBot";
import { WaysGrid, RobotFamily, HowItWorks, Principles, ImpactStats, Faq } from "../nashmi/Sections";
import { getContent } from "@/lib/content";
import { localize, type Lang } from "@/lib/site";

export default function NashmiView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const n = c.nashmi;
  return (
    <>
      <section className="relative overflow-hidden bg-ink border-b border-ink-line">
        <div className="absolute inset-0 bg-radial-violet" />
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 pb-14 lg:pt-20 lg:pb-16 grid lg:grid-cols-2 gap-10 items-center">
          <div className="animate-slide-up">
            <p className="text-xs uppercase tracking-[0.25em] text-neon-400 mb-4 neon-text">{n.page.eyebrow}</p>
            <h1 className="display-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-paper mb-5">{n.page.heading}</h1>
            <p className="text-paper-dim text-lg max-w-xl mb-6">{n.page.body}</p>
            <div className="space-y-4 text-paper-dim leading-relaxed max-w-xl">
              {n.intro.body.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>
          <div className="flex justify-center">
            <NashmiBot className="w-full max-w-md" label={n.page.title} />
          </div>
        </div>
      </section>
      <WaysGrid lang={lang} detailed />
      <RobotFamily lang={lang} />
      <HowItWorks lang={lang} />
      <Principles lang={lang} />
      <ImpactStats lang={lang} />
      <Faq lang={lang} />
      <CtaBand heading={n.pilot.heading} body={n.pilot.body} cta={{ label: n.pilot.cta.label, href: localize(lang, n.pilot.cta.href) }} />
    </>
  );
}
