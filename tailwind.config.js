/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html", "./posts/**/*.html"],
  theme: {
    extend: {
      fontFamily: {
        mono: ['"Courier New"', "Courier", "monospace"],
      },
    },
  },
  plugins: [],
};
