import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: "#FBF8F5",
        blush: "#F4EDE8",
        rose: "#C98B8B",
        "rose-deep": "#A85F5F",
        sage: "#9FB3A2",
        "sage-deep": "#5F7A64",
        plum: "#3D3238",
        "plum-muted": "#7A6B72",
      },
      fontFamily: {
        cormorant: ["var(--font-cormorant)", "serif"],
        "dm-sans": ["var(--font-dm-sans)", "sans-serif"],
        "dm-mono": ["var(--font-dm-mono)", "monospace"],
      },
      keyframes: {
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(40px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        shimmer: "shimmer 3s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        "fade-in-up": "fadeInUp 0.8s ease-out forwards",
      },
    },
  },
  plugins: [],
};

export default config;
