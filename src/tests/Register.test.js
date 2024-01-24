// @ts-nocheck
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import Register from '../routes/+page.svelte';
import { navigate } from 'svelte-routing';

test('there is a landing page', async () => {
  // Render the entire App
  render(Register);

  // Assuming there's a navigation link in your TopNav component
  const homeNavLink = screen.getByText('Register');

  // Simulate the user clicking the navigation link to ensure we are on a different page
  userEvent.click(homeNavLink);

  // Assuming there's a logout button in your TopNav component
  const registerButton = screen.getByTestId('register');

  // Simulate the user clicking the logout button
  userEvent.click(registerButton);

  // Wait for the navigation to complete (assuming navigate is asynchronous)
  await navigate('/register');

  // Ensure that the current URL is the first page
  expect(window.location.href).toBe('http://localhost:3000/register');
});