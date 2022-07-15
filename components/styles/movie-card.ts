import { Backdrop, Box, Card, styled } from '@mui/material';
import { blue } from '@mui/material/colors';

export const StyledCard = styled(Card)(({ theme }) => ({
	height: '100%',
	position: 'relative',
	boxSizing: 'content-box',
	overflow: 'unset',
	'& > header': {
		position: 'relative',
		'& > .MuiCardMedia-root': {
			aspectRatio: '1 / 1.5',
			cursor: 'pointer',
			borderRadius: '4px 4px 0 0',
		},
	},
	'& .MuiCardContent-root': {
		padding: '24px 10px',
		'& > h6': {
			fontSize: 16,
			marginBottom: 1,
			cursor: 'pointer',
			'&:hover': {
				color: blue[400],
			},
		},
	},
}));

export const StyledBackdrop = styled(Backdrop)(({ theme }) => ({
	position: 'absolute',
	width: '100%',
	height: '100%',
	zIndex: 10,
	backgroundColor: 'rgba(0,0,0,0.5)',
	backdropFilter: 'blur(20px)',
}));

export const MoreMenuList = styled(Box)(({ theme }) => ({
	position: 'absolute',
	zIndex: 20,
	backgroundColor: 'gray',
	width: '100px',
	height: '100px',
	right: '-50px',
}));
