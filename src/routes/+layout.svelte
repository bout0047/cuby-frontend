<script>
  import "../app.css";
  import NavBar from "$lib/components/NavBar.svelte";
  import { Router, Link, Route } from "svelte-routing";
</script>

<div>
  <main>
    <h2>Name</h2>
    <input type="text" />

    <h2>Password</h2>
    <input type="text" />

    <button type="submit">Login</button>
  </main>
</div>

<style>
</style>
