<script>
  import { goto } from '$app/navigation';
  import TopNav from '$lib/components/TopNav.svelte';
  import NavBar from '$lib/components/NavBar.svelte';

  export let data;

  const { event } = data;
</script>

<TopNav />

<main>
  {#if event}

    <div class="mt-10">
      <h2 class="text-3xl font-bold mt-16 flex justify-center text-center">{event.name}</h2>
      <div class="">
        <p class="text-xl m-4 mt-3 font-bold">Where: {event.location}</p>
        <p class="text-lg m-3">{event.description}</p>
      </div>
    </div>
  {:else}
    <p>Loading...</p>
  {/if}
</main>

<button class="border flex flex-col justify-center p-2 rounded-lg" on:click={() => goto('/events')} >Back to Events</button>

<NavBar />
<style>
</style>
