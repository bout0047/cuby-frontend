<script>
	import SettingsMenu from "./SettingsMenu.svelte";
	import "@fortawesome/fontawesome-free/js/all.js";
  	import { Link, Route, Router } from "svelte-routing";
</script>


<div class="home">
    <!-- <Link to="/home">Home</Link><br /> -->
    <i class="fa-regular fa-address-card icons" />
  </div>

<SettingsMenu />
<main>
	<div id="cubyconnect" class="cubyconnect">
		<!-- <a href="cubyconnect"><h1>Hello {name}! <i class="fa-solid fa-cube" /></h1></a> -->
	</div>

	<div class="profile">
		<br />
		<i class="fa-regular fa-address-card icons" />
	  </div>
	<div class="top">
		<div class="events">
			<br /><i class="fa-solid fa-users icons" />
		</div>
		<div class="calender">
			calender<br />
			<i class="fa-regular fa-calendar-days icons" />
		</div>
	</div>
	<div class="bottom">
		<div class="stats">
			stats<br /><i class="fa-solid fa-chart-line icons" />
		</div>
		<div class="self-help">
			self-help center<br /><i
				class="fa-solid fa-circle-info icons"
			/>
		</div>
	</div>
</main>

<!-- <Router>
	<nav>
	
		<Link to="/profile">Profile</Link> 
	  </nav>

	  <Route path="/profile" component={Profile} />
  </Router> -->

<style></style>
