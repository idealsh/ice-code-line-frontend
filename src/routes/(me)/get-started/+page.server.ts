import { API_ORIGIN } from "$lib/constants";
import jwt from "jsonwebtoken";
import { error } from "@sveltejs/kit";
import type { Actions, PageServerLoad } from "./$types";
import { JWT_SECRET } from "$env/static/private";

export const load: PageServerLoad = async ({ fetch }) => {
  const result = await fetch(`${API_ORIGIN}/api/nongs`, {
    method: "HEAD"
  }).catch(() => {});

  return {
    alreadyRandomized: result?.ok ?? false
  };
};

export const actions = {
  default: async ({ getClientAddress, fetch, locals }) => {
    const result = await fetch(`${API_ORIGIN}/api/nongs`, {
      method: "POST",
      body: jwt.sign({ ip: getClientAddress() }, Buffer.from(JWT_SECRET), {
        expiresIn: "10m",
        audience: "randomize",
        subject: locals.me?.id
      }),
      headers: {
        "Content-Type": "text/plain"
      }
    });

    if (!result.ok) {
      error(result.status, await result.json());
    }

    return {
      randomizeSuccess: true
    };
  }
} satisfies Actions;
