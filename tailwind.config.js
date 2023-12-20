/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      colors: {
        background: "#E9E5DC",
        primary: "#815034",
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp'),],
};
