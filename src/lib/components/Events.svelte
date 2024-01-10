<script>
  export let events = [];

  export async function load() {
    try {
      const response = await fetch('http://localhost:3011/events');

      if (!response.ok) {
        console.error('Error fetching events: hjynrstbethrytumr,ymh', response.status, response.statusText);
        throw new Error('Failed to fetch events');
      }

      events = await response.json();
    } catch (error) {
      console.error('Error fetching events:', error.message);
    }
  }
</script>

<main>
{events}
</main>
