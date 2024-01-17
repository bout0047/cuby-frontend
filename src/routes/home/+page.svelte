<script>

  import NavBar from '$lib/components/NavBar.svelte';
  import TopNav from '$lib/components/TopNav.svelte';
  import { onMount } from 'svelte';

  let id = 0;
  /**
     * @type {string | any[]}
     */
  let profiles = [];
  let stats = [37, 5];

  onMount(async () => {
      try {
         const response = await fetch("http://localhost:3011/profiles");

         if (!response.ok) {
            console.error(
               "Error fetching profiles:1",
               response.status,
               response.statusText
            );
            throw new Error("Failed to fetch profiles");
         }

         profiles = await response.json();
         id = profiles.length - 1;
         console.log(profiles[id]);
      } catch (error) {
         console.error("Error fetching profiles:2", error.message);
      }
   });


  let otherEvents;

  onMount(async () => {
    try {
      const response = await fetch('http://localhost:3011/events');
      if (!response.ok) {
        throw new Error(`Failed to fetch events data: ${response.statusText}`);
      }

      const eventData = await response.json();
      const latestFourEvents = eventData
        .sort((a, b) => new Date(b.datetime) - new Date(a.datetime))
        .slice(0, 5);

      otherEvents = latestFourEvents.map(event => ({
        detailsButton: 'Details',
        link: event.link,
        name: event.name,
        id: event.id, 
        datetime: event.datetime,
      }));
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  });

  function formatDate(dateTimeString) {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateTimeString);
    return date.toLocaleDateString(undefined, options);
  }

  onMount(async () => {
    try {
      const response = await fetch('http://localhost:3011/calendar');
      if (!response.ok) {
        throw new Error(`Failed to fetch events data: ${response.statusText}`);
      }

      const userEvents = await response.json();
      return userEvents;

    } catch (error) {
      console.error('Error fetching events:', error);
    }
  });
</script>

<style>
  .event-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
  }

  .event-box {
    background-color: #c1f3dd; /* Adjust background color as needed */
    border-radius: 10px;
    padding: 10px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s ease-in-out;
  }

  .event-box:hover {
    transform: scale(1.05);
  }

  .event-image {
    width: 100%;
    height: auto;
    border-radius: 8px;
    margin-bottom: 10px;
  }

  .event-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 5px;
  }
</style>

<main>


  {#if profiles.length > 0}
<TopNav />
  <h1 class="text-3xl text-center mt-4 font-bold">Hello {profiles[id].name}!</h1>
  <div class="grid grid-cols-2 gap-4 content-evenly m-5 mt-7">
    <div>
      <div class="box bg-aquamarine font-semibold p-3 text-lg rounded-lg w-35 h-20 text-center">
        <h3>Clicks today:</h3>
        <p>{stats[0]}</p>
      </div>
    </div>
    <div>
      <div class="box bg-aquamarine font-semibold p-0.5 text-lg rounded-lg w-35 h-20 text-center">
        <h3>Events this month:</h3>
        <p>{stats[1]}</p>
      </div>
    </div>
  </div>

  <section class="mx-3">
    <div class="bg-cream rounded-t-lg p-2.5 mt-4">
      <h1 class="text-left ml-2 underline font-bold">Next Event:</h1>
    </div>
    <div class="bg-royalBlue p-1 rounded-b-lg">
      <div class="grid grid-cols-1 mx-3 my-1 text-left">


        <div class="gap-4 text-platinum font-semibold">
          
        </div>
      </div>
    </div>
  </section>

  <div class="bg-cream rounded-t-lg mt-5 p-2">
    <h1 class="text-left ml-2 underline font-bold">Other Events:</h1>
  </div>
    <div class="bg-aquamarine p-5 rounded-b-lg">
      <div class="grid grid-cols-2 gap-4 mr-1.5">
        {#each otherEvents as event}
          {#if event.link}
            <div class="event-container">
              <a href={`http://localhost:5173/events/${event.id}`} target="_blank">
                <div class="event-box">
                  <img
                    src={event.link}
                    alt="Event Image"
                    class="event-image rounded-lg"
                  />
                  <h1 class="event-title">{event.name}</h1>
                  <p class="event-date">{formatDate(event.datetime)}</p>              
                </div>
              </a>
            </div>
          {/if}
        {/each}
      </div>
    </div>
  {:else}
    <p>No homepage available.</p>
  {/if}
  <footer class="mt-20">
    <NavBar />
  </footer>
</main>