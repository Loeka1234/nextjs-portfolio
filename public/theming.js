(() => {
	function getInitialColorMode() {
		const themePreference = window.localStorage.getItem("color-mode");
		const hasThemePreference = typeof themePreference === "string";

		if (hasThemePreference) return themePreference;

		const mql = window.matchMedia("(prefers-color-scheme: dark)");
		const hasMql = typeof mql.matches === "boolean";

		if (hasMql) return mql.matches ? "dark" : "light";
		else return "light";
	}
    const root = document.documentElement;
    const colorMode = getInitialColorMode();
    window.localStorage.setItem("color-mode", colorMode);

	const theme = document.currentScript.getAttribute(
		colorMode === "dark" ? "darkTheme" : "lightTheme"
    );

    root.style.setProperty("--initial-color-mode", colorMode);

	JSON.parse(theme).forEach(([name, value]) => {
		root.style.setProperty(name, value);
	});
})();
