<script>
export let events = [];

export async function load() {
  try {
    const response = await fetch('https://apigateaway:3011/events');

    if (!response.ok) {
      console.error('Error fetching events:', response.status, response.statusText);
      throw new Error('Failed to fetch events');
    }

    events = await response.json();
  } catch (error) {
    console.error('Error fetching events:', error.message);
  }
}

</script>

<main>
  Hello Poland
</main>