import { dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import solidPlugin from 'vite-plugin-solid';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

export default defineConfig({
	plugins: [
		solidPlugin(),
		VitePWA({
			registerType: 'autoUpdate',
			workbox: {
				globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
			},
		}),
	],
	resolve: {
		alias: [{ find: '~', replacement: resolve(__dirname, 'src') }],
	},
	server: { port: 3000 },
	build: { target: 'esnext' },
});
