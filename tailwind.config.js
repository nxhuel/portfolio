/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js"
  ],
  "darkMode": "class",
  theme: {
    extend: {
    },
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin")
  ],

}

