// Import required functions from Vitest
import { render, screen, waitFor } from '@testing-library/svelte';

// Import the Svelte component
import NavBar from '../lib/components/NavBar.svelte'; // Replace with the actual file path

// Import the session store
import sessionStore from './sessionStore.js'; // Replace with the actual file path

test('session store initializes with correct initial data', async () => {
  // Render the Svelte component
  render(NavBar);

  // Access the values from the session store
  const session = sessionStore.subscribe((value) => value);

  // Assert that the session store has the correct initial data
  expect(session.loggedIn).toBe(undefined);
  expect(session.userToken).toBe(undefined);
});
