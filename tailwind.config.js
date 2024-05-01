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

        primary: "#181842",
        secondary: "#281188",
        greyColor: "#3F3D56",
        txtDarkColor: "#A61DEA",
        lightColor: "#E1A4FF",

        darkPink: '#A61DEA',

        cardColor: '#F7F7FF',
      },
    },
  },
  plugins: [],
}); 