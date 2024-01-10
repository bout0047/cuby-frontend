<script>
  import '../app.css';
  import '@fortawesome/fontawesome-free/js/all.js';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  onMount(async () => {
    const loggedIn = window.localStorage.getItem('loggedIn') == 'true';
    if (loggedIn) {
      goto('/home');
    }
  });
</script>
 
<main>
    <div>
        <h1 class="text-6xl text-center decoration-8 mt-28 mb-60 font-bold">Cuby</h1>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="cursor-pointer bg-royalBlue hover:bg-somePaleGreen text-somePaleGreen hover:text-black font-semibold w-2/3 text-center justify-center m-auto mt-20 p-3 rounded"
          on:click={ () => goto('./login')}
        >
          Login
        </div>
 
        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="cursor-pointer bg-royalRed hover:bg-somePaleGreen text-somePaleGreen hover:text-black font-semibold w-2/3 text-center justify-center m-auto mt-16 p-3 rounded"
          on:click={ () => goto('./register')}
        >
          Register
        </div>
    </div>
</main>