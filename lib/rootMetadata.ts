import type { Metadata, Viewport } from "next";
import { getContent } from "./content";
import { IMAGES, SITE_URL, type Lang } from "./site";

export function rootMetadata(lang: Lang): Metadata {
  const c = getContent(lang);
  return {
    // Origin only — asset paths already include the base path
    metadataBase: new URL(new URL(SITE_URL).origin),
    title: { default: c.meta.title, template: c.meta.titleTemplate },
    description: c.meta.description,
    openGraph: {
      type: "website",
      siteName: c.brand.name,
      title: c.meta.ogTitle,
      description: c.meta.description,
      images: [{ url: IMAGES.og, width: 1200, height: 630, alt: c.meta.ogTitle }],
    },
    twitter: { card: "summary_large_image", title: c.meta.ogTitle, description: c.meta.description, images: [IMAGES.og] },
  };
}

export const viewport: Viewport = { themeColor: "#06060a", colorScheme: "dark" };
