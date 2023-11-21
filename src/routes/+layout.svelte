<script>
    import { Router, Link, Route } from "svelte-routing";
</script>

<div>
  
  <main>
    <h2>Name</h2>
    <input type="text">


    <h2>Password</h2>
    <input type="text">



    <button type="submit">Login</button>
    

    <footer>
    <Router>
     
      <nav class="grid grid-cols-7 gap-4 p-4 md:p-8 rounded-md shadow-md">
        <Link to="/home" class="bg-gray-300 text-sm text-center inline-block align-middle">Home</Link>
        <Link to="/profile" class="bg-gray-300 p-1 text-base rounded-md shadow-md text-base">Profile</Link>
        <Link to="/events" class="bg-gray-300 p-1 rounded-md shadow-md text-base">Events</Link>
        <Link to="/calender" class="bg-gray-300 p-1 rounded-md shadow-md text-base">Calender</Link>
        <Link to="/stats" class="bg-gray-300 p-1 rounded-md shadow-md text-base">Stats</Link>
        <Link to="/profile" class="bg-gray-300 p-1 rounded-md shadow-md text-base">Profile</Link>
        <Link to="/self-help" class="bg-gray-300 p-1 rounded-md shadow-md text-base">Self-help</Link>
      </nav>
      </Router>
    </footer>

  </main>
</div>

<style>
</style>
