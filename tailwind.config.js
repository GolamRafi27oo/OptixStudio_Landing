/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","**.html"],
  theme: {
    extend: {
      colors: {
        'custom-blue': '#06021f',
        'nav-custom-blue':"#18142e"
      },
    },
  },
  plugins: [],
}

