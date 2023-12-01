export async function fetchEvents() {
    try {
        const response = await fetch('http://localhost:3011/events/');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    } catch (error) {
        console.error('Fetch error:', error);
    }
}