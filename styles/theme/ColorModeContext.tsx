/* eslint-disable no-mixed-spaces-and-tabs */
import { createTheme, PaletteMode, ThemeProvider } from '@mui/material';
import { createContext, ReactNode, useContext, useMemo, useState } from 'react';
import { blueGrey } from '@mui/material/colors';

import { palette } from '../theme/palettes';
import { components } from './style-overrides';

interface IColorModeContext {
	toggleColorMode: () => void;
	mode: 'dark' | 'light';
}

interface Props {
	children?: ReactNode;
}

export const ColorModeContext = createContext<IColorModeContext>({
	toggleColorMode: () => {},
	mode: 'dark',
});

export const ColorModeProvider = ({ children }: Props) => {
	const [mode, setMode] = useState<'dark' | 'light'>('dark');
	const colorMode = useMemo(
		() => ({
			toggleColorMode: () => {
				setMode((prevMode: 'dark' | 'light') =>
					prevMode === 'dark' ? 'light' : 'dark'
				);
			},
			mode,
		}),
		[mode]
	);

	const getDesignTokens = (mode: PaletteMode) => ({
		palette: {
			mode,
			...(mode === 'light'
				? {
						primary: blueGrey,
						divider: blueGrey[200],
						text: {
							primary: '#171923',
							secondary: '#1A202C',
						},
				  }
				: {
						primary: palette,
						divider: blueGrey[700],
						background: {
							default: '#171923',
							paper: '#1A202C',
						},
						text: {
							primary: '#CBD5E0',
							secondary: '#A0AEC0',
						},
				  }),
		},
		// ! Style overrides for the Components
		components,
	});

	const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

	return (
		<ColorModeContext.Provider value={colorMode}>
			<ThemeProvider theme={theme}>{children}</ThemeProvider>
		</ColorModeContext.Provider>
	);
};

export const useColorMode = () => useContext(ColorModeContext);
