import type { Config } from "tailwindcss";

const config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#0C2C55",
          foreground: "#FFFFFF",
          dark: "#0865af",
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

export default config;
