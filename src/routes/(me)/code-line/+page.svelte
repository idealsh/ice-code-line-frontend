<script lang="ts">
  import { blur } from "svelte/transition";
  import type { PageData } from "./$types";
  import NongInfo from "$lib/components/NongInfo.svelte";
  import { replaceState } from "$app/navigation";
  import { page } from "$app/stores";
  import SignedInText from "$lib/components/SignedInText.svelte";
  import { browser } from "$app/environment";

  export let data: PageData;

  let hasTwo = data.nongs.length === 2;

  let showTransition = false;

  const url = $page.url;
  showTransition = url.searchParams.get("firstview") !== null;

  if (browser) {
    url.searchParams.delete("firstview");
    replaceState(url, $page.state); // removes firstview params from the url
  }

  $: transitionDuration = onlyIf(showTransition, 800);

  let animatedImage = true;

  if (browser) {
    if (showTransition) {
      animatedImage = false;
      setTimeout(() => (animatedImage = true), 1500);
    }
  }

  /*
    shorthand for convenience. condition needs to be passed
    for the statement to react to the changes in the condition
   */
  function onlyIf(condition: boolean, value: number): number {
    return condition ? value : 0;
  }
</script>

<main class="text-start {hasTwo ? 'w-fit max-w-screen-lg' : 'w-full max-w-screen-md'} mx-auto mb-8">
  <div class="mx-8 px-2 sm:px-6">
    <img
      src={animatedImage ? "/cubemelt-celebrate.webp" : "/cubemelt-celebrate-1.webp"}
      alt=""
      srcset=""
      class="inline h-24 my-4"
    />
    <h1 class="text-xl sm:text-2xl font-semibold" in:blur={{ duration: transitionDuration }}>
      Your ICE code line{hasTwo ? "s are" : " is"}
    </h1>
  </div>
  {#if data.nongs.length == 1}
    <NongInfo
      nong={data.nongs[0]}
      hasTwo={false}
      class="mx-8 sm:my-6"
      transitionDelay={onlyIf(showTransition, 1500)}
      {transitionDuration}
    />
  {:else if data.nongs.length == 2}
    <div class="grid grid-rows-[auto_auto] grid-cols-1 sm:grid-rows-1 sm:grid-cols-2 mx-8 sm:my-6">
      <NongInfo
        nong={data.nongs[0]}
        hasTwo
        class="min-w-min"
        transitionDelay={onlyIf(showTransition, 1500)}
        {transitionDuration}
      />
      <NongInfo
        nong={data.nongs[1]}
        hasTwo
        class="min-w-min border-t border-b sm:border-t-0 sm:border-b-0 sm:border-s border-base-content/10"
        transitionDelay={onlyIf(showTransition, 3000)}
        {transitionDuration}
      />
    </div>
  {/if}
  <div
    class="px-2 sm:px-6 mx-8 mt-4 text-sm"
    in:blur={{
      duration: transitionDuration,
      delay: onlyIf(showTransition, hasTwo ? 3000 : 1500)
    }}
  >
    <SignedInText name={"Ideal"} />
    <p>Code lines are final and cannot be swapped or otherwise changed in any case.</p>
  </div>
</main>
