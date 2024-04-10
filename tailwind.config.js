/** @type {import('tailwindcss').Config} */

const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGradient: "#0A0A36",
        secondaryGradient: "#252568",

        primary: "#",
        secondary: "#ff5e57",
        greyColor: "#e4e3e3",
        darkColor: "#343a40",
        lightColor: "#E1A4FF",
      },
    },
  },
  plugins: [],
}); 