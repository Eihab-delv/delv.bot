import Image from "next/image";
import { IMAGES } from "@/lib/site";

/** "Nashmi.bot" wordmark with a small "by DELV" signature. */
export default function BrandMark({ by, size = "md" }: { by: string; size?: "md" | "lg" }) {
  const big = size === "lg";
  return (
    <span dir="ltr" className="inline-flex items-center gap-2.5">
      <span className={`font-bold tracking-tight text-paper ${big ? "text-2xl" : "text-lg"}`}>
        Nashmi<span className="text-neon-400">.bot</span>
      </span>
      <span className="inline-flex items-center gap-1.5 border-s border-ink-line ps-2.5 text-[10px] uppercase tracking-[0.15em] text-paper-dim">
        <span className="normal-case tracking-normal">{by}</span>
        <Image
          src={IMAGES.delvLogo.src}
          alt="DELV"
          width={IMAGES.delvLogo.width}
          height={IMAGES.delvLogo.height}
          className={big ? "h-4 w-auto" : "h-3 w-auto"}
        />
      </span>
    </span>
  );
}
