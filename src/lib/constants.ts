import { dev } from "$app/environment";

const PROD_REDIRECT = "https://ice-code-line.vercel.app/login";
const DEV_REDIRECT = "http://localhost:5173/login";

export const REDIRECT_URI = dev ? DEV_REDIRECT : PROD_REDIRECT;

export const API_ORIGIN = dev ? "http://localhost:8080" : "https://ice-code-line.idealize.cc";
