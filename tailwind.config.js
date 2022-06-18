/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1.5rem",
        sm: "1.75rem",
        md: "2rem",
        lg: "2.25rem",
        xl: "2.5rem",
        "2xl": "3rem",
      },
    },
    fontSize: {
      "2xs": ".625rem",
      xs: ".75rem",
      sm: ".875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.75rem",
      "4xl": "2rem",
      "5xl": "2.25rem",
      "6xl": "2.5rem",
      "7xl": "2.75rem",
    },
    extend: {
      fontFamily: {
        "brand-body": ["Amiko", "ui-sans-serif"],
        "brand-title": ["Rubik", "ui-sans-serif"],
      },
    },
  },
  plugins: [],
}
