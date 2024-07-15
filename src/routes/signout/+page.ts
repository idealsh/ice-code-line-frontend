import { error } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
  error(400, "Only POST requests are accepted for signing out");
};
