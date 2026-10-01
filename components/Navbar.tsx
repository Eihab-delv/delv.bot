"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { NAV } from "@/lib/constants";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => {
    const path = pathname.replace(/\/$/, "") || "/";
    return href === "/" ? path === "/" : path === href || path.startsWith(`${href}/`);
  };

  return (
    <header className="sticky top-0 z-40 backdrop-blur-xl bg-ink/70 border-b border-ink-line">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" prefetch={false} className="font-bold tracking-[0.2em] text-paper" aria-label="DELV Group home">
            {NAV.brandLabel}
            <span className="ml-1.5 font-medium tracking-normal text-paper-dim">{NAV.brandSub}</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-7 text-sm">
            {NAV.links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  prefetch={l.href === "/" ? false : undefined}
                  aria-current={isActive(l.href) ? "page" : undefined}
                  className={`transition-colors hover:text-neon-300 ${
                    isActive(l.href) ? "text-neon-300" : "text-paper-dim"
                  }`}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="hidden lg:flex items-center gap-4">
            <div className="text-xs text-paper-dim inline-flex items-center gap-1">
              <span className="font-medium text-paper">{NAV.languageToggle.en}</span>
              <span>/</span>
              <span>{NAV.languageToggle.alt}</span>
            </div>
            <Link
              href={NAV.ctaHref}
              className="rounded-full bg-neon-500 text-ink px-4 py-2 text-sm font-semibold shadow-neon-sm hover:bg-neon-400 transition-all"
            >
              {NAV.ctaLabel}
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="lg:hidden text-paper"
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden border-t border-ink-line py-4">
            <ul className="flex flex-col gap-3">
              {NAV.links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    prefetch={l.href === "/" ? false : undefined}
                    aria-current={isActive(l.href) ? "page" : undefined}
                    className={`block py-1.5 text-sm hover:text-neon-300 ${
                      isActive(l.href) ? "text-neon-300" : "text-paper-dim"
                    }`}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href={NAV.ctaHref}
                  className="inline-block mt-2 rounded-full bg-neon-500 text-ink px-4 py-2 text-sm font-semibold"
                  onClick={() => setOpen(false)}
                >
                  {NAV.ctaLabel}
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
