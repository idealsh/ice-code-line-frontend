import type { Nong } from "$lib/Nong";
import type { PageServerLoad, Actions } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
  await new Promise((res, rej) => {
    setTimeout(res, 2000);
  });

  let nong1: Nong = {
    name: "N’Nong",
    instagram: "nnonggg",
    line: "-",
    favThings: "Programming",
    stores: "Starbucks",
    thingsToTell: "Hello"
  };

  let nong2: Nong = {
    name: "N’Chai",
    instagram: "some_long_ass_username",
    line: "chai2006",
    favThings: "Gaming Valorant and some lorem ipsum",
    stores: "Bearhouse some lorem ipsum dolor sit amet",
    thingsToTell: "-"
  };

  return {
    nongs: [nong1, nong2]
  };
};

export const actions = {
  default: async ({ request }) => {
    console.log(await request.formData());
    return { success: true };
  }
} satisfies Actions;
