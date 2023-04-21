/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      screens: {
        mobile: '600px',
        tablet: '900px',
        desktop: '1200px',
      },
    },
    extend: {
      fontFamily: {
        primary: ['var(--inter-font)', ...fontFamily.sans],
      },
    },
  },
  plugins: [],
};
