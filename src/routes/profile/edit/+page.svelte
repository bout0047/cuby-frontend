<script>
   // @ts-nocheck

   import { UserArray } from "../user.js";
   import { onMount } from "svelte";
   import "../../../app.css";
   import "@fortawesome/fontawesome-free/js/all.js";
   $: user = $UserArray;
   let profilepicture = "../src/img/stokstraart.png";

   let newName = "";
   let newEmail = "";
   let newGoals = [];
   let newInterests = $UserArray.interests.map((interest) => interest.selected);

   function updateValues() {
      newName = document.getElementById("newName").value;
      newEmail = document.getElementById("newEmail").value;
      newGoals = user.goals.map((goal) => {
         const goalInput = document.getElementById("new" + goal);
         return goalInput ? goalInput.value : "";
      });
      newInterests = user.interests.map((interest) => interest.selected);
      console.log(newName);
      console.log(newEmail);
      console.log(newGoals);
      console.log(newInterests);
   }

   function toggleInterest(id) {
      const interestIndex = user.interests.findIndex(
         (interest) => interest.id === id
      );

      console.log("Before changes:", user.interests[interestIndex].selected);

      user.interests[interestIndex].selected =
         !user.interests[interestIndex].selected;

      const newInterests = user.interests.map((interest) => interest.selected);

      console.log("After changes:", user.interests[interestIndex].selected);
      console.log("After changes:", newInterests);
   }

   function saveChanges() {
      window.location.href = "/profile";
      updateValues();
   }
</script>


<main class="container mx-auto px-4 bg-090C9B relative">
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
      value={user.name}
    />
    
      <br />
      <input
         type="text"
         id="newEmail"
         class="caret-Navbarblue text-black"
         value={user.email}
      />
   </section>

   <section class="mt-6">
      <h2 class="text-2xl font-semibold mb-2">Goals</h2>
      <ul class="list-disc ml-6">
         {#each user.goals as goal (goal)}
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
      {#each user.interests as { id, name, selected }}
         <button
            id="new{name}"
            on:click={() => toggleInterest(id)}
            class={`rounded-lg border-2  px-1 ${
               selected ? "bg-salmonLikeColor" : ""
            }`}
         >
            {name}
         </button>
      {/each}
   </div>

   <button
      on:click={saveChanges}
      class="mt-10 text-lg font-bold rounded-lg px-2 transition ease-in-out delay-150 bg-Navbarblue hover:-translate-y-1 hover:scale-110 hover:bg-indigo-500 duration-300"
      >Save Changes</button
   >
</main>

<style>
</style>
