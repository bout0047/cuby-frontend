<script>
  import '@fortawesome/fontawesome-free/js/all.js';
  import NavBar from '$lib/components/NavBar.svelte';
  import TopNav from '$lib/components/TopNav.svelte';
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  export let events = [];

  onMount(async () => {
    try {
      const response = await fetch('http://localhost:3011/events');

      if (!response.ok) {
        console.error(
          'Error fetching events:',
          response.status,
          response.statusText
        );
        throw new Error('Failed to fetch events');
      }

      events = await response.json();
    } catch (error) {
      console.error('Error fetching events:', error.message);
    }
  });
</script>

<TopNav />
<main>
  
  <h1 class="text-3xl font-bold m-6 mt-9 fixed">Upcoming Events</h1>

  <div class="h-4/5 max-h-full overflow-y-auto mt-20 scroll-m-10 absolute p-1">
    {#if events.length > 0}
      <ul class="">
        {#each events as event (event.id)}
          <div
            class="rounded-lg bg-somePaleGreen m-2 mx-5 p-2 mt-5 scroll-smooth"
          >
            <div class="flex mx-2">
              <li class="text-2xl">{event.name}</li>
              <li
                class="ml-12 w-auto font-bold rounded-xl bg-darkestBlue text-white p-2"
              >
                17 Jan 2024
              </li>
            </div>
            <div class="flex">
              <li class="rounded w-full mt-2 p-2 bg-royalBlue text-white">
                {event.location}
              </li>
              <button
                class="ml-32 mt-4"
                on:click={() => goto(`/events/${event.id}`)}
              >
                <i class="fa-solid fa-arrow-right" />
              </button>
            </div>
          </div>
        {/each}
      </ul>
    {:else}
      <p>No events available.</p>
    {/if}
  </div>
  <footer>
    <NavBar />
  </footer>
</main>
