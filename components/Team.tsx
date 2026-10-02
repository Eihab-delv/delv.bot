import Link from "next/link";
import { getContent } from "@/lib/content";
import { localize, type Lang } from "@/lib/site";

export default function Team({
  lang,
  showCta = true,
  showAgents = true,
}: {
  lang: Lang;
  showCta?: boolean;
  showAgents?: boolean;
}) {
  const TEAM = getContent(lang).team;
  return (
    <section className="relative py-20 lg:py-28 bg-ink-soft border-y border-ink-line">
      <div className="absolute inset-0 bg-radial-violet-bl opacity-50" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-10">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.25em] text-neon-400 mb-4 neon-text">
              {TEAM.eyebrow}
            </p>
            <h2 className="display-heading text-4xl sm:text-5xl font-semibold text-paper mb-6">
              {TEAM.heading}
            </h2>
            <p className="text-paper-dim leading-relaxed mb-6">{TEAM.body}</p>
            {showCta && (
            <Link
              href={localize(lang, TEAM.cta.href)}
              className="inline-flex items-center text-sm text-neon-300 font-semibold hover:text-neon-400 transition-colors"
            >
              {TEAM.cta.label}
            </Link>
            )}
          </div>

          <div className="lg:col-span-7">
            {showAgents && (
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {TEAM.agents.map((a) => (
                <div
                  key={a.name}
                  className="rounded-xl glass p-4 glow-border transition-all"
                >
                  <div className="h-10 w-10 rounded-full bg-gradient-to-br from-neon-400 to-neon-700 text-ink flex items-center justify-center font-bold mb-3 shadow-[0_0_18px_rgba(168,85,247,0.5)]">
                    {a.initial}
                  </div>
                  <div className="font-medium text-paper">{a.name}</div>
                  <div className="text-xs text-paper-dim">{a.role}</div>
                </div>
              ))}
              <div className="rounded-xl border border-dashed border-neon-500/30 bg-ink/60 p-4 flex items-center justify-center text-neon-300 font-semibold">
                {TEAM.moreAgentsBadge}
              </div>
            </div>
            )}

            <div className={`${showAgents ? "mt-8" : ""} rounded-2xl glass-violet p-6 shadow-neon-sm`}>
              <h3 className="text-lg font-semibold text-paper mb-2">
                {TEAM.summaryHeading}
              </h3>
              <p className="text-sm text-paper-dim leading-relaxed mb-5">
                {TEAM.summaryBody}
              </p>
              <div className="grid grid-cols-4 gap-3 text-center">
                {TEAM.stats.map((s) => (
                  <div key={s.label} className="rounded-lg bg-ink/60 border border-ink-line py-3">
                    <div className="text-xl font-semibold text-paper"><bdi dir="ltr">{s.value}</bdi></div>
                    <div className="text-[10px] uppercase tracking-wider text-paper-dim mt-1">
                      {s.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
