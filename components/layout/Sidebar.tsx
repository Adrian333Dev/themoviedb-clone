import {
	Accordion,
	AccordionDetails,
	AccordionSummary,
	Box,
	Drawer,
	Toolbar,
	Typography,
} from '@mui/material';
import { FC } from 'react';
import { palette } from '../../styles/theme/palettes';

interface Props {
	open: boolean;
	setOpen: (open: boolean) => void;
}

const SidebarListItem = ({ item }: { item: string }) => {
	return (
		<div>
			<Accordion
				sx={{
					backgroundColor: 'transparent',
					color: 'inherit',
					boxShadow: 'none',
				}}
			>
				<AccordionSummary>
					<Typography>{item}</Typography>
				</AccordionSummary>
				<AccordionDetails>
					<Typography>{item} 1</Typography>
					<Typography>{item} 2</Typography>
					<Typography>{item} 3</Typography>
				</AccordionDetails>
			</Accordion>
		</div>
	);
};

const SidebarList: FC = () => {
	return (
		<Box>
			{['Movies', 'TV Shows', 'People'].map((item) => (
				<SidebarListItem key={item} item={item} />
			))}
		</Box>
	);
};

const Sidebar: FC<Props> = ({ open, setOpen }) => {
	return (
		<Drawer
			variant='temporary'
			open={open}
			onClose={() => setOpen(false)}
			ModalProps={{
				keepMounted: true,
			}}
			sx={{
				display: { xs: 'block', sm: 'none' },
				'& .MuiDrawer-paper': {
					boxSizing: 'border-box',
					width: 240,
					backgroundColor: `${palette[800]}f0`,
					color: `${palette[100]}`,
					backdropFilter: 'blur(4px)',
				},
				'.MuiBackdrop-root': {
					backgroundColor: 'unset',
				},
				zIndex: 0,
			}}
		>
			<div>
				<Toolbar />
				<SidebarList />
			</div>
		</Drawer>
	);
};

export default Sidebar;
