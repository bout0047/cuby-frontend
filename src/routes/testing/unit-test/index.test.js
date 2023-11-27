import { render } from '@testing-library/svelte';
import Index from '../../+page.svelte';

test('renders welcome message', () => {
  const { getByText } = render(Index, { props: { name: 'World' } });
  expect(getByText('Hello World!')).toBeInTheDocument();
});
