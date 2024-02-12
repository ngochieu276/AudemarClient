/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        raleway: ["Raleway", "sans-serif"],
        lora: ["Lora", "serif"],
      },
      scale: {
        '200': '2.0',
      }
    },
  },
  plugins: [],
}