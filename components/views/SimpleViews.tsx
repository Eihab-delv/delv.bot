import Link from "next/link";
import PageHeader from "../PageHeader";
import Akademija from "../Akademija";
import Newsletter from "../Newsletter";
import { getContent } from "@/lib/content";
import { localize, type Lang } from "@/lib/site";

export function AkademijaView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  return (
    <>
      <Akademija lang={lang} showCta={false} />
      <Newsletter content={c.newsletter} />
    </>
  );
}

export function NewsletterView({ lang }: { lang: Lang }) {
  return <Newsletter content={getContent(lang).newsletter} />;
}

export function NotFoundView({ lang }: { lang: Lang }) {
  const p = getContent(lang).pages.notFound;
  return (
    <>
      <PageHeader eyebrow={p.eyebrow} heading={p.heading} body={p.body} />
      <section className="py-16 bg-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={localize(lang, p.cta.href)}
            prefetch={false}
            className="inline-flex items-center rounded-full bg-neon-500 text-ink px-6 py-3 text-sm font-semibold shadow-neon hover:bg-neon-400 transition-all"
          >
            {p.cta.label}
          </Link>
        </div>
      </section>
    </>
  );
}
