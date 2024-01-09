<script>
  import NavBar from '$lib/components/NavBar.svelte';
  import TopNav from '$lib/components/TopNav.svelte';

  let user = {
    name: 'John Doe',
    email: 'john@example.com',
    picture: '../src/img/stokstraart.png',
    goals: [
      'Talk to a random person',
      'Have conversation for 10 min',
      'Join 5 events',
    ],
    stats: {
      clicks: 50,
      stress: 37,
      excersies: 3,
    },
  };
  let otherEvents = [
    {
      joinButton: 'Join',
    },
    {
      joinButton: 'Join',
    },
  ];
</script>

<main>
  <TopNav />

  <h1 class="text-4xl text-center mt-10 font-bold">Hello {user.name}!</h1>
  <div class="grid grid-cols-2 gap-4 content-evenly m-5 mt-6">
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
    <div class="bg-cream rounded-t-lg p-2.5 mt-8">
      <h1 class="text-left ml-2 underline font-bold">Next Event:</h1>
    </div>
    <div class="bg-royalBlue p-1 rounded-b-lg">
      <div class="grid grid-cols-1 m-3 text-left">
        <div class="gap-4 text-platinum font-semibold">
          <div>
            <h2>Event Name</h2>
          </div>
          <div class="mt-2">
            <h3>Great description of the event</h3>
          </div>
          <div class="mt-5">
            <h3>Where:</h3>
          </div>
        </div>
      </div>
    </div>
  </section>

  <div class="grid grid-cols-2 gap-4 content-evenly m-5">
    {#each otherEvents as event}
      <div>
        <div class="box bg-somePaleGreen rounded-lg w-30 h-40">
          <img
            src={event.image}
            alt="Event Image"
            class="rounded-full text-lg shadow-md mx-auto pb-10 mb-10"
          />
          <button class="bg-darkestBlue text-white text-lg p-1 rounded-md flex justify-center items-center w-20 h-10 mx-auto"
            >{event.joinButton}</button
          >
        </div>
      </div>
    {/each}
  </div>

  <footer class="mt-20">
    <NavBar />
  </footer>
</main>
