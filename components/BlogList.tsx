"use client";

import { useMemo, useState } from "react";
import { INSIGHTS } from "@/lib/delv-group";
import { PAGES } from "@/lib/constants";

/** Filterable list of posts. Posts are titles only until full articles are published. */
export default function BlogList() {
  const p = PAGES.insights;
  const topics = useMemo(() => Array.from(new Set(INSIGHTS.map((i) => i.topic))), []);
  const [topic, setTopic] = useState<string | null>(null);
  const featured = INSIGHTS.find((i) => i.featured);
  const rest = INSIGHTS.filter((i) => !i.featured && (!topic || i.topic === topic));
  const showFeatured = featured && (!topic || featured.topic === topic);

  const chip = (active: boolean) =>
    `rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors border ${
      active
        ? "bg-neon-500 text-ink border-neon-500"
        : "border-ink-line text-paper-dim hover:text-neon-300 hover:border-neon-500/40"
    }`;

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-10" role="group" aria-label="Filter by topic">
        <button type="button" className={chip(topic === null)} aria-pressed={topic === null} onClick={() => setTopic(null)}>
          {p.allTopics}
        </button>
        {topics.map((t) => (
          <button key={t} type="button" className={chip(topic === t)} aria-pressed={topic === t} onClick={() => setTopic(t)}>
            {t}
          </button>
        ))}
      </div>

      {showFeatured && featured && (
        <article className="rounded-2xl glass-violet shadow-neon p-8 lg:p-10 mb-6">
          <div className="flex flex-wrap items-center gap-3 mb-4 text-[11px] uppercase tracking-[0.2em]">
            <span className="text-neon-300 neon-text">{p.featuredLabel}</span>
            <span className="text-paper-dim">{featured.topic}</span>
            {featured.readTime && <span className="text-paper-dim">· {featured.readTime}</span>}
          </div>
          <h2 className="display-heading text-2xl sm:text-3xl font-semibold text-paper mb-4 max-w-3xl">{featured.title}</h2>
          {featured.excerpt && <p className="text-paper-dim leading-relaxed max-w-3xl mb-5">{featured.excerpt}</p>}
          <span className="text-xs uppercase tracking-wider text-signal-ok">{p.soonLabel}</span>
        </article>
      )}

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {rest.map((post) => (
          <article key={post.title} className="rounded-2xl glass p-6 flex flex-col">
            <p className="text-[11px] uppercase tracking-[0.2em] text-neon-300 mb-3">{post.topic}</p>
            <h3 className="text-lg font-semibold text-paper leading-snug mb-6">{post.title}</h3>
            <span className="mt-auto text-xs uppercase tracking-wider text-paper-dim">{p.soonLabel}</span>
          </article>
        ))}
      </div>
    </div>
  );
}
