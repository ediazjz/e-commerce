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
      colors: {
        primary: {
          lighter: "#6695C1",
          light: "#3371AD",
          DEFAULT: "#004E98",
          dark: "#003E7A",
          darker: "#002F5B",
        },
        secondary: {
          lighter: "#17A8C5",
          light: "#1596AF",
          DEFAULT: "#128399",
          dark: "#107083",
          darker: "#0D5E6E",
        },
        accent: {
          lighter: "#F19C6E",
          light: "#EC7B3D",
          DEFAULT: "#E75A0D",
          dark: "#D0510C",
          darker: "#B9480A",
        },
        inky: {
          lighter: "#565656",
          light: "#414141",
          DEFAULT: "#2C2C2C",
          dark: "#282828",
          darker: "#232323",
        },
        fdbk: {
          success: "#27A580",
          warning: "#E0B412",
          error: "#C94145",
        },
        neutral: {
          lighter: "#E6EDF5",
          light: "#CCDCEA",
        },
      },
    },
  },
  plugins: [],
}
