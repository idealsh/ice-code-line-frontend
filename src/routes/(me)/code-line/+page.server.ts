import { API_ORIGIN } from "$lib/constants";
import type { Freshman } from "$lib/types";
import type { PageServerLoad } from "./$types";
import { error, redirect } from "@sveltejs/kit";

export const load: PageServerLoad = async ({ fetch }) => {
  const result = await fetch(`${API_ORIGIN}/api/nongs`);

  if (result.ok) {
    return {
      nongs: (await result.json()) as Array<Freshman>
    };
  } else {
    if (result.status === 404) {
      redirect(303, "/get-started");
    } else {
      error(result.status, await result.json());
    }
  }
};
