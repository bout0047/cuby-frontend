<script context="module">
    import { routes } from '@sveltejs/kit';
  </script>
  
  <main>
    <h1>Hello from App.svelte</h1>
    {#each routes as route}
      <a href={route.href}>{route.url}</a><br>
    {/each}
    <slot></slot>
  </main>
  
  <style>
    main {
      padding: 1em;
      max-width: 240px;
      margin: 0 auto;
    }
    a {
      display: block;
      margin-bottom: 0.5em;
    }
  </style>
  