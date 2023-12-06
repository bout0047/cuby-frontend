<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  export let events;
  export let eventId;
  
  let url = 'http://127.0.0.1/events/';
  let id = url.substring(url.lastIndexOf('/'));
  console.log('Event ID:', id);

  let event;

  onMount(async () => {
    try {
      const response = await fetch(`http://localhost:3011/events/${id}`);

      if (!response.ok) {
        console.error('Error fetching events:', response.status, response.statusText);
        throw new Error('Failed to fetch events');
      }

      events = await response.json();

      const eventId = 2;
      const selectedEvent = events.find(event => event.id === eventId);
      console.log('Selected Event:', selectedEvent);
    } catch (error) {
      console.error('Error fetching events:', error.message);
    }
  });
</script>

<main>
  {#if event}
    <h1>Event Details</h1>
    <p>{event.name}</p>
    <!-- Display other event details as needed -->
  {:else}
    <p>Loading...</p>
  {/if}
</main>

<button on:click={() => goto('/events')}>Back to Events</button>
