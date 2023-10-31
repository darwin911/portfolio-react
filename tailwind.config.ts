import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      dropShadow: {
        heading: [
          "rgba(0, 0, 0, 0.2) 1px 4px 2px",
          "rgba(0, 0, 0, 0.2) -2px 3px 8px",
        ],
      },
    },
  },
  plugins: [],
};

export default config satisfies Config;
