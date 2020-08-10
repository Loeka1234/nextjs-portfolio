import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header navItems={[
				{
					path: "/",
					name: "Home"
				},
				{
					path: "/about",
					name: "About"
				},
				{
					path: "/projects",
					name: "Projects"
				},
				{
					path: "/blog",
					name: "Blog"
				}
			]}
			padding={30}
			margin={0}
			/>
			<main>{children}</main>
            <Footer />
		</>
	);
};

export default Layout;
