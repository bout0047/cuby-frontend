export const load = async ({ params }) => {

    const fetchEvent = async() => {
        const response = await fetch(`http://localhost:3011/events/${params.id}`);
        const eventData = await response.json();
        return eventData;
    }

    return {
        event: fetchEvent(),
    }
}
