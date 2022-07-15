import Head from 'next/head';
import { AppProps } from 'next/app';
import { CssBaseline } from '@mui/material';
import { CacheProvider, EmotionCache } from '@emotion/react';

import createEmotionCache from '../utility/createEmotionCache';
import { ColorModeProvider } from '../styles/theme/ColorModeContext';
import { Provider } from 'react-redux';
import { setupStore } from '../app/store';

import '../styles/globals.css';

const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
	emotionCache?: EmotionCache;
}

export default function MyApp(props: MyAppProps) {
	const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
	const store = setupStore();
	return (
		<CacheProvider value={emotionCache}>
			<Head>
				<meta name='viewport' content='initial-scale=1, width=device-width' />
			</Head>
			<ColorModeProvider>
				<Provider store={store}>
					<CssBaseline />
					<Component {...pageProps} />
				</Provider>
			</ColorModeProvider>
		</CacheProvider>
	);
}
