module.exports = {
  theme: {
    extend: {
      colors: {
        "black": "#000000",
        "dark-grey": "#222222",
        "dodger-blue": "#1f80ff",
        "michigan-blue": "#00274c",
        "michigan-maize": "#ffcb05",
        white: "#fafafa"
      },
      fontFamily: {
        body: ["din-2014", "sans-serif"]
      },
      fontSize: {
        "11875": "1.1875rem",
        "45": "4.5rem",
        "7xl": "5rem",
      },
      lineHeight: {
        "11": "1.1",
      }
    }
  },
  variants: {},
  plugins: [require("@tailwindcss/custom-forms")]
};
