/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily: {
      Inter: ["Inter"],
    },
    colors: {
      veryLightGrey: "#E7F6F2",
      lightGrey: "#A5C9CA",
      darkGrey: "#395B64",
      veryDarkGrey: "#2C3333",
    },
  },
  plugins: [],
};
