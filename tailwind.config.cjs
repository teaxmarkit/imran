/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{tsx,ts}'],
  darkMode:'class',
  theme: {
    extend: {
      fontFamily:{
        inter:['Inter','serif'],
        poppinsMedium:['Poppins-Medium','serif'],
        poppinsLight:['Poppins-Light','serif'],
      },
      colors:{
        customPrimary10:"#21005D",
        customPrimary20:"#381E72",
        customPrimary60:"#9A82DB",
        customSecondary10:"#1D192B",
        customSecondary20:"#332D41",
        customSecondary60:"#958DA5",
      }
    },
  },
  plugins: [],
}
