export const darkTheme = {
	background: {
		primary: "#011a27",
	},
	text: {
		primary: "white",
		secondary: "yellow",
	},
};

export const lightTheme = {
    background: {
		primary: "darkgreen",
	},
	text: {
		primary: "white",
		secondary: "yellow",
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