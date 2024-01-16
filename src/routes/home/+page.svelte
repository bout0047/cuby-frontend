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
</script>

<main>

  {#if profiles.length > 0}
<TopNav />
  <h1 class="text-3xl text-center mt-4 font-bold">Hello {profiles[id].name}!</h1>
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
        <div class="gap-4 text-platinum font-semibold">
          <div>
            <h2>Event Name</h2>
          </div>
          <div class="mt-1">
            <h3>Great description of the event</h3>
          </div>
          <div class="mt-4">
            <h3>Where:</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="mx-3">
    <div class="bg-cream rounded-t-lg mt-5 p-2">
      <h1 class="text-left ml-2 underline font-bold">Other Events:</h1>
    </div>
    <div class="bg-aquamarine p-5 rounded-b-lg">
      <div class="grid grid-cols-2 gap-4 mr-1.5">
        {#each otherEvents as event}
          <div>
            <div class="box bg-somePaleGreen rounded-lg w-40 h-28 p-2 ">
              <img
                src={event.image}
                alt="Event Image"
                class="rounded-lg text-lg shadow-md mx-auto p-2"
              />
              <button
                class="bg-royalBlue text-platinum text-lg p-1 rounded-md flex justify-center items-center w-20 h-10 mx-auto my-4"
                >{event.detailsButton}</button
              >
            </div>
          </div>
        {/each}
      </div>
    </div>
  </div>
  {:else}
    <p>No homepage available.</p>
  {/if}

  <footer class="mt-20">
    <NavBar />
  </footer>
</main>
