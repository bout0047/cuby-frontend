// @ts-nocheck
import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import Login from '../routes/+page.svelte';
import { navigate } from 'svelte-routing';

test('there is a landing page', async () => {
  // Render the entire App
  render(Login);

  // Assuming there's a navigation link in your TopNav component
  const homeNavLink = screen.getByText('Login');

  // Simulate the user clicking the navigation link to ensure we are on a different page
  userEvent.click(homeNavLink);

  // Assuming there's a logout button in your TopNav component
  const loginButton = screen.getByTestId('login');

  // Simulate the user clicking the logout button
  userEvent.click(loginButton);

  // Wait for the navigation to complete (assuming navigate is asynchronous)
  await navigate('/login');

  // Ensure that the current URL is the first page
  expect(window.location.href).toBe('http://localhost:3000/login');
});

