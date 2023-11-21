<script>
  import { navigate } from "svelte-routing";

  let username = "";
  let password = "";

  function handleSubmit() {
    // Perform login logic here

    // Redirect to /home
    navigate("/home");
  }
</script>

<main>
  <h1>Login</h1>
  <form on:submit={handleSubmit}>
    <label>
      Username:
      <input type="text" />
    </label>
    <label>
      Password:
      <input type="password" />
    </label>
    <button type="submit">Submit</button>
  </form>
</main>
