module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ['Josefin Sans'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
