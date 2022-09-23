/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        sm: '0.8rem',
        base: '3rem',
        xl: '5.25rem',
        sxl:'4rem'
      }
    },
  },
  plugins: [],
}
