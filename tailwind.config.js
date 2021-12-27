const colors = require("tailwindcss/colors");
module.exports = {
  purge: ["./src/*.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue: {
        uoccorporate: "#000078",
        uocmasterband: "#73edff",
        light: "rgba(201, 255, 252, 0.801)",
      },
      gray: {
        darkest: "#1f2d3d",
        dark: "#3c4858",
        DEFAULT: "#c0ccda",
        light: "#e0e6ed",
        lightest: "#f9fafc",
      },
      green: {
        light: "#cdf07c",
      },
      purple: colors.violet,
      red: colors.red,
    },
    fontFamily: {
      sans: ["Helvetica Neue", "sans-serif"],
      serif: ["Georgia", "Times New Roman", "serif"],
      galatia: ["Galatia SIL", "Georgia", "serif"],
      avenir: [
        "Avenir Book",
        "Franklin Gothic Medium",
        "Helvetica",
        "Arial",
        "sans-serif",
      ],
    },
    extend: {},
  },
  variants: {
    extend: {
      textTransform: ["hover", "focus"],
      textColor: ["visited"],
    },
  },
  plugins: [],
};
