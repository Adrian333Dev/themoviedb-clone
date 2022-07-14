import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/dist/query/react';

const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

interface IDataByType {
	category?: string | string[] | undefined;
	type?: string | string[] | undefined;
	page?: number;
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
			query: ({ type, category, page = 1 }) => ({
				url: `/${type ? type : 'movie'}/${
					category ? category : 'popular'
				}?api_key=${apiKey}&language=en-US&page=${page}`,
			}),
			providesTags: (result) => ['Data'],
		}),
	}),
});
