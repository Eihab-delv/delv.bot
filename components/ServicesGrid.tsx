import Link from "next/link";
import SectionIntro from "./SectionIntro";
import CapabilityCard from "./CapabilityCard";
import { PAGES } from "@/lib/constants";
import { CAPABILITIES } from "@/lib/delv-group";

type Props = { eyebrow: string; heading: string; body?: string; cta?: { label: string; href: string }; tone?: "ink" | "soft" };

export default function ServicesGrid({ eyebrow, heading, body, cta, tone = "ink" }: Props) {
  return (
    <section className={`relative py-20 lg:py-24 ${tone === "soft" ? "bg-ink-soft border-y border-ink-line" : "bg-ink"}`}>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionIntro eyebrow={eyebrow} heading={heading} body={body} />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {CAPABILITIES.map((c) => (
            <CapabilityCard key={c.slug} c={c} exploreLabel={PAGES.services.exploreLabel} />
          ))}
        </div>
        {cta && (
          <div className="mt-8">
            <Link href={cta.href} className="text-sm font-semibold text-neon-300 hover:text-neon-400">
              {cta.label}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
