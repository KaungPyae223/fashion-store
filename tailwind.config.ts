import type { Config } from "tailwindcss";


const config: Config = {
  content: [
    "./src/admin-side/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/customer-side/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      lineClamp: {
        7: '7',
        8: '8',
      },
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
};
export default config;
