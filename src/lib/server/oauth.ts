import { auth } from "@googleapis/oauth2";
import { GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET } from "$env/static/private";

export const oAuthClient = new auth.OAuth2(GOOGLE_CLIENT_ID, GOOGLE_CLIENT_SECRET);
