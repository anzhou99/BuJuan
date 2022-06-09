module.exports = {
  content: ['./src/**/*.{html,js,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'my-black-1': '#2a2927', //$BLACK
        'my-white-1': '#fbf6e6', //$BG
        'my-face': '#fdda5f',
        'my-face-shadow': '#fd9744',
      },
      spacing: {
        size: '6.25rem',
      },
    },
  },
  plugins: [],
};
