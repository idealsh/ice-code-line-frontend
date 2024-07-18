import defaultTheme from "tailwindcss/defaultTheme";
import { cupcake } from "daisyui/src/theming/themes";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,ts,svelte}"],
  theme: {
    fontFamily: {
      sans: ["Rethink Sans", ...defaultTheme.fontFamily.sans]
    }
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        cupcake: {
          ...cupcake,
          "base-100": "#f7fafd",
          "base-200": "#e6eff7",
          "base-content": "#082347",
          primary: "#81CFD1",
          "primary-content": "#082347"
        }
      }
    ]
  }
};
