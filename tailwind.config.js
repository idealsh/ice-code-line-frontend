/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  theme: {
    fontFamily: {
      sans: "Rethink Sans Variable"
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake"]
  }
};
