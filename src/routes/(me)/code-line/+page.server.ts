import type { Freshman } from "$lib/types";
import type { PageServerLoad, Actions } from "./$types";

export const load: PageServerLoad = async (ev) => {
  await new Promise((res, rej) => {
    setTimeout(res, 2000);
  });

  let nong1: Freshman = {
    name: "N’Nong",
    instagram: "nnonggg",
    line: "-",
    favThings: "Programming",
    stores: "Starbucks",
    thingsToTell: "Hello"
  };

  let nong2: Freshman = {
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
  default: async (ev) => {
    return { success: true };
  }
} satisfies Actions;
