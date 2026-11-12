// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	// 公開URL。独自ドメインを付けたらここを書き換える
	site: 'https://tsukikaze-lab.pages.dev',
	integrations: [sitemap()],
});
