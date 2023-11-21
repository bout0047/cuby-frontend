<script>
    import { Router, Link, Route } from "svelte-routing";
  import Home from "../components/Home.svelte";
  import Profile from "../components/Profile.svelte";
</script>

<div class="flex flex-col h-screen justify-between">
    <footer class="absolute inset-x-0 bottom-0">
      <Router>
        <nav class="grid grid-cols-7 gap-4 p-4 md:p-8 rounded-md shadow-md">
          <Link to="/home" class="bg-gray-300 text-sm text-center">Home</Link>
          <Link
            to="/profile"
            class="bg-gray-300 p-1 text-base rounded-md shadow-md text-base"
            >Profile</Link
          >
          <Link
            to="/events"
            class="bg-gray-300 p-1 rounded-md shadow-md text-base">Events</Link
          >
          <Link
            to="/calender"
            class="bg-gray-300 p-1 rounded-md shadow-md text-base"
            >Calender</Link
          >
          <Link
            to="/stats"
            class="bg-gray-300 p-1 rounded-md shadow-md text-base">Stats</Link
          >
          <Link
            to="/profile"
            class="bg-gray-300 p-1 rounded-md shadow-md text-base">Profile</Link
          >
          <Link
            to="/self-help"
            class="bg-gray-300 p-1 rounded-md shadow-md text-base"
            >Self-help</Link
          >
        </nav>
      </Router>
      <p class="p-2 text-center">Made with &#x2764;</p>
    </footer>    </div>
<style>
    
</style>