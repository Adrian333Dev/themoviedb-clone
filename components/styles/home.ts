import { Box, styled } from '@mui/material';
import { palette } from '../../styles/theme/palettes';

export const BannerContainer = styled(Box)(({ theme }) => ({
	height: '300px',
	backgroundSize: 'cover',
	backgroundPosition: 'center',
	backgroundRepeat: 'no-repeat',
	position: 'relative',
	'& > .MuiContainer-root': {
		zIndex: 1,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		'& > form': {
			marginTop: 50,
			position: 'relative',
			'& > .MuiInputBase-root': {
				backgroundColor: palette[50],
				color: palette[600],
				padding: '0.5rem 1rem',
				borderRadius: 50,
				width: '100%',
			},
			'& > .MuiBox-root': {
				position: 'absolute',
				right: 0,
				top: '50%',
				transform: 'translateY(-50%)',
				borderRadius: 50,
				outline: '1px solid cyan',
				background:
					'linear-gradient(to right, rgb(30,213,169), rgb(1,180,228))',
        height: '100%',
        width: 100,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontWeight: 'bold',
        cursor: 'pointer',
        color: palette[200],
        '&:hover': {
          color: palette[600],
        }
			},
		},
	},
}));
