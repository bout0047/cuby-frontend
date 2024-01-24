import { sveltekit } from '@sveltejs/kit/vite';

const config = {
  plugins: [sveltekit()],
  test: {
    globals: true,
    environment: 'jsdom',
    include: ['src/**/*.{test,spec}.js'],
    setupFiles: ['./setupTest.js'],
    coverage: {
      provider: 'istanbul',
      all: true,
      include: ['src/**/*.js'],
    },
  },
};

export default config;
