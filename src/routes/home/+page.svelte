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
      const response = await fetch('http://localhost:3011/profiles');

      if (!response.ok) {
        console.error(
          'Error fetching profiles:1',
          response.status,
          response.statusText
        );
        throw new Error('Failed to fetch profiles');
      }

      profiles = await response.json();
      id = profiles.length - 1;
      console.log(profiles[id]);
    } catch (error) {
      console.error('Error fetching profiles:2', error);
    }
  });

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

      otherEvents = latestFourEvents.map((event) => ({
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

  // If text is longer than a specific number of characters, then write 3 dots
  function truncateText(text, characters) {
    const truncatedText = text.slice(0, characters);

    return text.length > characters ? `${truncatedText}...` : truncatedText;
  }
</script>

<main>
  {#if profiles.length > 0}
    <TopNav />
    <h1 class="text-3xl text-center mt-2 font-bold">
      Hello {profiles[id].name}!
    </h1>
    <div class="grid grid-cols-2 gap-4 content-evenly m-5 mt-7">
      <div>
        <div
          class="box bg-aquamarine font-semibold p-3 text-lg rounded-lg w-35 h-20 text-center"
        >
          <h3>Clicks today:</h3>
          <p>{stats[0]}</p>
        </div>
      </div>
      <div>
        <div
          class="box bg-aquamarine font-semibold p-0.5 text-lg rounded-lg w-35 h-20 text-center"
        >
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
          <div class="gap-4 text-platinum font-semibold" />
        </div>
      </div>
    </section>

    <div class="bg-cream rounded-t-lg mt-5 p-2 mx-3">
      <h1 class="text-left ml-2 underline font-bold">Other Events:</h1>
    </div>
    <div class="bg-aquamarine p-3 rounded-b-lg mx-3 mb-10">
      <div class="grid grid-cols-2 gap-2 mr-1.5">
        {#each otherEvents as event}
          {#if event.link}
            <div class="">
              <a href={`http://localhost:5173/events/${event.id}`}>
                <div class="p-2 bg-somePaleGreen rounded-lg">
                  <!-- svelte-ignore a11y-img-redundant-alt -->
                  <img
                    src={event.link}
                    alt="Event Image"
                    class="w-full h-auto mb-2 rounded-lg"
                  />
                  <p class="text-base font-semibold leading-tight">
                    {truncateText(event.name, 13)}
                  </p>
                  <p class="leading-tight">{formatDate(event.datetime)}</p>
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
