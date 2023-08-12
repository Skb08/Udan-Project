/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'outfit': ['outfit', 'sans-serif'],
        'julius': ['Julius Sans One', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

