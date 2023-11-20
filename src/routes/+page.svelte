<script>
  import Appointment from '$lib/components/Appointment.svelte';
  import Clients from '$lib/components/Clients.svelte';
  import ClientDetails from '$lib/components/ClientDetails.svelte';

  /**
   * This dataset will preferably be loaded in via serverside request to a db or an API call
   * or you can use stores.
   */
  const timeSlots = [
    {
      timeslotId: 1,
      starttime: '09.00',
      duration: 15,
      appointment: {
        name: 'Sissy',
        breed: '🐈',
      },
    },
    {
      timeslotId: 2,
      starttime: '09.15',
      duration: 15,
      appointment: {
        name: 'Suzy',
        breed: '🐕',
      },
    },
    {
      timeslotId: 3,
      starttime: '09.30',
      duration: 15,
      appointment: {
        name: 'Henk',
        breed: '🦜',
      },
    },
    {
      timeslotId: 4,
      starttime: '09.45',
      duration: 15,
      appointment: {
        name: 'Grete',
        breed: '🐢',
      },
    },
    {
      timeslotId: 5,
      starttime: '10.00',
      duration: 15,
      appointment: {
        name: 'Victor',
        breed: '🐈',
      },
    },
    {
      timeslotId: 6,
      starttime: '10.15',
      duration: 15,
      appointment: undefined,
    },
    {
      timeslotId: 7,
      starttime: '10.30',
      duration: 15,
      appointment: undefined,
    },
    {
      timeslotId: 8,
      starttime: '10.45',
      duration: 15,
      appointment: undefined,
    },
    {
      timeslotId: 9,
      starttime: '11.00',
      duration: 15,
      appointment: {
        name: 'Mr Jansen',
        breed: '🐕',
      },
    },
    {
      timeslotId: 10,
      starttime: '11.15',
      duration: 15,
      appointment: {
        name: 'Patty',
        breed: '🐕',
      },
    },
    {
      timeslotId: 11,
      starttime: '11.30',
      duration: 15,
      appointment: {
        name: 'Joris',
        breed: '🐍',
      },
    },
    {
      timeslotId: 12,
      starttime: '11.45',
      duration: 15,
      appointment: undefined,
    },
    {
      timeslotId: 13,
      starttime: '12.00',
      duration: 15,
      appointment: {
        name: 'Joep',
        breed: '🐇',
      },
    },
    {
      timeslotId: 14,
      starttime: '12.15',
      duration: 15,
      appointment: undefined,
    },
    {
      timeslotId: 15,
      starttime: '12.30',
      duration: 15,
      appointment: {
        name: 'Gait',
        breed: '🐐',
      },
    },
    {
      timeslotId: 16,
      starttime: '12.45',
      duration: 15,
      appointment: {
        name: 'Choco',
        breed: '🐇',
      },
    },
  ];
</script>

<svelte:head>
  <title>Home</title>
  <meta name="description" content="Veterinarian - part 1" />
</svelte:head>

<div class="container w-full mx-auto">
  <section class="mt-10">
    <h2 class="text-6xl">Appointments</h2>
  </section>
  <section class="flex flex-col lg:flex-row mt-5">
    <div class="lg:basis-4/6 bg-slate-50 rounded-lg p-10 lg:mr-8">
      <Appointment />
    </div>
    <div class="lg:basis-2/6 bg-slate-50 rounded-lg p-10 sm:mt-4 lg:mt-0">
      <ClientDetails />
    </div>
  </section>
</div>
<div class="container w-full mx-auto mt-4">
  <section class="mt-4">
    <h2 class="text-4xl">Clients</h2>
  </section>
  <section class="flex flex-col lg:flex-row mt-5">
    <div class="lg:basis-4/6 bg-slate-50 rounded-lg p-10 lg:mr-8">
      <Clients />
    </div>
  </section>
</div>

<style>
</style>
