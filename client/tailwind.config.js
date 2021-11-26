module.exports = {
  mode: 'jit', // Just-in-time
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        primary: '#ffc100',
        secondary: '#3c65e5',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
