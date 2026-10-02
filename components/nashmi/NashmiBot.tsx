/**
 * NashmiBot — illustrated Nashmi Tutor: a friendly screen face that blinks,
 * two arms (one waves, as if signing hello) and a glowing base.
 * Pure SVG + CSS animation, so it's light and works without WebGL.
 */
export default function NashmiBot({ className = "", label }: { className?: string; label: string }) {
  return (
    <svg viewBox="0 0 320 340" className={className} role="img" aria-label={label}>
      <defs>
        <radialGradient id="nb-glow" cx="50%" cy="45%" r="55%">
          <stop offset="0%" stopColor="#a855f7" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#a855f7" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="nb-shell" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#2a2445" />
          <stop offset="100%" stopColor="#13101f" />
        </linearGradient>
        <linearGradient id="nb-screen" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#0b0916" />
          <stop offset="100%" stopColor="#120d24" />
        </linearGradient>
      </defs>

      <circle cx="160" cy="150" r="150" fill="url(#nb-glow)" />

      {/* base */}
      <ellipse cx="160" cy="312" rx="96" ry="14" fill="#a855f7" opacity="0.25" />
      <rect x="92" y="268" width="136" height="40" rx="20" fill="url(#nb-shell)" stroke="#3b3260" />
      <rect x="112" y="284" width="96" height="4" rx="2" fill="#c084fc" className="nb-pulse" />

      {/* neck */}
      <rect x="146" y="236" width="28" height="36" rx="8" fill="#1d1a2e" stroke="#3b3260" />

      {/* left arm (static, resting) */}
      <g>
        <path d="M86 214 C 60 226, 52 250, 62 270" stroke="#2c2648" strokeWidth="18" strokeLinecap="round" fill="none" />
        <circle cx="62" cy="272" r="12" fill="#3a3366" />
        <circle cx="62" cy="272" r="4" fill="#c084fc" />
      </g>

      {/* right arm (waves / signs hello) */}
      <g className="nb-wave" style={{ transformOrigin: "236px 214px" }}>
        <path d="M234 214 C 262 200, 270 172, 262 146" stroke="#2c2648" strokeWidth="18" strokeLinecap="round" fill="none" />
        <g transform="translate(262 140)">
          <rect x="-13" y="-22" width="26" height="28" rx="9" fill="#3a3366" />
          <rect x="-11" y="-36" width="5" height="16" rx="2.5" fill="#3a3366" />
          <rect x="-4" y="-40" width="5" height="20" rx="2.5" fill="#3a3366" />
          <rect x="3" y="-38" width="5" height="18" rx="2.5" fill="#3a3366" />
          <rect x="9" y="-31" width="5" height="12" rx="2.5" fill="#3a3366" />
          <circle cx="0" cy="-8" r="3.5" fill="#c084fc" />
        </g>
      </g>

      {/* head */}
      <rect x="70" y="56" width="180" height="186" rx="44" fill="url(#nb-shell)" stroke="#4c3d85" strokeWidth="2" />
      <rect x="88" y="78" width="144" height="128" rx="30" fill="url(#nb-screen)" stroke="#a855f7" strokeOpacity="0.5" />

      {/* antenna */}
      <line x1="160" y1="56" x2="160" y2="30" stroke="#3b3260" strokeWidth="5" strokeLinecap="round" />
      <circle cx="160" cy="24" r="8" fill="#34d399" className="nb-pulse" />

      {/* eyes */}
      <g className="nb-blink" style={{ transformOrigin: "160px 132px" }}>
        <rect x="114" y="116" width="26" height="32" rx="13" fill="#c084fc" />
        <rect x="180" y="116" width="26" height="32" rx="13" fill="#c084fc" />
        <circle cx="131" cy="126" r="4" fill="#faf5ff" />
        <circle cx="197" cy="126" r="4" fill="#faf5ff" />
      </g>
      {/* smile */}
      <path d="M136 172 Q160 190 184 172" stroke="#c084fc" strokeWidth="5" strokeLinecap="round" fill="none" />
      {/* cheeks */}
      <circle cx="106" cy="168" r="7" fill="#f472b6" opacity="0.35" />
      <circle cx="214" cy="168" r="7" fill="#f472b6" opacity="0.35" />

      {/* ear lights */}
      <rect x="60" y="126" width="12" height="40" rx="6" fill="#3a3366" />
      <rect x="248" y="126" width="12" height="40" rx="6" fill="#3a3366" />
      <rect x="63" y="136" width="6" height="20" rx="3" fill="#a855f7" className="nb-pulse" />
      <rect x="251" y="136" width="6" height="20" rx="3" fill="#a855f7" className="nb-pulse" />

      {/* speech bubble with Arabic + English hello */}
      <g className="nb-float">
        <rect x="8" y="20" width="96" height="40" rx="14" fill="#10101a" stroke="#a855f7" strokeOpacity="0.6" />
        <text x="56" y="46" textAnchor="middle" fontSize="16" fontWeight="600" fill="#f5f5f7">مرحبا 👋</text>
      </g>
    </svg>
  );
}
