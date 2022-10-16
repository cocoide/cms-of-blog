/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '16px',
        sm: '24px',
      },
    },
    extend: {},
  },
  variants: {
    extend: {
      opacity: ['disable'],
      cursor: ['disable'],
    },
  },
  plugins: [],
}
