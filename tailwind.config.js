/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/*.js",
    "./src/pages/*.js",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      whitetext: "#0f0905",
      whitebg: "#fbf7f4",
      primbg: "#32698b",
      secobg: "#ffffff",
      accentbg: "#307fb0",
    },
    extend: {},
  },
  plugins: [require("./node_modules/tw-elements/dist/plugin.cjs")],
  darkMode: "class",
};
