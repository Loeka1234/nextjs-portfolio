import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { useContext } from "react";
import { TitleContext } from './../providers/TitleProvider';

const navItems: NavItems = [
	{
		path: "/",
		name: "Home",
	},
	{
		path: "/about",
		name: "About",
	},
	{
		path: "/journey",
		name: "My Journey"
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

const Layout: React.FC = ({ children }) => {
	const { title } = useContext(TitleContext);

	return (
		<>
			<Head>
				<title>{`Loeka Lievens | ${title}`}</title>
			</Head>
			<Header navItems={navItems} padding={30} margin={0} navMargin={20} />
			<main>{children}</main>
			<Footer navItems={navItems} />
		</>
	);
};

export default Layout;
