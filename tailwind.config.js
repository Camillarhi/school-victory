/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#96BB7C",
        "text-color": "#252B42",
        "second-text-color": "#737373",
        "muted-color": "#BDBDBD",
        "secondary-color-1": "#FFAB71",
        "dark-background-color": "#2D4059",
        "success-color": "#2DC071",
      },
      fontFamily: {
        sans: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};
