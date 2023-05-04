/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./html",
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/FormComponents/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@shrutibalasa/tailwind-grid-auto-fit'),
  ],
};
