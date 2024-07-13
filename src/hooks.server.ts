import jwt from "jsonwebtoken";
import { redirect } from "@sveltejs/kit";

import { env } from "$env/dynamic/private";

import type { Sophomore } from "$lib/types";
import type { Handle } from "@sveltejs/kit";

function loadMeFromJWT(token: string): Sophomore | undefined {
  try {
    const payload = jwt.verify(token, env.JWT_SECRET) as { me: Sophomore };
    return payload.me;
  } catch (error) {
    const name = (error as any)?.name as string | undefined;

    if (name === "TokenExpiredError" || name === "JsonWebTokenError" || name === "NotBeforeError") {
      console.log("token verification failed:");
      console.log(error);
      return undefined;
    } else {
      throw error;
    }
  }
}

export const handle: Handle = async ({ event, resolve }) => {
  const token = event.cookies.get("token");
  event.locals.me = token ? loadMeFromJWT(token) : undefined;

  if (event.route.id?.startsWith("/(me)")) {
    if (!event.locals.me) {
      redirect(303, "/");
    }
  }

  return await resolve(event);
};
