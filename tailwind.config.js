/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#6250FF",
        secondary: "#5C5C5C",
      },
    },
  },
  plugins: [],
};
