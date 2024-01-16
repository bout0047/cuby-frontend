<script>
  import NavBar from '$lib/components/NavBar.svelte';
  import TopNav from '$lib/components/TopNav.svelte';
  import { goto } from '$app/navigation';
  export let data;

  const { events } = data;
  let searchQuery = '';


  $: filteredEvents = searchQuery
    ? events.filter(event => 
        event.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : events;
</script>

<TopNav />
<main>
  <h1 class="text-3xl font-bold m-6 mt-0 fixed">Upcoming Events</h1>
  
  <input type="text" bind:value={searchQuery} placeholder="Search events..." class="w-full mt-12 mx-5 rounded p-2" />

  <div class="h-5/6 max-h-full overflow-y-auto scroll-m-10 absolute p-1">
    {#if filteredEvents.length > 0}
      <ul class="">
        {#each filteredEvents as event (event.id)}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            class="rounded-lg bg-somePaleGreen mx-5 mt-4 w-screen" on:click={() => goto(`/events/${event.id}`)}>
            <div class="flex ">
              <div class="text-2xl w-3/4 p-1 mt-3.5 ml-1">{event.name}</div>
              <div
                class="ml-12 w-30 top-0 right-0 font-bold rounded-tr-lg bg-aquamarine text-white p-2 w-1/4"
              >
                {event.date}
            </div>
            </div>
            <div class="flex">
              <div class="rounded-lg w-full m-2 p-2 bg-aquamarine text-black">
                {event.location}
              </div>
                <i class="fa-solid fa-arrow-right m-6 mr-10" />
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

