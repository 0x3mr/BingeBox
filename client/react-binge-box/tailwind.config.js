/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'absolutewhite': 'rgba(255, 255, 255, 1)',
        'black-06': 'rgba(15, 15, 15, 1)',
        'black-08': 'rgba(20, 20, 20, 1)',
        'black-10': 'rgba(26, 26, 26, 1)',
        'black-12': 'rgba(31, 31, 31, 1)',
        'black-15': 'rgba(38, 38, 38, 1)',
        'grey-60': 'rgba(153, 153, 153, 1)',
        'grey-75': 'rgba(191, 191, 191, 1)',
        'red-45': 'rgba(229, 0, 0, 1)',
        'white-60': 'rgba(153, 153, 153, 1)',
        'dark': 'rgba(20, 20, 20, 1)',
        'card': 'rgba(15, 15, 15, 1)',
        'card2': 'rgba(26, 26, 26, 1)',
        'borderc': 'rgba(38, 38, 38, 1)',
        'accent': 'rgba(229, 0, 0, 1)',
        'textgray': 'rgba(153, 153, 153, 1)',
        'brand': {
          'primary': '#4FC3F7',
          'secondary': '#3A506B',
          'background': '#0B132B',
          'surface': '#17213C',
          'border': '#334155',
        },
        'neutral-dark': '#0f0f0f',
      },
      fontFamily: {
        'inter': ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
