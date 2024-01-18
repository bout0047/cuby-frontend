<script>
   // @ts-nocheck
   import "../../../app.css";
   import "@fortawesome/fontawesome-free/js/all.js";
   import { onMount } from "svelte";
   let profilepicture = "../src/img/stokstraart.png";
   let newName = "";
   let newEmail = "";
   let newGoals = [];
   let newInterests = [
      ["0", "Football", "false"],
      ["1", "Basketball", "false"],
      ["2", "Reading", "false"],
      ["3", "Painting", "false"],
      ["4", "Hiking", "false"],
      ["5", "Games", "false"],
      ["6", "Drawing", "false"],
      ["7", "Cooking", "false"],
      ["8", "Yoga", "false"],
      ["9", "Writing", "false"],
      ["10", "Music", "false"],
      ["11", "Puzzle", "false"],
    ];
    
   let jsonData = [];
   let profileData = {
      name: newName,
      email: newEmail,
      goals: newGoals,
      interests: newInterests,
   };

   onMount(async () => {
      try {
         const response = await fetch("http://localhost:3011/users");

         if (!response.ok) {
            console.error(
               "Error fetching profiles:1",
               response.status,
               response.statusText
            );
            throw new Error("Failed to fetch profiles");
         }

         jsonData = await response.json();
         jsonData = jsonData[jsonData.length - 1];
      } catch (error) {
         console.error("Error fetching profiles:2", error.message);
      }
   });

   function updateValues() {
      jsonData = {
         name: jsonData.username,
         email: document.getElementById("newEmail").value,
         goals: newGoals,
         interests: profileData.interests.map((interest) => interest),
      };
      console.log(jsonData);
      createProfile();
   }

   function toggleInterest(numberOfInterest) {
      if (profileData.interests[numberOfInterest][2] === "true") {
         profileData.interests[numberOfInterest][2] = "false";
      } else {
         profileData.interests[numberOfInterest][2] = "true";
      }

      newInterests = profileData.interests.map((interest) => interest[2]);
   }

   function saveChanges() {
      window.location.href = "/home";
      updateValues();
   }

  

   async function createProfile() {
      try {
         const response = await fetch(
            `http://localhost:3011/profiles/`,
            {
               method: "POST",
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
   {#if jsonData}
      <section class="mt-6">
         <h2 class="text-2xl font-semibold mb-4">Create your Profile:</h2>
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
            value={jsonData.username}
            placeholder= "Your Name"
         />

         <br />
         <input
            type="text"
            id="newEmail"
            class="caret-Navbarblue text-black"
            value=""
            placeholder= "Your Email"
         />
      </section>

      <p class="text-2xl font-semibold">Interests:</p>
      <div class="grid grid-cols-4">
         {#each profileData.interests as interest (interest)}
            <button
               on:click={() => toggleInterest(interest[0])}
               class={`rounded-lg text-center mt-2 mr-1 border-2  px-1 ${
                  interest[2] === "true" ? "bg-salmonLikeColor" : ""
               }`}
            >{interest[1]}
            </button>
         {/each}
      </div>      
      <button
         on:click={saveChanges}
         class="mt-10 text-lg font-bold rounded-lg px-2 bg-Navbarblue hover:bg-platinum"
         >Create Profile</button>
   {:else}
      <p>No profiles available.</p>
   {/if}
</main>

<style>
</style>

<!-- 

create Profile register

<script>
   // @ts-nocheck
   import { onMount } from "svelte";
   import "../../../app.css";
   import "@fortawesome/fontawesome-free/js/all.js";
   export let profiles = [];
   import { goto } from "$app/navigation";
   let profilepicture = "../src/img/stokstraart.png";
   let id = 0;
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
         profiles = profiles[profiles - 1];
      } catch (error) {
         console.error("Error fetching profiles:2", error.message);
      }
   });

   function updateValues() {
      jsonData = {
         name: document.getElementById("newName").value,
         email: document.getElementById("newEmail").value,
         goals: [focus, method, stress],
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
   {#if jsonData}
      <section class="mt-6">
         <h2 class="text-2xl font-semibold mb-4">Create your Profile:</h2>
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
            ><i class="fa-solid fa-plus" /></button>
         <input
            type="text"
            id="newName"
            class="caret-Navbarblue font-bold my-5"
            value={jsonData.username}
            placeholder= "Your Name"
         />

         <br />
         <input
            type="text"
            id="newEmail"
            class="caret-Navbarblue text-black"
            value=""
            placeholder= "Your Email"
         />
      </section>

      <section class="mt-6">
         <h2 class="text-2xl font-semibold">Edit your Goals:</h2>
         <div class="relative inline-block text-left" />
      </section>
      <section class="text-center border-t pt-5">
         <p class="text-2xl font-semibold">I want to focus on:</p>
         <div>
            <select
               id="focus"
               class="bg-somePaleGreen"
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
               class="bg-somePaleGreen"
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
               class="bg-somePaleGreen"
               bind:value={stress}
               on:change={handleSelection(stress)}>
               {#each newGoals[2] as option (option)}
                  <option class="border-red bg-platinum" value={option}>{option}</option>
               {/each}
            </select>
         </div>
      </section>

      <p class="text-2xl font-semibold">Interests:</p>
      <div class="grid grid-cols-4">
         {#each profileData.interests as interest (interest)}
            <button
               on:click={() => toggleInterest(interest[0])}
               class={`rounded-lg text-center mt-2 mr-1 border-2  px-1 ${
                  interest[2] === "true" ? "bg-aquamarine" : ""
               }`}
            >{interest[1]}
            </button>
         {/each}
      </div>      
      <button
         on:click={saveChanges}
         class="mt-10 text-lg font-bold rounded-lg px-2 bg-Navbarblue hover:bg-platinum"
         >Create Profile</button>
   {:else}
      <p>No profiles available.</p>
   {/if}
</main>

<style>
</style>
 -->
