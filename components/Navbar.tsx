"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import BrandMark from "./BrandMark";
import { localize, switchLangPath, type Lang } from "@/lib/site";
import type { LinkItem } from "@/lib/content/types";

type Props = {
  lang: Lang;
  links: LinkItem[];
  cta: LinkItem;
  by: string;
  brandName: string;
  langLabel: string;
  langAria: string;
  toggleMenu: string;
};

export default function Navbar({ lang, links, cta, by, brandName, langLabel, langAria, toggleMenu }: Props) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname() || "/";
  const path = pathname.replace(/\/$/, "") || "/";
  const home = localize(lang, "/");
  const isActive = (href: string) => {
    const target = localize(lang, href);
    return target === home ? path === home : path === target || path.startsWith(`${target}/`);
  };
  const other: Lang = lang === "en" ? "ar" : "en";
  const otherHref = switchLangPath(pathname, other);

  const linkClass = (href: string) =>
    `transition-colors hover:text-neon-300 ${isActive(href) ? "text-neon-300" : "text-paper-dim"}`;

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-ink/70 border-b border-ink-line">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between gap-4">
          <Link href={home} prefetch={false} aria-label={brandName}>
            <BrandMark by={by} />
          </Link>

          <ul className="hidden lg:flex items-center gap-6 text-sm">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={localize(lang, l.href)}
                  prefetch={l.href === "/" ? false : undefined}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={linkClass(l.href)}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <Link
              href={otherHref}
              prefetch={false}
              hrefLang={other}
              aria-label={langAria}
              className="rounded-full border border-ink-line px-3 py-1.5 text-xs font-semibold text-paper hover:border-neon-500/50 hover:text-neon-300 transition-colors"
            >
              {langLabel}
            </Link>
            <Link
              href={localize(lang, cta.href)}
              className="rounded-full bg-neon-500 text-ink px-4 py-2 text-sm font-semibold shadow-neon-sm hover:bg-neon-400 transition-all"
            >
              {cta.label}
            </Link>
          </div>

          <div className="flex lg:hidden items-center gap-3">
            <Link
              href={otherHref}
              prefetch={false}
              hrefLang={other}
              aria-label={langAria}
              className="rounded-full border border-ink-line px-3 py-1 text-xs font-semibold text-paper"
            >
              {langLabel}
            </Link>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              className="text-paper"
              aria-label={toggleMenu}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-ink-line py-4">
            <ul className="flex flex-col gap-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={localize(lang, l.href)}
                    prefetch={l.href === "/" ? false : undefined}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className={`block py-1.5 text-sm ${linkClass(l.href)}`}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={localize(lang, cta.href)}
                  className="inline-block mt-2 rounded-full bg-neon-500 text-ink px-4 py-2 text-sm font-semibold"
                  onClick={() => setOpen(false)}
                >
                  {cta.label}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
