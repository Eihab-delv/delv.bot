import Link from "next/link";
import { FOOTER, BRAND, NAV } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="border-t border-ink-line bg-ink-soft py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10 mb-12">
          <div className="lg:col-span-5">
            <p className="text-xl font-bold tracking-[0.15em] text-paper mb-2">{FOOTER.brand}</p>
            <p className="text-sm text-paper-dim mb-3 max-w-md">{FOOTER.brandSub}</p>
            <p className="text-xs text-paper-dim/70">{FOOTER.brandSince}</p>
            <p className="text-xs text-paper-dim mt-3">
              <a href={BRAND.emailHref} className="hover:text-neon-300 transition-colors">
                {BRAND.email}
              </a>
            </p>
          </div>

          {FOOTER.columns.map((col) => (
            <div key={col.heading} className="lg:col-span-3">
              <h4 className="text-xs uppercase tracking-[0.2em] text-neon-400 mb-4">
                {col.heading}
              </h4>
              <ul className="space-y-2">
                {col.links.map((l) => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-sm text-paper-dim hover:text-neon-300 transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-ink-line pt-6 flex flex-col md:flex-row gap-3 md:items-center md:justify-between">
          <div className="text-xs text-paper-dim/70">
            <p>{FOOTER.copyright}</p>
            <p>{FOOTER.builtBy}</p>
          </div>
          <div className="text-xs text-paper-dim flex flex-wrap items-center gap-3">
            <span>{FOOTER.newsletterTeaser}</span>
            <Link
              href={NAV.subscribeHref}
              className="rounded-full bg-neon-500 text-ink px-4 py-1.5 font-semibold hover:bg-neon-400 transition-all shadow-neon-sm"
            >
              {FOOTER.newsletterCta}
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
