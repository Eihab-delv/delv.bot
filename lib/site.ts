/**
 * site.ts — settings shared by both languages: numbers, asset paths, URLs and
 * the helpers that build language-aware links.
 *
 * All words the visitor reads live in lib/content/en.ts and lib/content/ar.ts.
 */

// Prefix for static assets — empty locally, /nashmi.bot on GitHub Pages.
// next/image with unoptimized:true passes src through as-is, so we must
// manually prepend basePath to all image paths.
export const BASE = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Site URL used for SEO (canonical links, sitemap, Open Graph). Override with NEXT_PUBLIC_SITE_URL.
export const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://eihab-delv.github.io/nashmi.bot").replace(/\/$/, "");

export type Lang = "en" | "ar";
export const LANGS: Lang[] = ["en", "ar"];

/** Prefix an internal path with the language segment (English lives at the root). */
export function localize(lang: Lang, href: string): string {
  if (lang === "en" || /^(https?:|mailto:|tel:|#)/.test(href)) return href;
  if (href === "/") return "/ar";
  return `/ar${href}`;
}

/** The same page in the other language. `pathname` excludes the base path. */
export function switchLangPath(pathname: string, to: Lang): string {
  const clean = pathname.replace(/\/$/, "") || "/";
  const withoutAr = clean === "/ar" ? "/" : clean.startsWith("/ar/") ? clean.slice(3) : clean;
  return localize(to, withoutAr);
}

// ─────────────────────────────────────────────────────────────────────────────
// Key numbers — change them HERE and every section in both languages updates.
// (Kept as Western digits in Arabic too, which reads naturally in Jordan.)
// ─────────────────────────────────────────────────────────────────────────────
export const STATS = {
  companies: "20+",
  people: "1,500+",
  years: "20+",
  countries: "15+",
  cities: "20+",
  continents: "3",
  agentsTotal: "24",
  agentsDirect: "9",
  osPlatforms: "3",
  sinceYear: "2006",
  linkedinFollowers: "6,800+",
} as const;

// ─────────────────────────────────────────────────────────────────────────────
// Contacts, links and images
// ─────────────────────────────────────────────────────────────────────────────
export const LINKS = {
  delvSite: "https://www.delv.group",
  delvEmail: "contact@delv.com",
  delvEmailHref: "mailto:contact@delv.com",
  founderEmail: "sam.smair@delv.com",
  founderEmailHref: "mailto:sam.smair@delv.com",
  // TODO: replace with Sam's real LinkedIn profile URL
  linkedin: "https://www.linkedin.com",
  whoDisability: "https://www.who.int/news-room/fact-sheets/detail/disability-and-health",
  unicefChildren:
    "https://www.unicef.org/press-releases/nearly-240-million-children-disabilities-around-world-unicefs-most-comprehensive",
} as const;

const img = (path: string) => `${BASE}${path}`;

export const IMAGES = {
  founderCard: img("/sam-profile.png"),
  founderAbout: img("/sam-hero.jpeg"),
  delvLogo: { src: img("/brand/delv-logo-light.png"), width: 1446, height: 299 },
  delvMark: { src: img("/brand/delv-mark-light.png"), width: 592, height: 300 },
  delvHero: img("/delv-group/about-hero.jpg"),
  og: img("/og.png"),
  delvOg: img("/delv-group/og.jpg"),
  capabilities: {
    "platform-development": img("/delv-group/card-platform.jpg"),
    "ai-services": img("/delv-group/card-ai.jpg"),
    robotics: img("/delv-group/card-robotics.jpg"),
    advisory: img("/delv-group/card-advisory.jpg"),
    "48-hour-prototype": img("/delv-group/48hr-team.jpg"),
  } as Record<string, string>,
} as const;

export const CAPABILITY_SLUGS = ["platform-development", "ai-services", "robotics", "advisory", "48-hour-prototype"] as const;
