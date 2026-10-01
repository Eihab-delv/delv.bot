import Link from "next/link";

type Props = { heading: string; body: string; cta: { label: string; href: string } };

/** Full-width call-to-action band used at the bottom of pages. */
export default function CtaBand({ heading, body, cta }: Props) {
  return (
    <section className="relative py-20 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-radial-violet opacity-60" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="display-heading text-3xl sm:text-4xl font-semibold text-paper mb-4">{heading}</h2>
        <p className="text-paper-dim text-lg mb-8">{body}</p>
        <Link
          href={cta.href}
          className="inline-flex items-center rounded-full bg-neon-500 text-ink px-6 py-3 text-sm font-semibold shadow-neon hover:bg-neon-400 transition-all"
        >
          {cta.label}
        </Link>
      </div>
    </section>
  );
}
