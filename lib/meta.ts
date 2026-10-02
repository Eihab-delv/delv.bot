import type { Metadata } from "next";
import { getContent } from "./content";
import { IMAGES, SITE_URL, localize, type Lang } from "./site";

const abs = (lang: Lang, path: string) => {
  const p = localize(lang, path);
  return `${SITE_URL}${p === "/" ? "" : p}/`;
};

/** Per-page metadata with canonical + hreflang links for both languages. */
export function pageMetadata(lang: Lang, opts: { title?: string; description?: string; path: string; image?: string }): Metadata {
  const c = getContent(lang);
  return {
    title: opts.title,
    description: opts.description ?? c.meta.description,
    alternates: {
      canonical: abs(lang, opts.path),
      languages: { en: abs("en", opts.path), ar: abs("ar", opts.path), "x-default": abs("en", opts.path) },
    },
    openGraph: {
      title: opts.title ? `${opts.title} | ${c.brand.name}` : c.meta.ogTitle,
      description: opts.description ?? c.meta.description,
      locale: lang === "ar" ? "ar_JO" : "en_US",
      images: [{ url: opts.image ?? IMAGES.og, width: 1200, height: 630 }],
    },
  };
}
