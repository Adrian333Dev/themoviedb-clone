import { Box, styled } from '@mui/material';

export const Img = styled('img')(({ theme }) => ({
	height: 21,
}));

export const NavListItemBox = styled(Box)(({ theme }) => ({
	position: 'relative',
	height: '100%',
	paddingBlock: '10px',
	'& > .MuiTypography-root': {
		cursor: 'pointer',
	},
	'&  .MuiCard-root': {
		width: 170,
		position: 'absolute',
		top: 40,
		padding: '0.5rem 1.5rem',
		'& > .MuiTypography-root': {
			lineHeight: 2.2,
			cursor: 'pointer',
		},
	},
}));
