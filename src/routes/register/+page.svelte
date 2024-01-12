<script>
  import '/src/app.css';

  let username = '';
  let password = '';
  let confirmPassword = '';

  const registerUser = async () => {
    try {
      const response = await fetch('http://localhost:3011/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      if (response.ok) {
        // User registration successful, redirect to home page
        window.location.href = '/register/profile';
      } else {
        // Handle registration failure
        console.error('User registration failed:', response.statusText);
      }
    } catch (error) {
      console.error('Error during user registration:', error.message);
    }
  };
</script>

<main class="flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
  <div class="bg-darkestBlue text-somePaleGreen shadow-md rounded px-8 pt-6 pb-8 mb-4">
    <div>
      <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
        Register
      </h2>
    </div>
    <form class="mt-8 space-y-6" action="#">
      <input type="hidden" name="remember" value="true">
      <div class="rounded-md shadow-sm -space-y-px mb-10">
        <div class="mb-2">
          <label for="email-address" class="sr-only ">Email address</label>
          <input
            id="email-address"
            name="email"
            type="email"
            autocomplete="email"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-black hover:text-black"
            placeholder="Email address"
            bind:value="{username}"
          >
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
            bind:value="{password}"
          >
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
            value="{confirmPassword}"
          >
        </div>
      </div>

      <div>
      <button
        type="button"
        class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        on:click="{registerUser}"
      >
        Register
      </button>
    </div>
    </form>
    <div class="text-sm text-center">
      <a href="/login" class="font-medium text-indigo-600 hover:text-indigo-500 underline hover:text-salmonLikeColor">
        Already have an account? Login
      </a>
    </div>
  </div>
</main>
