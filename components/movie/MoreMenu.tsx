import { FC } from 'react';

import { Box, Divider, Typography } from '@mui/material';

import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FavoriteIcon from '@mui/icons-material/Favorite';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import StarRateIcon from '@mui/icons-material/StarRate';

import { ListItem, MoreMenuList } from '../styles/movie-card';

const MoreMenu: FC = () => {
	return (
		<MoreMenuList>
			<ListItem>
				<FormatListBulletedIcon />
				<Typography variant='h6'>Add to list</Typography>
			</ListItem>
			<Divider />
			<ListItem>
				<FavoriteIcon />
				<Typography variant='h6'>Favorite</Typography>
			</ListItem>
			<Divider />
			<ListItem>
				<BookmarkIcon />
				<Typography variant='h6'>Watchlist</Typography>
			</ListItem>
			<Divider />
			<ListItem>
				<StarRateIcon />
				<Typography variant='h6'>Your rating</Typography>
			</ListItem>
		</MoreMenuList>
	);
};

export default MoreMenu;
