import { faBoxOpen } from '@fortawesome/free-solid-svg-icons';
import { Backdrop, Box, Card, Paper, styled } from '@mui/material';
import { blue } from '@mui/material/colors';

export const StyledCard = styled(Card)(({ theme }) => ({
	height: '100%',
	position: 'relative',
	boxSizing: 'content-box',
	overflow: 'unset',
	borderRadius: '4px',
	'& > header': {
		position: 'relative',
		'& > .MuiCardMedia-root': {
			aspectRatio: '1 / 1.5',
			cursor: 'pointer',
			borderRadius: '5px 5px 0 0',
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
	borderRadius: 'inherit',
	position: 'absolute',
	width: '100%',
	height: '100%',
	zIndex: 10,
	backgroundColor: 'rgba(0,0,0,0.5)',
	backdropFilter: 'blur(20px)',
}));

export const MoreMenuList = styled(Paper)(({ theme }) => ({
	position: 'absolute',
	boxSizing: 'border-box',
	zIndex: 20,
	top: 38,
	width: '130px',
	right: '-50px',
	display: 'flex',
	flexDirection: 'column',
	borderRadius: '4px',
}));
export const ListItem = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	borderRadius: '0',
	padding: '10px 16px',
	gap: '8px',
	flexGrow: 1,
	'&:hover': {
		backgroundColor: theme.palette.text.primary,
		color: theme.palette.background.paper,
	},
	cursor: 'pointer',
	'& > h6': {
		fontSize: 14,
	},
	'& > svg': {
		fontSize: 14,
	},
}));
