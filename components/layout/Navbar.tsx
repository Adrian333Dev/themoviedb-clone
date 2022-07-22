import { FC, useState } from 'react';

// ! Material UI & Icons
import {
	AppBar,
	Toolbar,
	useScrollTrigger,
	Slide,
	Box,
	Typography,
	Grow,
	Card,
	Button,
	IconButton,
	useMediaQuery,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';

// ! Styled
import { Img, NavListItemBox } from '../styles/navbar';
import Sidebar from './Sidebar';
import { navList } from '../../constants/nav-data';
import { useRouter } from 'next/router';
import { NextPage } from 'next';

const imgMd =
	'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg';

const imgXs =
	'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg';

interface Props {
	children: React.ReactElement;
}

// ! Hide the navbar when the user scrolls down
const HideOnScroll: FC<Props> = ({ children }) => {
	const trigger = useScrollTrigger();

	return (
		<Slide appear={false} direction='down' in={!trigger}>
			{children}
		</Slide>
	);
};

// ! Nav List Item

interface Category {
	title: string;
	link: string;
}

interface NavListItemProps {
	item: {
		title: string;
		categories: Category[];
	};
}

const NavListItem: FC<NavListItemProps> = ({ item: { title, categories } }) => {
	const router = useRouter();

	const [open, setOpen] = useState<boolean>(false);
	return (
		<NavListItemBox
			onMouseEnter={() => setOpen(true)}
			onMouseLeave={() => setOpen(false)}
		>
			<Typography>{title}</Typography>
			<Grow in={open}>
				<Card>
					{categories.map((category) => (
						<Typography
							key={category.title}
							onClick={() => router.push(category.link)}
						>
							{category.title}
						</Typography>
					))}
				</Card>
			</Grow>
		</NavListItemBox>
	);
};

// ! Navbar List
const NavbarList: FC = () => {
	return (
		<Box
			gap={4}
			sx={{
				display: { xs: 'none', md: 'flex' },
			}}
		>
			{navList.map((item) => (
				<NavListItem key={item.title} item={item} />
			))}
		</Box>
	);
};

// ! Nav Menu
const NavMenu: FC = () => {
	return (
		<Box>
			<Button color='inherit' size='small'>
				Login
			</Button>
			<IconButton color='inherit'>
				<SearchIcon />
			</IconButton>
		</Box>
	);
};

const Navbar: FC = () => {
	const [open, setOpen] = useState<boolean>(false);
	const router = useRouter();
	const isMobile = useMediaQuery('(max-width:600px)');
	return (
		<Box>
			<HideOnScroll>
				<AppBar
					sx={{
						zIndex: 10,
					}}
				>
					<Toolbar
						sx={{
							width: '100%',
							maxWidth: '1300px',
							margin: '0 auto',
						}}
					>
						<IconButton
							onClick={() => setOpen(!open)}
							sx={{ color: 'inherit', display: { xs: 'block', sm: 'none' } }}
						>
							{open ? <CloseIcon /> : <MenuIcon />}
						</IconButton>
						<Img
							src={isMobile ? imgXs : imgMd}
							alt='The Movie Database'
							onClick={() => router.push('/')}
						/>
						<NavbarList />
						<Box flexGrow={1} />
						<NavMenu />
					</Toolbar>
				</AppBar>
			</HideOnScroll>
			<Sidebar open={open} setOpen={setOpen} />
		</Box>
	);
};

export default Navbar;
