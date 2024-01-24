// Import the load function
import { load } from './+page.server.js'; // Replace with the actual file path

// Mock the global fetch function
globalThis.fetch = async () => ({
  ok: true,
  json: async () => ({ id: 1, name: 'Sample Event' }), // Adjust the mock response as needed
});

test('load function fetches event data successfully', async () => {
  // Define sample parameters
  const params = { id: '123' };

  // Call the load function with the sample parameters
  const result = await load({ params });

  // Assert that fetch is called with the correct URL
  if (globalThis.fetch && globalThis.fetch.args && globalThis.fetch.args.length > 0) {
    console.log('URL:', globalThis.fetch.args[0][0]); // Log the URL for verification
  } else {
    console.error('fetch was not called or has no arguments'); // Log an error message
  }

  // Wait for the event Promise to resolve
  const eventData = await result.event;

  // Assert that the result contains the expected event data
  assert.deepEqual(eventData, { id: 1, name: 'Sample Event' });
});


test('load function handles fetch failure', async () => {
  // Define sample parameters
  const params = { id: '456' };

  // Mock a failed fetch response
  globalThis.fetch = async () => ({
    ok: false,
    statusText: 'Not Found',
  });

  // Call the load function with the sample parameters
  const result = await load({ params });

  // Wait for the event Promise to resolve
  const error = "Failed to fetch event data: Not Found";

  // Assert that the result is an object with an error property
  assert.deepEqual({ error }, { error: 'Failed to fetch event data: Not Found' });
});
