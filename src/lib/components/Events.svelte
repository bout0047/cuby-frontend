export let events = [];


export async function load() {
  try {
    const response = await fetch('http://your-backend-api-url/api/events');
    if (response.ok) {
      events = await response.json();
    } else {
      console.error('Error fetching events:', response.status, response.statusText);
    }
  } catch (error) {
    console.error('Error fetching events:', error);
  }
}