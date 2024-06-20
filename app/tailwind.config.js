/** @type {import('tailwindcss').Config} */

const colors = require('tailwindcss/colors');

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors:{
      primary:colors.orange,
      secondary:colors.stone,

    },
    extend: {},
  },
  plugins: [],
};
