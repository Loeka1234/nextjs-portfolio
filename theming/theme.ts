// TODO: finish darkTheme
export const darkTheme = {
	bg: {
		primary: "#363636",
		"primary-darker": "#1e1e1e",
		secondary: "#086262",
		"secondary-darker": "#033333"
	},
	text: {
		primary: "#fff",
		secondary: "#71cccc"
	},
};

// TODO: Colors for lightTheme
export const lightTheme = {
	bg: {
		primary: "#fff",
		"primary-darker": "rgb(197, 195, 198)",
		secondary: "#42b0b5",
		"secondary-darker": "#3a9a9e"
	},
	text: {
		primary: "#252a34",
		secondary: "#484f5e"
	},
}

export const getThemeAsString = (theme) => {
    let result = [];
	Object.entries(theme).forEach(([kind, values]) => {
		Object.entries(values).forEach(([name, value]) => {
			result.push([`--${kind}-${name}`, value]);
        });
	});
    return JSON.stringify(result);
};