/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", // Note the addition of the `app` directory.
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      orange: {
        100: "#FDC642",
        200: "#FDB813",
        300: "#CA930F",
      },
      blue: {
        100: "#338ed1",
        200: "#0072c6",
        300: "#005b9e",
      },
    },
    extend: {
      fontFamily: {
        sans: ["var(--font-gaegu)"],
      },
    },
  },
  plugins: [],
};
