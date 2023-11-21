<!-- Login.svelte -->
<script>
    let username = "";
    let password = "";
  
    const handleLogin = () => {
      // Simulate authentication (replace with actual authentication logic)
      if (username === "demo" && password === "password") {
        // Redirect to home page on successful login
        window.location.href = "/home";
      } else {
        alert("Invalid credentials");
      }
    };
  </script>
  
  <style>
    /* Your component styles go here */
  </style>
  
  <div>
    <h1>Login</h1>
    <label>
      Username:
      <input bind:value={username} />
    </label>
    <label>
      Password:
      <input type="password" bind:value={password} />
    </label>
    <button on:click={handleLogin}>Login</button>
  </div>
  