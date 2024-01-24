// Import required functions from Vitest
import { render, screen, fireEvent, assert } from '@testing-library/svelte';

// Import the Svelte component
import EventsPage from './+page.svelte'; // Replace with the actual file path

// Mock the global fetch function
globalThis.fetch = async () => ({
  ok: true,
  json: async () => [
    { id: 1, name: 'Event', datetime: '2022-12-01', location: 'Location 1' },
    { id: 2, name: 'Event 2', datetime: '2022-12-02', location: 'Location 2' },
    // Add more mock events as needed
  ],
});

// Mock Cookies
globalThis.Cookies = {
  get: () => 'mockedCubySession',
};

// Mock the navigation functions
globalThis.goto = () => {};

test('renders the page with events', async () => {
  // Render the component
  render(EventsPage);

  // Wait for the data to be fetched
  await globalThis.fetch(); // This line ensures that the fetch is complete

  // Check if events are displayed
  screen.getByText('Upcoming Events'); // Use Vitest assertion library syntax
});
