import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: { min: "360px" },
        // => @media (min-width: 640px) { ... }
        sm: { min: "640px" },
        // => @media (min-width: 640px) { ... }

        md: { min: "768px" },
        // => @media (min-width: 768px) { ... }

        lg: { min: "1024px" },
        // => @media (min-width: 1024px) { ... }

        xl: { min: "1280px" },
        // => @media (min-width: 1280px) { ... }

        "2xl": { min: "1536px" },
        // => @media (min-width: 1536px) { ... }
        "3xl": { min: "1600px" },
        // => @media (min-width: 1600px) { ... }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "bg-menu": "url('../public/image/bg-menu.png')",
        "bg-menu-tr": "url('../public/image/bg-menu-tr.png')",
        "bg-menu-bl": "url('../public/image/bg-menu-bl.png')",
        "bg-pattern": "url('../public/image/contact/pattern.png')",
        "bg-trade-work": "url('../public/image/trade/bg-trade-work.png')",
      },
    },
  },
  plugins: [],
};
export default config;
