import type { Config } from "tailwindcss";
import defaultTheme from "tailwindcss/defaultTheme";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0a0a0a",
          light: "#111111",
          surface: "#1a1a1a",
          card: "#141414",
        },
        accent: {
          blue: "#3b82f6",
          "blue-light": "#60a5fa",
          orange: "#f97316",
          "orange-light": "#fb923c",
          cyan: "#06b6d4",
        },
        glass: {
          DEFAULT: "rgba(255,255,255,0.04)",
          border: "rgba(255,255,255,0.08)",
          hover: "rgba(255,255,255,0.08)",
        },
      },
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-accent":
          "linear-gradient(135deg, #3b82f6 0%, #8b5cf6 50%, #f97316 100%)",
        "gradient-accent-hover":
          "linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #fb923c 100%)",
        "gradient-subtle":
          "linear-gradient(135deg, rgba(59,130,246,0.1) 0%, rgba(249,115,22,0.1) 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.8s ease-out forwards",
        "slide-up": "slideUp 0.8s ease-out forwards",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        glowPulse: {
          "0%, 100%": { boxShadow: "0 0 20px rgba(59,130,246,0.2)" },
          "50%": { boxShadow: "0 0 40px rgba(59,130,246,0.4)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
