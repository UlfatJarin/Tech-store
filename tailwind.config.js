
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'Poppins': ['Poppins', 'sans-serif']
      // font-family: "Poppins", sans-serif;
    },
    extend: {
      colors: {
        'bg-primary': '#020202',
        'whitec':'#FFFFFF',
        'blackc':'#000000',
        'color-secondary':'#ACACAC',
        'color-3rd':'#0156FF'
      },
    },
  },
  plugins: [],
}