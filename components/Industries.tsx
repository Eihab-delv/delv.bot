import SectionIntro from "./SectionIntro";
import { getContent } from "@/lib/content";
import type { Lang } from "@/lib/site";

export default function Industries({ lang }: { lang: Lang }) {
  const c = getContent(lang);
  const p = c.pages.services;
  return (
    <section id="industries" className="relative py-20 lg:py-24 bg-ink scroll-mt-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={p.industriesEyebrow} heading={p.industriesHeading} body={p.industriesBody} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {c.industries.map((ind, i) => (
            <div key={ind.name} className="rounded-2xl glass p-6">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-paper-dim mb-3">
                {p.sectorLabel} · {String(i + 1).padStart(2, "0")}
              </p>
              <h3 className="text-lg font-semibold text-paper mb-2">{ind.name}</h3>
              <p className="text-sm text-paper-dim leading-relaxed mb-4">{ind.body}</p>
              <div className="flex flex-wrap gap-1.5">
                {ind.tags.map((t) => (
                  <span key={t} className="rounded-full border border-neon-500/25 bg-neon-500/10 px-2.5 py-0.5 text-[11px] text-neon-300">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
