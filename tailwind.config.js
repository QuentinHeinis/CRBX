/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      "colors": {
        "sombre": "#17181f",
        "clair": "#eeedf0",
        "tonic": "#b8ffd0",
        "mainColor": "#555cc5",
        "SecondaryColor": "#cb69c1",
        "ThirdColor": "#6c72cb"
      },
    },
  },
  plugins: [],
}