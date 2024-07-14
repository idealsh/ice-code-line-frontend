import { redirect } from "@sveltejs/kit";
import type { RequestHandler } from "./$types";

export const POST: RequestHandler = ({ cookies }) => {
  cookies.delete("token", {
    path: "/"
  });

  redirect(303, "/");
};
