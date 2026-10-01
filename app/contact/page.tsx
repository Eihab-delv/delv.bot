import type { Metadata } from "next";
import { Suspense } from "react";
import PageHeader from "@/components/PageHeader";
import ContactForm from "@/components/ContactForm";
import { CEO, PAGES } from "@/lib/constants";
import { DELV_GROUP } from "@/lib/delv-group";

export const metadata: Metadata = { title: PAGES.contact.title, description: PAGES.contact.body };

export default function ContactPage() {
  const p = PAGES.contact;
  return (
    <>
      <PageHeader eyebrow={p.eyebrow} heading={p.heading} body={p.body} />
      <section className="py-16 lg:py-20 bg-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-8">
            <Suspense>
              <ContactForm />
            </Suspense>
          </div>
          <aside className="lg:col-span-4 space-y-4">
            <h2 className="text-xs uppercase tracking-[0.25em] text-neon-400 neon-text">{p.directHeading}</h2>
            <div className="rounded-2xl glass p-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-paper-dim mb-1">{p.companyLabel}</p>
              <a href={DELV_GROUP.emailHref} className="text-paper hover:text-neon-300">{DELV_GROUP.email}</a>
              <p className="text-sm text-paper-dim mt-1">{DELV_GROUP.location}</p>
            </div>
            <div className="rounded-2xl glass p-6">
              <p className="text-[11px] uppercase tracking-[0.2em] text-paper-dim mb-1">{p.founderLabel}</p>
              <p className="text-paper">{CEO.fullName}</p>
              <a href={CEO.emailHref} className="text-sm text-paper-dim hover:text-neon-300">{CEO.email}</a>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
