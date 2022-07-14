import { useRouter } from 'next/router';
import { Layout, MoviesPage } from '../../components/exports';
import { tmdbAPI } from '../../services/tmdbAPI';

import { navList } from '../../constants/nav-data';

export const generateTitle = (type: any, category?: any) => {
	const typeTitle = navList.find((item: any) => item.type === type);
	const categoryTitle = typeTitle?.categories.find(
		(item: any) => item.link === `/${type}${category ? `/${category}` : ''}`
	);
	if (type) {
		return `${categoryTitle?.title} ${typeTitle?.title}`;
	}
};

const Category = () => {
	const router = useRouter();
	const { type, category } = router.query;
	// console.log(type, category);

	const { data } = tmdbAPI.useGetDataByTypeQuery({ type, category });
	// console.log(data);

	return (
		<Layout title={generateTitle(type, category)}>
			<MoviesPage
				results={data?.results}
				title={generateTitle(type, category)}
			/>
		</Layout>
	);
};

export default Category;
