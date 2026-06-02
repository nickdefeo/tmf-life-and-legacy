import type { Config } from "tailwindcss";

/**
 * ============================================================================
 *  THEME TOKENS — edit the whole site's look from here.
 * ============================================================================
 *  Colors, fonts, shadows and the gold "metallic" gradient all live in this
 *  file (mirrored as CSS variables in app/globals.css). Change a value here
 *  and it propagates everywhere. Brand palette is from the TMF brand spec.
 * ----------------------------------------------------------------------------
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        black: {
          DEFAULT: "#0A0A0A", // primary background
          soft: "#111111", // alternating section background
          card: "#16140F", // card surfaces, warm-tinted
        },
        gold: {
          DEFAULT: "#C9A24B", // primary gold
          bright: "#E8C766", // highlights / hover
          deep: "#9A7B2E", // shadows / pressed states
        },
        ivory: {
          DEFAULT: "#F5EFE0", // primary light text
          muted: "#C9C2B2", // secondary text
        },
      },
      borderColor: {
        goldline: "rgba(201,162,75,0.28)", // hairline dividers
      },
      fontFamily: {
        // Wired to next/font CSS variables defined in app/layout.tsx
        cinzel: ["var(--font-cinzel)", "serif"], // caps brand-echo headings
        cormorant: ["var(--font-cormorant)", "serif"], // large editorial headlines
        sans: ["var(--font-inter)", "system-ui", "sans-serif"], // body / UI
      },
      boxShadow: {
        gold: "0 0 0 1px rgba(201,162,75,0.35), 0 10px 40px -12px rgba(201,162,75,0.35)",
        "gold-soft": "0 8px 30px -12px rgba(201,162,75,0.25)",
        card: "0 20px 50px -20px rgba(0,0,0,0.7)",
      },
      backgroundImage: {
        // Premium metallic gold — apply with bg-clip-text on accent words.
        "gold-metallic":
          "linear-gradient(135deg,#BF953F 0%,#FCF6BA 35%,#B38728 60%,#FBF5B7 80%,#AA771C 100%)",
        "gold-sheen":
          "linear-gradient(135deg,#C9A24B 0%,#E8C766 50%,#9A7B2E 100%)",
      },
      letterSpacing: {
        brand: "0.28em", // small-caps gold labels / eyebrows
      },
      maxWidth: {
        content: "1200px",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
