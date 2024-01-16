<script>
  import { each } from "svelte/internal";
  import TopNav from "./TopNav.svelte";
  import NavBar from "./NavBar.svelte";
  import Scheduler from "./Scheduler.svelte";
  
  const date = new Date();
  export let dateID;
  export let dateHeading;

  const today = {
    dayNumber: date.getDate(),
    month: date.getMonth(),
    year: date.getFullYear()
  }

  const monthNames = ["January","February","March","April","May","June","July","August","September","October","November","December"];

  let monthIndex = date.getMonth();

  $: month = monthNames[monthIndex];

  let year = date.getFullYear();

  $: firstDayIndex = new Date(year, monthIndex, 1).getDay();

  $: numberOfDays = new Date(year, monthIndex + 1, 0).getDate();

  let currentDay = date.getDate();

  $: calendarCells = firstDayIndex <= 4 ? 35 : 42;

  const goToNextMonth = ()  => { 
    if (monthIndex >= 11) {
      year += 1;
      return monthIndex = 0;
    }
    monthIndex += 1;
  }

  const goToPrevMonth = ()  => { 
    if (monthIndex <= 0) {
      year -= 1;
      return monthIndex = 11;
    }
    monthIndex -= 1;
  }

  $: console.log(`Month Index: ${monthIndex} --- Number Of Days: ${numberOfDays} --- First Day Index: ${firstDayIndex} ${month} ${today.dayNumber}`);
  
</script>

<main class="container mx-auto my-8">
  <div class="bg-white p-4 rounded-md">
    <div class="month mb-6">
      <ul class="flex justify-between items-center bg-gray-100 p-4 rounded-md">
        <li class="cursor-pointer" on:click={goToPrevMonth}>&#10094;</li>
        <li class="text-xl font-bold">{month}<br><span class="text-base font-normal">{year}</span></li>
        <li class="cursor-pointer" on:click={goToNextMonth}>&#10095;</li>
      </ul>
    </div>

    <div class="days-container grid grid-cols-7 gap-2">
      {#each ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] as day}
        <div class="text-center text-sm font-bold">{day}</div>
      {/each}
      {#each Array(calendarCells) as _, i}
        {#if i < firstDayIndex || i >= numberOfDays + firstDayIndex}
          <div class="w-full h-12"></div>
        {:else}
          <!-- svelte-ignore a11y-click-events-have-key-events -->
          <div
            class="w-full h-12 p-2 cursor-pointer border border-white hover:bg-gray-100 active:bg-gray-200 rounded-md transition-all duration-300 ease-in-out
                   {i === today.dayNumber + (firstDayIndex - 1) && monthIndex === today.month && year === today.year ? 'bg-indigo-500 text-black' : ''} 
                   {i === today.dayNumber && monthIndex === today.month && year === today.year ? 'bg-French text-Navbarblue rounded-full' : ''}"
            on:click
            data-dateID={`${month}_${(i - firstDayIndex + 1)}_${year}`}
          >
            {i - firstDayIndex + 1}
          </div>
        {/if}
      {/each}
    </div>
  </div>
</main>
