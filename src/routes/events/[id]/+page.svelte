<script>
  import { goto } from '$app/navigation';
  import TopNav from '$lib/components/TopNav.svelte';
  import NavBar from '$lib/components/NavBar.svelte';

  export let data;

  const { event } = data;
  const eventId = event.id;
  const datetime = event.datetime;
  let joined = false;

  const changeAttendance = async () => {
    const button = document.getElementById('joinLeave');

    if (joined) {
      try {
        const response = await fetch(`http://localhost:3011/calendar/`, {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            eventId
          }),
        });
        if (response.ok) {
          button.innerHTML = 'Join Event';
          joined = false;
          
        } else {

        }
      } catch (error) {
        console.error('Error removing calendar entry');
      }
    } else {
      try {
        const response = await fetch(`http://localhost:3011/calendar/`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            eventId,
            datetime
          }),
        });
        if (response.ok) {
          button.innerHTML = 'Leave Event';
          joined = true;  
        } else {
        }
      } catch (error) {
        console.error('Error adding calendar entry');
      }
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

<button id="joinLeave" on:click={changeAttendance} class="bg-darkestBlue text-white w-full m-3 rounded-md p-2 text-xl font-bold">Join Event</button>

<NavBar />
<style>
</style>
