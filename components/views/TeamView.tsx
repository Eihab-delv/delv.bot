import PageHeader from "../PageHeader";
import Team from "../Team";
import Protocol from "../Protocol";
import { getContent } from "@/lib/content";
import type { Lang } from "@/lib/site";

export default function TeamView({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const p = c.pages.team;
  const T = c.team;
  return (
    <>
      <PageHeader eyebrow={p.eyebrow} heading={p.heading} body={p.body} />
      <Team lang={lang} showCta={false} showAgents={false} />
      <section className="relative py-20 lg:py-24 bg-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 space-y-12">
          {T.roster.map((group) => (
            <div key={group.group}>
              <div className="flex items-baseline gap-3 mb-5">
                <h2 className="text-2xl font-semibold text-paper">{group.group}</h2>
                <span className="text-xs uppercase tracking-[0.2em] text-paper-dim">
                  {group.note || `${group.agents.length} ${T.agentsLabel}`}
                </span>
              </div>
              {group.agents.length > 0 && (
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
                  {group.agents.map((a) => (
                    <div key={a.name} className="rounded-xl glass p-4 glow-border transition-all">
                      <div className="h-10 w-10 rounded-full bg-gradient-to-br from-neon-400 to-neon-700 text-ink flex items-center justify-center font-bold mb-3 shadow-[0_0_18px_rgba(168,85,247,0.5)]">
                        {a.name[0]}
                      </div>
                      <div className="font-medium text-paper" dir="ltr">{a.name}</div>
                      <div className="text-xs text-paper-dim">{a.role || T.roleTbd}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>
      <Protocol lang={lang} />
    </>
  );
}
