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
        primaryGradient: "#090114",
        secondaryGradient: "#090114",

        primary: "#181842",
        secondary: "#281188",
        greyColor: "#3F3D56",
        txtDarkColor: "#A61DEA",
        lightColor: "#E1A4FF",
        extraDark: "#6f149c",
        darkPink: '#A61DEA',

        cardColor: '#F7F7FF',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'Satoshi Placeholder', 'sans-serif'],
      },
    },
  },
  plugins: [],
});
