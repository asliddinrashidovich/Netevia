/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      maxWidth: {
        "main_container":"1240px"
      },
      fontWeight: {
        "400":"400",
        "500":"500",
        "600":"600",
        "700":"700"
      }
    },
  },
  plugins: [],
}
