import type { NextPage } from 'next';
import { Layout } from '../components/exports';
import { tmdbAPI } from '../services/tmdbAPI';

const Home: NextPage = () => {
	const { data } = tmdbAPI.useGetDataByTypeQuery({});
	// console.log(data);
		
	return (
		<Layout>
			<h1>Home</h1>
			<h1>Hello World</h1>
			<h1>Hello World</h1>
			<h1>Hello World</h1>
			<h1>Hello World</h1>
			<h1>Hello World</h1>
			<h1>Hello World</h1>
		</Layout>
	);
};

export default Home;
