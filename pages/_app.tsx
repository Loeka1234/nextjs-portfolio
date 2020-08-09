import Layout from "../components/layout";

import "../styles/globals.css";
import { Providers } from "../components/Providers";

function MyApp({ Component, pageProps }) {
	return (
		<Providers>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</Providers>
	);
}

export default MyApp;
