import { createContext, useState } from "react";

export const defaultTitle = "Portfolio Website";
export const defaultDescription =
	"Welcome to my portfolio website! I'm a web developer living in Belgium. I'm still learning a lot. I learned most of my skills myself.";

export const SEOContext = createContext(undefined);

const SEOProvider: React.FC = ({ children }) => {
	const [title, setTitle] = useState(defaultTitle);
	const [description, setDescription] = useState(defaultDescription);

	return (
		<SEOContext.Provider
			value={{ title, setTitle, description, setDescription }}
		>
			{children}
		</SEOContext.Provider>
	);
};

export default SEOProvider;
