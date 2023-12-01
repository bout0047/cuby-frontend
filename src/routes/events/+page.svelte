<script>
  import { onMount } from 'svelte';

  export let events = [];

  onMount(async () => {
    try {
      const response = await fetch('http://localhost:3011/events');

      if (!response.ok) {
        console.error('Error fetching events:', response.status, response.statusText);
        throw new Error('Failed to fetch events');
      }

      events = await response.json();
    } catch (error) {
      console.error('Error fetching events:', error.message);
    }
  });
</script>

<main>
  {#if events.length > 0}
    <ul>
      {#each events as event (event.id)}
        <li>{event.name}</li>
      {/each}
    </ul>
  {:else}
    <p>No events available.</p>
  {/if}
</main>
