<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';	

  console.log('Page:', $page.params.id);

  let url = window.location.href;
  console.log('URL:', url); 
  let id = url.substring(url.lastIndexOf('/') + 1);
  console.log('Event ID:', id);

  let event;

  onMount(async () => {
    try {
      const response = await fetch(`http://localhost:3011/events/${$page.params.id}`);

      if (!response.ok) {
        console.error('Error fetching events:', response.status, response.statusText);
        throw new Error('Failed to fetch events');
      }

      event = await response.json();
      console.log(event);    
    } catch (error) {
      console.error('Error fetching events:', error.message);
    }
  });
  
</script>

<main>
  {#if event}
    <h1>Event Details</h1>
    <p>{event.name}</p>
    <p>{event.location}</p>
  {:else}
    <p>Loading...</p>
  {/if}
</main>

<button on:click={() => goto('/events')}>Back to Events</button>
