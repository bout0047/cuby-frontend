import { render, screen } from '@testing-library/svelte';
import NavBar from './components/NavBar.svelte';

test('should render the NavBar component', () => {
  render(NavBar);
});