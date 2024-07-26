/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      Barlow: "Barlow",
      Bellefair: "Bellefair",
    },
    colors: {
      richBlack: "#0b0d17",
      lavenderBlue: "#d0d6f9",
      white: "#ffffff"
    },
    extend: {},
  },
  plugins: [],
}