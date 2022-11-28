/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        sm: "490px",
        md: "767px",
        lg: "1160px",
        xl: "1440px"
      },

      colors: {
        secondary: " hsl(256, 26%, 20%)",
        primary: "hsl(216, 30%, 68%)",
        orange: "rgb(253 186 116)",
        main: "hsl(273, 4%, 51%)",
        VeryLightGray: " hsl(0, 0%, 98%)"

      }


    },
  },
  plugins: [],
}