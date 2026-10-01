import { DELV_GROUP } from "@/lib/delv-group";

/** Row of company credentials (founded, sectors, recognition…). */
export default function CredentialsStrip() {
  return (
    <section className="bg-ink-soft border-y border-ink-line">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {DELV_GROUP.credentials.map((c) => (
          <div key={c.label}>
            <div className="text-[10px] uppercase tracking-[0.2em] text-neon-300 mb-1">{c.label}</div>
            <div className="text-sm text-paper">{c.value}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
