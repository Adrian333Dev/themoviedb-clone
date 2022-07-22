import type { NextPage } from 'next';
import { Banner, Layout, MoviesSlider } from '../components/exports';
import { tmdbAPI } from '../services/tmdbAPI';

import { usePalette } from 'react-palette';



const Home: NextPage = () => {
	const { data, loading, error } = usePalette('https://picsum.photos/200');
	// console.log(data);
	return (
		<Layout>
			<Banner />
			<MoviesSlider />
			<MoviesSlider
				variant='trending'
				title='Trending'
				options={['day', 'week']}
				optionsLabels={['Today', 'This Week']}
			/>
		</Layout>
	);
};

export default Home;
