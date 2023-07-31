/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        dark: '#000000',
        dark25: 'hsla(0, 0%, 0%, 0.25)',
        dark50: 'hsla(0, 0%, 0%, 0.5)',
        dark75: 'hsla(0, 0%, 0%, 0.75)',
        light: '#FFFFFF',
        primary: '#D81E5B',
        secondary: '#0085FB',
        tertiary: '#FFE3E9',
        success: '#009485',
        error: '#81001e',
      },
      backgroundImage: {
        homeImg: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./assets/home.jpg")',
        aboutImg:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./assets/about.jpg")',
        sparckleImg:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./assets/sparckle.jpg")',
        mineImg:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./assets/mine.jpg")',
        contactImg:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./assets/contact.jpg")',
        testimonyImg:
          'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("./assets/testimonies.jpg")',
      },
    },


  },
  plugins: [],
};
