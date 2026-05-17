import Image from "next/image";
import { ABOUT_SNIPPET, CEO } from "@/lib/constants";

export default function AboutSnippet() {
  return (
    <section className="relative py-20 lg:py-28 bg-ink-soft border-y border-ink-line">
      <div className="absolute inset-0 bg-radial-violet opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden glass-violet p-2 shadow-neon">
              <div className="relative h-full w-full rounded-xl overflow-hidden ring-1 ring-neon-500/20">
                <Image
                  src={CEO.photoUrl2}
                  alt={CEO.fullName}
                  fill
                  sizes="(min-width: 1024px) 33vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>
            <p className="text-sm font-semibold text-paper mt-4">{CEO.fullName}</p>
            <p className="text-xs text-paper-dim">{CEO.location}</p>
          </div>

          <div className="lg:col-span-8">
            <p className="text-xs uppercase tracking-[0.25em] text-neon-400 mb-4 neon-text">
              {ABOUT_SNIPPET.eyebrow}
            </p>
            <h2 className="display-heading text-4xl sm:text-5xl font-semibold text-paper mb-8">
              {ABOUT_SNIPPET.heading}
              <br />
              <span className="bg-gradient-to-r from-neon-400 via-neon-300 to-neon-500 bg-clip-text text-transparent">
                {ABOUT_SNIPPET.headingHighlight}
              </span>
            </h2>
            <div className="space-y-5 text-paper-dim leading-relaxed">
              {ABOUT_SNIPPET.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
            <blockquote className="mt-8 border-l-2 border-neon-500 pl-5 italic text-paper">
              “{CEO.quote}”
              <footer className="not-italic text-sm text-paper-dim mt-2">
                {ABOUT_SNIPPET.attribution}
              </footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
