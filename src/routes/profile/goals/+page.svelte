<script>
   // @ts-nocheck
   import { onMount } from "svelte";
   import "../../../app.css";
   import "@fortawesome/fontawesome-free/js/all.js";
   export let profiles = [];
   import { goto } from "$app/navigation";
   let id = 0;
   let newName = "";
   let newEmail = "";
   let newGoals = [
      [
         "joining a new event",
         "connecting with more people",
         "participate in more events",
      ],
      [
         "making more eye contact",
         "talking with a person for longer",
         "speak publicly like a presentation",
      ],
      [
         "meditate for a few minutes",
         "do yoga until im relaxed",
         "deeply breath in and out 10 times",
         "take a walk",
      ],
   ];
   let newInterests = [];
   let jsonData = {
      id: id,
      name: newName,
      email: newEmail,
      goals: newGoals,
      interests: newInterests,
   };
   let focus = "";
   let method = "";
   let stress = "";

   function handleSelection(subject) {
      subject = event.target.value;
   }

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

   function updateValues() {
      jsonData = {
         id: id,
         name: profiles[id].name,
         email: profiles[id].email,
         goals: [focus, method, stress],
         interests: profiles[id].interests,
      };
      console.log(jsonData);
      sendToDataBase();
   }

   function saveChanges() {
      window.location.href = "/profile";
      updateValues();
   }

   async function sendToDataBase() {
      try {
         const response = await fetch(
            `http://localhost:3011/profiles/${jsonData.id}`,
            {
               method: "PUT",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify(jsonData),
            }
         );

         if (!response.ok) {
            console.error(
               "Error updating profile:",
               response.status,
               response.statusText
            );
            throw new Error("Failed to update profile");
         }

         const updatedProfile = await response.json();
         console.log("Profile updated:", updatedProfile);
      } catch (error) {
         console.error("Error updating profile:", error);
      }
   }
</script>

<main class="container mx-auto px-4 bg-090C9B relative">
   {#if profiles.length > 0}
      <section class="mt-6">
         <h2 class="text-2xl font-semibold">Edit your Goals:</h2>
         <div class="relative inline-block text-left" />
      </section>
      <section class="text-center border-t pt-5">
         <p class="text-2xl font-semibold">I want to focus on:</p>
         <div>
            <select
               id="focus"
               class="bg-aquamarine"
               bind:value={focus}
               on:change={handleSelection(focus)}
            >
               {#each newGoals[0] as option (option)}
                  <option class="bg-platinum" value={option}>{option}</option>
               {/each}
            </select>

            <p class="text-2xl font-semibold pt-5">I will do this by:</p>
            <select
               id="method"
               class="bg-aquamarine"
               bind:value={method}
               on:change={handleSelection(method)}
            >
               {#each newGoals[1] as option (option)}
                  <option class="bg-platinum" value={option}>{option}</option>
               {/each}
            </select>
            <p class="text-2xl font-semibold pt-5">If I stress to much I will:</p>
            <select
               id="stress"
               class="bg-aquamarine"
               bind:value={stress}
               on:change={handleSelection(stress)}>
               {#each newGoals[2] as option (option)}
                  <option class="border-red bg-platinum" value={option}>{option}</option>
               {/each}
            </select>
         </div>
      </section>
      <div class="grid grid-cols-2"> 
         <button
         class="mt-10 text-lg font-bold rounded-lg px-2 bg-Navbarblue hover:bg-platinum"
         on:click={() => goto("/profile")}>Back to Profile</button>
      <button
         on:click={saveChanges}
         class="mt-10 text-lg font-bold rounded-lg px-2 bg-Navbarblue ml-5 hover:bg-platinum"
         >Save Changes</button>
      </div>
   {:else}
      <p>loading...</p>
   {/if}
</main>

<style>
</style>
