<script>
    import { navigate } from 'svelte-routing';
    let username = "";
    let password = "";
    let isLoggedIn = false;
    function handleLogin() {
        isLoggedIn = true;
    }
</script>

<div class="text-center">
   
    <h1>Login Page</h1>
    <label>
        Username:
        <input bind:value={username} />
    </label>
    <br />
    <label>
        Password:
        <input type="password" bind:value={password} />
    </label>
    <br />
    <button on:click={handleLogin}>Login</button>
</div>

<style>
    /* Your component styles go here */
</style>
