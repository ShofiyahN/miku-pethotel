const { fontFamily } = require("tailwindcss/defaultTheme")

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    // your content paths
  ],
  theme: {
    extend: {
      fontFamily: {
        dynapuff: ['DynaPuff', ...fontFamily.sans],
        inter: ['Inter', ...fontFamily.sans],
        roboto: ['Roboto', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
}