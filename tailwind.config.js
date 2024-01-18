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
    },
  },
  plugins: [],
}

