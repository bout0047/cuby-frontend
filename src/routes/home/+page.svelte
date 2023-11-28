<script>
  import '@fortawesome/fontawesome-free/js/all.js';
  import NavBar from '$lib/components/NavBar.svelte';
  import TopNav from '$lib/components/TopNav.svelte';
</script>

<main>
  <TopNav />

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  <section>
    <h1 class="text-left ml-2 underline font-bold">Next Event:</h1>
    <div class="left-2 border rounded">
      <div class="grid grid-cols-2 m-3 text-left">
        <div class=" gap-4">
          <div>
            <h2>Event Name</h2>
          </div>
          <div>
            <h3>Event Time</h3>
          </div>
          <div>
            <h3>Event Location</h3>
          </div>
        </div>
        <div class="w-12 ml-32">
          <img src="src/img/calender.png" class="w-10 h-10 float-right mr-4" />
        </div>
      </div>
    </div>
  </section>

  <footer>
    <NavBar />
  </footer>
</main>

<style>
  :global(body) {
    background-color: #87abab;
    margin: 0;
    overflow-x: hidden;
  }

  main {
    padding: 1em;
    text-align: center; /* Center content */
  }

  .cubyconnect {
    background-color: darkblue;
    color: white;
    padding: 20px;
    border-radius: 10px;
    margin-bottom: 20px;
  }

  .icon-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }

  .icon-row {
    display: flex;
    justify-content: center;
    width: 100%; /* Make sure this takes up the full width */
  }

  .icon-row.multi-icons {
    justify-content: space-around;
  }

  .icon {
    background-color: dimgray;
    border-radius: 20px;
    padding: 10px;
    width: calc(
      50% - 40px
    ); /* Adjust this to make sure two icons fit in one row */
    margin: 10px; /* Center and space out icons */
  }

  .icon img {
    max-width: 100%; /* Responsive image sizing */
    height: auto;
  }

  /* Responsive adjustments */
  @media (max-width: 768px) {
    .icon {
      width: calc(100% - 20px); /* Full width on smaller screens */
    }
  }

  @media (max-width: 412px) {
    .cubyconnect h1 {
      font-size: 1.5em; /* Adjust font size for small screens */
    }

    .cubyconnect h2 {
      font-size: 1.2em; /* Adjust sub-header font size for small screens */
    }
  }
</style>
