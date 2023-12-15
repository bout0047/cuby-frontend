<script>
   import NavBar from "$lib/components/NavBar.svelte";
   import { onMount } from "svelte";
   import { goto } from '$app/navigation';
   import { UserArray } from "./user.js";
   let profilepicture = "../src/img/stokstraart.png";
   export let profiles = [];
   let id = 1;

   onMount(async () => {
    try {
      const response = await fetch('http://localhost:3011/profiles');

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
   {#if profiles.length > 0}
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
         src={profilepicture}
         alt="Profile Picture"
         class="rounded-full shadow-md w-56 h-56 mx-auto mb-4 mt-2"
      />
      
      <h1 class="text-3xl font-bold">{profiles[id].name}</h1>
      <p class="text-gray-600">Email: {profiles[id].email}</p>
   </section>
<section>
</section>
   <section class="mt-6">
      <h2 class="text-2xl font-semibold mb-4">Goals</h2>
      <ul class="list-disc ml-6">
         {#each profiles[id].goals as goal (goal)}
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
   {:else}
   <p>No profiles available.</p>
{/if}
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
