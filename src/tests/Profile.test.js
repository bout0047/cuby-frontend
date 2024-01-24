import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import Profile from '../routes/profile/+page.svelte';
import { navigate } from 'svelte-routing';

test('there is a profile page', async () => {
  // Render the entire App
  render(Profile);

  // Assuming there's a navigation link in your TopNav component
  const homeNavLink = screen.getByText('loading...');

  // Simulate the user clicking the navigation link to ensure we are on a different page
  userEvent.click(homeNavLink);

  // Assuming there's a logout button in your TopNav component
  const loginButton = screen.getByTestId('events-icon');

  // Simulate the user clicking the logout button
  userEvent.click(loginButton);

  // Wait for the navigation to complete (assuming navigate is asynchronous)
  await navigate('/events/');

  // Ensure that the current URL is the first page
  expect(window.location.href).toBe('http://localhost:3000/events/');
});