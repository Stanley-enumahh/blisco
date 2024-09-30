/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        Baijuree: ["Bai Jamjuree", "sans-serif"],
        ralewaay: ["Raleway", "sans-serif"],
        Pacifico: ["Pacifico", "cursive;"],
      },
      colors: {
        "primary-color": "#f58634",
        secondaryColor: "#131b23",
      },
    },
  },

  plugins: [],
};
