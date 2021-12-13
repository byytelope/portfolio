module.exports = {
  content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
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
      yellow: "#FFD484",
      aqua: "#7EDDDE",
      greyBlue: "#99A8C5",
      darkblue: "#2A3445",
      darkerBlue: "#1B222D",
      purple: "#AD82CB",
      red: "#E68282",
    },
  },
  plugins: [require("@tailwindcss/forms")],
};
