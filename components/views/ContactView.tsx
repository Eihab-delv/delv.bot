import { Suspense } from "react";
import PageHeader from "../PageHeader";
import ContactForm from "../ContactForm";
import { getContent } from "@/lib/content";
import { LINKS, type Lang } from "@/lib/site";

export default function ContactView({ lang }: { lang: Lang }) {
  const p = getContent(lang).pages.contact;
  return (
    <>
      <PageHeader eyebrow={p.eyebrow} heading={p.heading} body={p.body} />
      <section className="py-16 lg:py-20 bg-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <Suspense>
              <ContactForm labels={p} />
            </Suspense>
          </div>
          <aside className="lg:col-span-4 space-y-4">
            <h2 className="text-xs uppercase tracking-[0.25em] text-neon-400 neon-text">{p.directHeading}</h2>
            <div className="rounded-2xl glass p-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-paper-dim mb-1">{p.companyLabel}</p>
              <a href={LINKS.delvEmailHref} className="text-paper hover:text-neon-300">{LINKS.delvEmail}</a>
              <p className="text-sm text-paper-dim mt-1">{p.location}</p>
            </div>
            <div className="rounded-2xl glass p-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-paper-dim mb-1">{p.founderLabel}</p>
              <p className="text-paper">Sam Smair</p>
              <a href={LINKS.founderEmailHref} className="text-sm text-paper-dim hover:text-neon-300">{LINKS.founderEmail}</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
