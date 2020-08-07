import Layout from "../components/layout";
import { ThemeProvider } from "styled-components";

import "../styles/globals.css";

const theme = {
	background: "#011a27",
	colors: {
		primary: "white",
	},
};

function MyApp({ Component, pageProps }) {
	return (
		<ThemeProvider theme={theme}>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</ThemeProvider>
	);
}

export default MyApp;
