import { createContext, useEffect, useState } from "react";
import { getThemeAsString, lightTheme, darkTheme } from "../theming/theme";

export const ThemeContext = createContext(undefined);

export const Providers: React.FC = ({ children }) => {
	const [theme, rawSetTheme] = useState<"light" | "dark" | undefined>(
		undefined
	);

	useEffect(() => {
		const root = window.document.documentElement;
		const initialColorValue = root.style.getPropertyValue(
			"--initial-color-mode"
		);
		rawSetTheme(initialColorValue as "light" | "dark");
	}, []);

	const toggleTheme = () => {
		const root = window.document.documentElement;
		root.style.setProperty("--transition", "background .5s ease-in-out");

		const newTheme = theme === "dark" ? "light" : "dark";
		const newThemeData =
			newTheme === "light"
				? getThemeAsString(lightTheme)
				: getThemeAsString(darkTheme);

		JSON.parse(newThemeData).forEach(([name, value]) => {
			root.style.setProperty(name, value);
		});

		window.localStorage.setItem("color-mode", newTheme);

		rawSetTheme(newTheme);
    };
    
	return (
		<ThemeContext.Provider
			value={{ theme, toggleTheme }}
		>
            {children}
        </ThemeContext.Provider>
	);
};
