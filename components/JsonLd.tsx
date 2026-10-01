import { BRAND, CEO, SITE_URL } from "@/lib/constants";

/** Structured data (schema.org) for search engines. */
export default function JsonLd() {
  const data = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: BRAND.name,
    url: `${SITE_URL}/`,
    sameAs: [BRAND.url],
    email: BRAND.email,
    description: BRAND.description,
    foundingDate: "2006",
    foundingLocation: BRAND.location,
    award: "BRW Fast 100",
    founder: { "@type": "Person", name: CEO.fullName, jobTitle: CEO.title },
  };
  return (
    <script
      type="application/ld+json"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
