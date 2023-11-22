<script>
	import "@fortawesome/fontawesome-free/js/all.js";
  	import { Link, Route, Router } from "svelte-routing";
    import NavBar from "./NavBar.svelte";
    import Calendar from "./Calendar.svelte";
</script>



<main>
    <div id="cubyconnect" class="cubyconnect">
        <a href="cubyconnect">
            <h1>Hello ! <i class="fa-solid fa-cube"></i></h1>
        </a>
        <h2>Connect to cuby here!</h2>
    </div>

    <div class="icon-container">
        <div class="icon-row">
            <div class="icon profile">
                <a href="Profile.svelte">profile</a><br />
                <img src="img/profile.png" alt="profile"/>
            </div>
        </div>
        <div class="icon-row multi-icons">
            <div class="icon events">
                <a href="Events.svelte">events</a><br />
                <img src="img/events.png" alt="events"/>
            </div>
            <div class="icon calendar">
                <a href="Calendar.svelte">calendar</a><br />
                <img src="img/calendar.png" alt="calendar"/>
            </div>
        </div>
        <div class="icon-row multi-icons">
            <div class="icon stats">
                <a href="Stats.svelte">stats</a><br />
                <img src="img/stats.png" alt="stats"/>
            </div>
            <div class="icon self-help">
                <a href="Self-help.svelte">self-help</a><br />
                <img src="img/self-help.png" alt="self help"/>
            </div>
        </div>
    </div>
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