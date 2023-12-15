<script>
  export let dateID;

export let dateHeading;

  document.querySelectorAll('.am-pm-toggle').forEach(function(toggle) {
  toggle.addEventListener('click', function() {
    document.querySelectorAll('.am-pm-toggle').forEach(function(btn) {
      btn.classList.remove('active'); // Remove active class from all buttons
    });
    toggle.classList.add('active'); // Add active class to the clicked button
  });

});

  
</script>



<section id="scheduler-modal">
  <form id="{dateID}">
  <div id="closer-cont">
    <span class="close" title="Close Modal" on:click>&times;</span>
  </div>

  <div id="scheduler-header">
    <h2>My Schedule for {dateHeading}</h2>
    <div id="event-add-section">
      <input type="text" id="event-input" placeholder="Add an event...">
      <div id="time-picker">
        <input type="number" id="hour-input" placeholder="Hr." min="1" max="12" />
        <span>:</span>
        <input type="number" id="minute-input" placeholder="Mins." min="0" max="59" />
        <label class="am-pm-toggle" id="am-toggle">
          <input type="radio" id="am" name="time" value="AM" checked> AM
        </label>
        <label class="am-pm-toggle" id="pm-toggle">
          <input type="radio" id="pm" name="time" value="PM"> PM
        </label>        
      </div>
      <button id="add-event-btn">Add</button>
    </div>
  </div>
  <ul>
    <div class="event-item">
      <input type="checkbox" class="event-checkbox" />
      <span class="event-description">Go grocery shopping</span>
      <span class="event-time">3:00 pm</span>
      <span class="event-delete" title="Delete Event">&times;</span>
    </div>
    
  
</section>







<style>
 #scheduler-modal {
  font-family: 'Arial', sans-serif;
  background-color: #D35400; /* Brown background */
  padding: 10px 0;
}

#closer-cont {
  text-align: right;
  padding: 0 10px;
}

.close {
  cursor: pointer;
  font-size: 24px;
  color: white;
}

#scheduler-header h2 {
  color: white;
  text-align: center;
}

#event-add-section {
  background-color: #E67E22; /* Lighter brown for the input section */
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
}

#event-input {
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
  width: 140px; /* Fixed width for the event input */
}

#time-picker input[type="number"] {
  padding: 10px;
  border: none;
  border-radius: 5px;
  margin-right: 5px;
  width: 60px; /* Fixed width for the time inputs */
  text-align: center;
}

.am-pm-toggle {
  padding: 10px 15px;
  margin: 0 5px;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  background-color: #E67E22; /* Same as section background */
}

.am-pm-toggle.active {
  background-color: #27AE60; /* Highlight for the active state */
}

#add-event-btn {
  padding: 10px 20px;
  background-color: #27AE60; /* Green background for the button */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-left: 5px;
}

#add-event-btn:hover {
  background-color: #229954; /* Darker green on hover */
}
.event-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #E67E22; /* Your color choice */
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 5px; /* Space between items */
}

.event-checkbox {
  margin-right: 10px;
}

.event-description {
  flex-grow: 1; /* Allows the text to take up the available space */
}

.event-time {
  margin-right: 10px; /* Space before the delete icon */
}

.event-delete {
  cursor: pointer;
  font-size: 24px;
  color: white;
}


</style>