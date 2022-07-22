import { Container, styled } from '@mui/material';

export const SliderContainer = styled(Container)(({ theme }) => ({
	paddingBlock: 10,
	'& > .MuiBox-root': {
		display: 'flex',
		alignItems: 'center',
		marginBlock: 20,
		gap: 20,
		'& .MuiButton-root': {
			paddingInline: 20,
		},
	},
	'& > .MuiGrid-container': {
		overflowX: 'auto',
		paddingBlock: 10,
		display: 'flex',
		flexWrap: 'nowrap',
		'& > .MuiGrid-item': {
			minWidth: '175px',
			'& > .MuiCard-root': {
				backgroundColor: 'transparent',
				backgroundImage: 'none',
				boxShadow: 'none',
				'& .MuiCardMedia-root': {
					borderRadius: '5px',
				},
			},
		},
	},
}));
