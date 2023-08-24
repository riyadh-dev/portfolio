import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';

// https://astro.build/config
export default defineConfig({
	integrations: [solidJs()],
	site: 'riyadh-dev.github.io',
	base: '/portfolio',
});
