/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "primary-light": "#AEC5F2",
        "secondary-light": "#F2E088",
        "ternary-light": "#F28F6B",

        "primary-dark": "#416BBF",
        "secondary-dark": "#BF452A",
        "ternary-dark": "#8C7561",
      },
      fontFamily: {
        sans: ['Graphik', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      dropShadow: {
        '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
        'ois': '1px 1px 0px #f2e088',
        'hoverois': '2px 2px 1px #000'
      },
      borderWidth: {
        "16": "16px",
        "32": "32px"
      }
    },
  },
  plugins: [],
}

