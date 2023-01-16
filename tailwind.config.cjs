/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        inter:['Inter','serif']
      }
    },
  },
  plugins: [],
}
