<script>
  import "/src/app.css";
  import { goto } from "$app/navigation";
  import { onMount } from "svelte";
  import { navigate } from "svelte-routing";

  onMount(async () => {
    const loggedIn = window.localStorage.getItem("loggedIn") == "true";
    if (loggedIn) {
      goto("/home");
    }
  });

  let username = "";
  let password = "";
  let confirmPassword = "";
  let usernameError = false;
  let usernameTakenError = false;
  let passwordError = false;
  let passwordMismatchError = false;

  let jsonData = {
    name: username,
  };

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
        const response = await fetch("http://localhost:3011/register", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            password,
          }),
        });

        const data = await response.json();

        if (response.ok) {
          // User registration successful, redirect to home page
          localStorage.setItem("userToken", data.token);
          localStorage.setItem("loggedIn", "true");
          console.log(jsonData);
          goto("/register/profile");
        } else {
          if (
            response.status === 400 &&
            data.error === "Username is already taken"
          ) {
            usernameTakenError = true;
          } else {
            // Handle other registration failures
            console.error("User registration failed:", data.error);
          }
        }
      } catch (error) {
        console.error("Error during user registration");
      }
    } else {
    }
  };
</script>

<main
  class="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
>
  <div
    class="bg-darkestBlue text-somePaleGreen shadow-md rounded px-8 pt-6 pb-8 mb-4"
  >
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Register
      </h2>
    </div>
    <form class="mt-8 space-y-6" action="#">
      <input type="hidden" name="remember" value="true" />
      <div class="rounded-md shadow-sm -space-y-px mb-10">
        <div class="mb-2">
          <label for="email-address" class="sr-only">Email address</label>
          <input
            id="email-address"
            name="username"
            type="username"
            autocomplete="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-black hover:text-black"
            placeholder="Username"
            bind:value={username}
          />
          <div class={usernameError ? "text-yellow" : "hidden"}>
            Username is required
          </div>
          <div class={usernameTakenError ? "text-yellow" : "hidden"}>
            This username is already taken
          </div>
        </div>

        <div class="mb-2">
          <label for="password" class="sr-only">Password</label>
          <input
            id="password"
            name="password"
            type="password"
            autocomplete="current-password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-black hover:text-black"
            placeholder="Password"
            bind:value={password}
          />
          <div class={passwordError ? "text-yellow" : "hidden"}>
            Password is required
          </div>
          <div class={passwordMismatchError ? "text-yellow" : "hidden"}>
            Passwords do not match
          </div>
        </div>

        <div>
          <label for="confirm-password" class="sr-only">Confirm Password</label>
          <input
            id="confirm-password"
            name="confirmPassword"
            type="password"
            autocomplete="current-password"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-black hover:text-black"
            placeholder="Confirm Password"
            bind:value={confirmPassword}
          />
        </div>
      </div>

      <div>
        <button
          type="button"
          class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          on:click={registerUser}
        >
          Register
        </button>
      </div>
    </form>
    <br />
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
