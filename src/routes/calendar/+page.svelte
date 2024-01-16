<script>
  import Calendar from "$lib/components/Calendar.svelte";
  import Scheduler from "$lib/components/Scheduler.svelte";
  import Events from "$lib/components/Events.svelte";

    let schedulerShowing = false;
    /**
   * @type {string}
   */
    let dateID;
    let dateHeading;

    const makeDateHeading = () => {
      let dateAsHeading = dateID.replace(/_/g, " ");
      const date = new Date(dateAsHeading);
    return  dateHeading = date.toLocaleString('en-US', {day: 'numeric', month: 'long', year: 'numeric'})
    }

  const handleScheduler = (e) => {
    schedulerShowing = true;
    dateID = e.target.dataset.dateid;
    makeDateHeading();
  }

</script>

<main>
<Calendar on:click={handleScheduler} />
{#if schedulerShowing}
<Scheduler on:click={() => schedulerShowing = false}/>
{/if}
<Events />
</main>

<style>

</style>