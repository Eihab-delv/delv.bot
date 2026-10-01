import { DELV_TIMELINE } from "@/lib/delv-group";

/** Vertical log-style timeline of DELV's evolution. */
export default function Timeline() {
  return (
    <ol className="relative border-l border-neon-500/30 ml-2 space-y-8">
      {DELV_TIMELINE.map((t, i) => {
        const last = i === DELV_TIMELINE.length - 1;
        return (
          <li key={t.title} className="pl-8 relative">
            <span
              className={`absolute -left-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-ink ${
                last ? "bg-signal-ok shadow-[0_0_10px_#34d399] animate-pulse" : "bg-neon-500 shadow-[0_0_10px_rgba(168,85,247,0.7)]"
              }`}
            />
            <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-neon-300 mb-1">{t.era}</p>
            <h3 className="text-lg font-semibold text-paper mb-1">{t.title}</h3>
            <p className="text-sm text-paper-dim leading-relaxed max-w-2xl">{t.body}</p>
          </li>
        );
      })}
    </ol>
  );
}
