/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    colors: {
      lightblue: "#66fcf1",
      darkblue: "#45a29e",
      black: "#0b0c10",
      darkgrey: "#1f2833",
      grey: "#c5c6c7",
      white: "#ffffff",
    },
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      spacing: {
        128: "32rem",
        96: "24rem",
      },
      animation: {
        showContent: "showContent .5s ease-in-out forwards",
      },
      keyframes: {
        showContent: {
          "100%": {
            transform: "translateY(0)",
            filter: "blur(0)",
            opacity: "1",
          },
        },
      },
    },
  },
  plugins: [],
};
