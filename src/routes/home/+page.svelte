<script>
  import NavBar from '$lib/components/NavBar.svelte';
  import TopNav from '$lib/components/TopNav.svelte';
  import { onMount } from 'svelte';

  export let events; 
  
  let user = {
    name: 'John Doe',
    email: 'john@example.com',
    picture: '../src/img/stokstraart.png',
    goals: [
      'Talk to a random person',
      'Have a conversation for 10 min',
      'Join 5 events',
    ],
    stats: {
      clicks: 50,
      stress: 37,
      exercises: 3,
    },
  };

  let otherEvents = [
    {
      detailsButton: 'Details',
    },
    {
      detailsButton: 'Details',
    },
    {
      detailsButton: 'Details',
    },
    {
      detailsButton: 'Details',
    },
  ];

  onMount(async () => {
    try {
      const response = await fetch('http://localhost:3011/events');
      if (!response.ok) {
        throw new Error(`Failed to fetch events data: ${response.statusText}`);
      }

      const eventData = await response.json();
      // Assuming eventData is an array with a 'datetime' property
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
  <TopNav />

  <div class="grid grid-cols-2 gap-4 content-evenly m-5 mt-7">
    <div>
      <div class="box bg-aquamarine font-semibold p-3 text-lg rounded-lg w-35 h-20 text-center">
        <h3>Clicks today:</h3>
        <p>{user.stats.clicks}</p>
      </div>
    </div>
    <div>
      <div class="box bg-aquamarine font-semibold p-0.5 text-lg rounded-lg w-35 h-20 text-center">
        <h3>Events this month:</h3>
        <p>{user.goals.length}</p>
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
          <h2>Event Name</h2>
          <p class="mt-1">Great description of the event</p>
          <p class="mt-4">Where:</p>
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

  <footer class="mt-20">
    <NavBar />
  </footer>
</main>