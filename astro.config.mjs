import icon from 'astro-icon'
import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
	integrations: [icon()],
	server: {
		port: 3000,
	},
	site: 'https://riyadh-dev.github.io',
	base: '/portfolio',
})
