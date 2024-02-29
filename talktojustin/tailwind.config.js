/** @type {import('tailwindcss').Config} */
export default {
  darkMode : 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        montserrat: "'Montserrat'"
      },
      colors:{
        dark:{
          mainbackground: "rgb(13,13,13)",
          backgroundoverlay: "rgb(24,24,24)",
          highlightbackground: "rgb(59,59,59)",
          textcolor: "rgb(255,255,255)",
          buttoncolor: "rgb(49,49,49)"
        },
        light:{
          mainbackground: "rgb(245,245,245)",
          backgroundoverlay: "rgb(255,255,255)",
          highlightbackground:"rgb(255,255,255)",
          textcolor: "rgb(67,67,67)",
          buttoncolor:"rgb(163,163,163)"
        }
      }
    },
  },
  plugins: [],
}