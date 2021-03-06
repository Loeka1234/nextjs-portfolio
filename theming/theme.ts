// TODO: finish darkTheme
export const darkTheme = {
	bg: {
		primary: "#363636",
		"primary-darker": "#262626",
		secondary: "#086262",
		"secondary-darker": "#044a4a",
		"secondary-most-dark": "#033333",
	},
	text: {
		primary: "#fff",
		secondary: "#71cccc",
		"secondary-darker": "#59abab",
	},
	tint: {
		primary: "#6fffe9",
	},
};

// TODO: finish lightTheme
export const lightTheme = {
	bg: {
		primary: "#fff",
		"primary-darker": "#d8d7d9",
		secondary: "#4bc6cc",
		"secondary-darker": "#3a9a9e",
		"secondary-most-dark": "#31898c",
	},
	text: {
		primary: "#252a34",
		secondary: "#484f5e",
		"secondary-darker": "#343a45",
	},
	tint: {
		primary: "#6fffe9",
	},
};

export const getThemeAsString = theme => {
	let result = [];
	Object.entries(theme).forEach(([kind, values]) => {
		Object.entries(values).forEach(([name, value]) => {
			result.push([`--${kind}-${name}`, value]);
		});
	});
	return JSON.stringify(result);
};
