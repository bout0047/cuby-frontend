export const load = async ({ params }) => {

    const fetchEvent = async() => {
        const response = await fetch(`http://localhost:3011/events/${params.id}`);

        if (!response.ok) {
            throw new Error(`Failed to fetch event data: ${response.statusText}`);
        }
        
        const eventData = await response.json();
        return eventData;
    };

    return {
        event: fetchEvent(),
    };
};
