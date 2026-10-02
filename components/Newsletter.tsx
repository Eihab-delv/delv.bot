"use client";

import { useState } from "react";
import type { Content } from "@/lib/content";

export default function Newsletter({ content: NEWSLETTER }: { content: Content["newsletter"] }) {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section className="relative py-20 lg:py-28 bg-ink overflow-hidden">
      <div className="absolute inset-0 bg-radial-violet opacity-50" />
      <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 text-center">
        <p className="text-xs uppercase tracking-[0.25em] text-neon-400 mb-4 neon-text">
          {NEWSLETTER.eyebrow}
        </p>
        <h2 className="display-heading text-4xl sm:text-5xl font-semibold text-paper mb-4">
          {NEWSLETTER.heading}
        </h2>
        <p className="text-paper-dim text-lg mb-6">{NEWSLETTER.body}</p>

        <ul className="text-sm text-paper-dim mb-8 space-y-1">
          {NEWSLETTER.bullets.map((b) => (
            <li key={b}>
              <span className="text-neon-400 me-1">·</span>
              {b}
            </li>
          ))}
        </ul>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (email.includes("@")) setSubmitted(true);
          }}
          className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
        >
          <input
            type="email"
            aria-label={NEWSLETTER.inputLabel}
            required
            placeholder={NEWSLETTER.inputPlaceholder}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-full glass text-paper placeholder:text-paper-dim/60 px-5 py-3 text-sm focus:outline-none focus:border-neon-500 focus:shadow-neon-sm"
          />
          <button
            type="submit"
            className="rounded-full bg-neon-500 text-ink px-6 py-3 text-sm font-semibold shadow-neon hover:bg-neon-400 transition-all"
          >
            {submitted ? "✓" : NEWSLETTER.submitLabel}
          </button>
        </form>

        <p className="text-xs text-paper-dim mt-5">{NEWSLETTER.microcopy}</p>
      </div>
    </section>
  );
}
