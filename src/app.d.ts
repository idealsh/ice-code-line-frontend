// See https://kit.svelte.dev/docs/types#app

import type { Sophomore } from "$lib/types";

// for information about these interfaces
declare global {
  namespace App {
    // interface Error {}
    interface Locals {
      me: Sophomore | undefined;
      hasLineUA: boolean;
    }
    // interface PageData {}
    // interface PageState {}
    // interface Platform {}
  }
}

export {};
