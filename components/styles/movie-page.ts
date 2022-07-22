import { Box, styled, Toolbar } from '@mui/material';
import { palette } from '../../styles/theme/palettes';

export const Wrapper = styled(Box)(({ theme }) => ({
	position: 'relative',
	'& > .bg-img': {
		backgroundColor: 'rgba(69, 14, 17, 0.95)',
		position: 'absolute',
		aspectRatio: '16/6.37',
		overflow: 'hidden',
		display: 'flex',
		top: 0,
		left: 0,
		right: 0,
		'& > img': {
			width: '100%',
			height: 'max-content',
			zIndex: -1,
		},
	},
	'& > .MuiContainer-root': {
		position: 'relative',
		height: '100%',
		paddingInline: '10px !important',
		[theme.breakpoints.up('md')]: {
			paddingTop: '14px !important',
		},
		margin: '0 !important',
		'& > .MuiGrid-container': {
			margin: '0 auto',
			width: '94%',
			'& > .MuiGrid-item:first-of-type': {
				'& > .MuiBox-root': {
					position: 'relative',
					borderRadius: '10px',
					overflow: 'hidden',
					display: 'flex',
					cursor: 'pointer',
					maxHeight: '455px',
					'& > img': {},
					'& > .MuiBackdrop-root': {
						'& > div': {
							display: 'flex',
							alignItems: 'center',
							gap: '5px',
						},
					},
				},
			},
			'& > .MuiGrid-item:nth-of-type(2)': {
				'& .genres': {
					'& > span': {
						cursor: 'pointer',
						transition: 'all 0.1s ease-in-out',
						'& > span': {
							display: 'inline-block',
							width: '5px',
							height: '5px',
							borderRadius: '50%',
							backgroundColor: theme.palette.primary.light,
							margin: '3px 5px 3px 10px',
						},
						'&:hover:not(:last-of-type)': {
							color: theme.palette.primary.main,
						},
					},
				},
			},
		},
	},
}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	minHeight: '42px !important',
}));
