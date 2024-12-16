module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lightGray: '#707070',
        dividerGray: '#EDEDED',
        backgroundGray: '#F6F7F8',
        activeTeal: '#01F0D0'
      },
      fontFamily: {
        sans: ['Manrope', 'sans-serif']
      }
    },
  },
  plugins: [],
}
