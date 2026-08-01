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
        background: {
          DEFAULT: "#0A0A0F",
          dark: "#08080C",
          surface: "#121218",
        },
        border: {
          DEFAULT: "#1F1F29",
          light: "#2A2A35",
        },
        text: {
          primary: "#E6E6FF",
          secondary: "#A0A0C0",
          muted: "#707090",
          disabled: "#4A4A60",
        },
        accent: {
          primary: "#4CC9F0",
          primaryHover: "#72DFFF",
          secondary: "#7209B7",
          secondaryHover: "#9D4EDD",
          success: "#4CAF50",
          successHover: "#66BB6A",
          warning: "#FFB300",
          warningHover: "#FFC107",
          error: "#FF7B7B",
          errorHover: "#FF9E9E",
        },
        glass: {
          base: "rgba(18, 18, 24, 0.6)",
          hover: "rgba(18, 18, 24, 0.8)",
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', "system-ui", "-apple-system", "sans-serif"],
        heading: ['"Space Grotesk"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },
      backgroundImage: {
        "glass-gradient":
          "linear-gradient(135deg, rgba(76, 201, 240, 0.1) 0%, rgba(114, 9, 183, 0.1) 100%)",
        "hero-gradient": "linear-gradient(90deg, #4CC9F0 0%, #7209B7 100%)",
      },
      backdropBlur: {
        sm: "4px",
        default: "12px",
        lg: "20px",
        xl: "32px",
      },
      boxShadow: {
        'neon-cyan': '0 0 10px rgba(76, 201, 240, 0.5), 0 0 20px rgba(76, 201, 240, 0.3)',
        'neon-purple': '0 0 10px rgba(114, 9, 183, 0.5), 0 0 20px rgba(114, 9, 183, 0.3)',
        'neon-pink': '0 0 10px rgba(247, 37, 133, 0.5), 0 0 20px rgba(247, 37, 133, 0.3)',
      },
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        shimmer: "shimmer 2s linear infinite",
        "glow-pulse": "glow-pulse 2s ease-in-out infinite",
        "border-rotate": "border-rotate 4s linear infinite",
        "orb-float-1": "orb-float-1 10s ease-in-out infinite",
        "orb-float-2": "orb-float-2 12s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "200% 0" },
          "100%": { backgroundPosition: "-200% 0" },
        },
        "glow-pulse": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.8", transform: "scale(1.05)" },
        },
        "border-rotate": {
          "100%": { transform: "rotate(360deg)" },
        },
        "orb-float-1": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(30px, -50px) scale(1.1)" },
          "66%": { transform: "translate(-20px, 20px) scale(0.9)" },
        },
        "orb-float-2": {
          "0%, 100%": { transform: "translate(0, 0) scale(1)" },
          "33%": { transform: "translate(-30px, 50px) scale(0.9)" },
          "66%": { transform: "translate(20px, -20px) scale(1.1)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
