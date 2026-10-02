import { getContent } from "@/lib/content";
import type { Lang } from "@/lib/site";

function renderBoldedBullet(text: string) {
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((p, i) => {
    if (p.startsWith("**") && p.endsWith("**")) {
      return (
        <strong key={i} className="font-semibold text-paper">
          {p.slice(2, -2)}
        </strong>
      );
    }
    return <span key={i}>{p}</span>;
  });
}

export default function Protocol({ lang }: { lang: Lang }) {
  const PROTOCOL = getContent(lang).protocol;
  return (
    <section className="relative py-20 lg:py-28 bg-ink">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.25em] text-neon-400 mb-4 neon-text">
          {PROTOCOL.eyebrow}
        </p>
        <h2 className="display-heading text-4xl sm:text-5xl font-semibold text-paper mb-4">
          {PROTOCOL.heading}
        </h2>
        <p className="text-paper-dim text-lg max-w-3xl mb-12">{PROTOCOL.subheading}</p>

        {/* Two cards: IRIS + Founder */}
        <div className="grid md:grid-cols-2 gap-6">
          {[PROTOCOL.iris, PROTOCOL.founder].map((card, idx) => {
            const isIris = idx === 0;
            return (
              <div
                key={card.name}
                className={`rounded-2xl p-8 ${
                  isIris ? "glass-violet shadow-neon" : "glass"
                }`}
              >
                <p
                  className={`text-xs uppercase tracking-[0.25em] mb-3 ${
                    isIris ? "text-neon-300 neon-text" : "text-paper-dim"
                  }`}
                >
                  {card.role}
                </p>
                <h3 className="text-3xl font-semibold mb-6 text-paper">
                  {card.name}
                  <span className="ms-2 text-base font-normal text-paper-dim/70">
                    {card.typeLabel}
                  </span>
                </h3>
                <ul className="space-y-2.5 mb-6">
                  {card.points.map((p) => (
                    <li key={p} className="flex gap-3 text-sm text-paper-dim">
                      <span className={isIris ? "text-neon-400" : "text-signal-ok"}>▸</span>
                      {p}
                    </li>
                  ))}
                </ul>
                <p className="text-xs italic text-paper-dim/60">{card.footnote}</p>
              </div>
            );
          })}
        </div>

        {/* Three pillars */}
        <div className="grid md:grid-cols-3 gap-6 mt-6">
          {PROTOCOL.pillars.map((p) => (
            <div key={p.title} className="rounded-2xl glass p-6 glow-border transition-all">
              <div className="text-2xl mb-3">{p.icon}</div>
              <h4 className="font-semibold text-paper mb-3">{p.title}</h4>
              <ul className="space-y-2 text-sm text-paper-dim mb-4">
                {p.bullets.map((b, i) => (
                  <li key={i} className="leading-relaxed">
                    {renderBoldedBullet(b)}
                  </li>
                ))}
              </ul>
              <p className="text-xs uppercase tracking-wider text-neon-400 pt-3 border-t border-ink-line">
                {p.footer}
              </p>
            </div>
          ))}
        </div>

        {/* Connection map */}
        <div className="mt-10 rounded-2xl glass-violet p-8 shadow-neon-sm">
          <p className="text-xs uppercase tracking-[0.25em] text-neon-300 mb-6 neon-text">
            {PROTOCOL.connectionMap.title}
          </p>
          <div className="flex flex-wrap items-center gap-4 justify-center">
            <div className="rounded-full bg-neon-500 text-ink px-5 py-3 font-bold shadow-[0_0_24px_rgba(168,85,247,0.6)]">
              {PROTOCOL.connectionMap.hubLabel}
            </div>
            <div className="text-neon-400 text-xl rtl:-scale-x-100">→</div>
            <div className="flex flex-wrap gap-2 justify-center">
              {PROTOCOL.connectionMap.spokes.map((s) => (
                <span
                  key={s}
                  className="rounded-full glass px-4 py-2 text-sm text-paper"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
          <p className="text-sm text-paper-dim mt-6 max-w-3xl">
            {PROTOCOL.connectionMap.caption}
          </p>
        </div>
      </div>
    </section>
  );
}
