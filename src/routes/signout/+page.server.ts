import { redirect } from "@sveltejs/kit";
import type { Actions } from "./$types";

export const actions = {
  default: ({ cookies }) => {
    cookies.delete("token", {
      path: "/"
    });

    redirect(303, "/");
  }
} satisfies Actions;
