/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
module.exports = {
    content: [
  "./pages/**/*.{js,jsx,ts,tsx}",
  "./components/**/*.{js,jsx,ts,tsx}",
  "./app/**/*.{js,jsx,ts,tsx}",
  "./src/**/*.{js,jsx,ts,tsx}",
],

    theme: {
      extend: {
        fontFamily: {
          sans: ['var(--font-poppins)', ...fontFamily.sans],
          serif: ['var(--font-merriweather)', ...fontFamily.serif],
        },
        colors:{
            primary: {
                1: '#F98226',
                2: '#2E0000',
            },
            secundary: {
              1: '#E8DFD2',
              2: '#F4E5BB',
              3: '#CDB89F',
              4:'#3B3425'
            },
            terciary: {
                1: '#0C8F5B',
                2: '#0D3B29',
            },
        }
      },
      screens: {
      'md': '768px',    // tablets
      'lg': '1024px',   // notebooks
      'xl': '1280px',   // desktops
      '2xl': '1440px',  // telas grandes
      '3xl': '1850px',  // full HD e acima
    },
    },
    plugins: [],
  }
  