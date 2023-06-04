/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        'midnight-express': '#141928',
        'torch-red': '#ff0037',
        'electric-blue': '#96fff5',
      }
    },
  },
  plugins: [],
};
