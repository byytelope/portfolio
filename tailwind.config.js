module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        mono: ["'Fira Code'", "monospace"],
      },
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      offWhite: "#fff8ee",
      aqua: "#7eddde",
      greyBlue: "#99a8c5",
      darkblue: "#2a3445",
      darkerBlue: "#1b222d",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
