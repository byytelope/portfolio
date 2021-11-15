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
      offWhite: "#FFF8EE",
      aqua: "#7EDDDE",
      greyBlue: "#99A8C5",
      darkblue: "#2A3445",
      darkerBlue: "#1B222D",
      yellow: "#FFD484",
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
