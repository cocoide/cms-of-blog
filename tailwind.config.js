/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '5rem',
        '2xl': '6rem',
      },
    },
    extend: {
      aspectRatio: {
        '4/3': '4 / 3',
      },
    },
  },
  variants: {
    extend: {
      opacity: ['disable'],
      cursor: ['disable'],
    },
  },
  plugins: [],
}
