import { render, fireEvent, cleanup, assert } from 'vitest';
import Login from '$lib/components/Login.svelte';

afterEach(cleanup);

test('allows login with valid credentials', async () => {
  const { getByLabelText, getByText } = render(Login);

  await fireEvent.input(getByLabelText('Email'), { target: { value: 'test@example.com' } });
  await fireEvent.input(getByLabelText('Password'), { target: { value: 'testPassword' } });

  await fireEvent.click(getByText('Sign In'));

  await new Promise((resolve) => setTimeout(resolve, 500));

  assert.is(window.location.href, '/home');
});
