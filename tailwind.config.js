/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        sm: '0.8rem',
        base: '2.5rem',
        xl: '5.25rem',
        sxl:'4rem'
      },
      width: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
}
