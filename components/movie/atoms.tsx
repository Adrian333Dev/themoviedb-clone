import { FC } from 'react';
import { Icon } from '@iconify/react';

interface Props {
	handleClick: () => void;
}

export const MoreBtn: FC<Props> = ({ handleClick }) => {
	return (
		<Icon
			icon='fluent:more-circle-32-filled'
			onClick={handleClick}
			style={{
				position: 'absolute',
				right: 5,
				top: 5,
				zIndex: 1,
				color: 'rgba(255, 255, 255, 0.5)',
				stroke: 'rgba(0,0,0,0.2)',
				transition: 'all 0.1s ease-in-out',
			}}
			className='more-icon'
			width='22'
		/>
	);
};
