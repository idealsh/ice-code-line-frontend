import { dev } from "$app/environment";
import * as env from "$env/static/public";

export const REDIRECT_URI = dev ? env.PUBLIC_DEV_LOGIN_REDIRECT : env.PUBLIC_PROD_LOGIN_REDIRECT;
export const API_ORIGIN = dev ? env.PUBLIC_DEV_API_ORIGIN : env.PUBLIC_PROD_API_ORIGIN;
