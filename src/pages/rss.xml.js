import rss from '@astrojs/rss';
import { getLogPosts } from '../lib/content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
	const posts = await getLogPosts();
	return rss({
		title: `${SITE_TITLE} Log`,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			title: post.data.title,
			description: post.data.description,
			pubDate: post.data.date,
			link: `/log/${post.id}/`,
		})),
	});
}
