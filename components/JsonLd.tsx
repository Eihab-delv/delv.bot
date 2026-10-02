import { getContent } from "@/lib/content";
import { LINKS, SITE_URL, localize, type Lang } from "@/lib/site";

/** Structured data (schema.org) for search engines. */
export default function JsonLd({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const url = `${SITE_URL}${localize(lang, "/").replace(/\/$/, "")}/`;
  const data = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        name: c.brand.name,
        url,
        inLanguage: lang,
        description: c.meta.description,
        publisher: { "@id": `${SITE_URL}/#delv` },
      },
      {
        "@type": "Organization",
        "@id": `${SITE_URL}/#delv`,
        name: "DELV Group",
        url: LINKS.delvSite,
        email: LINKS.delvEmail,
        foundingDate: "2006",
        award: "BRW Fast 100",
        founder: { "@type": "Person", name: "Sam Smair", jobTitle: "Founder & CEO" },
      },
    ],
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
