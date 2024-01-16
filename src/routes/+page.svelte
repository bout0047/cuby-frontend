<script>
  import '../app.css';
  import '@fortawesome/fontawesome-free/js/all.js';
  import { goto } from '$app/navigation';
  import axios from 'axios';
  import Cookies from 'js-cookie';

  const googleLogin = async () => {
    try {
      const response = await axios.get('http://localhost:3011/auth/google'); // Make sure this path matches your API Gateway route
      window.location.href = response.data.redirectUrl;
    } catch (error) {
      console.error('Error initiating Google login:', error.message);
    }
  };
  const handleCallback = async () => {
  try {
    // Make a request to your backend to handle the callback
    const response = await axios.post('http://api-gateway-url/auth/callback');

    // Assuming your backend returns the token and redirect URL in the response
    const { token, redirectUrl } = response.data;

    // Store the token as a cookie
    Cookies.set('authToken', token);

    // Redirect to the specified URL
    window.location.href = redirectUrl;
  } catch (error) {
    console.error('Error handling callback:', error.message);
    // Handle error, e.g., show an error message to the user
  }
};
  
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

        <div>
          <button on:click={googleLogin}>Login with Google</button>
        </div>
    </div>
</main>