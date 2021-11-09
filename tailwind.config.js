module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#000000",
      bgPrimary: "#1b222d",
      bgSecondary: "#2a3445",
      accent: "#7eddde",
      textPrimary: "#fff8ee",
      textSecondary: "#99a8c5",
    },
    fontFamily: {
      mono: ["'Fira Code'", "monospace"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
