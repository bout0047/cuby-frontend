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
      image: 'path/to/image1.jpg',
      joinButton: 'Join',
    },
    {
      image: 'path/to/image2.jpg',
      joinButton: 'Join',
    },
  ];
</script>

<main>
  <TopNav />
  <section class="pt-5">
    <img
      src={user.picture}
      alt="Profile Picture"
      class="rounded-full shadow-md mx-auto mb-4 w-40 h-40"
    />
  </section>

  <div class="grid grid-cols-2 gap-4 content-evenly m-5 mt-10">
    <div>
      <div class="box bg-somePaleGreen text-lg rounded-lg w-30 h-20 text-center">
        <h3>Clicks today:</h3>
        <p>{user.stats.clicks}</p>
      </div>
    </div>
    <div>
      <div class="box bg-somePaleGreen text-lg rounded-lg w-30 h-20 text-center">
        <h3>Events this month:</h3>
        <p>{user.goals.length}</p>
      </div>
    </div>
  </div>

  <section class="my-5 mx-2">
    <h1 class="text-left ml-2 underline font-bold">Next Event:</h1>
    <div class="left-2 border rounded">
      <div class="grid grid-cols-2 m-3 text-left">
        <div class=" gap-4">
          <div>
            <h2>Event Name</h2>
          </div>
          <div>
            <h3>Event Time</h3>
          </div>
          <div>
            <h3>Event Location</h3>
          </div>
        </div>
        <div class="w-12 ml-32">
          <img src="src/img/calender.png" class="w-10 h-10 float-right mr-4" />
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

  <footer>
    <NavBar />
  </footer>
</main>
