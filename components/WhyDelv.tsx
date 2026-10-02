import SectionIntro from "./SectionIntro";
import { getContent } from "@/lib/content";
import type { Lang } from "@/lib/site";

export default function WhyDelv({ lang }: { lang: Lang }) {
  const G = getContent(lang).delv;
  return (
    <section className="py-20 lg:py-24 bg-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={G.labels.whyEyebrow} heading={G.labels.whyHeading} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {G.whyDelv.map((w, i) => (
            <div key={w.title} className="rounded-2xl glass p-6 glow-border transition-all">
              <span className="font-mono text-xs text-neon-300">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="text-lg font-semibold text-paper mt-2 mb-2">{w.title}</h3>
              <p className="text-sm text-paper-dim leading-relaxed">{w.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
