<script>  
  import "../../app.css";
  import '@fortawesome/fontawesome-free/js/all.js';
  import { goto } from "$app/navigation";
  //import sessionStore from "../../stores/sessionStore";
  import { onMount } from "svelte";

  
  //const loggedIn = (localStorage.getItem('loggedIn') == 'true');
  
  onMount(async () => {
    const loggedIn = window.localStorage.getItem('loggedIn') == 'true';
    if (!loggedIn) {
      goto('./');
    }
  });
</script>
<main>
    <footer class="mt-auto fixed inset-x-0 bottom-0 bg-royalBlue">         
          <nav class="grid grid-cols-6 gap-4 p-4 md:p-8 rounded-md ">
            <a href="/home" class="text-3xl rounded-md text-center shadow-lg bg-royalBlue"><i class="fa-solid fa-house" style="color: #FFFDD0;"></i></a>
            <a href="/profile" class=" text-center p-1 text-3xl rounded-md shadow-lg bg-royalBlue text-3xl"><i class="fa-solid fa-user" style="color: #FFFDD0;" ></i></a>
            <a href="/events" data-testid="events-icon" class=" p-1 text-center rounded-md text-3xl shadow-lg bg-royalBlue"><i class="fa-brands fa-elementor" style="color: #FFFDD0;"></i></a>
            <a href="/calendar" class=" p-1 rounded-md text-center text-3xl shadow-lg bg-royalBlue"><i class="fa-solid fa-calendar-days" style="color:#FFFDD0;"></i></a>
            <a href="/stats" class=" p-1 rounded-md text-center text-3xl shadow-lg bg-royalBlue"><i class="fa-solid fa-chart-simple" style="color:#FFFDD0;"></i></a>
            <a href="/self-help" class=" p-1 rounded-md text-center shadow-lg bg-royalBlue text-3xl"><i class="fa-solid fa-book-open" style="color: #FFFDD0;"></i></a>
          </nav>

      </footer>
</main>
