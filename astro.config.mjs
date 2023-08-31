import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
	server: { port: 3000 },
	integrations: [solidJs()],
	site: 'https://riyadh-dev.github.io',
	base: '/portfolio',
});
