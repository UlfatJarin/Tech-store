
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-color': '#020202',
        'white-text':'#FFFFFF',
        'secondary-textcolor ':'#ACACAC'
      },
    },
  },
  plugins: [],
}