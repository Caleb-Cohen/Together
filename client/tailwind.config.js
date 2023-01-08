/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      inconsolata: ["Inconsolata", "monospace"],
    },
    extend: {
      colors: {
        primary: "#cddae1",
        secondary: "#e1e9ed",
        logoText: "#EC7F50",
        discordBtn: "#de9f85",
        navBtn: "#009BA0",
        navBtnLight: "#66c3c6",
        teal: {
          DEFAULT: "#009BA0",
          light: "#BFD0D8",
          lightest: "#E0E8EC",
        },
        accent: "#FF8435",
      },
    },
  },
  plugins: [],
};
