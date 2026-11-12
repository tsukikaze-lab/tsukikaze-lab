import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// 作品（ツール・ゲームなど）
const works = defineCollection({
	loader: glob({ base: './src/content/works', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		summary: z.string(),
		date: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		url: z.url().optional(),
		repo: z.url().optional(),
		status: z.enum(['公開中', '開発中', '準備中']).default('公開中'),
	}),
});

// 開発記録
const log = defineCollection({
	loader: glob({ base: './src/content/log', pattern: '**/*.md' }),
	schema: z.object({
		title: z.string(),
		description: z.string(),
		date: z.coerce.date(),
		tags: z.array(z.string()).default([]),
		draft: z.boolean().default(false),
	}),
});

export const collections = { works, log };
