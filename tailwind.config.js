// const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ["index.html","find-therapist.html","join-therapist.html", "./src/**/*.{js,jsx,ts,tsx,vue,html}"],
  theme: {
    extend: {
      colors: {
        primary: "#6F3E8D",
        "primary-100": "#4C2961",
        secondary: "#E0914F",
        "secondary-100": "#E0914F",
        "secondary-200": "#EEA86D",
        "red-orange": "#C93305",
        "low-bg": "rgba(62, 34, 79, 0.9)",
      },
      fontSize: {
        '3.5xl': '32px',
        '15px' : '15px'
      },
      spacing: {
        '34': '34%',
        '1-rem': '-1.30rem',
        'r-rem': '-1rem',
        't-50': '-50%'
      },
      fontFamily: {
      'popin': 'Poppins, sans-serif',
      'afternoon': 'Afternoon in Stereo',
      },
      backgroundImage: {
        speak: "url('/src/assets/photo/speak.png')",
      },
    },
    screens: {
      'xs': '480px',
      ...defaultTheme.screens,
    },
  },
  plugins: [],
};
