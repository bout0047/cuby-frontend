<script>
    import { Router, Route } from "svelte-routing";
    import Login from "./Login.svelte";
    import Home from "./Home.svelte";
  </script>
  
  <Router>
    <!-- Set the default route to the Login component for the root URL -->
    <Route path="/" component={Login} />
    <Route path="/home" component={Home} />
  </Router>
  