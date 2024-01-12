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

  const handleGoogleLogin = async function () {
    try {
      const response = await fetch('http://localhost:3011/auth/google', {
        method: 'GET',
        // You may need to include additional headers or credentials based on your server configuration
      });
  
      if (response.ok) {
        // Handle successful response (e.g., redirect or show a success message)
        console.log('Google login successful!');
      } else {
        // Handle error response (e.g., show an error message)
        console.error('Google login failed:', response.statusText);
      }
    } catch (error) {
      // Handle fetch error
      console.error('Error during Google login:', error);
    }
  }
  
</script>
 
<main>
    <div>
        <h1 class="text-5xl text-center decoration-8 mt-20">Cuby</h1>

        <!-- svelte-ignore a11y-click-events-have-key-events -->
        <div
          class="cursor-pointer bg-darkestBlue hover:bg-somePaleGreen text-somePaleGreen hover:text-black font-semibold w-1/2 text-center justify-center m-auto mt-20 py-2 px-4 rounded"
          on:click={ () => goto('./login')}
        >
          Login
        </div>
 
        <div
          class="cursor-pointer bg-darkestBlue hover:bg-somePaleGreen text-somePaleGreen hover:text-black font-semibold w-1/2 text-center justify-center m-auto mt-20 py-2 px-4 rounded"
          on:click={ () => goto('./register')}
        >
          Register
        </div>

        <div
          class="cursor-pointer bg-red-500 hover:bg-red-600 text-white font-semibold w-1/2 text-center justify-center m-auto mt-20 py-2 px-4 rounded"
          on:click={() => handleGoogleLogin()}
        >
          Google Login
        </div>
    </div>
</main>