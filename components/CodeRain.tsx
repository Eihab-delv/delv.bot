/**
 * Background "code bleed" — scrolling pseudo-terminal text.
 * Pure CSS animation, no JS, no images. Mounted behind the hero scene.
 */
const LINES = [
  "iris.boot() ok",
  "agents.connect(9) ok",
  "REEL → 2 videos rendered",
  "NOVA → brand assets ready",
  "Countries active: 15",
  "Systems: nominal",
  "AI Services: governance framework live",
  "Robotics: pilot program deployed",
  "COPY → 17 drafts ready",
  "VOICE → podcast brief queued",
  "AXIS → article 1,247 published",
  "Aria → creative deck ready",
  "Tasks completed: 1,247",
  "48hr prototype: delivered",
  "Errors: 0",
  "Latency: 41ms p95",
  "Uptime: 99.997%",
  "iris.shielding() active",
  "buildos.daemon → online",
  "ProductionOS → 4/4 agents online",
  "SOVP → PULSE listening",
  "NOVA → brand assets ready",
  "Countries active: 15",
  "PROTECTED BY IRIS",
];

export default function CodeRain() {
  const block = LINES.join("\n");
  // Repeat block to cover full hero height even on tall screens
  const text = Array(6).fill(block).join("\n");

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none mask-fade-y">
      <div className="absolute inset-0 grid grid-cols-3 gap-12 px-8 py-6">
        {[0, 1, 2].map((col) => (
          <div
            key={col}
            className="code-rain animate-code-scroll"
            style={{
              animationDuration: `${50 + col * 15}s`,
              animationDelay: `${col * -8}s`,
            }}
          >
            {text}
          </div>
        ))}
      </div>
    </div>
  );
}
