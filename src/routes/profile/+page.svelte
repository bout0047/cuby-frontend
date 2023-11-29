
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
        excersies: 3,
      },
    };
  </script>
  
<main class="container mx-auto p-4 bg-090C9B">
    <section class="text-center">
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
        <p class="text-gray-600">Clicks today : {user.stats.clicks}</p>
        <p class="text-gray-600">Stress level in the last hour : {user.stats.stress}%</p>
        <p class="text-gray-600">excersies done: {user.stats.excersies}</p>
      </section>
<footer>
    <NavBar/>
</footer>
</main>

<style>
</style>


