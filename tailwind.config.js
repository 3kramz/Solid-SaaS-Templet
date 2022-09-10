module.exports = {
  content: ["./src/*.html", "./src/js/*.js"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    screens: {
      sm: "540px",
      // => @media (min-width: 576px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "992px",
      // => @media (min-width: 992px) { ... }

      xl: "1140px",
      // => @media (min-width: 1200px) { ... }

      "2xl": "1320px",
      // => @media (min-width: 1400px) { ... }
    },
    fontFamily: {
      heading: "'Lexend', sans-serif",
      body: "'Inter', sans-serif",
    },
    extend: {
      screens: {
        xs: "500px",
      },
      colors: {
        primary: "#006BFF",
        "text-color": "#757693",
        dark: "#181C31",
      },
      backgroundImage: {
        'dotted': "url('../images/Dotted-Shape.png')",
      },
    },
  },
  plugins: [],
  prefix: "ud-",
};
