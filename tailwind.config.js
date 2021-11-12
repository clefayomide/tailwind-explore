module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {
        '3/10' : '30%',
      },
      backgroundColor : theme => ({
        'primary' : '#1B7092',
        'secondary' : '#115874'
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
