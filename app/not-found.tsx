import Link from "next/link";
import PageHeader from "@/components/PageHeader";
import { PAGES } from "@/lib/constants";

export default function NotFound() {
  const p = PAGES.notFound;
  return (
    <>
      <PageHeader eyebrow={p.eyebrow} heading={p.heading} body={p.body} />
      <section className="py-16 bg-ink">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href={p.cta.href}
            prefetch={false}
            className="inline-flex items-center rounded-full bg-neon-500 text-ink px-6 py-3 text-sm font-semibold shadow-neon hover:bg-neon-400 transition-all"
          >
            {p.cta.label}
          </Link>
        </div>
      </section>
    </>
  );
}
