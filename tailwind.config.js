/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        popins: ["Poppins", "sans-serif"],
        heebo: ["Heebo", "sans-serif"],
      },
    },
  },
  plugins: [],
};