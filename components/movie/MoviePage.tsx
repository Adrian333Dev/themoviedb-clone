/* eslint-disable @next/next/no-img-element */
import { Box, Container, Grid, Stack, Typography } from '@mui/material';
import { FC, useEffect, useState } from 'react';
import { tmdbAPI } from '../../services/tmdbAPI';
import { Layout } from '../exports';
import { StyledBackdrop } from '../styles/movie-card';
import { StyledToolbar, Wrapper } from '../styles/movie-page';
import { Icon } from '@iconify/react';
import Rating from './Rating';

interface Props {
	id: string;
	type: string;
	data: any;
}

export const MovieNav: FC = () => {
	return (
		<StyledToolbar>
			{['Overview', 'Media', 'Fandom', 'Share'].map((item: string) => (
				<Typography key={item}>{item}</Typography>
			))}
		</StyledToolbar>
	);
};

const MoviePage: FC<Props> = ({ id, type }) => {
	const [open, setOpen] = useState(false);
	const { data } = tmdbAPI.useGetDetailsQuery({ id, type }) as any;
	console.log(data);
	const { data: contentRating } = tmdbAPI.useGetExtraDetailsQuery({
		id,
		type,
	}) as any;
	const {
		backdrop_path,
		poster_path,
		title,
		name,
		last_air_date,
		first_air_date,
		overview,
		vote_average,
		vote_count,
		episode_run_time,
		genres,
	} = data || {};
	const releaseYear = first_air_date ? `(${first_air_date.split('-')[0]})` : '';
	const url = `https://image.tmdb.org/t/p/original${poster_path}`;
	const backdropUrl = `https://image.tmdb.org/t/p/w1920_and_h800_multi_faces${backdrop_path}`;
	const rating =
		contentRating?.results?.find((item: any) => item?.iso_3166_1 === 'US')
			?.rating || contentRating?.results[0]?.rating;

	const [ratingVal, setRatingVal] = useState<number>(0);

	useEffect(() => {
		setTimeout(() => {
			setRatingVal(Math.floor(vote_average * 10));
		}, 700);
	}, [vote_average]);

	const BgImg = () => {
		return (
			<Box className='bg-img'>
				<img src={backdropUrl} alt={title} />
				<Box />
			</Box>
		);
	};

	const Poster = () => {
		return (
			<Box
				onMouseEnter={() => setOpen(true)}
				onMouseLeave={() => setOpen(false)}
				onClick={() => setOpen(false)}
			>
				<img src={url} alt={title} />
				<StyledBackdrop open={open}>
					<Box>
						<Icon icon='fluent:arrow-expand-24-filled' width='28' height='28' />
						<Typography>Expand</Typography>
					</Box>
				</StyledBackdrop>
			</Box>
		);
	};

	const MainDetails = () => {
		return (
			<Box p={2}>
				<Stack direction={'row'} gap={1}>
					<Typography variant='h4' fontWeight={'bolder'}>
						{title || name}
					</Typography>
					<Typography variant='h4' fontWeight={200}>
						{releaseYear}
					</Typography>
				</Stack>
				<Stack direction={'row'} gap={1}>
					<Typography border={1} px={'3px'} borderRadius={1}>
						{rating}
					</Typography>
					<Typography className='genres'>
						{genres?.map((item: any, i: number) => (
							<span key={i}>
								{item.name}
								{i !== genres.length - 1 ? ', ' : ''}
							</span>
						))}
						{episode_run_time?.map((item: any) => (
							<span key={item}>
								<span />
								{item}min
							</span>
						))}
					</Typography>
				</Stack>
				<Stack direction={'row'} gap={1}>
					<Rating value={ratingVal} />
				</Stack>
			</Box>
		);
	};

	return (
		<Layout title={`${title || name} (${releaseYear})`}>
			<MovieNav />
			<Wrapper>
				<BgImg />
				<Container>
					<Grid container spacing={2}>
						<Grid item xs={3.4}>
							<Poster />
						</Grid>
						<Grid item xs={12} md={8}>
							<MainDetails />
						</Grid>
					</Grid>
				</Container>
			</Wrapper>
		</Layout>
	);
};

export default MoviePage;
