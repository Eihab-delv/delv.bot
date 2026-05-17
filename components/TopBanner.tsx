import Link from "next/link";
import { TOP_BANNER } from "@/lib/constants";

export default function TopBanner() {
  return (
    <Link
      href={TOP_BANNER.href}
      className="block w-full bg-ink-soft text-paper text-xs sm:text-sm py-2 px-4 text-center border-b border-ink-line hover:bg-ink-card transition-colors"
    >
      <span className="inline-flex items-center gap-2">
        <span className="relative inline-flex h-2 w-2">
          <span className="absolute inset-0 rounded-full bg-signal-ok animate-ping opacity-75" />
          <span className="relative rounded-full h-2 w-2 bg-signal-ok" />
        </span>
        <span className="font-medium uppercase tracking-[0.2em] text-signal-ok">
          {TOP_BANNER.liveLabel}
        </span>
        <span className="text-paper-dim">— {TOP_BANNER.text}</span>
      </span>
    </Link>
  );
}
