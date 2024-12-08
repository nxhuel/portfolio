/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flyonui/dist/js/*.js"
  ],
  theme: {
    extend: {
      backgroundImage: {
        'fondo': "url('../public/assets/fondo.png')",
      },
    
    },
  },
  plugins: [
    require("flyonui"),
    require("flyonui/plugin")
  ],
}

