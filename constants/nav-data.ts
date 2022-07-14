export const navList = [
	{
		title: 'Movies',
		type: 'movie',
		categories: [
			{
				title: 'Popular',
				link: '/movie',
			},
			{
				title: 'Now Playing',
				link: '/movie/now_playing',
			},
			{
				title: 'Upcoming',
				link: '/movie/upcoming',
			},
			{
				title: 'Top Rated',
				link: '/movie/top_rated',
			},
		],
	},
	{
		title: 'TV Shows',
		type: 'tv',
		categories: [
			{
				title: 'Popular',
				link: '/tv',
			},
			{
				title: 'Airing Today',
				link: '/tv/airing_today',
			},
			{
				title: 'On TV',
				link: '/tv/on_tv',
			},
			{
				title: 'Top Rated',
				link: '/tv/top_rated',
			},
		],
	},
	{
		title: 'People',
		type: 'person',
		categories: [
			{
				title: 'Popular People',
				link: '/person',
			},
		],
	},
];
