/** @type {import('tailwindcss').Config} */

const colors = require("tailwindcss/colors");

export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#F1582B',
        'secondary-color': '#680915',
        'tertiary-color': '#fff6ed',
        'quaternary-color': '#31271b',
      },
      keyframes: {
        "slide-left": {
          from: { transform: "translateX(0)" },
          to: { transform: "translateX(-100%)" },
        },
      },
      animation: {
        "slide-left-infinite": "slide-left 40s linear infinite",
      },
      backgroundImage: {
        "people-img" : "url('./src/assets/images/profiaimg.jpg')",
        "dove" : "url('./src/assets/images/waterdove.avif')",
      },

      
    },
  },
  
  plugins: [],
};
