import { render } from '@testing-library/svelte';
import Index from '../index.svelte';

test('renders welcome message', () => {
  const { getByText } = render(Index, { props: { name: 'World' } });
  expect(getByText('Hello World!')).toBeInTheDocument();
});
