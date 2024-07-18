<script lang="ts">
  import { browser } from "$app/environment";
  import { enhance } from "$app/forms";
  import { goto } from "$app/navigation";
  import SignedInText from "$lib/components/SignedInText.svelte";
  import type { ActionData, PageData } from "./$types";

  let dialog: HTMLDialogElement;
  let startTime: number | undefined = undefined;

  export let data: PageData;
  export let form: ActionData;

  const artificialDelay = 1500;

  let loading = false;

  $: randomizeSuccess = form?.randomizeSuccess ?? false;

  $: if (randomizeSuccess) redirect();

  async function redirect() {
    if (!browser) return;

    const timeElapsed = startTime ? Date.now() - startTime : 0;

    await new Promise((res) => setTimeout(res, artificialDelay - timeElapsed));
    await goto("/code-line?firstview");
  }

  function onProceed() {
    startTime = Date.now();
    loading = true;
    dialog.close();
  }
</script>

<main class="mx-auto text-center px-8">
  {#if loading}
    <p class="text-2xl font-bold">Randomizing your code line</p>
    <span class="loading loading-ring loading-lg my-8"></span>
  {:else}
    {#if data.alreadyRandomized || randomizeSuccess}
      <h1 class="text-2xl font-bold mb-6">
        {#if randomizeSuccess}
          Your code line has been randomized
        {:else}
          You have already randomized your code line
        {/if}
      </h1>
      <a
        class="btn btn-lg w-full max-w-xs"
        href={randomizeSuccess ? "/code-line?firstview=true" : "/code-line"}
      >
        See code line
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
          /></svg
        >
      </a>
    {:else}
      <h1 class="text-4xl font-extrabold tracking-wider mb-8">Get started!</h1>
      <button class="btn btn-primary btn-lg w-80 max-w-full" on:click={() => dialog.showModal()}>
        <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M19.78 3h-8.56C10.55 3 10 3.55 10 4.22V8h6v6h3.78c.67 0 1.22-.55 1.22-1.22V4.22C21 3.55 20.45 3 19.78 3m-7.34 3.67a1.23 1.23 0 1 1 0-2.46a1.23 1.23 0 0 1 1.23 1.23c0 .68-.55 1.23-1.23 1.23m6.12 6.11a1.23 1.23 0 1 1-.02-2.46c.68-.01 1.23.54 1.24 1.24c-.01.67-.55 1.21-1.22 1.22m0-6.11a1.23 1.23 0 1 1-.02-2.46a1.231 1.231 0 0 1 .02 2.46M4.22 10h8.56A1.22 1.22 0 0 1 14 11.22v8.56c0 .67-.55 1.22-1.22 1.22H4.22C3.55 21 3 20.45 3 19.78v-8.56c0-.67.55-1.22 1.22-1.22m4.28 4.28c-.67 0-1.22.55-1.22 1.22s.55 1.22 1.22 1.22s1.22-.55 1.22-1.22a1.22 1.22 0 0 0-1.22-1.22m-3.06-3.06c-.67 0-1.22.55-1.22 1.22a1.22 1.22 0 0 0 1.22 1.22c.67 0 1.22-.55 1.22-1.22s-.55-1.22-1.22-1.22m6.11 6.11c-.67 0-1.22.55-1.22 1.22s.55 1.22 1.22 1.22a1.22 1.22 0 0 0 1.22-1.22c0-.67-.54-1.21-1.21-1.22z"
          /></svg
        >
        Randomize my code line
      </button>
    {/if}
    <SignedInText name={data.me?.name} />
  {/if}

  <dialog bind:this={dialog} class="modal">
    <div class="modal-box text-start">
      <h3 class="text-xl font-bold mb-3">Note</h3>
      <p class="">Once you proceed, your code line will be randomized.</p>
      <p class="mt-2">Code lines can only be randomized once.</p>
      <div class="modal-action">
        <form method="dialog">
          <!-- if there is a button in form, it will close the modal -->
          <button class="btn">Back</button>
        </form>
        <form method="POST" use:enhance>
          <button type="submit" class="btn btn-primary" on:click={onProceed}>
            Let’s go
            <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
              ><path
                fill="currentColor"
                d="M4 11v2h12l-5.5 5.5l1.42 1.42L19.84 12l-7.92-7.92L10.5 5.5L16 11z"
              /></svg
            >
          </button>
        </form>
      </div>
    </div>
  </dialog>
</main>
