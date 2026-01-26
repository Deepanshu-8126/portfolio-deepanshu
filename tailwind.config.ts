// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // 🔥 PREMIUM DATA SCIENCE COLOR PALETTE
      colors: {
        // Deep space base
        background: {
          DEFAULT: "#0A0A0F",
          dark: "#08080C",
          surface: "#121218",
        },
        border: {
          DEFAULT: "#1F1F29",
          light: "#2A2A35",
        },

        // Text hierarchy
        text: {
          primary: "#E6E6FF",
          secondary: "#A0A0C0",
          muted: "#707090",
          disabled: "#4A4A60",
        },

        // Professional data science accents
        accent: {
          // Primary - Electric Cyan (data/tech feel)
          primary: "#4CC9F0",
          primaryHover: "#72DFFF",

          // Secondary - Deep Purple (analytics/insights)
          secondary: "#7209B7",
          secondaryHover: "#9D4EDD",

          // Success - Green (positive insights)
          success: "#4CAF50",
          successHover: "#66BB6A",

          // Warning - Amber (attention needed)
          warning: "#FFB300",
          warningHover: "#FFC107",

          // Error - Red (critical issues)
          error: "#FF7B7B",
          errorHover: "#FF9E9E",
        },

        // Glass effects
        glass: {
          base: "rgba(18, 18, 24, 0.6)",
          hover: "rgba(18, 18, 24, 0.8)",
        },
      },

      // 🎨 SPACE GROTESK FONT (Premium Tech Feel)
      fontFamily: {
        sans: ['"Space Grotesk"', "system-ui", "-apple-system", "sans-serif"],
        heading: ['"Space Grotesk"', "sans-serif"],
        mono: ['"JetBrains Mono"', "monospace"],
      },

      // 🌈 GRADIENTS FOR GLASS EFFECTS
      backgroundImage: {
        "glass-gradient":
          "linear-gradient(135deg, rgba(76, 201, 240, 0.1) 0%, rgba(114, 9, 183, 0.1) 100%)",
        "hero-gradient": "linear-gradient(90deg, #4CC9F0 0%, #7209B7 100%)",
      },

      // 🪞 ENHANCED GLASS MORPHISM
      backdropBlur: {
        sm: "4px",
        default: "12px",
        lg: "20px",
        xl: "32px",
      },

      // ⚡ ANIMATION CURVES
      animation: {
        "pulse-slow": "pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
