<script>
  import '/src/app.css';
  import { redirect } from '@sveltejs/kit';

  /** @type {import('./$types').PageData} */
	export let data;

  /** @type {import('./$types').ActionData} */
  export let form;

</script>

<main class="flex items-center justify-center my-20">
  <div class="bg-darkestBlue text-somePaleGreen shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 class="text-2xl font-bold mb-6">Login</h2>
      <form method="POST" action="?/login">
          <div>
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Email
              </label>
              <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-black hover:text-black"
                  id="username"
                  name="username"
                  type="username"
                  value={form?.username ?? ''}
                  placeholder="Enter your email"
                 
              />
          </div>
          {#if form?.missingUser}<p class="error">Username is required</p>{/if}
	        {#if form?.incorrectUser}<p class="error">Username not found!</p>{/if}
          <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Password
              </label>
              <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-black hover:text-black"
                  id="password"
                  name="password"
                  type="password"
                  placeholder="Enter your password"
              />
          </div>
          {#if form?.missingPass}<p class="error">Password is required</p>{/if}
	        {#if form?.incorrectPass}<p class="error">Username and password do not match!</p>{/if}
          {#if form?.serverError}<p class="error">Something went wrong on our end. Try again later.</p>{/if}
          <div class="flex items-center justify-between">
              <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="submit"
              >
                  Sign In
              </button>
          </div>
      </form>
  </div>
</main>