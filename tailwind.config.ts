import type { Config } from "tailwindcss";

/**
 * ============================================================================
 *  THEME TOKENS — edit the whole site's look from here.
 * ============================================================================
 *  Colors, fonts, shadows and the accent gradient all live in this file
 *  (mirrored as CSS variables in app/globals.css). Change a value here and it
 *  propagates everywhere.
 *
 *  PALETTE — the six brand colors, plus a few derived navy tints for depth:
 *
 *  The scheme leads with BLUE (ground, structure) and GREEN (every accent).
 *  Yellow is deliberately held back.
 *
 *    Midnight Mirage        #001F3F   navy.DEFAULT   primary background
 *    Nuit Blanche           #1E488F   navy.mid       elevated bands
 *    Praxeti White          #F6F7ED   praxeti        primary text / light bg
 *    Mantis                 #74C365   mantis         accent type, icons, borders
 *    Picture Book Green     #00804C   mantis.deep    primary CTA fill
 *    First Colors of Spring #DBE64C   lime           held in reserve, unused
 *
 *  ⚠ ACCESSIBILITY — contrast against navy #001F3F:
 *      praxeti  15.7:1  AAA — body copy
 *      mantis    7.8:1  AA  — accent type, icons, checkmarks, borders
 *      lime     12.2:1  AAA — but held in reserve; see note below
 *    mantis.deep (Picture Book Green) is only 3.3:1 on navy and FAILS AA as
 *    text. It is a FILL only: praxeti on it is 5.0:1, and on mantis.deeper
 *    (the hover) 6.2:1.
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
        navy: {
          DEFAULT: "#001F3F", // Midnight Mirage — primary background
          deep: "#00152B", // darker — footer, overlays, vignette
          soft: "#002A56", // alternating section background
          card: "#0A3061", // card surfaces
          mid: "#1E488F", // Nuit Blanche — elevated bands
        },
        // First Colors of Spring. Retained as a brand colour but deliberately
        // NOT used in the UI: the scheme leads with blue and green. Reach for
        // it only for a rare, small highlight — never a fill, border or label.
        lime: {
          DEFAULT: "#DBE64C",
          bright: "#E8F06B",
          deep: "#C2CE33",
        },
        mantis: {
          DEFAULT: "#74C365", // Mantis — accent type, icons, checks, borders
          deep: "#00804C", // Picture Book Green — primary CTA fill (white text)
          deeper: "#006B40", // CTA hover / pressed — darker keeps white legible
        },
        praxeti: {
          DEFAULT: "#F6F7ED", // Praxeti White — primary light text
          muted: "#B0C0D4", // secondary text on navy (9.3:1)
        },
        // Hairline dividers / card borders. Declared as a real color (not just
        // under borderColor) so border-, bg- and divide-hairline all work.
        hairline: "rgba(116,195,101,0.30)",
      },
      fontFamily: {
        // Wired to next/font CSS variables defined in app/layout.tsx
        cormorant: ["var(--font-cormorant)", "serif"], // editorial headlines
        sans: ["var(--font-inter)", "system-ui", "sans-serif"], // body / UI / eyebrows
      },
      boxShadow: {
        accent:
          "0 0 0 1px rgba(116,195,101,0.35), 0 10px 40px -12px rgba(0,128,76,0.45)",
        "accent-soft": "0 8px 30px -12px rgba(116,195,101,0.28)",
        card: "0 20px 50px -20px rgba(0,10,25,0.7)",
      },
      letterSpacing: {
        brand: "0.22em", // wide-tracked sans eyebrows
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
