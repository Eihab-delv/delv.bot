import PageHeader from "../PageHeader";
import BlogList from "../BlogList";
import CtaBand from "../CtaBand";
import { getContent } from "@/lib/content";
import { localize, type Lang } from "@/lib/site";

export default function InsightsView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const p = c.pages.insights;
  return (
    <>
      <PageHeader eyebrow={p.eyebrow} heading={p.heading} body={p.body} />
      <section className="py-16 lg:py-20 bg-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <BlogList
            posts={c.insights}
            labels={{ allTopics: p.allTopics, featuredLabel: p.featuredLabel, filterLabel: p.filterLabel, soon: c.common.comingSoon }}
          />
        </div>
      </section>
      <CtaBand
        heading={p.footerHeading}
        body={p.footerBody}
        cta={{ label: c.pages.comingSoonCta.label, href: localize(lang, c.pages.comingSoonCta.href) }}
      />
    </>
  );
}
