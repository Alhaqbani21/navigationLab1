/** @type {import('tailwindcss').Config} */
export default {
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: '#1500ff',

          secondary: '#00acff',

          accent: '#da6000',

          neutral: '#271d17',

          'base-100': '#fcfffa',

          info: '#006bc2',

          success: '#00ff99',

          warning: '#fc8700',

          error: '#d60023',
        },
      },
    ],
  },
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
};
