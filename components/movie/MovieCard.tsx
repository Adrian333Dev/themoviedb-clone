import {
	Typography,
	CardMedia,
	CardContent,
	Box,
	ClickAwayListener,
} from '@mui/material';

import { useRouter } from 'next/router';
import { FC, useEffect, useState } from 'react';
import { formatDate } from '../../constants/movie-data';
import { StyledBackdrop, StyledCard } from '../styles/movie-card';
import Rating from './Rating';
import { MoreBtn } from './atoms';
import MoreMenu from './MoreMenu';

interface Props {
	item: any;
}

const MovieCard: FC<Props> = ({ item }) => {
	const router = useRouter();
	const { title, name, poster_path, vote_average, release_date, id } = item;
	const img = poster_path
		? `https://image.tmdb.org/t/p/w500/${poster_path}`
		: 'https://fillmurray.com/200/300';

	const [rating, setRating] = useState<number>(0);

	useEffect(() => {
		setTimeout(() => {
			setRating(vote_average * 10);
		}, 700);
	}, []);

	const [open, setOpen] = useState<boolean>(false);

	return (
		<ClickAwayListener onClickAway={() => setOpen(false)}>
			<StyledCard>
				{open && <MoreMenu />}
				<StyledBackdrop open={open} onClick={() => setOpen(false)} />
				<MoreBtn handleClick={() => setOpen(!open)} />
				<Box component={'header'}>
					<CardMedia
						title={title || name}
						image={img}
						onClick={() => router.push(`/movie/${id}`)}
					/>
					<Rating value={rating} />
				</Box>
				<CardContent
					onClick={() => router.push(`/movie/${id}`)}
					style={{ paddingBottom: 10 }}
				>
					<Typography variant='h6'>{title || name}</Typography>
					<Typography variant='body2' color='primary'>
						{formatDate(release_date)}
					</Typography>
				</CardContent>
			</StyledCard>
		</ClickAwayListener>
	);
};

export default MovieCard;
