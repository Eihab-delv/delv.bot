import type { MetadataRoute } from "next";
import { CAPABILITY_SLUGS, LANGS, SITE_URL, localize } from "@/lib/site";

export const dynamic = "force-static";

const PATHS = [
  "/",
  "/nashmi",
  "/education",
  "/about",
  "/team",
  "/insights",
  "/news-feed",
  "/contact",
  "/akademija",
  "/newsletter",
  "/services",
  ...CAPABILITY_SLUGS.map((s) => `/services/${s}`),
];

const abs = (p: string) => `${SITE_URL}${p === "/" ? "" : p}/`;

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return LANGS.flatMap((lang) =>
    PATHS.map((p) => ({
      url: abs(localize(lang, p)),
      lastModified: now,
      changeFrequency: p === "/" || p === "/news-feed" ? ("weekly" as const) : ("monthly" as const),
      priority: p === "/" ? 1 : ["/nashmi", "/education"].includes(p) ? 0.9 : 0.6,
      alternates: { languages: { en: abs(p), ar: abs(localize("ar", p)) } },
    })),
  );
}
