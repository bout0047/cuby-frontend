<script>
  import Home from '$lib/components/Home.svelte';
import '../app.css';
  import NavBar from '../lib/components/NavBar.svelte';
  import TopNav from '../lib/components/TopNav.svelte';
</script>

<div class="flex flex-col h-screen justify-between">
  <main>
    <TopNav/>
<Home/>
    </main>

<footer>
  <NavBar />
</footer>
</div>

<style>
</style>
