module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#5680E9",
        secondary: "#84CEEB",
        accent: "#5AB9EA",
        soft: "#C1C8E4",
        purple: "#8860D0",
        peach: "#F7D9C4",
      },
      fontFamily: {
        //mono: ["Courier New", "monospace"],
        // sans: ["var(--font-sora)", "sans-serif"],
        // heading: ["var(--font-sora)", "sans-serif"],
        sans: ["var(--font-montserrat)", "sans-serif"],
        heading: ["var(--font-montserrat)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
