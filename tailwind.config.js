/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#53afd8',
        secondary: '#666666',
      },
      fontFamily: {
        sans: ['Open Sans', 'Helvetica', 'Arial', 'sans-serif'],
        poppins: ['Poppins', 'Helvetica', 'Arial', 'sans-serif'],
      },
      boxShadow: {
        custom: '0 2px 6px 0 rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};
