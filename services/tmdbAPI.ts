import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

interface IDataByType {
	category?: string;
	type?: string;
	page?: number;
}

interface ITrendigParams {
	type?: string;
	timeWindow?: string;
}

interface IDetailsParams {
	id: string;
	type?: string;
}
interface IExtraDetailsParams extends IDetailsParams {
	detail?: string;
}

export const tmdbAPI = createApi({
	reducerPath: 'tmdbAPI',
	baseQuery: fetchBaseQuery({
		baseUrl: 'https://api.themoviedb.org/3',
	}),
	tagTypes: ['Data'],
	endpoints: (build) => ({
		// ! Get Movies or TV Shows or People by Type and Category
		getDataByType: build.query<any, IDataByType>({
			query: ({ type = 'movie', category = 'popular', page = 1 }) => ({
				url: `/${type}/${category}?api_key=${apiKey}&language=en-US&page=${page}`,
			}),
			providesTags: (result) => ['Data'],
		}),

		// ! Get Trending Movies or TV Shows or People
		getTrending: build.query<any, ITrendigParams>({
			query: ({ type = 'all', timeWindow = 'day' }) => ({
				url: `/trending/${type}/${timeWindow}?api_key=${apiKey}`,
			}),
			providesTags: (result) => ['Data'],
		}),

		// ! Get Movie or TV Show or Person Details
		getDetails: build.query<any, IDetailsParams>({
			query: ({ id, type }) => ({
				url: `/${type}/${id}?api_key=${apiKey}&language=en-US`,
			}),
			providesTags: (result) => ['Data'],
		}),

		// ! Get Movie or TV Show External Details
		getExtraDetails: build.query<any, IExtraDetailsParams>({
			query: ({ id, type, detail = 'content_ratings' }) => ({
				url: `/${type}/${id}/${detail}?api_key=${apiKey}&language=en-US`,
			}),
			providesTags: (result) => ['Data'],
		}),
	}),
});
