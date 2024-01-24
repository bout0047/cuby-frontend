import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import NavBar from './components/NavBar.svelte';
import { navigate } from 'svelte-routing';

test('when events icon is pressed it should take the user to events page', async () => {
  render(NavBar);
  const eventsIcon = screen.getByTestId('events-icon');

  // Pressing the events icon
  userEvent.click(eventsIcon);

  // Going to the events page
  await navigate('/events');

  // Make sure we are on the events page
  expect(window.location.href).toBe('http://localhost:3000/events');
});