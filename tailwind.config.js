/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.{html,js,jsx,ts,tsx}",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/components/**/*.{js,jsx,ts,tsx}",
    "./src/contexts/**/*.{js,jsx,ts,tsx}",
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
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
};
