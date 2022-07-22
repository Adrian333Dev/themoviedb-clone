export const hexToRgb = (hex: any) => {
	const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
	return result
		? `${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(
				result[3],
				16
		  )}`
		: null;
};

export const getContrast = (hexcolor?: any) => {
	// If a leading # is provided, remove it
	if (hexcolor?.slice(0, 1) === '#') {
		hexcolor = hexcolor?.slice(1);
	}

	// If a three-character hexcode, make six-character
	if (hexcolor?.length === 3) {
		hexcolor = hexcolor
			.split('')
			.map(function (hex: any) {
				return hex + hex;
			})
			.join('');
	}

	// Convert to RGB value
	var r = parseInt(hexcolor?.slice(0, 2), 16);
	var g = parseInt(hexcolor?.slice(2, 4), 16);
	var b = parseInt(hexcolor?.slice(4, 6), 16);

	// Get YIQ ratio
	var yiq = (r * 299 + g * 587 + b * 114) / 1000;

	// Check contrast
	return yiq >= 128 ? 'black' : 'white';
};

export function LightenDarkenColor(col: any, amt: any) {
	if (!col || !amt) return;

	var usePound = false;

	if (col[0] == '#') {
		col = col.slice(1);
		usePound = true;
	}

	var num = parseInt(col, 16);

	var r = (num >> 16) + amt;

	if (r > 255) r = 255;
	else if (r < 0) r = 0;

	var b = ((num >> 8) & 0x00ff) + amt;

	if (b > 255) b = 255;
	else if (b < 0) b = 0;

	var g = (num & 0x0000ff) + amt;

	if (g > 255) g = 255;
	else if (g < 0) g = 0;

	return (usePound ? '#' : '') + (g | (b << 8) | (r << 16)).toString(16);
}
