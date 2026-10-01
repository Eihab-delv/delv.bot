type Props = { eyebrow: string; heading: string; body?: string; className?: string };

/** Eyebrow + heading + optional body used at the top of page sections. */
export default function SectionIntro({ eyebrow, heading, body, className = "" }: Props) {
  return (
    <div className={`mb-10 ${className}`}>
      <p className="text-xs uppercase tracking-[0.25em] text-neon-400 mb-4 neon-text">{eyebrow}</p>
      <h2 className="display-heading text-3xl sm:text-4xl font-semibold text-paper mb-4">{heading}</h2>
      {body && <p className="text-paper-dim text-lg max-w-3xl">{body}</p>}
    </div>
  );
}
