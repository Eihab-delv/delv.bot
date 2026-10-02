import Image from "next/image";
import Link from "next/link";
import type { Capability } from "@/lib/content/types";
import { IMAGES, localize, type Lang } from "@/lib/site";

export default function CapabilityCard({ lang, c, exploreLabel }: { lang: Lang; c: Capability; exploreLabel: string }) {
  return (
    <Link href={localize(lang, `/services/${c.slug}`)} className="group rounded-2xl glass overflow-hidden glow-border transition-all flex flex-col">
      <div className="relative aspect-[16/7] overflow-hidden">
        <Image
          src={IMAGES.capabilities[c.slug]}
          alt=""
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-card to-transparent" />
        <span className="absolute top-3 start-3 font-mono text-xs text-neon-300 glass rounded-full px-2.5 py-1">{c.number}</span>
      </div>
      <div className="p-6 flex flex-col flex-1">
        <h3 className="text-xl font-semibold text-paper mb-2">{c.name}</h3>
        <p className="text-sm text-paper-dim leading-relaxed mb-5">{c.short}</p>
        <span className="mt-auto text-sm font-semibold text-neon-300 group-hover:text-neon-400">{exploreLabel}</span>
      </div>
    </Link>
  );
}
