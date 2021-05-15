const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
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
