import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0B2545",
          50: "#EDF1F7",
          100: "#D6E0EC",
          800: "#0F2E54",
          900: "#0B2545",
          950: "#081B34",
        },
        gold: {
          DEFAULT: "#D4AF37",
          light: "#E4C766",
          dark: "#B8942B",
        },
        offwhite: "#F8F9FA",
      },
      fontFamily: {
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        soft: "0 4px 24px rgba(11, 37, 69, 0.08)",
        gold: "0 4px 20px rgba(212, 175, 55, 0.35)",
      },
      animation: {
        "pulse-soft": "pulse-soft 2.4s ease-in-out infinite",
      },
      keyframes: {
        "pulse-soft": {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(37, 211, 102, 0.45)" },
          "50%": { boxShadow: "0 0 0 10px rgba(37, 211, 102, 0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
