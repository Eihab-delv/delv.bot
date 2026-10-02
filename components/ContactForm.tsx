"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import type { Content } from "@/lib/content";
import { LINKS } from "@/lib/site";

/**
 * Contact form. GitHub Pages has no server, so submitting opens the visitor's
 * email app with a pre-filled message. Swap `onSubmit` for a form service
 * (Formspree, a Lambda, etc.) when one is chosen.
 */
export default function ContactForm({ labels: p }: { labels: Content["pages"]["contact"] }) {
  const params = useSearchParams();
  const [topic, setTopic] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const t = params.get("topic");
    if (t && p.topics.some((o) => o.value === t)) setTopic(t);
  }, [params, p.topics]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const name = `${get("firstName")} ${get("lastName")}`.trim();
    const topicLabel = p.topics.find((o) => o.value === get("topic"))?.label ?? "";
    const subject = `${p.subjectPrefix}: ${topicLabel} — ${name}`;
    const body = [
      get("message"),
      "",
      "—",
      `${p.firstName}: ${get("firstName")}`,
      `${p.lastName}: ${get("lastName")}`,
      `${p.email}: ${get("email")}`,
      `${p.organisation}: ${get("organisation")}`,
      `${p.topic} ${topicLabel}`,
    ].join("\n");
    window.location.href = `${LINKS.delvEmailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  const field =
    "w-full rounded-xl glass text-paper placeholder:text-paper-dim/60 px-4 py-3 text-sm focus:outline-none focus:border-neon-500 focus:shadow-neon-sm";
  const label = "block text-xs uppercase tracking-[0.15em] text-paper-dim mb-2";

  if (sent) {
    return (
      <div className="rounded-2xl glass-violet shadow-neon p-8" role="status">
        <p className="text-xs uppercase tracking-[0.2em] text-signal-ok mb-3">✓</p>
        <h2 className="text-2xl font-semibold text-paper mb-3">{p.sentHeading}</h2>
        <p className="text-paper-dim">
          {p.sentBody}{" "}
          <a href={LINKS.delvEmailHref} className="text-neon-300 hover:text-neon-400">
            {LINKS.delvEmail}
          </a>
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="rounded-2xl glass p-6 sm:p-8 space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className={label}>{p.firstName}</label>
          <input id="firstName" name="firstName" required autoComplete="given-name" className={field} />
        </div>
        <div>
          <label htmlFor="lastName" className={label}>{p.lastName}</label>
          <input id="lastName" name="lastName" required autoComplete="family-name" className={field} />
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className={label}>{p.email}</label>
          <input id="email" name="email" type="email" required autoComplete="email" dir="ltr" className={field} />
        </div>
        <div>
          <label htmlFor="organisation" className={label}>{p.organisation}</label>
          <input id="organisation" name="organisation" autoComplete="organization" className={field} />
        </div>
      </div>
      <div>
        <label htmlFor="topic" className={label}>{p.topic}</label>
        <select
          id="topic"
          name="topic"
          required
          value={topic}
          onChange={(e) => setTopic(e.target.value)}
          className={`${field} appearance-none bg-ink-card`}
        >
          <option value="" disabled>{p.topicPlaceholder}</option>
          {p.topics.map((t) => (
            <option key={t.value} value={t.value}>{t.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className={label}>{p.message}</label>
        <textarea id="message" name="message" required rows={5} className={field} />
      </div>
      <button type="submit" className="rounded-full bg-neon-500 text-ink px-6 py-3 text-sm font-semibold shadow-neon hover:bg-neon-400 transition-all">
        {p.submit}
      </button>
    </form>
  );
}
