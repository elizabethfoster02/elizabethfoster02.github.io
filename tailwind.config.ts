/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkSlate: '#495867',
        mutedBlue: '#577399',
        lightBlue: '#bdd5ea',
        offWhite: '#f7f7ff',
        coral: '#fe5f55',
      },
    },
  },
  plugins: [],
}
