import Header from "./Header";
import Footer from "./Footer";
import Head from "next/head";
import { useContext } from "react";
import { SEOContext } from '../providers/SEOProvider';

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
		dropDown: [
			{
				path: "/projects/1",
				name: "Project 1"
			},
			{
				path: "/projects/2",
				name: "Project 2"
			},
			{
				path: "/projects/3",
				name: "Project 3"
			}
		]
	},
	{
		path: "/blog",
		name: "Blog",
	},
];

const Layout: React.FC = ({ children }) => {
	const { title, description } = useContext(SEOContext);

	return (
		<>
			<Head>
				<title>{`Loeka Lievens | ${title}`}</title>
				<meta name="description" content={description}/>
			</Head>
			<Header navItems={navItems} padding={30} margin={0} navPadding={20} />
			<main>{children}</main>
			<Footer navItems={navItems} />
		</>
	);
};

export default Layout;
