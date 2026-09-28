import type { Config } from "tailwindcss";

/**
 * AgriConnect design system
 * -------------------------
 * forest  — primary brand green (actions, navigation, highlights)
 * leaf    — success / positive states
 * earth   — secondary, warm brown tones
 * beige   — warm off-white backgrounds
 * sun     — muted yellow highlights & warnings
 * charcoal— text and dark surfaces
 */
const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#f1f8f3",
          100: "#dcefdf",
          200: "#c0dfc5",
          300: "#95c7a2",
          400: "#64a97c",
          500: "#438b5f",
          600: "#31704c",
          700: "#285a3e",
          800: "#224833",
          900: "#1d3c2c",
          950: "#0f2118",
        },
        leaf: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
        },
        earth: {
          50: "#faf7f2",
          100: "#f1e9dc",
          200: "#e3d1bb",
          300: "#d2b493",
          400: "#c29873",
          500: "#b0825c",
          600: "#976a4c",
          700: "#7c553f",
          800: "#664637",
          900: "#563b2f",
          950: "#301f19",
        },
        beige: {
          50: "#fbfaf7",
          100: "#f6f2ea",
          200: "#ede5d5",
          300: "#e0d2b8",
        },
        sun: {
          100: "#fdf3d1",
          200: "#f9e4a5",
          300: "#f3cf6f",
          400: "#e9b62f",
          500: "#d99e1b",
          600: "#a9790f",
        },
        charcoal: {
          50: "#f6f7f6",
          100: "#e3e6e3",
          200: "#c9cec9",
          300: "#a4aca6",
          400: "#79837c",
          500: "#5c665f",
          600: "#4a534d",
          700: "#3d4540",
          800: "#2e3531",
          900: "#1f2622",
          950: "#141a16",
        },
      },
      fontFamily: {
        sans: [
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          '"Helvetica Neue"',
          "Arial",
          '"Noto Sans"',
          '"Noto Sans Devanagari"',
          '"Noto Sans Telugu"',
          '"Noto Sans Kannada"',
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 3px rgba(28, 42, 32, 0.06), 0 8px 24px -12px rgba(28, 42, 32, 0.12)",
        lift: "0 2px 6px rgba(28, 42, 32, 0.08), 0 20px 44px -16px rgba(28, 42, 32, 0.25)",
        panel: "0 1px 2px rgba(28, 42, 32, 0.05)",
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up .45s ease-out both",
        "fade-in": "fade-in .3s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
