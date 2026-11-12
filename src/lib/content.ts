import { getCollection } from 'astro:content';

const byDateDesc = (a: { data: { date: Date } }, b: { data: { date: Date } }) =>
	b.data.date.valueOf() - a.data.date.valueOf();

export async function getWorks() {
	return (await getCollection('works')).sort(byDateDesc);
}

// 下書き（draft: true）は本番ビルドでは出さない
export async function getLogPosts() {
	const posts = await getCollection('log', ({ data }) => import.meta.env.DEV || !data.draft);
	return posts.sort(byDateDesc);
}
