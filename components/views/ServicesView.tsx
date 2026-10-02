import Link from "next/link";
import PageHeader from "../PageHeader";
import SectionIntro from "../SectionIntro";
import ServicesGrid from "../ServicesGrid";
import Industries from "../Industries";
import CtaBand from "../CtaBand";
import { getContent } from "@/lib/content";
import { localize, type Lang } from "@/lib/site";

export default function ServicesView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const p = c.pages.services;
  return (
    <>
      <PageHeader eyebrow={p.eyebrow} heading={p.heading} body={p.body} />
      <ServicesGrid lang={lang} eyebrow={p.capabilitiesEyebrow} heading={p.capabilitiesHeading} body={p.capabilitiesBody} />
      <section className="relative py-20 lg:py-24 bg-ink-soft border-y border-ink-line">
        <div className="absolute inset-0 bg-radial-violet-bl opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow={p.offersEyebrow} heading={p.offersHeading} body={p.offersBody} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {c.offers.map((o, i) => (
              <Link key={o.title} href={localize(lang, o.href)} className="rounded-2xl glass p-6 glow-border transition-all">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neon-300 mb-3">
                  {p.offerLabel} · {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="text-lg font-semibold text-paper mb-2">{o.title}</h3>
                <p className="text-sm text-paper-dim leading-relaxed">{o.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Industries lang={lang} />
      <CtaBand heading={p.ctaHeading} body={p.ctaBody} cta={{ label: p.ctaLabel, href: localize(lang, p.ctaHref) }} />
    </>
  );
}
