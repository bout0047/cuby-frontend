<script>
  import { onMount } from 'svelte';
  import Calendar from './Calendar.svelte';
  export let dateID;
  export let dateHeading;
  import Cookies from 'js-cookie';

  document.querySelectorAll('.am-pm-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function() {
      document.querySelectorAll('.am-pm-toggle').forEach(function(btn) {
        btn.classList.remove('active');
      });
      toggle.classList.add('active');
    });
  });

const createCustomEvent = async () => {
    try {
      const eventName = document.getElementById('event-input').value;
      const hourValue = document.getElementById('hour-input').value;
      const minuteValue = document.getElementById('minute-input').value;
      const amPmValue = document.querySelector('input[name="time"]:checked').value;

      // Using the 24-hour clock
      const hour = amPmValue === 'PM' ? parseInt(hourValue, 10) + 12 : parseInt(hourValue, 10);
      const datetime = `${hour}:${minuteValue}`;

      const cubySession = Cookies.get('cubySession');
      console.log(cubySession);
      const response = await fetch(`http://localhost:3011/calendar/`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: eventName,
          datetime,
          cubySession,
        }),
      });
      console.log(response);
    } catch (error) {
      console.error('Error adding calendar entry:', error);
    }
  };
</script>

<section id="scheduler-modal" class="bg-blue-500 p-4 rounded-md">
  <form id="{dateID}" class="">
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
        <button id="add-event-btn" class="bg-white border px-4 py-2 rounded-md text-sm" on:click={createCustomEvent}>Add</button>
      </div>
    </div>
  </form>
</section>
