/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        cormorant: ["Cormorant", "serif"],
        "proxima-nova": ["Proxima Nova", "sans-serif"],
      },
      colors: {
        "trunks-para-gray": "#E5E5E5",
        "para-text-color": "#8A8A8A",
        gray: "#303030",
        "head-blue": "#002D5C",
        "hr-red": "#F42534",
      },
      maxWidth: {
        "section-screen": "91rem", //1460px
        "screen-xxl": "84rem", //1344px
      },
      width: {
        88: "22rem", //352px
        100: "25rem", //400px
        120: "30rem", //480px
        128: "32rem", //512px
        140: "35rem", //560rem
        240: "60rem", //960px
      },
      height: {
        150: "37.5rem", //600px
      },
      fontSize: {
        base: "1rem", //16px
        xl: "1.25rem",

        "2xxl": "2rem", //32px
      },
    },
  },
  plugins: [],
};
