"use client";

import { useState, useRef, useEffect, useCallback } from "react";
import Link from "next/link";
import { Send, X } from "lucide-react";
import { IRIS } from "@/lib/constants";

type Message = {
  id: number;
  sender: "IRIS" | "You";
  text: string;
  link?: { label: string; href: string };
};

/** Fire this from anywhere (e.g. the hero card) to open the chat. */
export const IRIS_OPEN_EVENT = "iris:open";

function replyTo(text: string): Pick<Message, "text" | "link"> {
  const q = text.toLowerCase();
  const topic = IRIS.topics.find((t) => t.keywords.some((k) => q.includes(k)));
  if (topic) return { text: topic.answer, link: topic.link };
  return {
    text: IRIS.cannedResponses[Math.floor(Math.random() * IRIS.cannedResponses.length)],
  };
}

export default function IrisChat() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, sender: "IRIS", text: IRIS.greeting },
  ]);
  const [input, setInput] = useState("");
  const [thinking, setThinking] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const launcherRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    scrollerRef.current?.scrollTo({
      top: scrollerRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [messages, thinking]);

  // Open from external triggers
  useEffect(() => {
    const onOpen = () => setOpen(true);
    window.addEventListener(IRIS_OPEN_EVENT, onOpen);
    return () => window.removeEventListener(IRIS_OPEN_EVENT, onOpen);
  }, []);

  // Focus the input on open, close on Escape
  useEffect(() => {
    if (!open) return;
    inputRef.current?.focus();
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const ask = useCallback((raw: string) => {
    const text = raw.trim();
    if (!text) return;
    setMessages((m) => [...m, { id: m.length + 1, sender: "You", text }]);
    setInput("");
    setThinking(true);
    setTimeout(() => {
      const reply = replyTo(text);
      setMessages((m) => [...m, { id: m.length + 1, sender: "IRIS", ...reply }]);
      setThinking(false);
    }, 700);
  }, []);

  const close = () => {
    setOpen(false);
    requestAnimationFrame(() => launcherRef.current?.focus());
  };

  return (
    <>
      {/* Floating launcher */}
      {!open && (
        <button
          ref={launcherRef}
          type="button"
          onClick={() => setOpen(true)}
          aria-label={IRIS.openLabel}
          className="fixed bottom-6 right-6 z-50 h-14 w-14 rounded-full bg-gradient-to-br from-neon-400 to-neon-700 text-ink shadow-neon-lg flex items-center justify-center hover:scale-105 transition-transform"
        >
          <span className="font-bold text-lg">I</span>
        </button>
      )}

      {/* Panel */}
      {open && (
        <div
          role="dialog"
          aria-label={`${IRIS.name} chat`}
          className="fixed bottom-6 right-6 z-50 w-[calc(100vw-3rem)] sm:w-96 max-h-[80vh] rounded-2xl glass-violet shadow-neon-lg flex flex-col overflow-hidden animate-slide-up"
        >
          {/* Header */}
          <div className="bg-gradient-to-br from-neon-500/30 to-neon-700/20 px-4 py-3 flex items-start gap-3 border-b border-neon-500/20">
            <div className="h-10 w-10 rounded-full bg-gradient-to-br from-neon-400 to-neon-700 text-ink flex items-center justify-center font-bold shrink-0 shadow-[0_0_18px_rgba(168,85,247,0.6)]">
              I
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-paper">{IRIS.name}</span>
                <span className="text-[10px] uppercase tracking-wider bg-neon-500/20 border border-neon-500/40 text-neon-300 px-1.5 py-0.5 rounded">
                  {IRIS.badge}
                </span>
              </div>
              <div className="text-xs text-paper-dim">{IRIS.role}</div>
            </div>
            <button
              type="button"
              onClick={close}
              aria-label={IRIS.closeLabel}
              className="text-paper-dim hover:text-paper"
            >
              <X size={18} />
            </button>
          </div>

          <p className="px-4 py-3 text-sm text-paper-dim border-b border-ink-line bg-ink/40">
            {IRIS.tagline}
          </p>

          {/* Messages */}
          <div
            ref={scrollerRef}
            aria-live="polite"
            className="flex-1 overflow-y-auto px-4 py-4 space-y-3 bg-ink/60"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${m.sender === "You" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                    m.sender === "You"
                      ? "bg-neon-500 text-ink rounded-br-md shadow-neon-sm"
                      : "glass text-paper rounded-bl-md"
                  }`}
                >
                  {m.text}
                  {m.link && (
                    <Link
                      href={m.link.href}
                      onClick={() => setOpen(false)}
                      className="mt-2 block text-xs font-semibold text-neon-300 hover:text-neon-400"
                    >
                      {m.link.label} →
                    </Link>
                  )}
                </div>
              </div>
            ))}
            {thinking && (
              <div className="flex justify-start">
                <div className="glass rounded-2xl rounded-bl-md px-4 py-2.5 text-sm text-paper-dim italic">
                  {IRIS.thinkingLabel}
                </div>
              </div>
            )}
            {messages.length === 1 && !thinking && (
              <div className="pt-1">
                <p className="text-[10px] uppercase tracking-[0.2em] text-paper-dim mb-2">
                  {IRIS.suggestionsLabel}
                </p>
                <div className="flex flex-wrap gap-2">
                  {IRIS.suggestions.map((s) => (
                    <button
                      key={s}
                      type="button"
                      onClick={() => ask(s)}
                      className="rounded-full border border-neon-500/30 bg-neon-500/10 px-3 py-1.5 text-xs text-neon-300 hover:bg-neon-500/20 transition-colors"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault();
              ask(input);
            }}
            className="border-t border-ink-line px-3 py-3 flex items-center gap-2 bg-ink-soft"
          >
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder={IRIS.inputPlaceholder}
              aria-label={IRIS.inputPlaceholder}
              className="flex-1 rounded-full glass text-paper placeholder:text-paper-dim/60 px-4 py-2 text-sm focus:outline-none focus:border-neon-500"
            />
            <button
              type="submit"
              aria-label={IRIS.sendLabel}
              disabled={!input.trim() || thinking}
              className="h-9 w-9 rounded-full bg-neon-500 text-ink flex items-center justify-center disabled:opacity-40 hover:bg-neon-400 transition-colors shadow-neon-sm"
            >
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </>
  );
}
