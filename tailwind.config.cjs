/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lightPurple: '#F7EBFF',
        darkPurple: "#7E1F86",
      }
    },
  },
  plugins: [],
}



