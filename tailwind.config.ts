import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Pitch-black base
        ink: {
          DEFAULT: "#06060a",
          soft: "#0d0d14",
          card: "#10101a",
          line: "#1e1e2a",
        },
        paper: {
          DEFAULT: "#f5f5f7",
          dim: "#a1a1aa",
        },
        // Neon violet — matches ayde.bot glow
        neon: {
          50: "#faf5ff",
          100: "#f3e8ff",
          300: "#d8b4fe",
          400: "#c084fc",
          500: "#a855f7",
          600: "#9333ea",
          700: "#7e22ce",
          glow: "rgba(168, 85, 247, 0.35)",
        },
        // Status colors
        signal: {
          ok: "#34d399",
          warn: "#fbbf24",
          err: "#fb7185",
        },
      },
      fontFamily: {
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Inter", "sans-serif"],
        mono: ["ui-monospace", "SFMono-Regular", "Menlo", "Monaco", "Consolas", "monospace"],
        display: ["ui-sans-serif", "system-ui", "-apple-system", "Inter", "sans-serif"],
      },
      boxShadow: {
        "neon-sm": "0 0 20px rgba(168, 85, 247, 0.25)",
        neon: "0 0 40px rgba(168, 85, 247, 0.35), 0 0 80px rgba(168, 85, 247, 0.15)",
        "neon-lg": "0 0 60px rgba(168, 85, 247, 0.45), 0 0 120px rgba(168, 85, 247, 0.2)",
        glass: "0 8px 32px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.06)",
      },
      backgroundImage: {
        "radial-violet":
          "radial-gradient(circle at 30% 40%, rgba(168, 85, 247, 0.18), transparent 55%)",
        "radial-violet-bl":
          "radial-gradient(circle at 70% 80%, rgba(168, 85, 247, 0.12), transparent 60%)",
        "grid-violet":
          "linear-gradient(rgba(168, 85, 247, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(168, 85, 247, 0.08) 1px, transparent 1px)",
      },
      animation: {
        "pulse-slow": "pulse 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.6s ease-out forwards",
        marquee: "marquee 30s linear infinite",
        glow: "glow 4s ease-in-out infinite",
        "code-scroll": "codeScroll 60s linear infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        glow: {
          "0%, 100%": { opacity: "0.6" },
          "50%": { opacity: "1" },
        },
        codeScroll: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(-50%)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
