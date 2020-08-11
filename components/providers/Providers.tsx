// Providers
import SEOProvider from "./SEOProvider";
import ThemeProvider from "./ThemeProvider";

const Providers: React.FC = ({ children }) => {
	return (
		<ThemeProvider>
			<SEOProvider>{children}</SEOProvider>
		</ThemeProvider>
	);
};

export default Providers;
