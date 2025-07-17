import solid from '@astrojs/solid-js'
import { defineConfig } from 'astro/config'

import icon from 'astro-icon'

// https://astro.build/config
export default defineConfig({
	integrations: [
		solid(),
		icon({
			iconDir: './src/assets/images/logos',
		}),
	],
	server: {
		port: 3000,
	},
	site: 'https://riyadh-dev.github.io',
	base: '/portfolio',
})
