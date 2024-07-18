import { redirect } from "@sveltejs/kit";
import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ parent }) => {
  const data = await parent();

  if (data.nongs === null) {
    redirect(303, "/get-started");
  } else {
    return {
      me: data.me,
      nongs: data.nongs // data has to be spread out to get rid of the null type
    };
  }
};
