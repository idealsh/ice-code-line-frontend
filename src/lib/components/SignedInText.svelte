<script lang="ts">
  import { enhance } from "$app/forms";

  export let name: string | undefined;
</script>

<form action="/signout" method="POST" use:enhance>
  <p class="mt-3 text-sm">
    {#if name !== undefined}
      Currently signed in as {name}.
      <button class="underline ms-0.5" type="submit">Sign out</button>
    {/if}
  </p>
</form>
