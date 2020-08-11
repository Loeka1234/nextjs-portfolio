import Document, { Html, Main, NextScript, Head } from "next/document";
import { ServerStyleSheet } from "styled-components";
import { getThemeAsString, darkTheme, lightTheme } from "../theming/theme";

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () =>
				originalRenderPage({
					enhanceApp: App => props =>
						sheet.collectStyles(<App {...props} />),
				});
			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}

	render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					<script
						src="/theming.js"
						// @ts-ignore
						lightTheme={getThemeAsString(lightTheme)}
						darkTheme={getThemeAsString(darkTheme)}
					/>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}
