<script>
  import '/src/app.css';
  import { goto } from '$app/navigation';
  import { onMount } from 'svelte';
  import Cookies from 'js-cookie';

  let username = '';
  let password = '';
  let confirmPassword = '';
  let usernameError = false;
  let usernameTakenError = false;
  let passwordError = false;
  let passwordMismatchError = false;

  const registerUser = async () => {
    usernameError = false;
    usernameTakenError = false;
    passwordError = false;
    passwordMismatchError = false;

    if (!username) {
      usernameError = true;
    }

    if (!password) {
      passwordError = true;
    }

    if (password && password !== confirmPassword) {
      passwordMismatchError = true;
    }

    if (!usernameError && !passwordError && !passwordMismatchError) {
      try {
        const response = await fetch('http://localhost:3011/auth/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // User registration successful, redirect to home page
          console.log('User registration successful');
          const token = data.token;
          Cookies.set('cubySession', token);
          goto('/register/profile');
        } else {
          if (response.status === 400 && data.error === 'Username is already taken') {
            usernameTakenError = true;
          } else {
          // Handle other registration failures
          console.error('User registration failed:', data.error);
          }
        }
      } catch (error) {
        console.error('Error during user registration');
      }
    } else {

    }
  };
</script>

<main class="flex items-center justify-center my-3">
  <div class="text-black rounded px-8 pt-6 pb-8 mb-4">
    <div>
      <h2 class="mt-6 text-5xl font-extrabold">
        Cuby
      </h2>
      <h3 class="ml-1 mt-6 text-3xl font-extrabold">
        Register
      </h3>
    </div>
    <form class="mt-24" action="#">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md mb-10">
        <div class="m-5">
          <label for="username" class="text-2xl">Username</label>
          <input
            class="border-4 rounded w-full p-2 leading-tight text-black"
            id="username"
            type="username"
            placeholder="Username"
            bind:value={username}
          />
          <div class="{usernameError ? 'text-red' : 'hidden'}">Username is required</div>
          <div class="{usernameTakenError ? 'text-red' : 'hidden'}">This username is already taken</div>
        </div>
        
        <div class="m-5">
          <label for="password" class="text-2xl">Password</label>
          <input
            class="shadow appearance-none border-4 rounded w-full py-2 px-3 leading-tight text-black"
            type="password"
            placeholder="Password"
            bind:value={password}
          />
          <div class="{passwordError ? 'text-red' : 'hidden'}">Password is required</div>
          <div class="{passwordMismatchError ? 'text-red' : 'hidden'}">Passwords do not match</div>
        </div>
        
        <div class="m-5">
          <label for="confirm-password" class="text-2xl">Confirm Password</label>
          <input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            autocomplete="current-password"
            class="shadow appearance-none border-4 rounded w-full py-2 px-3 leading-tight text-black"
            placeholder="Confirm Password"
            bind:value="{confirmPassword}"
          >
        </div>
      </div>

      <div>
        <button
          type="button"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-royalBlue text-platinum"
          on:click="{registerUser}"
        >
          Register
        </button>
      </div>
    </form>
    <br/>
    <div>
      <button
        type="button"
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        on:click={() => goto(`/login`)}
      >
        Already have an account? Login
      </button>
    </div>
  </div>
</main>
