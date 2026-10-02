import SectionIntro from "./SectionIntro";
import CapabilityCard from "./CapabilityCard";
import { getContent } from "@/lib/content";
import type { Lang } from "@/lib/site";

type Props = { lang: Lang; eyebrow: string; heading: string; body?: string; tone?: "ink" | "soft" };

export default function ServicesGrid({ lang, eyebrow, heading, body, tone = "ink" }: Props) {
  const c = getContent(lang);
  return (
    <section className={`relative py-20 lg:py-24 ${tone === "soft" ? "bg-ink-soft border-y border-ink-line" : "bg-ink"}`}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={eyebrow} heading={heading} body={body} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {c.capabilities.map((cap) => (
            <CapabilityCard key={cap.slug} lang={lang} c={cap} exploreLabel={c.pages.services.exploreLabel} />
          ))}
        </div>
      </div>
    </section>
  );
}
