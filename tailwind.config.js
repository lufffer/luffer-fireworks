/** @type {import('tailwindcss').Config} */
export default {
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
        homeImg: 'url("./src/assets/home.jpg")',
        aboutImg:
          'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("./src/assets/about.jpg")',
        sparckleImg:
          'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("./src/assets/sparckle.jpg")',
        mineImg:
          'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("./src/assets/public/mine.jpg")',
        contactImg:
          'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("./src/assets/public/contact.jpg")',
        testimonyImg:
          'linear-gradient(rgba(0, 0, 0, 0.75), rgba(0, 0, 0, 0.75)), url("./src/assets/testimonies.jpg")',
      },
    },


  },
  plugins: [],
};
