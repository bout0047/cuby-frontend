<!-- Add Tailwind CSS classes to your HTML elements -->

<script>
  import { onMount } from 'svelte';
  import Calendar from './Calendar.svelte';
  export let dateID;

  export let dateHeading;
  import type { SchedulerProps } from './types';

  document.querySelectorAll('.am-pm-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
      document.querySelectorAll('.am-pm-toggle').forEach(function(btn) {
        btn.classList.remove('active');
      });
      toggle.classList.add('active');
    });
  });

</script>

<section id="scheduler-modal" class="bg-blue-500 p-4 rounded-md">
  <form id="{dateID}" class="space-y-4">
    <div id="closer-cont">
      <span class="close text-white text-sm" title="Close Modal" on:click>&times;</span>
    </div>

    <div id="scheduler-header">
      <h2 class="text-lg font-bold text-white">My Schedule for {dateHeading}</h2>
      <div id="event-add-section" class="flex flex-col">
        <input type="text" id="event-input" placeholder="Add an event..." class="p-2 text-sm border border-gray-300 rounded-md mb-2">
        <div id="time-picker" class="flex items-center mb-2">
          <input type="number" id="hour-input" placeholder="Hr." min="1" max="12" class="p-2 text-sm border border-gray-300 rounded-md mr-1">
          <span class="text-white text-sm">:</span>
          <input type="number" id="minute-input" placeholder="Mins." min="0" max="59" class="p-2 text-sm border border-gray-300 rounded-md mr-1">
        </div>
        <div class="flex items-center mb-2">
          <label class="am-pm-toggle flex items-center text-white text-sm mr-2" id="am-toggle">
            <input type="radio" id="am" name="time" value="AM" checked class="mr-1"> AM
          </label>
          <label class="am-pm-toggle flex items-center text-white text-sm" id="pm-toggle">
            <input type="radio" id="pm" name="time" value="PM" class="mr-1"> PM
          </label>
        </div>
        <button id="add-event-btn" class="bg-white text-blue-500 px-4 py-2 rounded-md text-sm">Add</button>
      </div>
    </div>
    <ul>
      <div class="event-item flex items-center">
        <input type="checkbox" class="event-checkbox mr-2" />
        <span class="event-description text-white text-sm">Go grocery shopping</span>
        <span class="event-time text-white text-sm ml-auto">3:00 pm</span>
        <span class="event-delete text-white text-sm ml-2" title="Delete Event">&times;</span>
      </div>
    </ul>
  </form>
</section>
