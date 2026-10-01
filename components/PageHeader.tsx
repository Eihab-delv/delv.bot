type Props = { eyebrow: string; heading: string; body?: string };

/** Hero-style header used at the top of inner pages. */
export default function PageHeader({ eyebrow, heading, body }: Props) {
  return (
    <section className="relative overflow-hidden bg-ink border-b border-ink-line">
      <div className="absolute inset-0 bg-radial-violet" />
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-14 lg:pt-24 lg:pb-20 animate-slide-up">
        <p className="text-xs uppercase tracking-[0.25em] text-neon-400 mb-4 neon-text">{eyebrow}</p>
        <h1 className="display-heading text-4xl sm:text-5xl lg:text-6xl font-semibold text-paper mb-4">
          {heading}
        </h1>
        {body && <p className="text-paper-dim text-lg max-w-2xl">{body}</p>}
      </div>
    </section>
  );
}
