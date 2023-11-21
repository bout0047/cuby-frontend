<script>
  import '../app.css';
  import { Router, Link, Route } from "svelte-routing";
  import Home from "../lib/components/Home.svelte";
  import Profile from "../lib/components/Profile.svelte";
</script>

<div class="flex flex-col h-screen justify-between">
  <main>
    <slot />
    <!-- here the page content of +page.svelte is loaded-->
    <Router>
    <Route path="/home" component={Home} />
    <Route path="/profile" component={Profile} />
    </Router>
  </main>

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
    <p class="p-2 text-center">Made with &#x2764;</p>
  </footer>
</div>

<style>
</style>
