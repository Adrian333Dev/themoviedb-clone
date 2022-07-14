import React from 'react';
import CircularProgress, {
	CircularProgressProps,
} from '@mui/material/CircularProgress';
import { Box, Typography } from '@mui/material';

const Rating = (props: CircularProgressProps & { value: number }) => {
	const color = () => {
		if (props.value < 40) return '#ff0000';
		if (props.value < 75) return '#ffa500';
		return '#00ff00';
	};
	return (
		<Box sx={{ position: 'relative', display: 'inline-flex' }}>
			<CircularProgress
				sx={{
					color: color,
				}}
				variant='determinate'
				{...props}
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
					variant='caption'
					component='div'
					sx={{
						color: color,
					}}
				>{`${Math.round(props.value)}%`}</Typography>
			</Box>
		</Box>
	);
};

export default Rating;
