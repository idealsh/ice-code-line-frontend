import { API_ORIGIN } from "$lib/constants";
import type { Freshman } from "$lib/types";
import { error } from "@sveltejs/kit";
import type { LayoutServerLoad } from "./$types";

export const load: LayoutServerLoad = async ({ fetch }) => {
  const result = await fetch(`${API_ORIGIN}/api/nongs`);

  let nongs: Array<Freshman> | null | undefined = undefined;

  if (result.ok) {
    nongs = (await result.json()) as Array<Freshman>;
  } else if (result.status === 404) {
    nongs = null;
  } else {
    error(result.status, await result.json());
  }

  return { nongs };
};
