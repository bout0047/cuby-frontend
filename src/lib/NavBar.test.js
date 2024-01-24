import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import NavBar from './components/NavBar.svelte';
import { navigate } from 'svelte-routing';

// Event clicker function
const clickEventsIconAndNavigate = async () => {
  const eventsIcon = screen.getByTestId('events-icon');
  userEvent.click(eventsIcon);
  await navigate('/events');
};

test('when events icon is pressed it should take the user to events page', async () => {
  render(NavBar);

  // Use the event clicker function
  await clickEventsIconAndNavigate();

  // Make sure we are on the events page
  expect(window.location.href).toBe('http://localhost:3000/events');
});
