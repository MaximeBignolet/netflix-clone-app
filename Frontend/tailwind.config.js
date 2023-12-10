/** @type {import('tailwindcss').Config} */
export default {
  content: [],
  theme: {
    extend: {
      colors: {
        darkpurple: "#261733",
        deepblue: "#151a3f",
      },
      backgroundImage: (theme) => ({
        "gradient-radial": `radial-gradient(ellipse at center, ${theme(
          "colors.darkpurple"
        )}, ${theme("colors.deepblue")})`,
      }),
    },
  },
  plugins: [],
};
