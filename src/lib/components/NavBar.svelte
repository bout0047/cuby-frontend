<script>  
  import "../../app.css";
  import '@fortawesome/fontawesome-free/js/all.js';
  import { goto } from "$app/navigation";
  import { page } from "$app/stores";

</script>
<main>
    <footer class="mt-auto fixed inset-x-0 bottom-0 bg-royalBlue">         
          <nav class="grid grid-cols-5 gap-4 p-4 md:p-8 rounded-md ">

            <a href="/home"  class="text-4xl text-platinum rounded-md text-center shadow-lg bg-royalBlue"><i class:text-royalRed={$page.route.id === "/home"}  class="fa-solid text-cream fa-house"></i></a>
            <a href="/profile"   class=" text-center p-1 text-4xl rounded-md shadow-lg bg-royalBlue"><i class:text-royalRed={$page.route.id  === "/profile"} class="fa-solid text-cream fa-user"></i></a>
            <a href="/events"  data-testid="events-icon" class=" p-1 text-center rounded-md text-4xl shadow-lg bg-royalBlue"><i class:text-royalRed={$page.route.id  === "/events"}  class="fa-brands text-cream fa-elementor"></i></a>
            <a href="/calendar" class=" p-1 rounded-md text-center text-4xl shadow-lg bg-royalBlue"><i class:text-royalRed={$page.route.id  === "/calendar"}  class="fa-solid text-cream fa-calendar-days"></i></a>
            <a href="/self-help"  class=" p-1 rounded-md text-center shadow-lg bg-royalBlue text-4xl"><i class:text-royalRed={$page.route.id  === "/self-help"} class="fa-solid text-cream fa-book-open"></i></a>
          </nav>

      </footer>
</main>
