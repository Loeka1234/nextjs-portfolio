import { useContext, useEffect } from "react";
import {
	SEOContext,
	defaultTitle,
	defaultDescription,
} from "./providers/SEOProvider";

export interface SEOProps {
	title?: string;
	desc?: string;
}

const SEO: React.FC<SEOProps> = ({ children, title, desc }) => {
	const { setDescription, setTitle } = useContext(SEOContext);

	useEffect(() => {
		if (title) setTitle(title);
		else setTitle(defaultTitle);
		if (desc) setDescription(desc);
		else setDescription(defaultDescription);

		return () => {
			setTitle(defaultTitle);
			setDescription(defaultDescription);
		};
	}, [title, desc]);

	return <>{children}</>;
};

export default SEO;
