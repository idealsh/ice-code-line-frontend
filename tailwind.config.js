import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  theme: {
    fontFamily: {
      sans: ['"Rethink Sans"', ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["cupcake"]
  }
};
