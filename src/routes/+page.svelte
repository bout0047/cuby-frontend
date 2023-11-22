<script>
  import '../app.css';
  import NavBar from '../lib/components/NavBar.svelte';
  import TopNav from '../lib/components/TopNav.svelte';
</script>

<div class="flex flex-col h-screen justify-between">
  <main>
    <TopNav/>

    <h1>Hello and welcome to my site!</h1>
    <a href="/profile">Profile my site</a>
    
    </main>

<footer>
  <NavBar />
</footer>
</div>

<style>
</style>
