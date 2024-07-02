/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        custom: ["Figtree", "sans-serif"],
      },
      fontWeight: {
        semibold: '500',
        extrabold: '800',
      }
    },
  },
  plugins: [],
};