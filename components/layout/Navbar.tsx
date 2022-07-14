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

const logoUrl =
	'https://www.themoviedb.org/assets/2/v4/logos/v2/blue_short-8e7b30f73a4020692ccca9c88bafe5dcb6f8a62a4c6bc55cd9ba82bb2cd95f6c.svg';

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
		<Box display='flex' gap={4}>
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
	return (
		<Box>
			<HideOnScroll>
				<AppBar
					sx={{
						zIndex: '1000',
					}}
				>
					<Toolbar>
						<IconButton
							onClick={() => setOpen(!open)}
							sx={{ color: 'inherit', display: { xs: 'block', sm: 'none' } }}
						>
							{open ? <CloseIcon /> : <MenuIcon />}
						</IconButton>
						<Img src={logoUrl} alt='The Movie Database' />
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
