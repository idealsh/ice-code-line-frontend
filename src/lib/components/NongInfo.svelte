<script lang="ts">
  import type { Freshman } from "$lib/types";
  import { blur } from "svelte/transition";
  export let nong: Freshman;
  export { classes as class };
  let classes: string = "";

  export let hasTwo: boolean;
  export let transitionDuration: number = 0;
  export let transitionDelay: number = 0;
</script>

<div
  class="text-start px-2 sm:px-6 py-6 sm:py-2 space-y-5 sm:space-y-8 {classes}"
  in:blur|global={{
    delay: transitionDelay,
    duration: transitionDuration
  }}
>
  <div class="">
    <p class="{hasTwo ? 'text-3xl' : 'text-4xl'} sm:text-4xl font-semibold mb-2 sm:mb-8">
      N'{nong.name}
    </p>
  </div>
  <div class="">
    <h2 class="text-lg sm:text-xl font-medium mb-1">Contacts</h2>
    <div class="flex flex-wrap gap-x-5 gap-y-0.5">
      <div class="flex items-center gap-x-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 256 256"
          ><path
            fill="currentColor"
            d="M128 23.064c34.177 0 38.225.13 51.722.745c12.48.57 19.258 2.655 23.769 4.408c5.974 2.322 10.238 5.096 14.717 9.575s7.253 8.743 9.575 14.717c1.753 4.511 3.838 11.289 4.408 23.768c.615 13.498.745 17.546.745 51.723s-.13 38.226-.745 51.723c-.57 12.48-2.655 19.257-4.408 23.768c-2.322 5.974-5.096 10.239-9.575 14.718s-8.743 7.253-14.717 9.574c-4.511 1.753-11.289 3.839-23.769 4.408c-13.495.616-17.543.746-51.722.746s-38.228-.13-51.723-.746c-12.48-.57-19.257-2.655-23.768-4.408c-5.974-2.321-10.239-5.095-14.718-9.574c-4.479-4.48-7.253-8.744-9.574-14.718c-1.753-4.51-3.839-11.288-4.408-23.768c-.616-13.497-.746-17.545-.746-51.723s.13-38.225.746-51.722c.57-12.48 2.655-19.258 4.408-23.769c2.321-5.974 5.095-10.238 9.574-14.717c4.48-4.48 8.744-7.253 14.718-9.575c4.51-1.753 11.288-3.838 23.768-4.408c13.497-.615 17.545-.745 51.723-.745M128 0C93.237 0 88.878.147 75.226.77c-13.625.622-22.93 2.786-31.071 5.95c-8.418 3.271-15.556 7.648-22.672 14.764S9.991 35.738 6.72 44.155C3.555 52.297 1.392 61.602.77 75.226C.147 88.878 0 93.237 0 128s.147 39.122.77 52.774c.622 13.625 2.785 22.93 5.95 31.071c3.27 8.417 7.647 15.556 14.763 22.672s14.254 11.492 22.672 14.763c8.142 3.165 17.446 5.328 31.07 5.95c13.653.623 18.012.77 52.775.77s39.122-.147 52.774-.77c13.624-.622 22.929-2.785 31.07-5.95c8.418-3.27 15.556-7.647 22.672-14.763s11.493-14.254 14.764-22.672c3.164-8.142 5.328-17.446 5.95-31.07c.623-13.653.77-18.012.77-52.775s-.147-39.122-.77-52.774c-.622-13.624-2.786-22.929-5.95-31.07c-3.271-8.418-7.648-15.556-14.764-22.672S220.262 9.99 211.845 6.72c-8.142-3.164-17.447-5.328-31.071-5.95C167.122.147 162.763 0 128 0m0 62.27c-36.302 0-65.73 29.43-65.73 65.73s29.428 65.73 65.73 65.73c36.301 0 65.73-29.428 65.73-65.73c0-36.301-29.429-65.73-65.73-65.73m0 108.397c-23.564 0-42.667-19.103-42.667-42.667S104.436 85.333 128 85.333s42.667 19.103 42.667 42.667s-19.103 42.667-42.667 42.667m83.686-110.994c0 8.484-6.876 15.36-15.36 15.36s-15.36-6.876-15.36-15.36s6.877-15.36 15.36-15.36s15.36 6.877 15.36 15.36"
          /></svg
        >
        <span class="lowercase">
          {nong.instagram ?? "-"}
        </span>
      </div>
      <div class="flex items-center gap-x-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"
          ><path
            fill="currentColor"
            d="M19.365 9.863a.631.631 0 0 1 0 1.261H17.61v1.125h1.755a.63.63 0 1 1 0 1.259h-2.386a.63.63 0 0 1-.627-.629V8.108c0-.345.282-.63.63-.63h2.386a.63.63 0 0 1-.003 1.26H17.61v1.125zm-3.855 3.016a.63.63 0 0 1-.631.627a.62.62 0 0 1-.51-.25l-2.443-3.317v2.94a.63.63 0 0 1-1.257 0V8.108a.627.627 0 0 1 .624-.628c.195 0 .375.104.495.254l2.462 3.33V8.108c0-.345.282-.63.63-.63c.345 0 .63.285.63.63zm-5.741 0a.63.63 0 0 1-.631.629a.63.63 0 0 1-.627-.629V8.108c0-.345.282-.63.63-.63c.346 0 .628.285.628.63zm-2.466.629H4.917a.634.634 0 0 1-.63-.629V8.108c0-.345.285-.63.63-.63c.348 0 .63.285.63.63v4.141h1.756a.63.63 0 0 1 0 1.259M24 10.314C24 4.943 18.615.572 12 .572S0 4.943 0 10.314c0 4.811 4.27 8.842 10.035 9.608c.391.082.923.258 1.058.59c.12.301.079.766.038 1.08l-.164 1.02c-.045.301-.24 1.186 1.049.645c1.291-.539 6.916-4.078 9.436-6.975C23.176 14.393 24 12.458 24 10.314"
          /></svg
        >
        <span>
          {nong.line ?? "-"}
        </span>
      </div>
      <div class="flex items-center gap-x-1.5">
        <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24">
          <path
            fill="currentColor"
            d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.28-.28.67-.36 1.02-.25c1.12.37 2.32.57 3.57.57a1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57c.11.35.03.74-.25 1.02z"
          />
        </svg>
        <span>
          {nong.phoneNumber ?? "-"}
        </span>
      </div>
    </div>
  </div>
  <div class="mx-auto">
    <h2 class="text-lg sm:text-xl font-medium">About N'{nong.name}</h2>
    <div class="">
      <div class="">
        <div class="inline-block min-w-36 me-8 mt-3 sm:mt-2">
          <p class="font-bold tracking-wide">Nationality</p>
          <p>{nong.nationality}</p>
        </div>
        {#if nong.notes}
          <div class="inline-block min-w-36 me-8 mt-3 sm:mt-2">
            <p class="font-bold tracking-wide">Notes</p>
            <p>{nong.notes}</p>
          </div>
        {/if}
      </div>
      <div class="inline-block min-w-36 me-8 mt-3 sm:mt-2">
        <p class="font-bold tracking-wide">Favorite things</p>
        <p>{nong.favoriteThings}</p>
      </div>
      <div class="inline-block min-w-36 me-8 mt-3 sm:mt-2">
        <p class="font-bold tracking-wide">Additional preferences</p>
        {#if nong.storePreferences !== null}
          <p>{nong.storePreferences}</p>
        {:else}
          <p class="italic">None specified</p>
        {/if}
      </div>
      <div class="inline-block min-w-36 me-8 mt-3 sm:mt-2">
        <p class="font-bold tracking-wide">Dietary restrictions</p>
        {#if nong.dietaryRestrictions !== null}
          <p>{nong.dietaryRestrictions}</p>
        {:else}
          <p class="italic">None specified</p>
        {/if}
      </div>
    </div>
  </div>
</div>
