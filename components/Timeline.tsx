type Item = { era: string; title: string; body: string };

/** Vertical log-style timeline. The last item glows green as "now". */
export default function Timeline({ items, liveFirst = false }: { items: Item[]; liveFirst?: boolean }) {
  return (
    <ol className="relative border-s border-neon-500/30 ms-2 space-y-8">
      {items.map((t, i) => {
        const live = liveFirst ? i === 0 : i === items.length - 1;
        return (
          <li key={t.title} className="ps-8 relative">
            <span
              className={`absolute -start-[7px] top-1.5 h-3.5 w-3.5 rounded-full border-2 border-ink ${
                live ? "bg-signal-ok shadow-[0_0_10px_#34d399] animate-pulse" : "bg-neon-500 shadow-[0_0_10px_rgba(168,85,247,0.7)]"
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
