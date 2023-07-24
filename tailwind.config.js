/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: "0.75rem",
      },
    },
  },
  daisyui: {},
  plugins: [require("daisyui")],
};
