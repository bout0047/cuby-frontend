import { render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import TopNav from './components/TopNav.svelte';
import { navigate } from 'svelte-routing';

test('when the logout button is pressed the user is redirected to the landing page', async () => {
  render(TopNav);

  const logoutButton = screen.getByTestId('logout-button');

  // the user presses the logout button
  userEvent.click(logoutButton);

  // the user is redirected to the first page
  await navigate('/');

  // make sure we are on the first page
  expect(window.location.href).toBe('http://localhost:3000/');
});