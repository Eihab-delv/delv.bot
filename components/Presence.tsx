import { PRESENCE } from "@/lib/constants";

export default function Presence() {
  return (
    <section className="relative py-20 lg:py-28 bg-ink-soft border-y border-ink-line">
      <div className="absolute inset-0 bg-radial-violet opacity-40" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.25em] text-neon-400 mb-4 neon-text">
          {PRESENCE.eyebrow}
        </p>
        <h2 className="display-heading text-4xl sm:text-5xl font-semibold text-paper mb-4">
          {PRESENCE.heading}
        </h2>
        <p className="text-paper-dim text-lg max-w-3xl mb-10">{PRESENCE.body}</p>

        <div className="rounded-2xl glass p-6 mb-8">
          <div className="aspect-[16/7] rounded-xl bg-ink relative overflow-hidden border border-ink-line">
            {/* Decorative world-dot grid */}
            <svg viewBox="0 0 800 350" className="absolute inset-0 w-full h-full">
              {Array.from({ length: 200 }).map((_, i) => {
                const x = (i * 13) % 800;
                const y = ((i * 23) % 320) + 15;
                const isOffice = i % 17 === 0;
                return (
                  <circle
                    key={i}
                    cx={x}
                    cy={y}
                    r={isOffice ? 3 : 1.5}
                    fill={isOffice ? "#a855f7" : "#3a3a48"}
                    opacity={isOffice ? 1 : 0.5}
                  >
                    {isOffice && (
                      <animate
                        attributeName="opacity"
                        values="0.5;1;0.5"
                        dur="3s"
                        repeatCount="indefinite"
                      />
                    )}
                  </circle>
                );
              })}
            </svg>
            <div className="absolute bottom-4 left-4 inline-flex gap-4 text-xs text-paper-dim glass rounded-full px-4 py-2">
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-neon-500 shadow-[0_0_8px_rgba(168,85,247,0.6)]" />
                {PRESENCE.legend.office}
              </span>
              <span className="inline-flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-paper-dim/50" />
                {PRESENCE.legend.remote}
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {PRESENCE.stats.map((s) => (
            <div key={s.label} className="rounded-xl glass p-5">
              <div className="text-3xl font-semibold text-paper">{s.value}</div>
              <div className="text-xs uppercase tracking-wider text-paper-dim mt-1">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        <p className="text-sm text-paper-dim/70 mt-6">{PRESENCE.footnote}</p>
      </div>
    </section>
  );
}
