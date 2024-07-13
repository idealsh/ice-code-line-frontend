import { auth } from "@googleapis/oauth2";
import { env } from "$env/dynamic/private";

export const oAuthClient = new auth.OAuth2(env.GOOGLE_CLIENT_ID, env.GOOGLE_CLIENT_SECRET);
