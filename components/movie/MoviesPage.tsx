import { FC } from 'react';
import { Grid, Typography } from '@mui/material';

import { Discover, MovieList } from '../exports';

interface Props {
	results: any[];
	title?: string;
}

const MoviesPage: FC<Props> = ({ results, title }) => {
	return (
		<>
			<Typography variant='h5'>{title}</Typography>
			<Grid container>
				<Grid item xs={12} sm={3}>
					<Discover />
				</Grid>
				<Grid item xs={12} sm={9}>
					<MovieList items={ results} />
				</Grid>
			</Grid>
		</>
	);
};

export default MoviesPage;
