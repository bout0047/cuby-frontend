<script>
  import '../app.css';
  import { Router, Link, Route } from "svelte-routing";
  import Home from "./Home.svelte";
  import Profile from "./Profile.svelte";
  import NavBar from '$lib/components/NavBar.svelte';
    import TopNav from '$lib/components/TopNav.svelte';
</script>

<div class="flex flex-col h-screen justify-between">
  <main>
    <TopNav/>

   
    
    </main>

<footer>
  <NavBar />
</footer>
</div>

<style>
</style>
