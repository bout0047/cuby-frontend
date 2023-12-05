<script>
  import NavBar from '$lib/components/NavBar.svelte';
  import TopNav from '$lib/components/TopNav.svelte';
  import { onMount } from 'svelte';

  let events = [];
  let searchQuery = '';

  onMount(async () => {
    try {
      const response = await fetch('http://localhost:3011/events');
      if (!response.ok) {
        throw new Error('Failed to fetch events');
      }
      events = await response.json();
    } catch (error) {
      console.error('Error fetching events:', error.message);
    }
  });

  $: filteredEvents = searchQuery
    ? events.filter(event => 
        event.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : events;
</script>

<main>
  <TopNav />
  <input type="text" bind:value={searchQuery} placeholder="Search events..." class="search-bar" />

  {#if filteredEvents.length > 0}
    <ul class="events-list">
      {#each filteredEvents as event (event.id)}
        <li class="event-item">{event.name}</li>
      {/each}
    </ul>
  {:else}
    <p>No events found.</p>
  {/if}

  <footer>
    <NavBar />
  </footer>
</main>

<style>
  .search-bar {
    /* Your search bar styles */
  }
  .events-list {
    /* Styles for your events list */
  }
  .event-item {
    /* Styles for each event item */
  }
</style>
