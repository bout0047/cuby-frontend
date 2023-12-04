<script>
   import NavBar from "$lib/components/NavBar.svelte";
   import '../../app.css';
   let user = {
      name: "John Doe",
      email: "john@example.com",
      picture: "../src/img/stokstraart.png", 
      goals: ["Talk to a random person", "Have conversation for 10 min", "Join 5 events"],
      stats: {
        clicks: 50,
        stress: 37,
        exercises: 3,
     },
  };

  function navigateToEditProfile() {
     goto('/profile/edit'); // Use the goto function to navigate to the specified route
  }
</script>

<main class="container mx-auto p-4 bg-090C9B relative">
  <section class="text-center relative">
     <button on:click={navigateToEditProfile} class="corner-button absolute top-0 right-0 m-4 p-2 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 ease-in-out">Edit</button>
     <img src={user.picture} alt="Profile Picture" class="rounded-full shadow-md mx-auto mb-4" />
     <h1 class="text-3xl font-bold">{user.name}</h1>
     <p class="text-gray-600">Email: {user.email}</p>
  </section>

  <section class="mt-6">
     <h2 class="text-2xl font-semibold mb-4">Goals</h2>
     <ul class="list-disc ml-6">
        {#each user.goals as goal (goal)}
           <li>{goal}</li>
        {/each}
     </ul>
  </section>

  <section class="mt-6">
     <h2 class="text-2xl font-semibold mb-2">Stats</h2>
     <p class="text-gray-600">Clicks today: {user.stats.clicks}</p>
     <p class="text-gray-600">Stress level in the last hour: {user.stats.stress}%</p>
     <p class="text-gray-600">Exercises done: {user.stats.exercises}</p>
  </section>

  <footer>
     <NavBar />
  </footer>
</main>

<style>
  .corner-button {
     background-color: #4299e1; /* Base color */
     transition: background-color 0.3s, transform 0.3s;
  }

  .corner-button:hover {
     background-color: #1E40AF; /* Darker shade of blue on hover */
     transform: scale(1.05); /* Scale the button slightly on hover */
  }

  .corner-button:focus {
     box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5); /* Add a subtle blue outline on focus */
  }
</style>
