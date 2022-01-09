const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: colors.teal,
        l: {
          primary: colors.teal[500],
          primaryDark: colors.teal[800],
          primaryLight: colors.teal[50],
          background: colors.slate[100],
        },
        d: {
          primary: colors.teal[400],
          primaryDark: colors.teal[700],
          primaryLight: colors.teal[50],
          background: colors.slate[800],
        }
      }
    },
  },
  plugins: [],
}
