<script>
  import "../app.css";
</script>

<div class="min-h-dvh flex flex-col justify-center">
  <div class="flex-grow flex flex-col justify-center">
    <slot />
  </div>
  <footer
    class="text-center text-xs sm:text-sm text-base-content/60 underline-offset-2 px-8 pb-6 pt-4"
  >
    <a class="link" href="https://github.com/idealsh/ice-code-line-frontend" target="_blank"
      >Source available on GitHub</a
    >
  </footer>
</div>
