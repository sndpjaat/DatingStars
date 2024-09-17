/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      fontFamily: {
        Raleway: ["Raleway", "sans-serif"],
        Inter: ["Inter", "sans-serif"],
      },
      screens: {
        'xs': '400px',
        'sm': '576px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1180px',
        '2xl': '1441px',
      },
    },
  },
  plugins: [],
}

