<script>
	export let name;
	import "@fortawesome/fontawesome-free/js/all.js";
	import { Router, Link, Route } from "svelte-routing";
  	import Profile from "../../../src/Profile.svelte";
    import Home from "../lib/components/Home.svelte";
</script>


<Router>
	<nav>
		<Link to="/home">Home</Link>
		<Link to="/profile">Profile</Link> 
	  </nav>

	  <Route path="/Home" component={Home} />
	  <Route path="/profile" component={Profile} />
  </Router>

<style>
	
</style>
