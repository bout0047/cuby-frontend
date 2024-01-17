  import { goto } from '$app/navigation';
  import TopNav from '$lib/components/TopNav.svelte';
  import NavBar from '$lib/components/NavBar.svelte';

  export let data;

  const { event } = data;

  let joined = false;


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

  function limitDescription(description, maxSentences = 5) {
    // Split the description into an array of sentences
    const sentences = description.split(/[.!?]/).filter(Boolean);
    
    // Take the first maxSentences sentences
    const slicedDescription = sentences.slice(0, maxSentences).join(' ');

    return slicedDescription;
  }
</script>

<main>
  <button on:click={() => goto('/events')}><i class="fa-solid fa-arrow-left w-7 h-7 p-2 m-2" /></button>
  {#if event}
    <div class="mt-4">
      <h2 class="text-3xl font-bold mt-3 mx-10">{event.name}</h2>

      <button
  id="joinLeave"
  on:click={changeButton}
  class="bg-aquamarine text-black w-full m-3 rounded-md p-2 text-xl font-bold">Join Event</button>

      <img src={event.link} alt="Event Image" class="max-w-full ml-7 my-4 flex justify-center items-center" aria-hidden="true" />
      <div>
        <p class="text-xl m-4 mt-3 font-bold">Where: {event.location}</p>
        <p class="text-lg m-3">{limitDescription(event.description)}</p>
      </div>
    </div>
  {:else}
    <p>Loading...</p>
  {/if}
</main>

<NavBar />


