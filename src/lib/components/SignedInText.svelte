<script lang="ts">
  import { enhance } from "$app/forms";

  export let name: string | undefined;
</script>

<form action="/signout" method="POST" use:enhance>
  <p class="my-2 text-sm">
    {#if name !== undefined}
      Currently signed in as {name}.
      <button class="btn btn-link btn-sm text-base-content px-1 py-1.5" type="submit">
        Sign out
      </button>
    {/if}
  </p>
</form>
