import React from 'react';
import CircularProgress, {
	CircularProgressProps,
} from '@mui/material/CircularProgress';
import { Box, Typography } from '@mui/material';
import { green, grey, lime, pink } from '@mui/material/colors';
import { palette } from '../../styles/theme/palettes';

const Rating = (props: CircularProgressProps & { value: number, variant?: string }) => {
	const color = () => {
		if (!props.value) return grey[500];
		if (props.value < 40) return pink[600];
		if (props.value < 70) return lime[500];
		return green['A700'];
	};

	return (
		<Box
			sx={{
				position: 'absolute',
				bottom: -21,
				left: 8,
				display: 'inline-flex',
				backgroundColor: palette[900],
				borderRadius: '50%',
			}}
		>
			<CircularProgress
				sx={{
					color: color,
					opacity: 0.2,
					margin: '2px',
					position: 'absolute',
				}}
				size={37}
				thickness={2}
				variant='determinate'
				value={100}
			/>
			<CircularProgress
				sx={{
					color: color,
					margin: '2px',
				}}
				size={37}
				thickness={2}
				variant='determinate'
				value={props.value}
			/>
			<Box
				sx={{
					top: 0,
					left: 0,
					bottom: 0,
					right: 0,
					position: 'absolute',
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
				}}
			>
				<Typography
					sx={{
						color: 'inherit',
						fontSize: '13px',
						fontWeight: 'bold',
					}}
				>
					{props.value ? props.value : 'NR'}
					{props.value ? (
						<sup style={{ fontSize: 7, position: 'relative', top: 1 }}>%</sup>
					) : (
						''
					)}
				</Typography>
			</Box>
		</Box>
	);
};

export default Rating;
