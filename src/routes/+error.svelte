<script lang="ts">
  import { page } from "$app/stores";
</script>

<div class="mx-auto w-full max-w-lg px-8">
  <h1 class="text-2xl font-bold mb-2">
    {#if $page.status !== 404}
      An error occurred
      {#if $page.status >= 500}
        😵
      {/if}
    {:else}
      This page doesn't exist.
    {/if}
  </h1>
  <p>
    Please try again later or contact Ideal at IG:&nbsp;@ideal_st
    {#if $page.status < 500}
      if you believe this is a problem.
    {/if}
  </p>

  {#if $page.error}
    <div class="mt-6 grid grid-cols-[auto_minmax(0,_1fr)] gap-x-4">
      <p class="font-semibold">Error code</p>
      <p>{$page.status}</p>
      <p class="font-semibold">Error message</p>
      <p>{$page.error.message}</p>
    </div>
  {/if}
</div>
