import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BlogList from "@/components/BlogList";
import CtaBand from "@/components/CtaBand";
import { PAGES } from "@/lib/constants";

export const metadata: Metadata = { title: PAGES.insights.title, description: PAGES.insights.body };

export default function InsightsPage() {
  const p = PAGES.insights;
  return (
    <>
      <PageHeader eyebrow={p.eyebrow} heading={p.heading} body={p.body} />
      <section className="py-16 lg:py-20 bg-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogList />
        </div>
      </section>
      <CtaBand heading={p.footerHeading} body={p.footerBody} cta={PAGES.comingSoonCta} />
    </>
  );
}
