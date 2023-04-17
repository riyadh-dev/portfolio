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
				runtimeCaching: [
					{
						urlPattern:
							/^https:\/\/res\.cloudinary\.com\/riyadh-demo-cloud\/image\/upload\/f_webp\/q_auto:best\/portfolio\/.*/i,
						handler: 'CacheFirst',
						options: {
							cacheName: 'cloudinary-images',
							expiration: {
								maxEntries: 55,
								maxAgeSeconds: 60 * 60 * 24 * 30, // <== 30 days
							},
							cacheableResponse: {
								statuses: [0, 200],
							},
						},
					},
				],
				globPatterns: ['**/*.{js,css,html,ico,png,svg,pdf}'],
			},
		}),
	],
	resolve: {
		alias: [{ find: '~', replacement: resolve(__dirname, 'src') }],
	},
	server: { port: 3000 },
	build: { target: 'esnext' },
});
