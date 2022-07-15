import Head from 'next/head';
import { Container, Toolbar } from '@mui/material';
import { Navbar } from '../exports';
import { FC } from 'react';

interface Props {
	children: JSX.Element[] | JSX.Element;
	title?: string;
}

const Layout: FC<Props> = ({ children, title }) => {
	return (
		<>
			<Head>
				<title>
					{title
						? title + ' - The Movie Database (TMDB)'
						: 'The Movie Database (TMDB)'}
				</title>
				<meta name='description' content='Ecommerce app' />
				<link rel='icon' href='/favicon.ico' />
			</Head>
			<Navbar />
			<Container
				sx={{
					paddingTop: 1,
				}}
			>
				<Toolbar sx={{ display: 'hidden' }} />
				{children}
			</Container>
		</>
	);
};

export default Layout;
