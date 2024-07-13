import { oAuthClient } from "$lib/server/oauth";
import type { RequestHandler } from "./$types";
import { redirect } from "@sveltejs/kit";
import { dev } from "$app/environment";

const PROD_REDIRECT = "https://ice-code-line.vercel.app/login";
const DEV_REDIRECT = "http://localhost:5173/login";

export const GET: RequestHandler = ({ url }) => {
  const authURL = oAuthClient.generateAuthUrl({
    // 'online' (default) or 'offline' (gets refresh_token)
    access_type: "online",

    // If you only need one scope you can pass it as a string
    scope: "https://www.googleapis.com/auth/userinfo.email",
    prompt: "select_account",
    hd: "student.chula.ac.th",
    redirect_uri: dev ? DEV_REDIRECT : PROD_REDIRECT
  });

  redirect(302, authURL);
};
