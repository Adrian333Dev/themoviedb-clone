import { useRouter } from 'next/router';
import React from 'react';
import { Layout } from '../../components/exports';

const Movie = () => {
	const router = useRouter();
	const { id } = router.query;
	return (
		<Layout>
			<p>Movie {id}</p>
		</Layout>
	);
};

export default Movie;
