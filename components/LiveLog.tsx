import Link from "next/link";
import { LIVE_LOG } from "@/lib/constants";

export default function LiveLog({ showCta = true }: { showCta?: boolean }) {
  return (
    <section className="relative py-20 lg:py-28 bg-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.25em] text-neon-400 mb-4 neon-text">
          {LIVE_LOG.eyebrow}
        </p>
        <h2 className="display-heading text-4xl sm:text-5xl font-semibold text-paper mb-4">
          {LIVE_LOG.heading}
        </h2>
        <p className="text-paper-dim text-lg max-w-2xl mb-10">{LIVE_LOG.subheading}</p>

        <div className="rounded-2xl glass-violet shadow-neon overflow-hidden font-mono text-sm">
          <div className="flex items-center justify-between px-5 py-3 border-b border-neon-500/20 bg-ink-soft/50">
            <div className="flex items-center gap-2 text-paper-dim">
              <span className="h-2.5 w-2.5 rounded-full bg-signal-err" />
              <span className="h-2.5 w-2.5 rounded-full bg-signal-warn" />
              <span className="h-2.5 w-2.5 rounded-full bg-signal-ok" />
              <span className="ml-3 text-xs text-neon-300">{LIVE_LOG.monitorTitle}</span>
            </div>
            <div className="inline-flex items-center gap-2 text-xs">
              <span className="h-2 w-2 rounded-full bg-signal-ok animate-pulse shadow-[0_0_8px_#34d399]" />
              <span className="uppercase tracking-wider text-signal-ok">
                {LIVE_LOG.liveLabel}
              </span>
            </div>
          </div>
          <div className="px-5 py-6 space-y-2 bg-ink/80">
            <div className="text-paper-dim">{LIVE_LOG.initState}</div>
            <div className="text-paper-dim/70">{LIVE_LOG.initSubstate}</div>
            <div className="text-paper-dim/50">{LIVE_LOG.lastUpdate}</div>
            <div className="pt-3 mt-3 border-t border-ink-line text-neon-300">
              ▸ {LIVE_LOG.liveState}
            </div>
          </div>
        </div>

        {showCta && (
        <div className="mt-6">
          <Link
            href={LIVE_LOG.cta.href}
            className="inline-flex items-center text-sm text-neon-300 font-semibold hover:text-neon-400 transition-colors"
          >
            {LIVE_LOG.cta.label}
          </Link>
        </div>
        )}
      </div>
    </section>
  );
}
