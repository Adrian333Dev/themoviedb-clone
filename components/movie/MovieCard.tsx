/* eslint-disable @next/next/no-img-element */
import { Card, Typography, CardMedia, CardContent } from '@mui/material';
import { FC } from 'react';

interface Props {
	item: any;
}

const MovieCard: FC<Props> = ({ item }) => {
	const { title, name, poster_path } = item;
	return (
		<Card
			sx={{
				height: '100%',
				'& .MuiCardContent-root': {
					paddingBottom: 1,
					paddingTop: 3,
					paddingInline:1,
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
			<CardContent
				sx={{
					// padding: 1,
				}}
			>
				<Typography>{title || name}</Typography>
			</CardContent>
		</Card>
	);
};

export default MovieCard;
