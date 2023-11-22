<script context="module" lang="ts">
    import { goto } from '$app/navigation';
  </script>
  
  <div>
    <h1>Hello SvelteKit!</h1>
    <button on:click={() => goto('/login')}>Go to Login</button>
  </div>
  