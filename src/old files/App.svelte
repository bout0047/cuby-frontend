<script>
	export let name;
	import "@fortawesome/fontawesome-free/js/all.js";
	import { Router, Link, Route } from "svelte-routing";
  	import Profile from "../../../src/Profile.svelte";
    import Home from "../lib/components/Home.svelte";
	import Calendar from "../lib/components/Calendar.svelte";
</script>


<Router>
	<nav>
		<Link to="/home">Home</Link>
		<Link to="/profile">Profile</Link> 
		<Link to="/calendar">Calendar</Link>
	  </nav>

	  <Route path="/Home" component={Home} />
	  <Route path="/profile" component={Profile} />
	  <Route path="/calendar" component={Calendar} />
  </Router>

<style>
	
</style>
