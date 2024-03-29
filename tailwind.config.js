module.exports = {
  mode: "all",
  content: [
    // include all rust, html and css files in the src directory
    "./src/**/*.{rs,html,css}",
    // include all html files in the output (dist) directory
    "./dist/**/*.html",
  ],
  darkMode: "class",
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1024px",
    },
    extend: {
      colors: {
        // primaryColor: "#010a5e",
        primaryColor: "#E6E0DE",
        // primaryColorLight: "#010d78",
        primaryColorLight: "#F1F1F1",
        secondaryColor: "#FFCC00",
        // paragraphColor: "#c0c0c0",
        paragraphColor: "#28010d",
        whiteColor: "#fff",
        blackColor: "#000",
        greenColor: "#007936",
        redColor: "#cc3433",
        // darkColor: "#000",
        darkColor: "#151031",
        // darkColorLight: "#171717",
        darkColorLight: "#1D134F",
      },
      keyframes: {
        move: {
          "50%": { transform: "translateY(-1rem)" },
        },
      },
      animation: {
        movingY: "move 2s linear infinite",
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "1.5rem",
      },
    },
    fontFamily: {
      oswald: ["Oswald", "sans-serif"],
      dmsans: ["DM Sans", "sans-serif"],
      poppinsRegular: ["PoppinsRegular", "serif"],
    },
  },
  plugins: [],
};
