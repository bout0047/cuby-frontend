<script>
  import Calendar from "$lib/components/Calendar.svelte";
  import Scheduler from "$lib/components/Scheduler.svelte";

  let schedulerShowing = false;


</script>

<main>
<Calendar on:click={() => schedulerShowing = true} />
{#if schedulerShowing}
<Scheduler />
{/if}
</main>

<style>

</style>