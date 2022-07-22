import { palette } from './palettes';

export const components = {
	MuiAppBar: {
		styleOverrides: {
			root: {
				backgroundImage: 'unset',
				backgroundColor: palette[800],
			},
		},
	},
	MuiCssBaseline: {
		styleOverrides: {
			body: {
				'& img': {
					maxWidth: '100%',
					height: 'auto',
				},
			},
			'& *': {
				'&::-webkit-scrollbar': {
					width: '0.4em',
					height: '0.4em',
				},
				'&::-webkit-scrollbar-thumb': {
					backgroundColor: 'rgba(0,0,0,.1)',
					outline: '1px solid rgba(255,255,255,.1)',
					borderRadius: '5px',
				},
			},
		},
	},
	MuiToolbar: {
		styleOverrides: {
			root: {
				display: 'flex',
				gap: '1.5rem',
			},
		},
	},
};
