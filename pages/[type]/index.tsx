import { useRouter } from 'next/router';
import { Layout, MoviesPage } from '../../components/exports';
import { tmdbAPI } from '../../services/tmdbAPI';
import { generateTitle } from './[category]';

const Type = () => {
	const router = useRouter();
	const { type } = router.query;
	// console.log(type);

	const { data } = tmdbAPI.useGetDataByTypeQuery({ type });
	console.log(data);

	return (
		<Layout title={generateTitle(type)}>
			<MoviesPage results={data?.results} title={generateTitle(type)} />
		</Layout>
	);
};

export default Type;
