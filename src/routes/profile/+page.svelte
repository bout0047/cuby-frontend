<script>
   // @ts-nocheck
   import NavBar from "$lib/components/NavBar.svelte";
   import { onMount } from "svelte";
   let profilepicture = "../src/img/stokstraart.png";
   export let profiles = [];
   let id = 0;
 

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
      } catch (error) {
         console.error("Error fetching profiles:2", error.message);
      }
   });

</script>

<main class="container mx-auto p-4 bg-090C9B relative">
   {#if profiles.length > 0}
      <section class="text-center relative">
         <button
            on:click={() => {
               window.location.href = "/profile/goals";
            }}
            class="corner-button absolute bg-slate top-0 text-nowrap text-sm right-72 left-0 p-2 px-4 hover:text-cream rounded-full"
            >Edit Goals</button>
         <button
            on:click={() => {
               window.location.href = "/profile/edit";
            }}
            class="corner-button absolute bg-slate top-0 text-nowrap text-sm right-0 text-right pl-1 py-2 px-3 hover:text-cream rounded-full"
            >Edit Profile</button>
         <!-- svelte-ignore a11y-img-redundant-alt -->
         <img
            src={profilepicture}
            alt="Profile Picture"
            class="rounded-full shadow-md w-56 h-56 mx-auto mb-4 mt-2"
         />

         <h1 class="text-3xl font-bold">{profiles[id].name}</h1>
         <p class="text-gray-600">Email: {profiles[id].email}</p>
      </section>
      <section />
      <section class="mt-2">
         <h2 class="text-4xl font-semibold mb-2">Goals</h2>
         {#if profiles[id].goals[0] == undefined || profiles[id].goals[1] == undefined || profiles[id].goals[2] == undefined}
         <p class="text-xl font-medium"> Please edit your goals in the button in the top left</p>
         {:else}
            <p class="text-2xl font-semibold">I want to focus on:</p>
            <div class="text-xl font-medium">{profiles[id].goals[0]}</div>
            <p class="text-2xl font-semibold">I will do this by:</p>
            <div class="text-xl font-medium">{profiles[id].goals[1]}</div>
            <p class="text-2xl font-semibold">If I stress to much I will:</p>
            <div class="text-xl font-medium">{profiles[id].goals[2]}</div>
         {/if}
      </section>

      <p class="text-4xl font-semibold">Interests:</p>
      <div class="grid grid-cols-4">
         {#each profiles[id].interests as interest}
            <button
               class={`rounded-lg text-center text-lg mt-2 border-2 ${
                  interest[2] === "true" ? "bg-aquamarine" : ""
               }`}
            >
               {interest[1]}
            </button>
         {/each}
      </div>

      <footer>
         <NavBar />
      </footer>
   {:else}
      <p>loading...</p>
   {/if}
</main>

<style>
</style>