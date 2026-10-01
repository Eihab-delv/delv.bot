"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { PAGES } from "@/lib/constants";
import { DELV_GROUP, ENQUIRY_TOPICS } from "@/lib/delv-group";

/**
 * Contact form. GitHub Pages has no server, so submitting opens the visitor's
 * email app with a pre-filled message to DELV. Swap `onSubmit` for a form
 * service (Formspree, a Lambda, etc.) when one is chosen.
 */
export default function ContactForm() {
  const p = PAGES.contact;
  const params = useSearchParams();
  const [topic, setTopic] = useState("");
  const [sent, setSent] = useState(false);

  useEffect(() => {
    const t = params.get("topic");
    if (t && (ENQUIRY_TOPICS as readonly string[]).includes(t)) setTopic(t);
  }, [params]);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const get = (k: string) => String(f.get(k) ?? "").trim();
    const name = `${get("firstName")} ${get("lastName")}`.trim();
    const subject = `${p.subjectPrefix}: ${get("topic") || "General"} — ${name}`;
    const body = [
      get("message"),
      "",
      "—",
      `${p.firstName}: ${get("firstName")}`,
      `${p.lastName}: ${get("lastName")}`,
      `${p.email}: ${get("email")}`,
      `${p.organisation}: ${get("organisation")}`,
      `${p.topic} ${get("topic")}`,
    ].join("\n");
    window.location.href = `${DELV_GROUP.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
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
          <a href={DELV_GROUP.emailHref} className="text-neon-300 hover:text-neon-400">
            {DELV_GROUP.email}
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
          <input id="email" name="email" type="email" required autoComplete="email" className={field} />
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
          {ENQUIRY_TOPICS.map((t) => (
            <option key={t} value={t}>{t}</option>
          ))}
        </select>
      </div>
      <div>
        <label htmlFor="message" className={label}>{p.message}</label>
        <textarea id="message" name="message" required rows={5} className={field} />
      </div>
      <button
        type="submit"
        className="rounded-full bg-neon-500 text-ink px-6 py-3 text-sm font-semibold shadow-neon hover:bg-neon-400 transition-all"
      >
        {p.submit}
      </button>
    </form>
  );
}
