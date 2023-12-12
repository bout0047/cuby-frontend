<script>
   import NavBar from "$lib/components/NavBar.svelte";
   import { UserArray } from "./user.js";
   import { onMount } from "svelte";
   
   export let profiles = [];

   onMount(async () => {
    try {
      const response = await fetch('http://localhost:3011/profile');

      if (!response.ok) {
        console.error('Error fetching profiles:1', response.status, response.statusText);
        throw new Error('Failed to fetch profiles');
      }

      profiles = await response.json();
    } catch (error) {
      console.error('Error fetching profiles:2', error.message);
    }
  });
   $: user = $UserArray;
</script>

<main class="container mx-auto p-4 bg-090C9B relative">
   <section class="text-center relative">
      <button
         on:click={() => {
            window.location.href = "/profile/edit";
         }}
         class="corner-button absolute top-0 right-0 p-2 px-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 transition-all duration-300 ease-in-out"
         >Edit</button
      >
      <!-- svelte-ignore a11y-img-redundant-alt -->
      <img
         src={user.picture}
         alt="Profile Picture"
         class="rounded-full shadow-md w-80 h-80 mx-auto mb-4 mt-2"
      />
      <h1 class="text-3xl font-bold">{user.name}</h1>
      <p class="text-gray-600">Email: {user.email}</p>
   </section>
<section>
   {#if profiles.length > 0}
    <ul>
      {#each profiles as profiles (profiles.id)}
        <li>{profiles.name}</li>
      {/each}
    </ul>
  {:else}
    <p>No profiles available.</p>
  {/if}
</section>
   <section class="mt-6">
      <h2 class="text-2xl font-semibold mb-4">Goals</h2>
      <ul class="list-disc ml-6">
         {#each user.goals as goal (goal)}
            <li>{goal}</li>
         {/each}
      </ul>
   </section>

   <p class="text-2xl font-semibold">Interests:</p>
   <div class="grid grid-cols-4">
      {#each user.interests as { id, name, selected }}
         <button class={`rounded-lg border-2  px-1 ${selected ? "bg-salmonLikeColor" : ""}`}>
            {name}
         </button>
      {/each}
   </div>

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
      background-color: #1e40af; /* Darker shade of blue on hover */
      transform: scale(1.05); /* Scale the button slightly on hover */
   }

   .corner-button:focus {
      box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5); /* Add a subtle blue outline on focus */
   }
</style>
