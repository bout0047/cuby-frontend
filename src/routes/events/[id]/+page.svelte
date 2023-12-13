<script>
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';
  import { page } from '$app/stores';	
  import TopNav from '$lib/components/TopNav.svelte';
  import NavBar from '$lib/components/NavBar.svelte';

  let event;
  let joined = false;

  onMount(async () => {
    try {
      const response = await fetch(
        `http://localhost:3011/events/${$page.params.id}`
      );

      if (!response.ok) {
        console.error(
          'Error fetching events:',
          response.status,
          response.statusText
        );
        throw new Error('Failed to fetch events');
      }

      event = await response.json();
    } catch (error) {
      console.error('Error fetching events:', error.message);
    }
  });

  function changeButton() {
    let button = document.getElementById('joinLeave');

    if (button?.innerHTML === 'Join Event') {
      button.innerHTML = 'Leave Event';
      joined = true;
    } else {
      button.innerHTML = 'Join Event';
      joined = false;
    }
  }
</script>

<TopNav />

<main>
    <button on:click={() => goto('/events')} ><i class="fa-solid fa-arrow-left w-7 h-7 p-2 m-2"></i></button>
  {#if event}

  <div class="mt-10">
      <h2 class="text-3xl font-bold mt-10 flex justify-center text-center">{event.name}</h2>
      <div class="">
        <p class="text-xl m-4 mt-3 font-bold">Where: {event.location}</p>
        <p class="text-lg m-3">{event.description}</p>
      </div>
    </div>
  {:else}
    <p>Loading...</p>
  {/if}
</main>

<button id="joinLeave" on:click={changeButton} class="bg-darkestBlue text-white w-full m-3 rounded-md p-2 text-xl font-bold">Join Event</button>

<NavBar />
<style>
</style>
