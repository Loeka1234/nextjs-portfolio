import * as React from "react";

import Header from "./Header";
import Footer from "./Footer";

export interface LayoutProps {}

const Layout: React.FC<LayoutProps> = ({ children }) => {
	return (
		<>
			<Header />
			<main>{children}</main>
            <Footer />
		</>
	);
};

export default Layout;
