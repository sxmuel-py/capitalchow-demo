import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        brandRed: "#d32f2f",
        brandYellow: "#ffc107",
        brandBlack: "#080808",
        panel: "#111111",
        panelSoft: "#191919"
      },
      boxShadow: {
        glow: "0 24px 80px rgba(211, 47, 47, 0.25)"
      },
      backgroundImage: {
        "hero-radial":
          "radial-gradient(circle at top, rgba(255, 193, 7, 0.18), transparent 28%), radial-gradient(circle at bottom left, rgba(211, 47, 47, 0.22), transparent 38%)"
      }
    }
  },
  plugins: []
};

export default config;
