export const load = async () => {

    const fetchEvents = async() => {
        const response = await fetch('http://localhost:3011/events');

        if (!response.ok) {
            throw new Error(`Failed to fetch events data: ${response.statusText}`);
        }

        const eventsData = await response.json();
        return eventsData;
    }

    return {
        events: fetchEvents(),
    }
}
