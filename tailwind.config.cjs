/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Noto Sans", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#0e1012",
          secondary: "#787878",
          accent: "#53a5bc",
          neutral: "#79899e",
          "base-100": "#f1f1f1",
          info: "#90C1E0",
          success: "#22D892",
          warning: "#F4B515",
          error: "#FB5168",
        },
      },
    ],
  },
};

module.exports = config;
