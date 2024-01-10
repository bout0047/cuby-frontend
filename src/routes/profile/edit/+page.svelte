<script>
   // @ts-nocheck
   import { onMount } from "svelte";
   import "../../../app.css";
   import "@fortawesome/fontawesome-free/js/all.js";
   export let profiles = [];
   let id = 1;
   let profilepicture = "../src/img/stokstraart.png";
   let newName = "";
   let newEmail = "";
   let newGoals = [];
   let newInterests = [];
   let jsonData = {
      id: id,
      name: newName,
      email: newEmail,
      goals: newGoals,
      interests: newInterests,
   };

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
      } catch (error) {
         console.error("Error fetching profiles:2", error.message);
      }
   });

   function updateValues() {
      jsonData = {
         id: id,
         name: document.getElementById("newName").value,
         email: document.getElementById("newEmail").value,
         goals: profiles[id].goals.map((goal) => {
            const goalInput = document.getElementById("new" + goal);
            return goalInput ? goalInput.value : "";
         }),
         interests: profiles[id].interests.map((interest) => interest),
      };
      console.log(jsonData);
      sendToDataBase();
   }

   function toggleInterest(numberOfInterest) {
      if (profiles[id].interests[numberOfInterest][2] === "true") {
         profiles[id].interests[numberOfInterest][2] = "false";
      } else {
         profiles[id].interests[numberOfInterest][2] = "true";
      }

      newInterests = profiles[id].interests.map((interest) => interest[2]);
   }

   function saveChanges() {
      // window.location.href = "/profile";
      updateValues();
   }

   async function sendToDataBase() {
      try {
         const response = await fetch(`http://localhost:3011/profile/${jsonData.id}`, {
            method: "PUT",
            headers: {
               "Content-Type": "application/json",
            },
            body: JSON.stringify(jsonData),
         });

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
         <h2 class="text-2xl font-semibold mb-4">Edit your Profile:</h2>
      </section>
      <section class="text-center border-t pt-5">
         <!-- svelte-ignore a11y-img-redundant-alt -->
         <img
            src={profilepicture}
            alt="Profile Picture"
            class="rounded-full shadow-md mx-auto mb-4 w-60 h-60"
         />
         <button
            class="absolute right-20 top-64 bg-white rounded-full text-lg px-2"
            ><i class="fa-solid fa-plus" /></button
         >
         <input
            type="text"
            id="newName"
            class="caret-Navbarblue font-bold"
            value={profiles[id].name}
         />

         <br />
         <input
            type="text"
            id="newEmail"
            class="caret-Navbarblue text-black"
            value={profiles[id].email}
         />
      </section>

      <section class="mt-6">
         <h2 class="text-2xl font-semibold mb-2">Goals</h2>
         <ul class="list-disc ml-6">
            {#each profiles[id].goals as goal (goal)}
               <input
                  type="text"
                  id="new{goal}"
                  class="text-left"
                  value={goal}
               />
            {/each}
         </ul>
      </section>

      <p class="text-2xl font-semibold">Interests:</p>
      <div class="grid grid-cols-4">
         {#each profiles[id].interests as interest (interest)}
            <button
               on:click={() => toggleInterest(interest[0] - 1)}
               class={`rounded-lg border-2  px-1 ${
                  interest[2] === "true" ? "bg-salmonLikeColor" : ""
               }`}
            >
               {interest[1]}
            </button>
         {/each}
      </div>
      <button
         on:click={saveChanges}
         class="mt-10 text-lg font-bold rounded-lg px-2 transition ease-in-out delay-150 bg-Navbarblue hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
         >Save Changes</button
      >
   {:else}
      <p>No profiles available.</p>
   {/if}
</main>

<style>
</style>
