/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class", '[data-mode="dark"]'],
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      colors: {
        "text-violet": "#A67AFD",
        "text-gray": "#262626",
        "text-trans-gray": "rgba(128, 128, 128, 0.468)",
      },
      fontSize: {
        "200px": "200px",
      },
      
    },
  },
  plugins: [],
};
