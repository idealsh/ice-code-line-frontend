<script lang="ts">
  import { onMount } from "svelte";
  import { blur } from "svelte/transition";

  import type { PageData, ActionData } from "./$types";
  import NongInfo from "$lib/components/NongInfo.svelte";

  export let data: PageData;
  export let form: ActionData;

  let firstDisplay = form?.success;

  let show = !firstDisplay;

  let hasTwo = data.nongs.length == 2;

  onMount(() => {
    show = true;
  });
</script>

<main class="text-start w-full max-w-screen-md mx-auto my-4">
  {#if show}
    <h1
      class="text-lg sm:text-2xl font-bold mx-8 px-2 sm:px-6 {hasTwo ? 'text-center' : ''}"
      in:blur={{ duration: 800 }}
    >
      Your code line{hasTwo ? "s are" : " is"}
    </h1>
    {#if data.nongs.length == 1}
      <NongInfo nong={data.nongs[0]} class="mx-8" transitionDelay={1500} />
    {:else if data.nongs.length == 2}
      <div class="flex flex-col sm:flex-row mx-8 sm:my-6">
        <NongInfo nong={data.nongs[0]} class="basis-0 grow min-w-min" transitionDelay={1500} />
        <NongInfo
          nong={data.nongs[1]}
          class="basis-0 grow min-w-min border-b sm:border-b-0 sm:border-s border-base-content/10"
          transitionDelay={3000}
        />
      </div>
    {/if}
  {/if}
</main>
