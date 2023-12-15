export const load = async () => {

    const fetchEvents = async() => {
        const response = await fetch('http://localhost:3011/events');
        const eventsData = await response.json();
        return eventsData;
    }

    return {
        events: fetchEvents(),
    }
}
