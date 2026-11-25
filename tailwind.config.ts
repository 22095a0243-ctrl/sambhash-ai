import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
          950: "#1E1B4B",
        },
        surface: {
          light: "#FAFAFC",
          subtle: "#F8FAFC",
          card: "#FFFFFF",
          border: "#E2E8F0",
          borderHover: "#CBD5E1",
        },
        text: {
          primary: "#0F172A",
          secondary: "#475569",
          muted: "#64748B",
        }
      },
      fontFamily: {
        sans: ["Inter", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "sans-serif"],
      },
      keyframes: {
        waveform: {
          "0%, 100%": { height: "4px" },
          "50%": { height: "26px" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-8px)" },
        },
        "float-slow": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-12px) rotate(1deg)" },
        },
        pulseGlow: {
          "0%, 100%": { opacity: "0.35", transform: "scale(1)" },
          "50%": { opacity: "0.85", transform: "scale(1.04)" },
        },
        ripple: {
          "0%": { transform: "scale(0.8)", opacity: "1" },
          "100%": { transform: "scale(2.2)", opacity: "0" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        "waveform-1": "waveform 1.1s ease-in-out infinite 0.1s",
        "waveform-2": "waveform 1.1s ease-in-out infinite 0.25s",
        "waveform-3": "waveform 1.1s ease-in-out infinite 0.4s",
        "waveform-4": "waveform 1.1s ease-in-out infinite 0.15s",
        "waveform-5": "waveform 1.1s ease-in-out infinite 0.3s",
        "waveform-6": "waveform 1.1s ease-in-out infinite 0.45s",
        "shimmer": "shimmer 3s ease-in-out infinite",
        "float": "float 4s ease-in-out infinite",
        "float-slow": "float-slow 6s ease-in-out infinite",
        "pulse-glow": "pulseGlow 3s ease-in-out infinite",
        "ripple": "ripple 2.5s cubic-bezier(0, 0.2, 0.8, 1) infinite",
        "marquee": "marquee 30s linear infinite",
      },
      boxShadow: {
        "glow-indigo": "0 0 25px -5px rgba(79, 70, 229, 0.25)",
        "glow-emerald": "0 0 25px -5px rgba(16, 185, 129, 0.25)",
        "card-modern": "0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)",
        "card-hover": "0 14px 30px -4px rgba(15, 23, 42, 0.08), 0 4px 10px -2px rgba(15, 23, 42, 0.04)",
      },
    },
  },
  plugins: [],
};
export default config;
