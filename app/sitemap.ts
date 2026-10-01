import type { MetadataRoute } from "next";
import { FOOTER, NAV, SITE_URL } from "@/lib/constants";
import { CAPABILITIES } from "@/lib/delv-group";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    ...NAV.links.map((l) => l.href),
    ...FOOTER.columns.flatMap((c) => c.links.map((l) => l.href)),
    ...CAPABILITIES.map((c) => `/services/${c.slug}`),
  ].filter((p) => !p.includes("#"));
  const now = new Date();
  return Array.from(new Set(paths)).map((p) => ({
    url: `${SITE_URL}${p === "/" ? "/" : `${p}/`}`,
    lastModified: now,
    changeFrequency: p === "/" || p === "/news-feed" ? "weekly" : "monthly",
    priority: p === "/" ? 1 : p.startsWith("/services") ? 0.8 : 0.6,
  }));
}
