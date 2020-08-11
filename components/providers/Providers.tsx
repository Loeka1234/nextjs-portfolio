// Providers
import TitleProvider from "./TitleProvider";
import ThemeProvider from "./ThemeProvider";

const Providers: React.FC = ({ children }) => {
	return (
		<ThemeProvider>
			<TitleProvider>{children}</TitleProvider>
		</ThemeProvider>
	);
};

export default Providers;
