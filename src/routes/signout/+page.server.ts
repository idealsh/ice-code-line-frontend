import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";
import { dev } from "$app/environment";

export const actions = {
  default: ({ cookies }) => {
    cookies.delete("token", {
      path: "/",
      secure: !dev
    });

    redirect(303, "/");
  }
} satisfies Actions;
