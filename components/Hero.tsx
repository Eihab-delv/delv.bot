import Image from "next/image";
import Link from "next/link";
import { HERO, HERO_ASSETS, CEO, IRIS } from "@/lib/constants";
import CodeRain from "./CodeRain";
import HeroRobot from "./HeroRobot";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink">
      {/* Backdrop layers */}
      <div className="absolute inset-0 bg-radial-violet" />
      <div className="absolute inset-0 bg-radial-violet-bl" />
      <div className="absolute inset-0 grid-bg opacity-40" />
      <CodeRain />

      {/* Scanline overlay */}
      <div className="absolute inset-0 pointer-events-none scanlines" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-12 pb-20 lg:pt-20 lg:pb-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: copy */}
          <div className="relative z-10 animate-slide-up">
            <p className="text-xs uppercase tracking-[0.25em] text-neon-400 mb-6 neon-text">
              {HERO.eyebrow}
            </p>
            <h1 className="display-heading text-5xl sm:text-6xl lg:text-7xl font-semibold text-paper mb-8">
              {HERO.headingLine1} <br />
              {HERO.headingLine2} <br />
              <span className="bg-gradient-to-r from-neon-400 via-neon-300 to-neon-500 bg-clip-text text-transparent">
                {HERO.headingLine3}
              </span>
            </h1>
            <p className="text-paper-dim text-base sm:text-lg leading-relaxed mb-6 max-w-xl">
              {HERO.body}
            </p>
            <p className="text-xs text-paper-dim/70 mb-8">{HERO.socialProof}</p>

            <div className="flex flex-wrap gap-3">
              <Link
                href={HERO.ctaPrimary.href}
                className="inline-flex items-center rounded-full bg-neon-500 text-ink px-6 py-3 text-sm font-semibold shadow-neon hover:bg-neon-400 transition-all"
              >
                {HERO.ctaPrimary.label}
              </Link>
              <Link
                href={HERO.ctaSecondary.href}
                className="inline-flex items-center rounded-full glass text-paper px-6 py-3 text-sm font-medium glow-border transition-all"
              >
                {HERO.ctaSecondary.label}
              </Link>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-ink-line">
              {HERO.stats.map((s) => (
                <div key={s.label}>
                  <div className="text-3xl font-semibold text-paper">{s.value}</div>
                  <div className="text-[10px] uppercase tracking-[0.2em] text-paper-dim mt-1">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: layered scene with robot, portrait, floating cards */}
          <div className="relative h-[560px] lg:h-[640px]">
            {/* Glow blob behind robot */}
            <div className="absolute top-10 left-1/2 -translate-x-1/2 h-[420px] w-[420px] rounded-full bg-neon-500/20 blur-3xl" />

            {/* Robot — center-back. Uses 3D render image if available, falls back to SVG */}
            <div className="absolute inset-0 flex items-end justify-center animate-float">
              <HeroRobot
                src={HERO_ASSETS.robotImage}
                alt={HERO_ASSETS.robotAlt}
                className="h-[100%] w-auto"
              />
            </div>

            {/* Sam's portrait — glass card, top-left */}
            <div className="absolute top-4 left-0 sm:left-2 lg:-left-2 w-[230px] glass-violet rounded-2xl p-3 shadow-neon z-20">
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden ring-1 ring-neon-500/20">
                <Image
                  src={CEO.photoUrl}
                  alt={CEO.fullName}
                  fill
                  sizes="240px"
                  className="object-cover"
                  priority
                />
              </div>
              <div className="flex items-center gap-2 mt-3 px-1">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-neon-400 to-neon-700 flex items-center justify-center text-[10px] font-bold text-ink">
                  {CEO.initials}
                </div>
                <div className="min-w-0">
                  <div className="text-sm font-semibold text-paper truncate">
                    {CEO.fullName}
                  </div>
                  <div className="text-[10px] text-paper-dim">{CEO.title}</div>
                </div>
              </div>
            </div>

            {/* "Protected by IRIS" status — top-right */}
            <div className="absolute top-2 right-0 sm:right-2 glass-violet rounded-full px-4 py-2 flex items-center gap-2 z-20 shadow-neon-sm">
              <span className="text-[10px] uppercase tracking-[0.2em] text-paper-dim">
                protected by
              </span>
              <span className="text-xs font-semibold text-neon-300 neon-text">IRIS</span>
            </div>

            {/* IRIS card — top-right below status */}
            <div className="absolute top-16 right-0 sm:right-2 glass-violet rounded-2xl p-3 pr-5 flex items-center gap-3 z-20 shadow-neon">
              <div className="h-9 w-9 rounded-full bg-gradient-to-br from-neon-400 to-neon-700 flex items-center justify-center font-bold text-ink shadow-[0_0_18px_rgba(168,85,247,0.6)]">
                {IRIS.name[0]}
              </div>
              <div>
                <div className="flex items-center gap-1.5">
                  <span className="text-sm font-semibold text-paper">{IRIS.name}</span>
                  <span className="text-[9px] uppercase tracking-wider bg-neon-500/20 border border-neon-500/40 text-neon-300 px-1.5 py-0.5 rounded">
                    {IRIS.badge}
                  </span>
                </div>
                <div className="text-[10px] text-paper-dim">{IRIS.role}</div>
              </div>
              <span className="ml-2 h-2 w-2 rounded-full bg-signal-ok animate-pulse shadow-[0_0_8px_#34d399]" />
            </div>

            {/* IRIS: shielding pill */}
            <div className="absolute top-44 left-6 lg:left-0 glass-violet rounded-full px-3 py-1.5 flex items-center gap-2 z-20">
              <span className="h-2 w-2 rounded-full bg-neon-400 animate-pulse" />
              <span className="text-[11px] font-medium text-paper">
                {HERO.shieldStatus.irisStatus}
              </span>
            </div>

            {/* "20+ companies" pill */}
            <div className="absolute bottom-44 left-2 lg:-left-4 glass rounded-full px-3 py-1.5 flex items-center gap-2 z-20">
              <span className="h-1.5 w-1.5 rounded-full bg-neon-500" />
              <span className="text-[11px] font-medium text-paper">
                {HERO.shieldStatus.companies}
              </span>
            </div>

            {/* Chat with me card — bottom right */}
            <div className="absolute bottom-4 right-0 sm:right-2 w-[240px] glass-violet rounded-2xl p-4 z-20 shadow-neon">
              <p className="text-sm text-paper leading-snug mb-3">{IRIS.tagline}</p>
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold text-neon-300 neon-text">
                  {IRIS.chatPrompt}
                </span>
                <span className="text-neon-300 text-lg leading-none">↓</span>
              </div>
            </div>

            {/* Bottom badge — Protected by IRIS */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20">
              <div className="glass rounded-full px-4 py-1.5 flex items-center gap-2 text-[10px] uppercase tracking-[0.25em] text-paper-dim">
                <span className="h-1.5 w-1.5 rounded-full bg-signal-ok animate-pulse" />
                {HERO.shieldStatus.protected}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
