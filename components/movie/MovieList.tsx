import { Grid } from '@mui/material';
import { FC } from 'react';
import MovieCard from './MovieCard';

interface Props {
	items: any[];
}

const MovieList: FC<Props> = ({ items }) => {
	return (
		<Grid container spacing={2}>
			{items?.map((item) => (
				<Grid item xs={12} sm={4} md={3} lg={2.4} key={item?.id}>
					<MovieCard item={item} />
				</Grid>
			))}
		</Grid>
	);
};

export default MovieList;
