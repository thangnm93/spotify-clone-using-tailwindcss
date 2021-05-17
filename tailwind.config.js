const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");
const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        transparent: "transparent",
        current: "currentColor",
        card: "#181818",
        navbar: "#634023",
        "card-hover": "#282828",
        "bg-main": "#121212",
        black: colors.black,
        white: colors.white,
        gray: colors.coolGray,
        red: colors.red,
        yellow: colors.amber,
        green: colors.emerald,
        blue: colors.blue,
        indigo: colors.indigo,
        purple: colors.violet,
        pink: colors.pink,
      },
      screens: {
        xs: "475px",
        ...defaultTheme.screens,
        "3xl": "1537px",
        "4xl": "1841px",
        "5xl": "2110px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function ({ addComponents }) {
      const newComponents = {
        ".scrollbar-w-2::-webkit-scrollbar": {
          width: ".5rem !important",
          height: ".5rem !important",
        },
        ".scrollbar-thumb-rounded::-webkit-scrollbar-thumb": {
          borderRadius: ".25rem !important",
        },
        ".scrollbar-thumb-gray::-webkit-scrollbar-thumb": {
          backgroundColor: "rgba(156, 163, 175, 1) !important",
        },
        ".scrollbar-track-gray-lighter::-webkit-scrollbar-track": {
          backgroundColor: "rgba(209, 213, 219, 1) !important",
        },
      };
      addComponents(newComponents, {
        variants: ["responsive"],
      });
    }),
  ],
};
