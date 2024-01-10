<script>
  import NavBar from '$lib/components/NavBar.svelte';
  import TopNav from '$lib/components/TopNav.svelte';
  import { goto } from '$app/navigation';

  export let data;

  const { events } = data;
  let searchQuery = '';

  $: filteredEvents = searchQuery
    ? events.filter((event) =>
        event.name.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : events;

  function formatDateTime(dateTimeString) {
    const eventDateTime = new Date(dateTimeString);
    const options = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
    };
    return eventDateTime.toLocaleString('en-US', options);
  }
</script>

<TopNav />
<main>
  <TopNav />
  <input
    type="text"
    bind:value={searchQuery}
    placeholder="Search events..."
    class="relative w-full mt-16 m-5 rounded p-2"
  />

  <h1 class="text-3xl font-bold m-6 mt-0 fixed">Upcoming Events</h1>

  <div class="h-5/6 max-h-full overflow-y-auto mt-10 scroll-m-10 absolute p-1">
    {#if filteredEvents.length > 0}
      <ul class="">
        {#each filteredEvents as event (event.id)}
          <div
            class="rounded-lg bg-somePaleGreen mx-5 p-2 mt-4 w-screen "
          >
            <div class="flex ">
              <div class="text-2xl w-3/4">{event.name}</div>
              <div
                class="ml-12 w-30 top-0 right-0 font-bold rounded-xl bg-darkestBlue text-white p-2 w-1/4"
              >
                {formatDateTime(event.datetime)}
              </div>
            </div>
            <div class="flex">
              <div class="rounded w-full mt-2 p-2 bg-royalBlue text-white">
                {event.location}
              </div>
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
