import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";

const navItems = [
	{
		path: "/",
		name: "Home",
	},
	{
		path: "/about",
		name: "About",
	},
	{
		path: "/projects",
		name: "Projects",
	},
	{
		path: "/blog",
		name: "Blog",
	},
];

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header navItems={navItems} padding={30} margin={0} navMargin={20} />
			<main>{children}</main>
			<Footer navItems={navItems} />
		</>
	);
};

export default Layout;
