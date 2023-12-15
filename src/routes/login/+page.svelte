<script>
  import '/src/app.css';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';

  onMount(async () => {
    const loggedIn = window.localStorage.getItem('loggedIn') == 'true';
    if (loggedIn) {
      goto('/home');
    }
  });

  let username = '';
  let password = '';

  let noUsernameError = false;
  let usernameError = false;
  let noPasswordError = false;
  let passwordError = false;
  let serverError = false;

  const loginUser = async () => {
    noUsernameError = false;
    usernameError = false;
    noPasswordError = false;
    passwordError = false;
    serverError = false;

    if (!username) {
      noUsernameError = true;
    }

    if (!password) {
      noPasswordError = true;
    }
    if (!noUsernameError && !noPasswordError) {
      try {
        const response = await fetch('http://localhost:3011/login', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ 
            username, 
            password
          }),
        });
        const data = await response.json();
        console.log(data);
        if (response.ok) {
          localStorage.setItem('userToken', data.token);
          localStorage.setItem('loggedIn', 'true');
          goto('/home');
        } else {
          if (response.status === 401 && data.error === 'Authentication failed. User not found.') {
            usernameError = true;
          } else if (response.status === 401 && data.error === 'Authentication failed. Incorrect password.'){
            passwordError = true;
          } else {
            serverError = true;
          }
        }
      } catch (error) {
        console.error('Error during user registration:', error.message);
      }
    }
  };
</script>

<main class="flex items-center justify-center my-20">
  <div class="bg-darkestBlue text-somePaleGreen shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Log in
      </h2>
    </div>
      <form class="mt-8 space-y-6" action="#">
        <input type="hidden" name="remember" value="true">
        <div class="rounded-md shadow-sm -space-y-px mb-10">
          <div class="mb-2">
            <label for="email-address" class="sr-only ">Email address</label>
              <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-black hover:text-black"
                  id="username"
                  type="username"
                  placeholder="Username"
                  bind:value={username}
              />
              <div class="{noUsernameError ? 'text-yellow' : 'hidden'}">Username is required</div>
              <div class="{usernameError ? 'text-yellow' : 'hidden'}">Username does not exist</div>
          </div>
          
          <div class="mb-2">
              <label for="password" class="sr-only">Password</label>
              <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-black hover:text-black"
                  type="password"
                  placeholder="Password"
                  bind:value={password}
              />
              <div class="{noPasswordError ? 'text-yellow' : 'hidden'}">Password is required</div>
              <div class="{passwordError ? 'text-yellow' : 'hidden'}">Credentials do no match</div>
          </div>
          <div class="{serverError ? 'text-yellow' : 'hidden'}">Something went wrong our end</div>
        </div>
        <div>
            <button
            type="button"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                on:click="{loginUser}"
            >
                Sign In
            </button>
        </div>
      </form>
      <br/>
      <div>
        <button
          type="button"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          on:click={() => goto(`/register`)}
        >
        Don't have an account? Register
        </button>
      </div>
  </div>
</main>