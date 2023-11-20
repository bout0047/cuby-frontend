<script>
  import '../app.css';
</script>

<div class="flex flex-col h-screen justify-between">
  <header><p class="bg-red-50 p-2">&#128013 Veterinarian complete</p></header>
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
