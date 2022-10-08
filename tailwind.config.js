// const colors = require('tailwindcss/colors')

module.exports = {
  content: ["index.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#6F3E8D",
        secondary: "#E0914F",
        "secondary-100": "#E0914F",
        "secondary-200": "#EEA86D",
      },
    },
  },
  plugins: [],
};
