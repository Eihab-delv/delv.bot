import type { Metadata } from "next";
import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import SectionIntro from "@/components/SectionIntro";
import ServicesGrid from "@/components/ServicesGrid";
import Industries from "@/components/Industries";
import CtaBand from "@/components/CtaBand";
import { PAGES } from "@/lib/constants";
import { OFFERS } from "@/lib/delv-group";

export const metadata: Metadata = {
  title: PAGES.services.title,
  description: PAGES.services.body,
};

export default function ServicesPage() {
  const p = PAGES.services;
  return (
    <>
      <PageHeader eyebrow={p.eyebrow} heading={p.heading} body={p.body} />
      <ServicesGrid eyebrow={p.capabilitiesEyebrow} heading={p.capabilitiesHeading} body={p.capabilitiesBody} />

      <section className="relative py-20 lg:py-24 bg-ink-soft border-y border-ink-line">
        <div className="absolute inset-0 bg-radial-violet-bl opacity-50" />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <SectionIntro eyebrow={p.offersEyebrow} heading={p.offersHeading} body={p.offersBody} />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {OFFERS.map((o, i) => (
              <Link key={o.title} href={o.href} className="rounded-2xl glass p-6 glow-border transition-all">
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

      <Industries />
      <CtaBand heading={p.ctaHeading} body={p.ctaBody} cta={{ label: p.ctaLabel, href: p.ctaHref }} />
    </>
  );
}
