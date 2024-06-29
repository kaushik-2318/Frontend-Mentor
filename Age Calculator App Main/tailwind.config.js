/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "purple": "var(--purple)",
        "lightRed": "var(--lightRed)",
        "white": "var(--white)",
        "offWhite": "var(--offWhite)",
        "lightGrey": "var(--lightGrey)",
        "smokeyGrey": "var(--smokeyGrey)",
        "offBlack": "var(--offBlack)",
      }
    },
  },
  plugins: [],
}