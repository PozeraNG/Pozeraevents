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
        "brand-orange": "var(--brand-orange)",
        ink: "var(--ink)",
        "charcoal-card": "var(--charcoal-card)",
        "muted-text": "var(--muted-text)",
        "muted-text-secondary": "var(--muted-text-secondary)",
        "form-text": "var(--form-text)",
        peach: "var(--peach)",
        "white-bg": "var(--white-bg)",
      },
      fontFamily: {
        display: ["var(--font-display)", "serif"],
        body: ["var(--font-body)", "sans-serif"],
      },
      // Fluid typography: scales smoothly between a mobile baseline (375px) and the
      // original 1920px desktop design, then holds steady above 1920px — so the
      // 1920px composition never changes while every size in between adapts.
      fontSize: {
        "fluid-h1": "clamp(2.25rem, 1.73rem + 2.2vw, 4.375rem)", // 36px -> 70px
        "fluid-h2": "clamp(2rem, 1.73rem + 1.17vw, 3.125rem)", // 32px -> 50px
        "fluid-h3": "clamp(1.75rem, 1.57rem + 0.78vw, 2.5rem)", // 28px -> 40px
        "fluid-eyebrow": "clamp(1.125rem, 1.06rem + 0.26vw, 1.375rem)", // 18px -> 22px
        "fluid-body-lg": "clamp(1.125rem, 1.06rem + 0.26vw, 1.375rem)", // 18px -> 22px
        "fluid-body": "clamp(1rem, 0.97rem + 0.13vw, 1.125rem)", // 16px -> 18px
      },
    },
  },
  plugins: [],
};
export default config;
