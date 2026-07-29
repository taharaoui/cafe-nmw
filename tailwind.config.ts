import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coffee: {
          DEFAULT: "#111111",
          light: "#333333",
          dark: "#000000",
        },
        gold: {
          DEFAULT: "#FFFFFF",
          light: "#F5F5F5",
          dark: "#C8C8C8",
        },
        clay: {
          DEFAULT: "#777777",
          light: "#A9A9A9",
          dark: "#4A4A4A",
        },
        cream: "#F7F7F2",
        ink: "#121212",
        sage: "#6B6B6B",
        sand: "#ECECEC",
      },
      fontFamily: {
        display: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "90rem",
      },
      borderRadius: {
        organic: "63% 37% 54% 46% / 45% 40% 60% 55%",
        "organic-2": "38% 62% 63% 37% / 41% 44% 56% 59%",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(75, 46, 43, 0.18)",
        "soft-lg": "0 30px 60px -20px rgba(75, 46, 43, 0.25)",
        card: "0 4px 24px -4px rgba(75, 46, 43, 0.10)",
      },
      keyframes: {
        steam: {
          "0%": { transform: "translateY(0) scaleX(1)", opacity: "0" },
          "15%": { opacity: "0.5" },
          "50%": { transform: "translateY(-30px) scaleX(1.4)", opacity: "0.35" },
          "100%": { transform: "translateY(-60px) scaleX(1.8)", opacity: "0" },
        },
        "spin-slow": {
          "0%": { transform: "rotate(0deg)" },
          "100%": { transform: "rotate(360deg)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
      animation: {
        steam: "steam 3.5s ease-in-out infinite",
        "spin-slow": "spin-slow 24s linear infinite",
        marquee: "marquee 32s linear infinite",
      },
      letterSpacing: {
        widest2: "0.35em",
      },
    },
  },
  plugins: [],
};

export default config;
