/** @type {import('tailwindcss').Config} */

const { color, fontFamily, fontSize, fontWeight, space } = require('@mandyhellz-design-system/tokens')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],

  theme: {
    extend: {
      minWidth: {
        30: space[30]
      },

      maxWidth: {
        20: "5rem"
      },

      width: {
        full: '100%'
      },

      height: {
        full: '100%'
      },

      minHeight: {
        80: "20rem"
      },

      margin: {
        0: '0px'
      },

      colors: {
        transparent: 'transparent'
      }
    },

    colors: {
      black: color.black,
      white: color.white,
      'gray-100': color.gray100,
      'gray-200': color.gray200,
      'gray-400': color.gray400,
      'gray-500': color.gray500,
      'gray-600': color.gray600,
      'gray-700': color.gray700,
      'gray-800': color.gray800,
      'gray-900': color.gray900,
      'green-300': color.green300,
      'green-500': color.green500,
      'green-700': color.green700,
      'green-900': color.green900,
    },

    fontFamily,
    fontSize,
    fontWeight,
    spacing: space,
    width: space,
    height: space,

    plugins: [],
  }
}