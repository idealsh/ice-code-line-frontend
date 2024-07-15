<script lang="ts">
  import { onMount, tick } from "svelte";
  import { blur } from "svelte/transition";

  import type { PageData } from "./$types";
  import NongInfo from "$lib/components/NongInfo.svelte";
  import { replaceState } from "$app/navigation";
  import { page } from "$app/stores";

  export let data: PageData;

  let show = true;

  let hasTwo = data.nongs.length === 2;

  let showTransition = false;

  onMount(() => {
    const url = $page.url;

    showTransition = url.searchParams.get("firstview") === "true";

    if (showTransition) {
      show = false;
      tick().then(() => (show = true));

      url.searchParams.delete("firstview");
      replaceState(url, $page.state); // removes firstview params from the url
    }
  });
</script>

<main class="text-start w-full max-w-screen-md mx-auto my-8">
  {#if show}
    <h1
      class="text-lg sm:text-2xl font-bold mb-4 mx-8 px-2 sm:px-6 {hasTwo ? 'text-center' : ''}"
      in:blur={{ duration: showTransition ? 800 : 0 }}
    >
      Your code line{hasTwo ? "s are" : " is"}
    </h1>
    {#if data.nongs.length == 1}
      <NongInfo nong={data.nongs[0]} class="mx-8" transitionDelay={1500} {showTransition} />
    {:else if data.nongs.length == 2}
      <div class="flex flex-col sm:flex-row mx-8 sm:my-6">
        <NongInfo
          nong={data.nongs[0]}
          class="basis-0 grow min-w-min"
          transitionDelay={1500}
          {showTransition}
        />
        <NongInfo
          nong={data.nongs[1]}
          class="basis-0 grow min-w-min border-t sm:border-t-0 sm:border-s border-base-content/10"
          transitionDelay={3000}
          {showTransition}
        />
      </div>
    {/if}
  {/if}
</main>
