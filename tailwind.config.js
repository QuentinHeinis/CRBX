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
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
      fontFamily: {
        'Sequel-45': 'sequel100black-45, sans-serif',
        'Sequel-105': 'sequel100black-105, sans-serif',
        'startup-light': 'startup-light, sans-serif',
        'startup-regular': 'startup-regular, sans-serif',
        'startup-medium': 'startup-medium, sans-serif',
      }
    },
  },
  plugins: [],
}