import { Box, Grid, Typography, ButtonGroup, Button } from '@mui/material';
import { FC, useState } from 'react';
import { tmdbAPI } from '../../services/tmdbAPI';
import { SliderContainer } from '../styles/movies-slider';
import MovieCard from './MovieCard';

interface Props {
	variant?: string;
	options?: [string, string];
	optionsLabels?: [string, string];
	title?: string;
}

const MoviesSlider: FC<Props> = ({
	variant = 'popular',
	options = ['tv', 'movie'],
	optionsLabels = ['On TV', 'In Theaters'],
	title = "What's Popular",
}) => {
	const [option, setOption] = useState<string>(options[0]);
	const { data } = tmdbAPI.useGetDataByTypeQuery({
		type: option,
		category: variant,
		page: 1,
	});

	const { data: trending } = tmdbAPI.useGetTrendingQuery({
		type: 'all',
		timeWindow: option,
	});
	// console.log('trending', trending);

	const movies = variant === 'trending' ? trending?.results : data?.results;

	return (
		<Box>
			<SliderContainer>
				<Box>
					<Typography variant='h5'>{title}</Typography>
					<ButtonGroup size='small'>
						<Button
							variant={option === options[0] ? 'contained' : 'outlined'}
							onClick={() => setOption(options[0])}
						>
							{optionsLabels[0]}
						</Button>
						<Button
							variant={option === options[1] ? 'contained' : 'outlined'}
							onClick={() => setOption(options[1])}
						>
							{optionsLabels[1]}
						</Button>
					</ButtonGroup>
				</Box>
				<Grid container spacing={2}>
					{movies?.map((item: any) => (
						<Grid item key={item.id}>
							<MovieCard item={item} type={option} />
						</Grid>
					))}
				</Grid>
			</SliderContainer>
		</Box>
	);
};

export default MoviesSlider;
