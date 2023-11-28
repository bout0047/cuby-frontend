<script>
	import "@fortawesome/fontawesome-free/js/all.js";
    import NavBar from '$lib/components/NavBar.svelte';
    import TopNav from '$lib/components/TopNav.svelte';
    let user = {
      name: "John Doe",
      email: "john@example.com",
      picture: "../src/img/stokstraart.png", 
      goals: ["Talk to a random person", "Have conversation for 10 min", "Join 5 events"],
      stats: {
        clicks: 50,
        stress: 37,
        excersies: 3,
      },
    };</script>

<main>
  <TopNav/>
   <section class="pt-5">
    <img src={user.picture} alt="Profile Picture" class="rounded-full shadow-md mx-auto mb-4 w-40 h-40" />
<div class="grid grid-cols-2 gap-4 content-evenly">
    <div>
        <div class="box bg-white rounded-lg w-20 ml-10">
            <h3>Clicks today:</h3>
            <p>{user.stats.clicks}</p>
        </div>
    </div>
    <div>
        <div class="box bg-white rounded-lg w-20 ml-10">
            <h3>Events<br> this month</h3>
            <p>{user.goals.length}</p>
        </div>
    </div>
</div>
   </section>
   
    <footer>
        <NavBar/>
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
        width: calc(50% - 40px); /* Adjust this to make sure two icons fit in one row */
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