export const monthNames = [
	'January',
	'February',
	'March',
	'April',
	'May',
	'June',
	'July',
	'August',
	'September',
	'October',
	'November',
	'December',
];

export const formatDate = (release_date: string) => {
	const year = release_date ? release_date.split('-')[0] : '';
	const month = release_date ? release_date.split('-')[1] : '';
	const day = release_date ? release_date.split('-')[2] : '';
	const monthName = monthNames[Number(month) - 1];

	return `${monthName} ${day}, ${year}`;
};
