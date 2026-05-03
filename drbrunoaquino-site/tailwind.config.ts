import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: "#0F2C4A",
          dark: "#0A1F36",
        },
        brand: {
          DEFAULT: "#1D4E89",
          50: "#EAF2FA",
          100: "#C5DCF0",
          200: "#9AC2E5",
          400: "#3F7EB8",
          600: "#185FA5",
          800: "#0C447C",
          900: "#042C53",
        },
        teal: {
          DEFAULT: "#2A9D8F",
          dark: "#1F7A6F",
        },
        sand: {
          DEFAULT: "#F8F4EC",
          dark: "#EDE7D6",
        },
        amber: {
          DEFAULT: "#E9C46A",
          dark: "#C9A14A",
        },
        ink: {
          DEFAULT: "#374151",
          light: "#6B7280",
          lighter: "#9CA3AF",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        display: ["Poppins", "Inter", "sans-serif"],
      },
      maxWidth: {
        content: "1200px",
        narrow: "720px",
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
