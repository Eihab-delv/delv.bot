import Image from "next/image";
import { getContent } from "@/lib/content";
import { IMAGES, type Lang } from "@/lib/site";

/** Sam's founder story (home + about). */
export default function FounderSnippet({ lang }: { lang: Lang }) {
  const f = getContent(lang).founder;
  return (
    <section className="relative py-20 lg:py-28 bg-ink-soft border-y border-ink-line">
      <div className="absolute inset-0 bg-radial-violet opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass-violet p-2 shadow-neon">
              <div className="relative h-full w-full rounded-xl overflow-hidden ring-1 ring-neon-500/20">
                <Image src={IMAGES.founderAbout} alt="Sam Smair" fill sizes="(min-width: 1024px) 33vw, 100vw" className="object-cover" />
              </div>
            </div>
            <p className="text-sm font-semibold text-paper mt-4">Sam Smair</p>
            <p className="text-xs text-paper-dim">{f.location}</p>
          </div>

          <div className="lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.25em] text-neon-400 mb-4 neon-text">{f.eyebrow}</p>
            <h2 className="display-heading text-4xl sm:text-5xl font-semibold text-paper mb-8">
              {f.heading}
              <br />
              <span className="bg-gradient-to-r rtl:bg-gradient-to-l from-neon-400 via-neon-300 to-neon-500 bg-clip-text text-transparent">
                {f.headingHighlight}
              </span>
            </h2>
            <div className="space-y-5 text-paper-dim leading-relaxed">
              {f.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <blockquote className="mt-8 border-s-2 border-neon-500 ps-5 italic text-paper">
              “{f.quote}”
              <footer className="not-italic text-sm text-paper-dim mt-2">{f.attribution}</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
