import Image from "next/image";
import Link from "next/link";
import BrandMark from "./BrandMark";
import { getContent } from "@/lib/content";
import { IMAGES, LINKS, localize, type Lang } from "@/lib/site";

export default function Footer({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const f = c.footer;
  return (
    <footer className="border-t border-ink-line bg-ink-soft py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-5">
            <BrandMark by={c.brand.by} size="lg" />
            <p className="text-sm text-paper-dim mt-4 mb-3 max-w-md leading-relaxed">{c.brand.description}</p>
            <p className="text-xs text-paper-dim/70">{c.brand.builtBy}</p>
            <p className="text-xs text-paper-dim mt-3">
              <a href={LINKS.delvEmailHref} className="hover:text-neon-300 transition-colors">
                {LINKS.delvEmail}
              </a>
            </p>
          </div>

          {f.columns.map((col) => (
            <div key={col.heading} className="lg:col-span-3">
              <h2 className="text-xs uppercase tracking-[0.2em] text-neon-400 mb-4">{col.heading}</h2>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link href={localize(lang, l.href)} className="text-sm text-paper-dim hover:text-neon-300 transition-colors">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-ink-line pt-6 flex flex-col md:flex-row gap-4 md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <a href={LINKS.delvSite} target="_blank" rel="noopener noreferrer" aria-label={c.delv.name}>
              <Image src={IMAGES.delvLogo.src} alt="DELV" width={IMAGES.delvLogo.width} height={IMAGES.delvLogo.height} className="h-6 w-auto" />
            </a>
            <div className="text-xs text-paper-dim/70">
              <p>{c.brand.initiative} · {c.brand.founded}</p>
              <p>{c.brand.copyright}</p>
            </div>
          </div>
          <div className="text-xs text-paper-dim flex flex-wrap items-center gap-3">
            <span>{f.newsletterTeaser}</span>
            <Link
              href={localize(lang, "/newsletter")}
              className="rounded-full bg-neon-500 text-ink px-4 py-1.5 font-semibold hover:bg-neon-400 transition-all shadow-neon-sm"
            >
              {f.newsletterCta}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
