/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "clr-purple": "#F53838",
        "clr-red": "#FA5959",
        "clr-blue": "#242A45",
        "clr-grey": "#9194A2",
        "clr-white": "#f7f7f7",
      },
    },
    fontFamily: {
      Poppins: ["Poppins, sans-serif"],
    },
    container: {
      center: true,
      padding: "1rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};