<script>
  import '../app.css';
</script>

<div class="flex flex-col h-screen justify-between">
  <main>
    <slot />
    <!-- here the page content of +page.svelte is loaded-->
  </main>

  <footer>
    <p class="p-2 text-center">Made with &#x2764;</p>
  </footer>
</div>

<style>
</style>
