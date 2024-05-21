/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  important: true,
  theme: {
    extend: {
      colors: {
        finscoreBlue: "#101728",
        finscorePurple: "#9340FF",
      },
    },
  },
  plugins: [],
}
