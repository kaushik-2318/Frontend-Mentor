/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "StrongCyan": "var(--StrongCyan)",
        "VeryDarkCyan": "var(--VeryDarkCyan)",
        "DarkGrayishCyan": "var(--DarkGrayishCyan)",
        "GrayishCyan": "var(--GrayishCyan)",
        "LightGrayishCyan": "var(--LightGrayishCyan)",
        "VeryLightGrayishCyan": "var(--VeryLightGrayishCyan)",
        "White": "var(--White)",
      }
    },
  },
  plugins: [],
}