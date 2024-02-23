/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home-bg': "url('./src/images/home-bg.png')",
      },
      fontFamily:{manrope: "Manrope"},
      boxShadow: { bs: "0px 8px  10px 0px #09093705" },
      colors: {
        gray: {
          50: "#f4f4ff",
          900: "#090937",
          "900_05": "#09093705",
          "900_66": "#09093766",
          "900_99": "#09093799",
          "900_19": "#09093719",
        },
        black: { 900: "#000000", "900_99": "#00000099" },
        deep_purple: { 400: "#6251dd" },
        deep_orange: { 400: "#ef6b4a" },
        white: { A700: "#ffffff" },
      },
    },
  },
  plugins: [],
}

