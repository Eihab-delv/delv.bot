import Link from "next/link";
import { getContent } from "@/lib/content";
import { localize, type Lang } from "@/lib/site";

/** Empty state for sections whose content hasn't been published yet. */
export default function ComingSoon({ lang, heading, body }: { lang: Lang; heading: string; body: string }) {
  const c = getContent(lang);
  return (
    <section className="relative py-20 lg:py-28 bg-ink">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl glass-violet shadow-neon-sm p-8 sm:p-10 text-center">
          <span className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] text-signal-ok mb-4">
            <span className="h-2 w-2 rounded-full bg-signal-ok animate-pulse" />
            {c.common.inProgress}
          </span>
          <h2 className="text-2xl sm:text-3xl font-semibold text-paper mb-3">{heading}</h2>
          <p className="text-paper-dim mb-8">{body}</p>
          <Link
            href={localize(lang, c.pages.comingSoonCta.href)}
            className="inline-flex items-center rounded-full bg-neon-500 text-ink px-6 py-3 text-sm font-semibold shadow-neon hover:bg-neon-400 transition-all"
          >
            {c.pages.comingSoonCta.label}
          </Link>
        </div>
      </div>
    </section>
  );
}
