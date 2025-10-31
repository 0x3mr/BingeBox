/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./*.js"],
  theme: {
    extend: {
      colors: {
        absolutewhite: 'var(--absolutewhite)',
        'black-06': 'var(--black-06)',
        'black-08': 'var(--black-08)',
        'black-10': 'var(--black-10)',
        'black-12': 'var(--black-12)',
        'black-15': 'var(--black-15)',
        'grey-60': 'var(--grey-60)',
        'grey-75': 'var(--grey-75)',
        'red-45': 'var(--red-45)',
        'white-60': 'var(--white-60)'
      }
    }
  },
  plugins: []
}

