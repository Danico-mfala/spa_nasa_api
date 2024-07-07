/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        neutralSilver: "#F5F7FA",
        neutralDGrey: "#4D4D4D",
        neutralPrimary: "#4CAF4F",
        neutralGrey: "#717171",
      },
    },
  },
  plugins: [],
};
