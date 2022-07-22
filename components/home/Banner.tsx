import { Box, Container, InputBase, Typography } from '@mui/material';
import React, { FC } from 'react';
import { tmdbAPI } from '../../services/tmdbAPI';
import { BannerContainer } from '../styles/home';

const Banner: FC = () => {
	const getRandomIndex = (length: number) => {
		return Math.floor(Math.random() * length + 1);
	};
	const { data } = tmdbAPI.useGetDataByTypeQuery({});
	const randomMovie = data?.results[getRandomIndex(20)]?.backdrop_path;

	const imgUrl = `https://image.tmdb.org/t/p/w1920_and_h600_multi_faces_filter(duotone,032541,01b4e4)/${randomMovie}`;

	return (
		<BannerContainer
			sx={{
				backgroundImage: `linear-gradient(to right, rgba(3,37,65, 0.8) 0%, rgba(3,37,65, 0) 100%), url('${imgUrl}')`,
			}}
		>
			<Container>
				<Typography variant='h3' fontWeight={'bolder'}>
					Welcome.
				</Typography>
				<Typography variant='h4'>
					Millions of movies, TV shows and people to discover. Explore now.
				</Typography>
				<Box component={'form'}>
					<InputBase placeholder='Search for a movie, tv show, person......' />
					<Box>Search</Box>
				</Box>
			</Container>
		</BannerContainer>
	);
};

export default Banner;
