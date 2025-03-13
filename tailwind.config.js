/** @type {import('tailwindcss').Config} */
export default {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif']
      },
      colors: {
        dark: '#2C2C2C',
        light: '#ECECEC',
      },
      screens: {
        '2xl': '1440px',
      },
    },
  },
  plugins: [],
};