<script>
    import '/src/app.css';

    let email = '';
    let password = '';
</script>

<main class="flex items-center justify-center my-20">
    <div class="bg-darkestBlue text-somePaleGreen shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <h2 class="text-2xl font-bold mb-6">Login</h2>
        <form>
            <div>
                <label class="block text-gray-700 text-sm font-bold mb-2" for="email">
                    Email
                </label>
                <input
                    class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline text-black hover:text-black"
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    bind:value={email}
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
                    on:click={() => {
                        window.location.href = "/home";
                    }}
                >
                    Sign In
                </button>
            </div>
        </form>
    </div>
</main>
