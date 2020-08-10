// TODO: finish darkTheme
export const darkTheme = {
	background: {
		primary: "#0F2557",
		secondary: "#4B9FE1"
	},
	text: {
		primary: "#fff",
		secondary: "#7ED5EA"
	},
};

// TODO: Colors for lightTheme
export const lightTheme = {
	background: {
		primary: "#011a27",
	},
	text: {
		primary: "white",
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