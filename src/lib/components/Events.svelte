<script>
  export let events = [];
</script>

<main>
  <h2>Event List</h2>
  <ul>
    {#each events as event (event.id)}
      <li>
        {event.name}
      </li>
    {/each}
  </ul>
</main>
