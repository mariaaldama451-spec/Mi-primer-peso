/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#5170FF',
          yellow: '#FFDE59',
          yellowDeep: '#F2C830',
          ink: '#10108F',
          ground: '#A6A6A6',
          paper: '#E4E4E4',
          coin: '#E69A2E',
          leaf: '#109825',
          muted: '#6E6E6E',
          disabled: '#C4C4C4',
          disabledBorder: '#9A9A9A',
        },
      },
      fontFamily: {
        display: ['"Mochiy Pop One"', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
