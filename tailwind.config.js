/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        accentOrange: "#FA6400",
        lightGreen: "#CFE9D9",
        accentGreen: "#0CD452",
        darkGreen: "#006C4C",
        accentPurple: "#5d00ff",
        lightColor: "#FFFFFF",
        darkColor: "#181620",
        darkGray: "#454545",
        justGray: "rgb(107 114 128)",
        lightGray: "#9CA3AF",
      },
    },
  },
  plugins: [],
};
