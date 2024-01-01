module.exports = {
  purge: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        custom: '#020c1d',
        customGray: "#aaaaaa",
        customGold: "#cca471",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
