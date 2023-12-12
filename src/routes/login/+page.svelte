<script>
  import '/src/app.css';
  let username = '';
  let password = '';

  const loginUser = async () => {
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

    // Assuming the API returns a token upon successful login
    if (response.ok) {
      localStorage.setItem('userToken', data.token);
      window.location.href = '/home';
    } else {
      // Handle login failure
      console.error(data.message);
    }
  };
</script>

<main class="flex items-center justify-center my-20">
  <div class="bg-darkestBlue text-somePaleGreen shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 class="text-2xl font-bold mb-6">Login</h2>
      <form>
          <div>
              <label class="block text-gray-700 text-sm font-bold mb-2" for="username">
                  Email
              </label>
              <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-black hover:text-black"
                  id="username"
                  type="username"
                  placeholder="Enter your email"
                  bind:value={username}
              />
          </div>
          <div class="mb-6">
              <label class="block text-gray-700 text-sm font-bold mb-2" for="password">
                  Password
              </label>
              <input
                  class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-black hover:text-black"
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  bind:value={password}
              />
          </div>
          <div class="flex items-center justify-between">
              <button
                  class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  type="button"
                  on:click="{loginUser}"
              >
                  Sign In
              </button>
          </div>
      </form>
  </div>
</main>