import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://coolioki.github.io',
	base: 'milanishots',
	vite: {
		plugins: [tailwindcss()],
	},
});
