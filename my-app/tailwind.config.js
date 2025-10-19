/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-green': '#1abc9c', // This is the green from your card image
        'brand-dark-green': '#1a8e7a', // A slightly darker shade for contrast/hover
        'brand-light-gray': '#F5F5F5', // For the background of the card
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // You might want to use a specific font like Inter
      }
    },
  },
  plugins: [],
}