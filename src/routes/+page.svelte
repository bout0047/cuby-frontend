<script>
  import '../app.css';
  import '@fortawesome/fontawesome-free/js/all.js';
  import { writable } from 'svelte/store';
</script>
 
<main>
    <div>
        <h1 class="text-5xl text-center decoration-8 mt-20">Cuby</h1>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="bg-somePaleGreen hover:bg-darkestBlue text-blue-700 hover:text-somePaleGreen font-semibold w-1/2 text-center justify-center m-auto mt-20 py-2 px-4 rounded"
          on:click={() => {
            window.location.href = "/login";
          }}
          >
          Login
        </div>
 
        <div
          class="bg-darkestBlue hover:bg-somePaleGreen text-somePaleGreen hover:text-black font-semibold w-1/2 text-center justify-center m-auto mt-20 py-2 px-4 rounded"
          on:click={() => {
            window.location.href = "/register";
          }}
          >
          Register
        </div>
    </div>
</main>