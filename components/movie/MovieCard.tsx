import { Card, Typography, CardMedia, CardContent, Box } from '@mui/material';
import { FC } from 'react';
import Rating from './Rating';

interface Props {
	item: any;
}

const MovieCard: FC<Props> = ({ item }) => {
	const { title, name, poster_path, vote_average } = item;
	return (
		<Card
			sx={{
				height: '100%',
				'& .MuiCardContent-root': {
					paddingBottom: 1,
					paddingTop: 3,
					paddingInline: 1,
				},
			}}
		>
			<CardMedia
				title={title || name}
				image={
					poster_path
						? `https://image.tmdb.org/t/p/w500/${poster_path}`
						: 'https://fillmurray.com/200/300'
				}
				sx={{ aspectRatio: '1 / 1.5' }}
			/>
			<CardContent>
				<Rating value={vote_average * 10} />
				<Typography>{title || name}</Typography>
			</CardContent>
		</Card>
	);
};

export default MovieCard;
