<script>
  import "../app.css";
  import NavBar from "$lib/components/NavBar.svelte";
  import { Router, Link, Route } from "svelte-routing";
  import Login from "$lib/components/Login.svelte";
  import isLoggedIn from "../lib/components/Login.svelte";
  import Home from "../lib/components/Home.svelte";
</script>

<div>
  <slot/>
  {#if isLoggedIn}
  <!-- <Home /> -->
{:else}
  <!-- <Login /> -->
{/if}

</div>

<style>
</style>
